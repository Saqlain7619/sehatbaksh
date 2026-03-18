// Direct integration script for R section entries

// R Section Entries to be added directly to the health-library.js file
const rEntries = [
    {
        name: "Respiratory Syncytial Virus (RSV)",
        description: "A common respiratory virus that usually causes mild, cold-like symptoms but can be serious, especially for infants, older adults, and people with weakened immune systems.",
        causes: [
            "RSV infection",
            "Spread through droplets when an infected person coughs or sneezes",
            "Direct contact with virus (touching infected surfaces)",
            "Close contact with infected individuals",
            "Seasonal outbreaks (typically fall through spring)"
        ],
        symptoms: [
            "Runny nose",
            "Decrease in appetite",
            "Coughing",
            "Sneezing",
            "Fever",
            "Wheezing",
            "Difficulty breathing (in severe cases)",
            "Bluish color of the skin due to lack of oxygen (in severe cases)",
            "Rapid breathing",
            "Lethargy (in infants)"
        ],
        diagnosis: [
            "Physical examination",
            "Medical history",
            "Laboratory tests (PCR, rapid antigen tests)",
            "Nasal swab",
            "Blood tests",
            "Chest X-ray (in severe cases)"
        ],
        treatment: [
            "Supportive care",
            "Rest",
            "Hydration",
            "Over-the-counter fever reducers",
            "Nasal saline drops",
            "Humidified air",
            "Oxygen therapy (in severe cases)",
            "Mechanical ventilation (in severe cases)",
            "Antiviral medications (for high-risk patients)",
            "Monoclonal antibody treatment (for prevention in high-risk infants)"
        ],
        prevention: [
            "Frequent handwashing",
            "Avoiding close contact with sick people",
            "Covering coughs and sneezes",
            "Cleaning and disinfecting surfaces",
            "Not touching face with unwashed hands",
            "RSV immunization for high-risk infants",
            "Maternal RSV vaccination during pregnancy",
            "Limiting exposure to crowds during RSV season for high-risk individuals"
        ]
    },
    {
        name: "Raynaud's Phenomenon",
        description: "A condition causing areas of the body — such as fingers and toes — to feel numb and cold in response to cold temperatures or stress due to narrowing of the small arteries.",
        causes: [
            "Primary Raynaud's (no underlying medical condition)",
            "Secondary Raynaud's (associated with other conditions)",
            "Autoimmune disorders (scleroderma, lupus)",
            "Arterial diseases",
            "Carpal tunnel syndrome",
            "Repetitive trauma",
            "Smoking",
            "Certain medications",
            "Exposure to chemicals",
            "Injuries to hands or feet"
        ],
        symptoms: [
            "Cold fingers or toes",
            "Color changes in skin in response to cold or stress (white, blue, then red)",
            "Numbness",
            "Tingling or stinging pain upon warming",
            "Rarely, tissue damage or ulcers in severe cases",
            "Symptoms typically affecting both sides of the body"
        ],
        diagnosis: [
            "Medical history",
            "Physical examination",
            "Cold stimulation test",
            "Blood tests to rule out other conditions",
            "Nailfold capillaroscopy",
            "Antinuclear antibody test"
        ],
        treatment: [
            "Avoiding triggers (cold, stress)",
            "Dressing warmly",
            "Using hand and foot warmers",
            "Calcium channel blockers",
            "Vasodilators",
            "Alpha blockers",
            "Topical nitroglycerin",
            "Nerve blocks (in severe cases)",
            "Surgery (in severe cases)",
            "Biofeedback training"
        ],
        prevention: [
            "Keeping warm, especially hands and feet",
            "Avoiding sudden temperature changes",
            "Stress management",
            "Not smoking",
            "Regular exercise to improve circulation",
            "Limiting caffeine and alcohol",
            "Avoiding medications that trigger symptoms"
        ]
    },
    {
        name: "Rotavirus Infection",
        description: "A highly contagious viral infection causing severe diarrhea, primarily affecting infants and young children, and a leading cause of severe dehydration in children worldwide.",
        causes: [
            "Rotavirus infection",
            "Fecal-oral transmission",
            "Contact with contaminated surfaces",
            "Consuming contaminated food or water",
            "Close contact with infected individuals",
            "Seasonal patterns (winter in temperate climates)"
        ],
        symptoms: [
            "Severe watery diarrhea",
            "Vomiting",
            "Fever",
            "Abdominal pain",
            "Dehydration (dry mouth, decreased urination, sunken eyes)",
            "Lethargy",
            "Irritability",
            "Symptoms lasting 3-8 days"
        ],
        diagnosis: [
            "Clinical evaluation",
            "Stool sample testing",
            "Rapid antigen detection tests",
            "PCR tests",
            "Assessment of dehydration",
            "Electrolyte tests"
        ],
        treatment: [
            "Oral rehydration therapy",
            "Intravenous fluids (for severe dehydration)",
            "Zinc supplements",
            "Rest",
            "Gradual return to normal diet",
            "Probiotics (may help reduce duration)",
            "Anti-diarrheal medications generally NOT recommended for children"
        ],
        prevention: [
            "Rotavirus vaccination",
            "Proper hand hygiene",
            "Proper diaper disposal",
            "Disinfection of contaminated surfaces",
            "Safe food and water practices",
            "Isolation of infected individuals",
            "Breastfeeding (provides some protection)"
        ]
    },
    {
        name: "Restless Legs Syndrome",
        description: "A neurological disorder characterized by an irresistible urge to move the legs, usually accompanied by uncomfortable sensations, typically occurring in the evening or at night.",
        causes: [
            "Genetic factors",
            "Iron deficiency",
            "Dopamine imbalance",
            "Pregnancy",
            "Chronic diseases (kidney failure, diabetes)",
            "Certain medications",
            "Nerve damage",
            "Spinal cord conditions",
            "Alcohol, nicotine, and caffeine use",
            "Sleep deprivation"
        ],
        symptoms: [
            "Uncomfortable sensations in legs (crawling, creeping, pulling, throbbing)",
            "Irresistible urge to move the legs",
            "Symptoms worsen during rest",
            "Symptoms improve with movement",
            "Symptoms worse in evening or night",
            "Sleep disturbances",
            "Daytime sleepiness",
            "Periodic limb movements during sleep",
            "Symptoms may affect arms (less commonly)"
        ],
        diagnosis: [
            "Clinical evaluation based on symptoms",
            "Medical history",
            "Sleep study (polysomnography)",
            "Blood tests for iron levels",
            "Neurological examination",
            "Diagnostic criteria from International Restless Legs Syndrome Study Group"
        ],
        treatment: [
            "Iron supplements (if deficient)",
            "Dopaminergic medications",
            "Anti-seizure drugs",
            "Benzodiazepines",
            "Opioids (for severe cases)",
            "Regular exercise",
            "Leg massage",
            "Hot baths",
            "Compression devices",
            "Avoiding triggers (caffeine, alcohol)",
            "Good sleep hygiene"
        ],
        prevention: [
            "Maintaining adequate iron levels",
            "Regular exercise",
            "Establishing good sleep habits",
            "Avoiding caffeine, alcohol, and nicotine",
            "Stress management",
            "Regular sleep schedule",
            "Moderate temperature in bedroom"
        ]
    },
    {
        name: "Rosacea",
        description: "A chronic inflammatory skin condition primarily affecting the face, characterized by redness, visible blood vessels, and sometimes small, red, pus-filled bumps.",
        causes: [
            "Genetic predisposition",
            "Blood vessel abnormalities",
            "Microscopic skin mites (Demodex folliculorum)",
            "Helicobacter pylori bacteria",
            "Immune system dysfunction",
            "Environmental factors"
        ],
        symptoms: [
            "Facial redness (primarily on cheeks, nose, forehead, chin)",
            "Visible blood vessels (telangiectasia)",
            "Swollen red bumps (papules and pustules)",
            "Eye problems (dryness, irritation, swollen eyelids)",
            "Enlarged nose (rhinophyma, more common in men)",
            "Burning or stinging sensation",
            "Skin thickening",
            "Facial flushing",
            "Symptoms worsen with triggers"
        ],
        diagnosis: [
            "Physical examination",
            "Medical history",
            "Ruling out other skin conditions",
            "Sometimes skin biopsy",
            "No specific diagnostic test"
        ],
        treatment: [
            "Topical medications (metronidazole, azelaic acid, ivermectin)",
            "Oral antibiotics (doxycycline, minocycline)",
            "Isotretinoin (for severe cases)",
            "Laser therapy",
            "Intense pulsed light therapy",
            "Electrosurgery",
            "Dermabrasion",
            "Gentle skin care",
            "Sunscreen",
            "Avoiding triggers"
        ],
        prevention: [
            "Identifying and avoiding triggers (spicy food, alcohol, extreme temperatures)",
            "Sun protection",
            "Gentle skin care routine",
            "Avoiding harsh skin products",
            "Using rosacea-friendly cosmetics",
            "Stress management",
            "Regular medical follow-up",
            "Keeping a symptom diary to identify patterns"
        ]
    }
];

// Function to integrate the entries directly into the healthConditions array
(function() {
    // Find the index of Rheumatoid Arthritis (the existing R entry)
    const rIndex = healthConditions.findIndex(c => c.name === "Rheumatoid Arthritis");
    
    if (rIndex >= 0) {
        // Insert the new entries after Rheumatoid Arthritis
        healthConditions.splice(rIndex + 1, 0, ...rEntries);
        console.log("Successfully added R entries after Rheumatoid Arthritis");
        
        // Force a refresh of the current view
        const activeButton = document.querySelector('.alphabet-btn.active');
        if (activeButton) {
            if (activeButton.textContent === 'All') {
                // If "All" is active, refresh all conditions
                displayAllConditions();
            } else if (activeButton.textContent === 'R') {
                // If "R" is active, refresh R conditions
                filterByLetter('R');
            }
        }
    } else {
        console.warn("Rheumatoid Arthritis not found in health conditions");
    }
})();
