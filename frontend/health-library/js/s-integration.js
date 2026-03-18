// Direct integration script for S section entries

// S Section Entries to be added directly to the health-library.js file
const sEntries = [
    {
        name: "Sleep Apnea",
        description: "A potentially serious sleep disorder where breathing repeatedly stops and starts during sleep, leading to reduced oxygen levels and disrupted sleep patterns.",
        causes: [
            "Obstructive sleep apnea (physical blockage of airway)",
            "Central sleep apnea (brain fails to signal breathing muscles)",
            "Complex sleep apnea (combination of both types)",
            "Obesity",
            "Large tonsils or adenoids",
            "Nasal obstruction",
            "Craniofacial abnormalities",
            "Neuromuscular disorders",
            "Heart failure",
            "Stroke",
            "Medications (opioids, sedatives)"
        ],
        symptoms: [
            "Loud snoring",
            "Episodes of stopped breathing during sleep",
            "Gasping for air during sleep",
            "Awakening with dry mouth",
            "Morning headache",
            "Difficulty staying asleep (insomnia)",
            "Excessive daytime sleepiness",
            "Difficulty concentrating",
            "Irritability",
            "High blood pressure",
            "Nighttime sweating"
        ],
        diagnosis: [
            "Sleep history",
            "Physical examination",
            "Polysomnography (sleep study)",
            "Home sleep apnea testing",
            "Oximetry",
            "Multiple sleep latency test"
        ],
        treatment: [
            "Continuous positive airway pressure (CPAP)",
            "Bilevel positive airway pressure (BiPAP)",
            "Adaptive servo-ventilation",
            "Oral appliances",
            "Lifestyle changes (weight loss, exercise)",
            "Positional therapy",
            "Surgery (uvulopalatopharyngoplasty, maxillomandibular advancement)",
            "Hypoglossal nerve stimulation",
            "Treatment of underlying conditions"
        ],
        prevention: [
            "Maintaining a healthy weight",
            "Regular exercise",
            "Sleeping on your side",
            "Avoiding alcohol and sedatives before bedtime",
            "Quitting smoking",
            "Treating nasal allergies",
            "Regular sleep schedule"
        ]
    },
    {
        name: "Scoliosis",
        description: "A sideways curvature of the spine that most often occurs during the growth spurt just before puberty, causing the spine to curve in a C or S shape.",
        causes: [
            "Idiopathic (unknown cause, most common)",
            "Congenital spine deformities",
            "Neuromuscular conditions (cerebral palsy, muscular dystrophy)",
            "Genetic factors",
            "Leg length discrepancy",
            "Degenerative changes in the spine",
            "Spinal injuries or infections",
            "Connective tissue disorders"
        ],
        symptoms: [
            "Uneven shoulders",
            "One shoulder blade more prominent than the other",
            "Uneven waist",
            "One hip higher than the other",
            "Leaning to one side",
            "Rotating spine",
            "Back pain (more common in adults)",
            "Breathing difficulties (in severe cases)",
            "Heart problems (in severe cases)"
        ],
        diagnosis: [
            "Physical examination",
            "Adam's forward bend test",
            "Scoliometer measurement",
            "X-rays",
            "MRI (to rule out underlying conditions)",
            "CT scan",
            "Bone density scan (in some cases)"
        ],
        treatment: [
            "Observation (for mild curves)",
            "Bracing (for moderate curves in growing children)",
            "Surgery (for severe curves or progression)",
            "Physical therapy",
            "Exercises specific for scoliosis",
            "Pain management",
            "Chiropractic treatment",
            "Electrical stimulation (experimental)"
        ],
        prevention: [
            "No known prevention for idiopathic scoliosis",
            "Early detection through screening",
            "Maintaining good posture",
            "Regular exercise to strengthen back muscles",
            "Proper nutrition for bone health",
            "Avoiding heavy backpacks (in children)",
            "Ergonomic adjustments"
        ]
    },
    {
        name: "Seasonal Affective Disorder (SAD)",
        description: "A type of depression related to changes in seasons, typically beginning and ending at the same times every year, most commonly in fall/winter.",
        causes: [
            "Reduced sunlight in fall and winter",
            "Disruption of circadian rhythm",
            "Drop in serotonin levels",
            "Melatonin imbalance",
            "Vitamin D deficiency",
            "Genetic predisposition",
            "History of depression or bipolar disorder",
            "Living far from the equator"
        ],
        symptoms: [
            "Feeling depressed most of the day, nearly every day",
            "Losing interest in activities once enjoyed",
            "Low energy",
            "Sleep problems (hypersomnia)",
            "Changes in appetite or weight (usually increased)",
            "Feeling sluggish or agitated",
            "Difficulty concentrating",
            "Feelings of hopelessness or worthlessness",
            "Social withdrawal",
            "Carbohydrate cravings"
        ],
        diagnosis: [
            "Clinical evaluation",
            "Psychological assessment",
            "DSM-5 criteria",
            "Seasonal pattern assessment",
            "Ruling out other types of depression",
            "Blood tests (to rule out other conditions)"
        ],
        treatment: [
            "Light therapy (phototherapy)",
            "Psychotherapy (cognitive behavioral therapy)",
            "Antidepressant medications",
            "Vitamin D supplementation",
            "Dawn simulators",
            "Negative air ionization",
            "Regular exercise",
            "Spending time outdoors",
            "Establishing healthy sleep habits"
        ],
        prevention: [
            "Starting treatments before symptoms typically begin",
            "Regular exercise",
            "Going outdoors daily",
            "Maximizing exposure to sunlight",
            "Maintaining a regular sleep schedule",
            "Healthy diet",
            "Stress management",
            "Social connections"
        ]
    },
    {
        name: "Sjögren's Syndrome",
        description: "An autoimmune disorder characterized by dry eyes and dry mouth, often occurring with other autoimmune disorders such as rheumatoid arthritis and lupus.",
        causes: [
            "Autoimmune reaction (immune system attacks moisture-producing glands)",
            "Genetic factors",
            "Environmental triggers",
            "Viral infections",
            "Hormonal factors (more common in women)",
            "Nervous system dysfunction"
        ],
        symptoms: [
            "Dry eyes",
            "Dry mouth",
            "Difficulty swallowing or speaking",
            "Fatigue",
            "Joint pain, swelling and stiffness",
            "Swollen salivary glands",
            "Skin rashes or dryness",
            "Vaginal dryness",
            "Persistent dry cough",
            "Dental cavities",
            "Blurry vision or light sensitivity"
        ],
        diagnosis: [
            "Medical history and physical examination",
            "Blood tests for autoantibodies (anti-SSA/Ro, anti-SSB/La)",
            "Eye tests (Schirmer's test, Rose Bengal staining)",
            "Salivary gland function tests",
            "Lip biopsy",
            "Imaging studies (sialography, salivary scintigraphy)"
        ],
        treatment: [
            "Artificial tears and eye ointments",
            "Saliva substitutes and stimulants",
            "Medications to increase saliva production (pilocarpine, cevimeline)",
            "Immunosuppressive medications",
            "Hydroxychloroquine",
            "Corticosteroids",
            "Biologics (rituximab)",
            "Treatment of specific complications",
            "Punctal plugs for eyes",
            "Management of other autoimmune conditions"
        ],
        prevention: [
            "No known prevention",
            "Regular dental care",
            "Eye protection",
            "Avoiding dry environments",
            "Using humidifiers",
            "Adequate hydration",
            "Avoiding medications that cause dryness",
            "Regular medical follow-up"
        ]
    },
    {
        name: "Shingles (Herpes Zoster)",
        description: "A viral infection causing a painful rash, caused by the varicella-zoster virus, the same virus that causes chickenpox, which can lie dormant for years before reactivating as shingles.",
        causes: [
            "Reactivation of varicella-zoster virus",
            "Weakened immune system",
            "Aging (risk increases with age)",
            "Stress",
            "Certain medications",
            "Serious illnesses",
            "Cancer or cancer treatments",
            "HIV/AIDS"
        ],
        symptoms: [
            "Pain, burning, numbness or tingling",
            "Sensitivity to touch",
            "Red rash that begins a few days after the pain",
            "Fluid-filled blisters that break open and crust over",
            "Itching",
            "Fever",
            "Headache",
            "Fatigue",
            "Sensitivity to light",
            "Rash typically appears as a stripe around one side of the torso"
        ],
        diagnosis: [
            "Clinical examination",
            "Medical history",
            "Visual identification of characteristic rash",
            "PCR test of fluid from blisters",
            "Tzanck smear",
            "Antibody testing (less common)"
        ],
        treatment: [
            "Antiviral medications (acyclovir, valacyclovir, famciclovir)",
            "Pain relievers",
            "Topical antibiotics (if blisters become infected)",
            "Calamine lotion",
            "Wet compresses",
            "Oatmeal baths",
            "Antihistamines for itching",
            "Nerve blocks (for severe pain)",
            "Tricyclic antidepressants or gabapentin (for postherpetic neuralgia)"
        ],
        prevention: [
            "Shingles vaccine (Shingrix recommended for adults 50 and older)",
            "Chickenpox vaccine (reduces risk of shingles later in life)",
            "Maintaining a strong immune system",
            "Stress management",
            "Healthy lifestyle",
            "Avoiding contact with people who have active shingles if you've never had chickenpox"
        ]
    }
];

// Function to integrate the entries directly into the healthConditions array
(function() {
    // Find the index of Stroke (the existing S entry)
    const sIndex = healthConditions.findIndex(c => c.name === "Stroke");
    
    if (sIndex >= 0) {
        // Insert the new entries after Stroke
        healthConditions.splice(sIndex + 1, 0, ...sEntries);
        console.log("Successfully added S entries after Stroke");
        
        // Force a refresh of the current view
        const activeButton = document.querySelector('.alphabet-btn.active');
        if (activeButton) {
            if (activeButton.textContent === 'All') {
                // If "All" is active, refresh all conditions
                displayAllConditions();
            } else if (activeButton.textContent === 'S') {
                // If "S" is active, refresh S conditions
                filterByLetter('S');
            }
        }
    } else {
        console.warn("Stroke not found in health conditions");
    }
})();
