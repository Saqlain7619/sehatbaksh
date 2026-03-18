// Direct integration script for L section entries

// L Section Entries to be added directly to the health-library.js file
const lEntries = [
    {
        name: "Leukemia",
        description: "A group of blood cancers that usually begin in the bone marrow and result in high numbers of abnormal blood cells.",
        causes: [
            "Genetic mutations",
            "Exposure to high levels of radiation",
            "Exposure to certain chemicals (like benzene)",
            "Previous cancer treatment (chemotherapy)",
            "Certain genetic disorders (Down syndrome)",
            "Family history of leukemia",
            "Smoking"
        ],
        symptoms: [
            "Fatigue and weakness",
            "Frequent infections",
            "Easy bleeding or bruising",
            "Fever or chills",
            "Unexplained weight loss",
            "Swollen lymph nodes",
            "Enlarged liver or spleen",
            "Bone pain or tenderness",
            "Excessive sweating (night sweats)",
            "Tiny red spots on the skin (petechiae)"
        ],
        diagnosis: [
            "Complete blood count (CBC)",
            "Blood smear examination",
            "Bone marrow biopsy",
            "Cytogenetic analysis",
            "Lumbar puncture (spinal tap)",
            "Imaging tests (CT scan, MRI)",
            "Flow cytometry",
            "Molecular testing"
        ],
        treatment: [
            "Chemotherapy",
            "Targeted therapy",
            "Radiation therapy",
            "Stem cell transplantation",
            "Immunotherapy",
            "CAR T-cell therapy",
            "Supportive care (blood transfusions, antibiotics)",
            "Clinical trials"
        ],
        prevention: [
            "Avoiding exposure to high levels of radiation",
            "Limiting exposure to chemicals like benzene",
            "Not smoking",
            "Maintaining a healthy lifestyle",
            "No definitive prevention for most cases"
        ]
    },
    {
        name: "Lyme Disease",
        description: "An infectious disease caused by the bacterium Borrelia burgdorferi, transmitted to humans through the bite of infected black-legged ticks.",
        causes: [
            "Infection with Borrelia burgdorferi bacteria",
            "Bite from infected black-legged tick (deer tick)",
            "Tick must usually be attached for 36-48 hours to transmit the disease"
        ],
        symptoms: [
            "Early stage: Bull's-eye rash (erythema migrans)",
            "Fever",
            "Chills",
            "Fatigue",
            "Body aches",
            "Headache",
            "Neck stiffness",
            "Swollen lymph nodes",
            "Later stages: Severe headaches",
            "Additional rashes",
            "Arthritis with severe joint pain and swelling",
            "Facial palsy",
            "Heart palpitations",
            "Dizziness",
            "Nerve pain",
            "Inflammation of the brain and spinal cord"
        ],
        diagnosis: [
            "Physical examination",
            "History of possible tick exposure",
            "Blood tests for antibodies",
            "Western blot test",
            "ELISA test",
            "PCR test",
            "Spinal tap (in some cases)"
        ],
        treatment: [
            "Antibiotics (doxycycline, amoxicillin, cefuroxime)",
            "Longer course of antibiotics for later-stage disease",
            "Pain medications",
            "Anti-inflammatory medications",
            "Rest",
            "Supportive care"
        ],
        prevention: [
            "Avoiding tick-infested areas",
            "Wearing protective clothing",
            "Using insect repellents",
            "Checking for ticks after outdoor activities",
            "Removing ticks promptly and properly",
            "Landscaping to reduce tick habitats",
            "Lyme disease vaccine for high-risk individuals (where available)"
        ]
    },
    {
        name: "Liver Cirrhosis",
        description: "A late-stage liver disease in which healthy liver tissue is replaced with scar tissue, preventing the liver from functioning properly.",
        causes: [
            "Chronic alcohol abuse",
            "Chronic viral hepatitis (B, C, D)",
            "Non-alcoholic fatty liver disease",
            "Autoimmune hepatitis",
            "Inherited disorders (hemochromatosis, Wilson's disease)",
            "Biliary diseases (primary biliary cholangitis, primary sclerosing cholangitis)",
            "Medications and toxins",
            "Chronic heart failure"
        ],
        symptoms: [
            "Fatigue",
            "Easy bruising and bleeding",
            "Jaundice (yellowing of skin and eyes)",
            "Fluid accumulation in the abdomen (ascites)",
            "Swelling in legs (edema)",
            "Spider-like blood vessels on the skin",
            "Redness in the palms (palmar erythema)",
            "Itchy skin",
            "Loss of appetite",
            "Weight loss",
            "Confusion, drowsiness, slurred speech (hepatic encephalopathy)",
            "Kidney failure"
        ],
        diagnosis: [
            "Physical examination",
            "Blood tests (liver function tests)",
            "Imaging tests (ultrasound, CT, MRI)",
            "Transient elastography (FibroScan)",
            "Liver biopsy"
        ],
        treatment: [
            "Treating the underlying cause",
            "Avoiding alcohol and certain medications",
            "Medications to control symptoms",
            "Nutritional support",
            "Treatment for complications (diuretics for fluid retention)",
            "Antibiotics for infections",
            "Liver transplantation (in advanced cases)"
        ],
        prevention: [
            "Limiting alcohol consumption",
            "Vaccination against hepatitis",
            "Maintaining a healthy weight",
            "Regular exercise",
            "Balanced diet",
            "Avoiding high-risk behaviors for hepatitis",
            "Using medications as prescribed"
        ]
    },
    {
        name: "Laryngitis",
        description: "Inflammation of the voice box (larynx) that causes voice changes, typically hoarseness or loss of voice.",
        causes: [
            "Viral infections (common cold, flu)",
            "Bacterial infections",
            "Overuse of voice",
            "Irritants (smoking, air pollution)",
            "Allergies",
            "Gastroesophageal reflux disease (GERD)",
            "Inhaled steroid medications"
        ],
        symptoms: [
            "Hoarseness or voice loss",
            "Sore or dry throat",
            "Tickling sensation in the throat",
            "Dry cough",
            "Difficulty swallowing",
            "Swollen lymph nodes in the neck",
            "Fever (in infectious cases)",
            "Feeling of fullness in the throat"
        ],
        diagnosis: [
            "Physical examination",
            "Medical history",
            "Laryngoscopy",
            "Throat culture (for bacterial infections)",
            "Biopsy (in chronic cases)"
        ],
        treatment: [
            "Voice rest",
            "Staying hydrated",
            "Humidifying the air",
            "Over-the-counter pain relievers",
            "Avoiding irritants",
            "Antibiotics (for bacterial causes only)",
            "Corticosteroids (in some cases)",
            "Treatment of underlying conditions"
        ],
        prevention: [
            "Avoiding excessive voice strain",
            "Staying hydrated",
            "Avoiding smoking and secondhand smoke",
            "Limiting alcohol and caffeine",
            "Preventing upper respiratory infections",
            "Managing allergies and GERD",
            "Using a humidifier"
        ]
    },
    {
        name: "Legionnaires' Disease",
        description: "A severe form of pneumonia caused by the Legionella bacteria, which can lead to serious lung infections and other complications.",
        causes: [
            "Infection with Legionella bacteria",
            "Inhaling water droplets containing the bacteria",
            "Contaminated water systems (cooling towers, hot tubs, decorative fountains)",
            "Air conditioning systems",
            "Plumbing systems in large buildings"
        ],
        symptoms: [
            "High fever",
            "Chills",
            "Cough (may produce mucus or blood)",
            "Shortness of breath",
            "Chest pain",
            "Headache",
            "Muscle aches",
            "Fatigue",
            "Nausea, vomiting, and diarrhea",
            "Confusion or mental changes"
        ],
        diagnosis: [
            "Chest X-ray",
            "Urine tests for Legionella antigens",
            "Sputum culture",
            "Blood tests",
            "Bronchoscopy (in some cases)",
            "PCR testing"
        ],
        treatment: [
            "Antibiotics (fluoroquinolones, macrolides)",
            "Hospitalization for severe cases",
            "Oxygen therapy",
            "Intravenous fluids",
            "Respiratory support",
            "Treatment of complications"
        ],
        prevention: [
            "Proper maintenance of water systems",
            "Regular cleaning and disinfection of water sources",
            "Maintaining hot water at appropriate temperatures",
            "Avoiding stagnant water",
            "Proper maintenance of cooling towers",
            "Avoiding smoking",
            "Proper maintenance of home humidifiers"
        ]
    }
];

// Function to integrate the entries directly into the healthConditions array
(function() {
    // Find the index of Lupus (the existing L entry)
    const lIndex = healthConditions.findIndex(c => c.name === "Lupus (Systemic Lupus Erythematosus)");
    
    if (lIndex >= 0) {
        // Insert the new entries after Lupus
        healthConditions.splice(lIndex + 1, 0, ...lEntries);
        console.log("Successfully added L entries after Lupus");
        
        // Force a refresh of the current view
        const activeButton = document.querySelector('.alphabet-btn.active');
        if (activeButton) {
            if (activeButton.textContent === 'All') {
                // If "All" is active, refresh all conditions
                displayAllConditions();
            } else if (activeButton.textContent === 'L') {
                // If "L" is active, refresh L conditions
                filterByLetter('L');
            }
        }
    } else {
        console.warn("Lupus not found in health conditions");
    }
})();
