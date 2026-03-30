// ============================================================
//  doctors.js  —  Frontend ↔ Backend Connection
//  API Base: http://localhost:5000/api
//  Connects: GET /api/doctors  +  GET /api/departments
//            POST /api/appointments  (booking form submit)
// ============================================================

const API = 'http://localhost:5000/api';

// ── Department icon map (backend mein icons nahi hain, frontend pe lagao) ──
const DEPT_ICONS = {
  'cardiology':        'fa-heartbeat',
  'neurology':         'fa-brain',
  'orthopedics':       'fa-bone',
  'dental':            'fa-tooth',
  'dental care':       'fa-tooth',
  'dermatology':       'fa-allergies',
  'pediatrics':        'fa-baby',
  'pulmonology':       'fa-lungs',
  'emergency':         'fa-ambulance',
  'emergency medicine':'fa-ambulance',
  'nephrology':        'fa-kidneys',
  'psychiatry':        'fa-brain',
  'oncology':          'fa-ribbon',
  'gynecology':        'fa-female',
  'endocrinology':     'fa-syringe',
  'ophthalmology':     'fa-eye',
  'urology':           'fa-procedures',
};

function getDeptIcon(name) {
  const key = (name || '').toLowerCase();
  for (const k in DEPT_ICONS) {
    if (key.includes(k)) return DEPT_ICONS[k];
  }
  return 'fa-hospital';
}

// ── 1. LOAD DEPARTMENTS + DOCTORS from API ──────────────────────────────────
async function loadDepartmentsFromAPI() {
  const container = document.querySelector('.dept-container');
  if (!container) return;

  // Show loading spinner
  container.innerHTML = `
    <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#888;">
      <i class="fas fa-spinner fa-spin" style="font-size:2rem;color:#1e90ff;margin-bottom:12px;display:block"></i>
      <p>Loading departments...</p>
    </div>`;

  try {
    // Fetch departments AND doctors at same time (parallel)
    const [deptRes, docRes] = await Promise.all([
      fetch(`${API}/departments`),
      fetch(`${API}/doctors?available=true`)
    ]);

    const departments = await deptRes.json();
    const doctors     = await docRes.json();

    // Agar backend se data aaya
    if (departments.length > 0) {
      renderDepartmentCards(departments, doctors);
    } else {
      // Backend khaali hai — fallback to static HTML cards
      console.warn('No departments in DB, showing static cards');
      container.innerHTML = getStaticDeptCards();
    }

    // Booking form mein bhi doctors + departments load karo
    populateBookingDropdowns(departments, doctors);

  } catch (err) {
    console.error('API Error:', err);
    // Network error — show static cards
    container.innerHTML = getStaticDeptCards();
  }
}

// ── 2. RENDER DEPARTMENT CARDS dynamically ──────────────────────────────────
function renderDepartmentCards(departments, doctors) {
  const container = document.querySelector('.dept-container');

  container.innerHTML = departments.map(dept => {
    // Is department ke doctors dhundo
    const deptDoctors = doctors.filter(d =>
      d.departmentId === dept.id ||
      (d.department && d.department.id === dept.id)
    );

    const firstDoctor = deptDoctors[0];
    const doctorName  = firstDoctor ? firstDoctor.name : dept.name;
    const icon        = getDeptIcon(dept.name);

    // Description se 3 features nikalo (ya default)
    const features = dept.description
      ? dept.description.split(',').slice(0, 3).map(f => f.trim())
      : ['Expert Consultation', 'Modern Facilities', 'Experienced Staff'];

    return `
      <div class="dept-card">
        <div class="dept-icon">
          <i class="fas ${icon}"></i>
        </div>
        <h3>${dept.name}</h3>
        <p>${dept.description || 'Expert medical care with state-of-the-art facilities.'}</p>
        <ul class="dept-features">
          ${features.map(f => `
            <li><i class="fas fa-check"></i> ${f}</li>
          `).join('')}
        </ul>
        ${deptDoctors.length > 0 ? `
          <div style="margin-bottom:14px;font-size:0.85rem;color:#666;">
            <i class="fas fa-user-md" style="color:#1e90ff;margin-right:6px"></i>
            ${deptDoctors.length} Doctor${deptDoctors.length > 1 ? 's' : ''} Available
          </div>` : ''}
        <a href="#" class="dept-btn"
           onclick="showBookingForm('${firstDoctor ? firstDoctor.name : ''}', '${dept.name}', ${dept.id}); return false;">
          Book Appointment
        </a>
      </div>`;
  }).join('');
}

// ── 3. POPULATE BOOKING FORM DROPDOWNS from API ─────────────────────────────
function populateBookingDropdowns(departments, doctors) {
  const deptSelect = document.getElementById('department');
  const docSelect  = document.getElementById('doctor');

  // -- Departments dropdown --
  if (deptSelect) {
    deptSelect.innerHTML = '<option value="">Select Department</option>';
    departments.forEach(d => {
      const opt = document.createElement('option');
      opt.value       = d.name;
      opt.textContent = d.name;
      opt.dataset.id  = d.id;
      deptSelect.appendChild(opt);
    });

    // Jab department change ho, doctors filter karo
    deptSelect.addEventListener('change', function() {
      const selectedName = this.value;
      const selectedDept = departments.find(d => d.name === selectedName);

      if (docSelect) {
        docSelect.innerHTML = '<option value="">Select Doctor</option>';
        const filtered = selectedDept
          ? doctors.filter(d =>
              d.departmentId === selectedDept.id ||
              (d.department && d.department.id === selectedDept.id)
            )
          : doctors;

        filtered.forEach(d => {
          const opt = document.createElement('option');
          opt.value       = d.name;
          opt.textContent = d.name + (d.speciality ? ` — ${d.speciality}` : '');
          opt.dataset.id  = d.id;
          docSelect.appendChild(opt);
        });
      }
    });
  }

  // -- Doctors dropdown (initial: all available) --
  if (docSelect) {
    docSelect.innerHTML = '<option value="">Select Doctor</option>';
    doctors.forEach(d => {
      const opt = document.createElement('option');
      opt.value       = d.name;
      opt.textContent = d.name + (d.speciality ? ` — ${d.speciality}` : '');
      opt.dataset.id  = d.id;
      docSelect.appendChild(opt);
    });
  }
}

// ── 4. SHOW BOOKING FORM (updated with deptId) ──────────────────────────────
function showBookingForm(doctorName, departmentName, deptId) {
  const form    = document.getElementById('bookingForm');
  const overlay = document.getElementById('overlay');
  if (!form) return;

  form.style.display = 'block';
  if (overlay) overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';

  // Pre-select department
  const deptSelect = document.getElementById('department');
  if (deptSelect && departmentName) {
    for (let i = 0; i < deptSelect.options.length; i++) {
      if (deptSelect.options[i].value === departmentName ||
          deptSelect.options[i].text  === departmentName) {
        deptSelect.selectedIndex = i;
        // Trigger change to filter doctors
        deptSelect.dispatchEvent(new Event('change'));
        break;
      }
    }
  }

  // Pre-select doctor (after small delay for dropdown to populate)
  setTimeout(() => {
    const docSelect = document.getElementById('doctor');
    if (docSelect && doctorName) {
      for (let i = 0; i < docSelect.options.length; i++) {
        if (docSelect.options[i].value === doctorName ||
            docSelect.options[i].text.startsWith(doctorName)) {
          docSelect.selectedIndex = i;
          break;
        }
      }
    }
  }, 100);
}

// ── 5. CLOSE BOOKING FORM ───────────────────────────────────────────────────
function closeBookingForm() {
  const form    = document.getElementById('bookingForm');
  const overlay = document.getElementById('overlay');
  if (form)    form.style.display = 'none';
  if (overlay) overlay.style.display = 'none';
  document.body.style.overflow = 'auto';
  clearFormMessages();
}

// ── 6. SUBMIT APPOINTMENT to API ────────────────────────────────────────────
async function submitAppointment(e) {
  e.preventDefault();

  const btn = document.querySelector('.book-btn');

  // Collect form values
  const name       = document.getElementById('name')?.value.trim();
  const phone      = document.getElementById('phone')?.value.trim();
  const date       = document.getElementById('date')?.value;
  const time       = document.getElementById('time')?.value;
  const department = document.getElementById('department')?.value;
  const doctor     = document.getElementById('doctor')?.value;
  const symptoms   = document.getElementById('symptoms')?.value.trim();

  // Basic validation
  if (!name || !phone || !date || !department) {
    showFormMsg('Please fill all required fields.', 'error');
    return;
  }

  // Loading state
  btn.textContent = 'Booking...';
  btn.disabled    = true;

  try {
    const payload = {
      name,
      phone,
      date:       new Date(date + (time ? 'T' + time : 'T00:00')).toISOString(),
      doctorType: department,   // backend field name is doctorType
      message:    symptoms || '',
      email:      '',           // optional — add email field in form if needed
    };

    const res  = await fetch(`${API}/appointments`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload)
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || 'Booking failed');

    // ✅ SUCCESS
    showFormMsg('✅ Appointment booked successfully! We will contact you soon.', 'success');

    // Reset form after 2 seconds then close
    setTimeout(() => {
      document.querySelector('#bookingForm form')?.reset();
      closeBookingForm();
    }, 2500);

  } catch (err) {
    console.error('Booking error:', err);
    showFormMsg('❌ ' + (err.message || 'Something went wrong. Please try again.'), 'error');
  } finally {
    btn.textContent = 'Book Now';
    btn.disabled    = false;
  }
}

// ── 7. FORM MESSAGE HELPER ───────────────────────────────────────────────────
function showFormMsg(msg, type) {
  let msgEl = document.getElementById('formMessage');
  if (!msgEl) {
    msgEl = document.createElement('div');
    msgEl.id = 'formMessage';
    msgEl.style.cssText = `
      padding: 12px 16px; border-radius: 8px; margin-top: 12px;
      font-weight: 600; font-size: 14px; text-align: center;`;
    document.querySelector('.form-buttons')?.insertAdjacentElement('afterend', msgEl);
  }
  msgEl.textContent = msg;
  msgEl.style.background = type === 'success' ? '#dcfce7' : '#fee2e2';
  msgEl.style.color       = type === 'success' ? '#14532d' : '#7f1d1d';
  msgEl.style.display     = 'block';
}

function clearFormMessages() {
  const msgEl = document.getElementById('formMessage');
  if (msgEl) msgEl.style.display = 'none';
}

// ── 8. STATIC FALLBACK CARDS (agar API down ho) ─────────────────────────────
function getStaticDeptCards() {
  const depts = [
    { icon: 'fa-heartbeat', name: 'Cardiology',         desc: 'Expert care for heart diseases.',          doctor: 'Dr. John Doe' },
    { icon: 'fa-brain',     name: 'Neurology',           desc: 'Comprehensive neurological care.',          doctor: 'Dr. Jane Smith' },
    { icon: 'fa-bone',      name: 'Orthopedics',         desc: 'Treatment for bones and joints.',           doctor: 'Dr. Bob Johnson' },
    { icon: 'fa-tooth',     name: 'Dental Care',         desc: 'Complete dental care for all ages.',        doctor: 'Dr. John Doe' },
    { icon: 'fa-allergies', name: 'Dermatology',         desc: 'Expert skin, hair & nail treatment.',       doctor: 'Dr. Jane Smith' },
    { icon: 'fa-baby',      name: 'Pediatrics',          desc: 'Specialized care for children.',            doctor: 'Dr. Bob Johnson' },
    { icon: 'fa-lungs',     name: 'Pulmonology',         desc: 'Respiratory & lung disease care.',          doctor: 'Dr. Jane Smith' },
    { icon: 'fa-ambulance', name: 'Emergency Medicine',  desc: '24/7 emergency care.',                      doctor: 'Dr. John Doe' },
  ];
  return depts.map(d => `
    <div class="dept-card">
      <div class="dept-icon"><i class="fas ${d.icon}"></i></div>
      <h3>${d.name}</h3>
      <p>${d.desc}</p>
      <ul class="dept-features">
        <li><i class="fas fa-check"></i> Expert Consultation</li>
        <li><i class="fas fa-check"></i> Modern Facilities</li>
        <li><i class="fas fa-check"></i> 24/7 Support</li>
      </ul>
      <a href="#" class="dept-btn"
         onclick="showBookingForm('${d.doctor}', '${d.name}', null); return false;">
        Book Appointment
      </a>
    </div>`).join('');
}

// ── 9. INIT — Page load par sab kuch start karo ─────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  // A. API se departments + doctors load karo
  loadDepartmentsFromAPI();

  // B. Booking form submit handler attach karo
  const bookingFormEl = document.querySelector('#bookingForm form');
  if (bookingFormEl) {
    bookingFormEl.addEventListener('submit', submitAppointment);
  }

  // C. Overlay click se form band ho
  const overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.addEventListener('click', closeBookingForm);
  }
});