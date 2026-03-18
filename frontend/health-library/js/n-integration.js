// Direct integration script for N section entries

// N Section Entries to be added directly to the health-library.js file
const nEntries = [
    {
        name: "Norovirus Infection",
        description: "A highly contagious virus that causes gastroenteritis (inflammation of the stomach and intestines), leading to diarrhea, vomiting, and stomach pain.",
        causes: [
            "Norovirus infection",
            "Consuming contaminated food or water",
            "Direct contact with an infected person",
            "Touching contaminated surfaces then touching mouth",
            "Aerosolized vomit particles"
        ],
        symptoms: [
            "Sudden onset of vomiting",
            "Watery, non-bloody diarrhea",
            "Abdominal cramps",
            "Nausea",
            "Low-grade fever",
            "Headache",
            "Body aches",
            "Fatigue",
            "Symptoms typically last 1-3 days"
        ],
        diagnosis: [
            "Clinical evaluation",
            "Stool sample testing",
            "PCR tests",
            "Ruling out other causes of gastroenteritis",
            "Outbreak investigation"
        ],
        treatment: [
            "No specific antiviral medication",
            "Rest",
            "Staying hydrated",
            "Oral rehydration solutions",
            "Avoiding caffeine and alcohol",
            "Avoiding dairy products temporarily",
            "Anti-diarrheal medications (in some cases)",
            "Intravenous fluids for severe dehydration"
        ],
        prevention: [
            "Proper hand washing with soap and water",
            "Proper food handling and preparation",
            "Thorough cleaning and disinfection of contaminated surfaces",
            "Washing fruits and vegetables thoroughly",
            "Avoiding food preparation when sick",
            "Staying home when sick (at least 48 hours after symptoms resolve)",
            "Washing contaminated clothing and linens thoroughly"
        ]
    },
    {
        name: "Nephrotic Syndrome",
        description: "A kidney disorder characterized by high levels of protein in the urine, low levels of protein in the blood, swelling, and high cholesterol.",
        causes: [
            "Minimal change disease",
            "Focal segmental glomerulosclerosis",
            "Membranous nephropathy",
            "Diabetic kidney disease",
            "Lupus nephritis",
            "Amyloidosis",
            "Infections (HIV, hepatitis B and C)",
            "Certain medications",
            "Cancer (multiple myeloma, lymphoma)"
        ],
        symptoms: [
            "Severe swelling (edema), especially around eyes and in legs and ankles",
            "Foamy urine due to excess protein",
            "Weight gain due to fluid retention",
            "Fatigue",
            "Loss of appetite",
            "Increased susceptibility to infections",
            "High blood pressure",
            "Shortness of breath"
        ],
        diagnosis: [
            "Urine tests (to check for protein)",
            "Blood tests (to check protein, cholesterol, kidney function)",
            "Kidney biopsy",
            "Imaging tests (ultrasound, CT scan)",
            "Genetic testing (in some cases)"
        ],
        treatment: [
            "Corticosteroids",
            "Immunosuppressive medications",
            "Blood pressure medications",
            "Diuretics",
            "Statins for high cholesterol",
            "Blood thinners to prevent clots",
            "Low-salt diet",
            "Treatment of underlying conditions",
            "Kidney transplant (in end-stage kidney disease)"
        ],
        prevention: [
            "Control of underlying conditions (diabetes, lupus)",
            "Regular medical check-ups",
            "Blood pressure management",
            "Avoiding medications that can damage kidneys",
            "Maintaining a healthy lifestyle",
            "Prompt treatment of infections"
        ]
    },
    {
        name: "Neuroblastoma",
        description: "A type of cancer that develops from immature nerve cells found in several areas of the body, most commonly in the adrenal glands on top of the kidneys.",
        causes: [
            "Genetic mutations in nerve cells",
            "Familial neuroblastoma (rare, inherited form)",
            "Congenital abnormalities",
            "Environmental factors (under investigation)"
        ],
        symptoms: [
            "Abdominal mass or swelling",
            "Pain in the abdomen",
            "Swelling in the legs or upper chest",
            "Difficulty breathing",
            "Changes in bowel habits or urination",
            "Weakness or paralysis",
            "Bone pain",
            "Bulging eyes or dark circles around eyes",
            "Fever",
            "Unexplained weight loss",
            "Bluish lumps under the skin (in infants)"
        ],
        diagnosis: [
            "Physical examination",
            "Blood and urine tests",
            "Imaging tests (CT scan, MRI, MIBG scan)",
            "Bone marrow aspiration and biopsy",
            "Tumor biopsy",
            "Genetic testing",
            "Staging tests"
        ],
        treatment: [
            "Surgery",
            "Chemotherapy",
            "Radiation therapy",
            "Stem cell transplant",
            "Immunotherapy",
            "Retinoid therapy",
            "Targeted therapy",
            "Observation only (for some low-risk cases)",
            "Clinical trials"
        ],
        prevention: [
            "No known prevention strategies",
            "Genetic counseling for families with history",
            "Early detection through screening in high-risk children"
        ]
    },
    {
        name: "Non-Hodgkin Lymphoma",
        description: "A type of cancer that originates in the lymphatic system, which is part of the immune system, and can spread throughout the body.",
        causes: [
            "Genetic mutations in lymphocytes",
            "Weakened immune system",
            "Certain infections (HIV, Epstein-Barr virus, H. pylori)",
            "Autoimmune disorders",
            "Exposure to certain chemicals",
            "Previous cancer treatments",
            "Age (risk increases with age)"
        ],
        symptoms: [
            "Painless, swollen lymph nodes in neck, armpits, or groin",
            "Persistent fatigue",
            "Fever",
            "Night sweats",
            "Unexplained weight loss",
            "Chest pain or pressure",
            "Abdominal pain or swelling",
            "Coughing or trouble breathing",
            "Itchy skin",
            "Rash"
        ],
        diagnosis: [
            "Physical examination",
            "Lymph node biopsy",
            "Blood tests",
            "Bone marrow biopsy",
            "Imaging tests (CT scan, PET scan, MRI)",
            "Lumbar puncture (in some cases)",
            "Immunophenotyping",
            "Genetic testing"
        ],
        treatment: [
            "Watchful waiting (for slow-growing types)",
            "Chemotherapy",
            "Radiation therapy",
            "Immunotherapy",
            "Targeted therapy",
            "Stem cell transplant",
            "CAR T-cell therapy",
            "Surgery (rarely)",
            "Clinical trials"
        ],
        prevention: [
            "Avoiding risk factors when possible",
            "Preventing HIV infection",
            "Treating H. pylori infection",
            "Avoiding excessive exposure to chemicals",
            "Regular medical check-ups",
            "Maintaining a healthy immune system"
        ]
    },
    {
        name: "Neuropathy (Peripheral)",
        description: "A condition resulting from damage to the peripheral nervous system, which transmits information between the central nervous system and the rest of the body.",
        causes: [
            "Diabetes",
            "Alcoholism",
            "Autoimmune diseases",
            "Infections (Lyme disease, shingles, HIV)",
            "Vitamin deficiencies",
            "Medications (chemotherapy, certain antibiotics)",
            "Trauma or pressure on nerves",
            "Kidney or liver disorders",
            "Exposure to toxins",
            "Genetic disorders"
        ],
        symptoms: [
            "Numbness and tingling in hands and feet",
            "Sharp, jabbing, throbbing, or burning pain",
            "Extreme sensitivity to touch",
            "Muscle weakness",
            "Lack of coordination",
            "Falling",
            "Changes in blood pressure",
            "Heat intolerance",
            "Digestive problems",
            "Bladder or bowel problems",
            "Sexual dysfunction"
        ],
        diagnosis: [
            "Physical examination",
            "Neurological examination",
            "Blood tests",
            "Electromyography (EMG)",
            "Nerve conduction studies",
            "Nerve biopsy",
            "Imaging tests (MRI, CT scan)"
        ],
        treatment: [
            "Treating underlying conditions",
            "Pain medications",
            "Anti-seizure medications",
            "Antidepressants",
            "Topical treatments",
            "Physical therapy",
            "Transcutaneous electrical nerve stimulation (TENS)",
            "Plasma exchange therapy",
            "Intravenous immune globulin",
            "Surgery (in some cases)"
        ],
        prevention: [
            "Managing diabetes",
            "Limiting alcohol consumption",
            "Maintaining proper nutrition",
            "Regular exercise",
            "Avoiding toxin exposure",
            "Regular medical check-ups",
            "Proper foot care (especially for diabetics)",
            "Avoiding prolonged pressure on nerves"
        ]
    }
];

// Function to integrate the entries directly into the healthConditions array
(function() {
    // Find the index of Narcolepsy (the existing N entry)
    const nIndex = healthConditions.findIndex(c => c.name === "Narcolepsy");
    
    if (nIndex >= 0) {
        // Insert the new entries after Narcolepsy
        healthConditions.splice(nIndex + 1, 0, ...nEntries);
        console.log("Successfully added N entries after Narcolepsy");
        
        // Force a refresh of the current view
        const activeButton = document.querySelector('.alphabet-btn.active');
        if (activeButton) {
            if (activeButton.textContent === 'All') {
                // If "All" is active, refresh all conditions
                displayAllConditions();
            } else if (activeButton.textContent === 'N') {
                // If "N" is active, refresh N conditions
                filterByLetter('N');
            }
        }
    } else {
        console.warn("Narcolepsy not found in health conditions");
    }
})();
