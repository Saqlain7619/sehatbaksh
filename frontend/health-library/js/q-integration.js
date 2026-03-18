// Direct integration script for Q section entries

// Q Section Entries to be added directly to the health-library.js file
const qEntries = [
    {
        name: "Quadriplegia",
        description: "Paralysis affecting all four limbs and the torso, typically resulting from a spinal cord injury or disease that affects the cervical spinal cord.",
        causes: [
            "Traumatic spinal cord injury",
            "Motor vehicle accidents",
            "Falls",
            "Sports injuries (especially diving)",
            "Violence (gunshot or stab wounds)",
            "Medical conditions (multiple sclerosis, ALS)",
            "Infections (transverse myelitis, polio)",
            "Spinal cord tumors",
            "Congenital disorders",
            "Stroke affecting the brain stem"
        ],
        symptoms: [
            "Loss of movement in arms and legs",
            "Loss of sensation in arms and legs",
            "Loss of bladder and bowel control",
            "Difficulty breathing",
            "Changes in sexual function and sensitivity",
            "Pain or intense stinging sensation",
            "Muscle spasms",
            "Changes in reflexes",
            "Difficulty regulating body temperature",
            "Autonomic dysreflexia (in injuries above T6)"
        ],
        diagnosis: [
            "Physical examination",
            "Neurological assessment",
            "Medical history",
            "X-rays",
            "CT scans",
            "MRI",
            "Electromyography (EMG)",
            "Nerve conduction studies",
            "Somatosensory evoked potential testing"
        ],
        treatment: [
            "Immediate immobilization after injury",
            "Surgery to stabilize the spine",
            "Medications (steroids, pain management)",
            "Respiratory support",
            "Physical therapy",
            "Occupational therapy",
            "Assistive technology",
            "Mobility aids (powered wheelchairs)",
            "Adaptive equipment",
            "Rehabilitation programs",
            "Psychological counseling"
        ],
        prevention: [
            "Safety measures during high-risk activities",
            "Wearing seat belts",
            "Using appropriate sports equipment",
            "Fall prevention",
            "Workplace safety measures",
            "Swimming safety (no diving in shallow water)",
            "Preventing violence",
            "Regular medical check-ups for progressive conditions"
        ]
    },
    {
        name: "Quinsy (Peritonsillar Abscess)",
        description: "A complication of tonsillitis where pus collects in the space between the tonsil and the wall of the throat, causing severe pain and difficulty swallowing.",
        causes: [
            "Bacterial infection (usually Streptococcus)",
            "Untreated or partially treated tonsillitis",
            "Spread of infection from tonsils to surrounding tissues",
            "Poor oral hygiene",
            "Smoking",
            "Compromised immune system"
        ],
        symptoms: [
            "Severe sore throat (usually on one side)",
            "Difficulty and pain when swallowing",
            "Difficulty opening the mouth (trismus)",
            "Swollen neck glands",
            "Ear pain on the affected side",
            "Fever and chills",
            "Headache",
            "Drooling",
            "Muffled or 'hot potato' voice",
            "Bad breath",
            "Visible swelling and redness near the tonsil"
        ],
        diagnosis: [
            "Physical examination",
            "Throat culture",
            "Blood tests",
            "CT scan or ultrasound",
            "Needle aspiration (also therapeutic)"
        ],
        treatment: [
            "Antibiotics (intravenous or oral)",
            "Drainage of the abscess (needle aspiration or incision)",
            "Pain management",
            "Fluids and soft foods",
            "Hospitalization (in severe cases)",
            "Tonsillectomy (often delayed until infection resolves)",
            "Steroids to reduce inflammation",
            "Warm salt water gargles"
        ],
        prevention: [
            "Prompt treatment of tonsillitis",
            "Completing full course of antibiotics",
            "Good oral hygiene",
            "Not smoking",
            "Tonsillectomy for recurrent tonsillitis"
        ]
    },
    {
        name: "Quincke's Edema (Angioedema)",
        description: "A swelling similar to hives but occurring beneath the skin rather than on the surface, often affecting the face, lips, throat, and extremities.",
        causes: [
            "Allergic reactions to foods, medications, or insect stings",
            "Hereditary angioedema (C1 inhibitor deficiency)",
            "Acquired angioedema",
            "ACE inhibitor medications",
            "Physical triggers (cold, heat, pressure)",
            "Autoimmune disorders",
            "Infections",
            "Stress or anxiety",
            "Idiopathic (unknown cause)"
        ],
        symptoms: [
            "Sudden swelling of face, lips, tongue, throat, hands, feet, or genitals",
            "Pain or burning sensation in affected areas",
            "Difficulty breathing (if throat is affected)",
            "Abdominal pain (in hereditary angioedema)",
            "Nausea and vomiting",
            "No itching (unlike hives)",
            "Episodes lasting 1-3 days",
            "No discoloration or redness in many cases"
        ],
        diagnosis: [
            "Physical examination",
            "Medical history",
            "Blood tests for C1 inhibitor levels and function",
            "Complement levels",
            "Allergy testing",
            "Ruling out other conditions"
        ],
        treatment: [
            "Antihistamines",
            "Corticosteroids",
            "Epinephrine (for severe reactions)",
            "C1 inhibitor concentrates (for hereditary angioedema)",
            "Bradykinin receptor antagonists",
            "Kallikrein inhibitors",
            "Avoiding triggers",
            "Discontinuing causative medications",
            "Long-term preventive medications"
        ],
        prevention: [
            "Identifying and avoiding triggers",
            "Medical alert bracelet",
            "Carrying emergency medication",
            "Prophylactic medications for hereditary forms",
            "Alternative medications if ACE inhibitors are the cause",
            "Stress management",
            "Regular medical follow-up"
        ]
    },
    {
        name: "Quaternary Ammonium Poisoning",
        description: "Toxic effects resulting from exposure to quaternary ammonium compounds, which are commonly found in disinfectants, sanitizers, and some industrial products.",
        causes: [
            "Ingestion of cleaning products containing quaternary ammonium compounds",
            "Inhalation of aerosolized disinfectants",
            "Skin or eye contact with concentrated solutions",
            "Occupational exposure",
            "Improper use of disinfectants",
            "Accidental ingestion by children"
        ],
        symptoms: [
            "Irritation and burning of mouth, throat, and esophagus (if ingested)",
            "Nausea and vomiting",
            "Abdominal pain",
            "Respiratory irritation, coughing, wheezing (if inhaled)",
            "Skin irritation, burns, or dermatitis",
            "Eye irritation or damage",
            "Headache",
            "Dizziness",
            "Low blood pressure",
            "In severe cases: seizures, coma, respiratory failure"
        ],
        diagnosis: [
            "History of exposure",
            "Physical examination",
            "Symptoms assessment",
            "Endoscopy (if ingestion is suspected)",
            "Chest X-ray (if inhalation is suspected)",
            "Blood tests to assess organ function"
        ],
        treatment: [
            "Removing the person from exposure",
            "Decontamination (washing skin, flushing eyes)",
            "Supportive care",
            "Oxygen therapy",
            "IV fluids",
            "Treating symptoms",
            "Avoiding inducing vomiting if ingested",
            "Endoscopic evaluation for severe ingestions",
            "Bronchodilators for respiratory symptoms"
        ],
        prevention: [
            "Proper storage of cleaning products",
            "Following manufacturer's instructions",
            "Using protective equipment (gloves, masks, eye protection)",
            "Adequate ventilation when using products",
            "Keeping products away from children",
            "Proper labeling of containers",
            "Training for occupational users",
            "Not mixing with other cleaning products"
        ]
    },
    {
        name: "Quercetin Deficiency",
        description: "A condition characterized by insufficient levels of quercetin, a plant flavonoid with antioxidant properties, which may contribute to increased oxidative stress and inflammation.",
        causes: [
            "Diet low in fruits and vegetables",
            "Poor absorption of dietary quercetin",
            "Certain medications affecting absorption",
            "Gastrointestinal disorders affecting nutrient absorption",
            "Increased oxidative stress depleting available quercetin",
            "Aging (decreased absorption efficiency)"
        ],
        symptoms: [
            "Increased susceptibility to allergies",
            "Higher frequency of inflammatory conditions",
            "Reduced antioxidant capacity",
            "Increased susceptibility to infections",
            "Slower recovery from exercise",
            "Cardiovascular issues",
            "Note: Symptoms are often non-specific and related to underlying conditions"
        ],
        diagnosis: [
            "Dietary assessment",
            "Blood tests for oxidative stress markers",
            "Inflammatory marker testing",
            "Exclusion of other conditions",
            "Response to supplementation",
            "Note: No standard clinical test specifically for quercetin levels"
        ],
        treatment: [
            "Dietary changes (increasing consumption of quercetin-rich foods)",
            "Quercetin supplements",
            "Addressing underlying absorption issues",
            "Combination with vitamin C to enhance absorption",
            "Treating related inflammatory conditions",
            "Lifestyle modifications to reduce oxidative stress"
        ],
        prevention: [
            "Regular consumption of quercetin-rich foods (apples, berries, onions, citrus fruits, green tea)",
            "Balanced diet with variety of fruits and vegetables",
            "Proper food preparation to preserve quercetin content",
            "Addressing digestive health issues",
            "Regular exercise (moderate intensity)",
            "Stress management",
            "Limiting alcohol consumption"
        ]
    }
];

// Function to integrate the entries directly into the healthConditions array
(function() {
    // Find the index of Q Fever (the existing Q entry)
    const qIndex = healthConditions.findIndex(c => c.name === "Q Fever");
    
    if (qIndex >= 0) {
        // Insert the new entries after Q Fever
        healthConditions.splice(qIndex + 1, 0, ...qEntries);
        console.log("Successfully added Q entries after Q Fever");
        
        // Force a refresh of the current view
        const activeButton = document.querySelector('.alphabet-btn.active');
        if (activeButton) {
            if (activeButton.textContent === 'All') {
                // If "All" is active, refresh all conditions
                displayAllConditions();
            } else if (activeButton.textContent === 'Q') {
                // If "Q" is active, refresh Q conditions
                filterByLetter('Q');
            }
        }
    } else {
        console.warn("Q Fever not found in health conditions");
    }
})();
