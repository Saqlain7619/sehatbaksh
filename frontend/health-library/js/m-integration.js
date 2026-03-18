// Direct integration script for M section entries

// M Section Entries to be added directly to the health-library.js file
const mEntries = [
    {
        name: "Malaria",
        description: "A serious and sometimes fatal disease caused by a parasite that commonly infects a certain type of mosquito which feeds on humans.",
        causes: [
            "Infection with Plasmodium parasites",
            "Transmission through bites of infected female Anopheles mosquitoes",
            "Blood transfusion from infected person (rare)",
            "Sharing needles (rare)",
            "Mother-to-child transmission during pregnancy (congenital malaria)"
        ],
        symptoms: [
            "High fever",
            "Chills and sweating",
            "Headache",
            "Nausea and vomiting",
            "Muscle pain and fatigue",
            "Chest pain and rapid breathing",
            "Cough",
            "Diarrhea",
            "Cyclical symptoms (occurring every 24-72 hours)",
            "Jaundice",
            "Seizures and coma (in severe cases)"
        ],
        diagnosis: [
            "Blood smear microscopy",
            "Rapid diagnostic tests (RDTs)",
            "PCR tests",
            "Complete blood count",
            "Travel history assessment"
        ],
        treatment: [
            "Antimalarial medications (chloroquine, artemisinin-based combination therapies)",
            "Supportive care",
            "Intravenous fluids",
            "Blood transfusions (if needed)",
            "Oxygen therapy",
            "Treatment of complications"
        ],
        prevention: [
            "Mosquito control measures",
            "Insecticide-treated bed nets",
            "Indoor residual spraying",
            "Antimalarial medications for travelers",
            "Wearing protective clothing",
            "Using insect repellent",
            "Avoiding outdoor activities during peak mosquito times",
            "Malaria vaccines (where available)"
        ]
    },
    {
        name: "Measles",
        description: "A highly contagious viral disease characterized by fever and a red rash, which can lead to serious complications, especially in young children.",
        causes: [
            "Infection with the measles virus (paramyxovirus)",
            "Airborne transmission through coughing and sneezing",
            "Direct contact with infected nasal or throat secretions",
            "Touching contaminated surfaces"
        ],
        symptoms: [
            "High fever",
            "Cough",
            "Runny nose",
            "Red, watery eyes (conjunctivitis)",
            "Koplik's spots (small white spots inside the mouth)",
            "Red, flat rash starting on the face and spreading downward",
            "Sensitivity to light",
            "Fatigue",
            "Loss of appetite"
        ],
        diagnosis: [
            "Clinical examination",
            "Blood tests for antibodies",
            "PCR testing of throat swab or urine",
            "Identification of Koplik's spots",
            "Travel and immunization history"
        ],
        treatment: [
            "No specific antiviral treatment",
            "Supportive care",
            "Fever reducers",
            "Vitamin A supplements (for children)",
            "Rest and fluids",
            "Treatment of complications",
            "Isolation to prevent spread"
        ],
        prevention: [
            "MMR (measles, mumps, rubella) vaccination",
            "Post-exposure vaccination (within 72 hours)",
            "Immune globulin for high-risk individuals",
            "Isolation of infected individuals",
            "Good hygiene practices",
            "Maintaining high community vaccination rates"
        ]
    },
    {
        name: "Melanoma",
        description: "The most serious type of skin cancer that develops in the cells (melanocytes) that produce melanin, the pigment that gives skin its color.",
        causes: [
            "Ultraviolet (UV) radiation exposure",
            "Sunburns, especially severe ones in childhood",
            "Tanning beds and sun lamps",
            "Genetic factors",
            "Family history of melanoma",
            "Fair skin, light hair, and freckles",
            "Multiple moles or atypical moles",
            "Weakened immune system"
        ],
        symptoms: [
            "New, unusual growth or change in an existing mole",
            "Asymmetrical moles",
            "Irregular borders",
            "Varied color within a mole",
            "Diameter larger than 6mm (pencil eraser)",
            "Evolving size, shape, or color",
            "Itching, tenderness, or pain",
            "Bleeding or oozing from a mole",
            "Spread to nearby skin (satellite lesions)"
        ],
        diagnosis: [
            "Skin examination",
            "Dermatoscopy",
            "Skin biopsy",
            "Lymph node biopsy",
            "Imaging tests (CT, MRI, PET) for staging",
            "Sentinel lymph node biopsy",
            "Genetic testing (in some cases)"
        ],
        treatment: [
            "Surgical removal",
            "Sentinel lymph node biopsy",
            "Lymph node dissection",
            "Immunotherapy",
            "Targeted therapy",
            "Radiation therapy",
            "Chemotherapy",
            "Clinical trials"
        ],
        prevention: [
            "Limiting UV exposure",
            "Using sunscreen (SPF 30+)",
            "Wearing protective clothing",
            "Avoiding tanning beds",
            "Regular skin self-examinations",
            "Regular dermatologist visits for high-risk individuals",
            "Seeking shade during peak sun hours",
            "Wearing sunglasses and wide-brimmed hats"
        ]
    },
    {
        name: "Meningitis",
        description: "Inflammation of the membranes (meninges) surrounding the brain and spinal cord, which can be caused by infection, cancer, or certain medications.",
        causes: [
            "Bacterial infections",
            "Viral infections",
            "Fungal infections",
            "Parasitic infections",
            "Non-infectious causes (cancer, lupus, certain medications)",
            "Head injury",
            "Brain surgery"
        ],
        symptoms: [
            "Sudden high fever",
            "Severe headache",
            "Stiff neck",
            "Nausea and vomiting",
            "Confusion or altered consciousness",
            "Seizures",
            "Sensitivity to light (photophobia)",
            "Skin rash (in some bacterial cases)",
            "Bulging fontanelle in infants",
            "Irritability",
            "Poor feeding in infants"
        ],
        diagnosis: [
            "Lumbar puncture (spinal tap)",
            "Blood cultures",
            "Imaging tests (CT scan, MRI)",
            "Physical examination",
            "PCR testing of cerebrospinal fluid"
        ],
        treatment: [
            "Antibiotics (for bacterial meningitis)",
            "Antiviral medications (for viral meningitis)",
            "Antifungal medications (for fungal meningitis)",
            "Corticosteroids to reduce inflammation",
            "Anticonvulsants for seizures",
            "Oxygen therapy",
            "Intravenous fluids",
            "Pain management",
            "Treatment of complications"
        ],
        prevention: [
            "Vaccination (meningococcal, pneumococcal, Hib, MMR vaccines)",
            "Good hygiene practices",
            "Avoiding close contact with infected individuals",
            "Preventive antibiotics for close contacts of bacterial meningitis cases",
            "Completing prescribed antibiotic courses",
            "Maintaining a healthy immune system"
        ]
    },
    {
        name: "Migraine",
        description: "A neurological condition characterized by recurrent moderate to severe headaches, often accompanied by other symptoms such as nausea and sensitivity to light and sound.",
        causes: [
            "Genetic predisposition",
            "Hormonal changes",
            "Stress and anxiety",
            "Certain foods and additives",
            "Alcohol and caffeine",
            "Changes in sleep patterns",
            "Medications",
            "Environmental factors (bright lights, strong smells)",
            "Weather changes",
            "Physical exertion"
        ],
        symptoms: [
            "Prodrome: Mood changes, food cravings, neck stiffness (1-2 days before)",
            "Aura (in some cases): Visual disturbances, sensory changes",
            "Attack: Throbbing or pulsing pain, usually on one side of head",
            "Nausea and vomiting",
            "Sensitivity to light, sound, and sometimes smell",
            "Blurred vision",
            "Lightheadedness or fainting",
            "Postdrome: Fatigue, confusion, mood changes after headache"
        ],
        diagnosis: [
            "Medical history",
            "Neurological examination",
            "Headache diary",
            "Imaging tests (MRI, CT scan) to rule out other conditions",
            "Ruling out secondary causes of headache"
        ],
        treatment: [
            "Pain-relieving medications (NSAIDs, triptans)",
            "Anti-nausea medications",
            "Preventive medications (beta blockers, antidepressants, anticonvulsants)",
            "CGRP antagonists",
            "Botox injections",
            "Neuromodulation devices",
            "Lifestyle modifications",
            "Stress management techniques",
            "Biofeedback and relaxation training"
        ],
        prevention: [
            "Identifying and avoiding triggers",
            "Regular sleep schedule",
            "Regular meals",
            "Staying hydrated",
            "Regular exercise",
            "Stress management",
            "Limiting caffeine and alcohol",
            "Preventive medications for frequent migraines",
            "Acupuncture and massage therapy"
        ]
    }
];

// Function to integrate the entries directly into the healthConditions array
(function() {
    // Find the index of Multiple Sclerosis (the existing M entry)
    const mIndex = healthConditions.findIndex(c => c.name === "Multiple Sclerosis (MS)");
    
    if (mIndex >= 0) {
        // Insert the new entries after Multiple Sclerosis
        healthConditions.splice(mIndex + 1, 0, ...mEntries);
        console.log("Successfully added M entries after Multiple Sclerosis");
        
        // Force a refresh of the current view
        const activeButton = document.querySelector('.alphabet-btn.active');
        if (activeButton) {
            if (activeButton.textContent === 'All') {
                // If "All" is active, refresh all conditions
                displayAllConditions();
            } else if (activeButton.textContent === 'M') {
                // If "M" is active, refresh M conditions
                filterByLetter('M');
            }
        }
    } else {
        console.warn("Multiple Sclerosis not found in health conditions");
    }
})();
