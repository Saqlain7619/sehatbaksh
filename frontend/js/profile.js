// Profile page JavaScript will be added here

// Load profile data when page loads
window.onload = function() {
    loadProfileData();
};

// Load saved profile data from localStorage
function loadProfileData() {
    const fields = ['fullName', 'age', 'gender', 'email', 'phone', 'location', 'username'];
    fields.forEach(field => {
        const value = localStorage.getItem(field);
        if (value) {
            document.getElementById(field).value = value;
        }
    });

    // Load profile picture if exists
    const savedPicture = localStorage.getItem('profilePicture');
    if (savedPicture) {
        document.getElementById('mainProfilePic').src = savedPicture;
        document.getElementById('navProfilePic').src = savedPicture;
    }
}

// Save general information
function saveGeneralInfo() {
    const fields = ['fullName', 'age', 'gender', 'email', 'phone', 'location'];
    fields.forEach(field => {
        const value = document.getElementById(field).value;
        localStorage.setItem(field, value);
    });
    alert('General information saved successfully!');
}

// Save login information
function saveLoginInfo() {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const username = document.getElementById('username').value;

    // Basic validation
    if (newPassword !== confirmPassword) {
        alert('New passwords do not match!');
        return;
    }

    if (newPassword && newPassword.length < 6) {
        alert('Password must be at least 6 characters long!');
        return;
    }

    // Save username
    localStorage.setItem('username', username);

    // Save password if changed
    if (newPassword) {
        localStorage.setItem('password', newPassword);
    }

    alert('Login information updated successfully!');
    
    // Clear password fields
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
}

// Handle profile picture change
function changePicture() {
    document.getElementById('pictureInput').click();
}

// Set up file input listener
document.getElementById('pictureInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageData = e.target.result;
            document.getElementById('mainProfilePic').src = imageData;
            document.getElementById('navProfilePic').src = imageData;
            localStorage.setItem('profilePicture', imageData);
        };
        reader.readAsDataURL(file);
    }
});

// Toggle profile dropdown menu
function toggleProfileMenu() {
    const dropdown = document.getElementById('profileDropdown');
    dropdown.classList.toggle('show');

    // Update dropdown info
    const username = localStorage.getItem('fullName') || 'John Doe';
    const email = localStorage.getItem('email') || 'john@example.com';
    
    document.getElementById('dropdownUsername').textContent = username;
    document.getElementById('dropdownEmail').textContent = email;
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const profileIcon = document.querySelector('.profile-icon');
    const dropdown = document.getElementById('profileDropdown');
    
    if (!profileIcon.contains(event.target) && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    }
});

class ProfileManager {
    constructor() {
        this.profile = {
            avatar: localStorage.getItem('profileAvatar') || 'images/profile-avatar.png',
            personalInfo: {
                fullName: '',
                email: '',
                phone: ''
            },
            address: {
                street: '',
                city: '',
                state: '',
                zipCode: ''
            },
            medicalInfo: {
                bloodType: '',
                allergies: '',
                medications: ''
            },
            emergencyContact: {
                name: '',
                relation: '',
                phone: ''
            }
        };

        this.init();
    }

    init() {
        this.loadProfile();
        this.setupEventListeners();
        this.updateUI();
    }

    loadProfile() {
        const saved = localStorage.getItem('profile');
        if (saved) {
            this.profile = {...this.profile, ...JSON.parse(saved)};
        }
    }

    saveProfile() {
        localStorage.setItem('profile', JSON.stringify(this.profile));
        localStorage.setItem('profileAvatar', this.profile.avatar);
        this.showSaveSuccess();
        
        // Update all profile pictures across the site
        const allProfilePics = document.querySelectorAll('.profile-avatar, #profilePic');
        allProfilePics.forEach(pic => {
            pic.src = this.profile.avatar;
        });
    }

    setupEventListeners() {
        // Avatar Change
        const changeAvatarBtn = document.querySelector('.change-avatar-btn');
        if (changeAvatarBtn) {
            changeAvatarBtn.addEventListener('click', () => {
                this.createFileInput();
            });
        }

        // Save Button
        const saveBtn = document.querySelector('.save-btn');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => {
                this.saveProfile();
            });
        }

        // Input Fields
        this.setupInputListeners();
    }

    createFileInput() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.style.display = 'none';
        
        input.addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
                const reader = new FileReader();
                
                reader.onload = (event) => {
                    this.profile.avatar = event.target.result;
                    
                    // Update avatar in profile page
                    const profileAvatar = document.querySelector('.profile-avatar');
                    if (profileAvatar) {
                        profileAvatar.src = event.target.result;
                    }
                    
                    // Update avatar in navigation
                    const navAvatar = document.getElementById('profilePic');
                    if (navAvatar) {
                        navAvatar.src = event.target.result;
                    }
                    
                    this.saveProfile();
                };
                
                reader.readAsDataURL(e.target.files[0]);
            }
        });
        
        document.body.appendChild(input);
        input.click();
        setTimeout(() => {
            document.body.removeChild(input);
        }, 1000);
    }

    setupInputListeners() {
        // Personal Information
        this.setupInputGroup('personalInfo', ['fullName', 'email', 'phone']);
        
        // Address
        this.setupInputGroup('address', ['street', 'city', 'state', 'zipCode']);
        
        // Medical Information
        this.setupInputGroup('medicalInfo', ['bloodType', 'allergies', 'medications']);
        
        // Emergency Contact
        this.setupInputGroup('emergencyContact', ['name', 'relation', 'phone']);
    }

    setupInputGroup(group, fields) {
        fields.forEach(field => {
            const input = document.getElementById(field);
            if (input) {
                input.value = this.profile[group][field];
                input.addEventListener('input', (e) => {
                    this.profile[group][field] = e.target.value;
                });
            }
        });
    }

    updateUI() {
        // Update avatar
        const avatarImg = document.querySelector('.profile-avatar');
        if (avatarImg) {
            avatarImg.src = this.profile.avatar;
        }

        // Update navigation avatar
        const navAvatar = document.getElementById('profilePic');
        if (navAvatar) {
            navAvatar.src = this.profile.avatar;
        }

        // Update all input fields
        Object.keys(this.profile).forEach(group => {
            if (typeof this.profile[group] === 'object') {
                Object.keys(this.profile[group]).forEach(field => {
                    const input = document.getElementById(field);
                    if (input) {
                        input.value = this.profile[group][field];
                    }
                });
            }
        });
    }

    showSaveSuccess() {
        const btn = document.querySelector('.save-btn');
        if (!btn) return;

        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Saved!';
        btn.classList.add('success');

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('success');
        }, 2000);
    }
}

// Initialize Profile Manager
document.addEventListener('DOMContentLoaded', () => {
    window.profileManager = new ProfileManager();
});
