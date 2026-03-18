// Direct integration script for P section entries

// P Section Entries to be added directly to the health-library.js file
const pEntries = [
    {
        name: "Pneumonia",
        description: "An infection that inflames the air sacs in one or both lungs, which may fill with fluid or pus, causing cough, fever, chills, and difficulty breathing.",
        causes: [
            "Bacterial infections (Streptococcus pneumoniae, Legionella pneumophila)",
            "Viral infections (influenza, respiratory syncytial virus, COVID-19)",
            "Fungal infections",
            "Aspiration of food, drink, vomit, or saliva into lungs",
            "Hospitalization (hospital-acquired pneumonia)",
            "Ventilator use (ventilator-associated pneumonia)",
            "Weakened immune system"
        ],
        symptoms: [
            "Chest pain when breathing or coughing",
            "Confusion or changes in mental awareness (in adults age 65 and older)",
            "Cough, which may produce phlegm",
            "Fatigue",
            "Fever, sweating and shaking chills",
            "Lower than normal body temperature (in adults older than age 65 and people with weak immune systems)",
            "Nausea, vomiting or diarrhea",
            "Shortness of breath"
        ],
        diagnosis: [
            "Physical examination",
            "Chest X-ray",
            "Blood tests",
            "Sputum test",
            "Pulse oximetry",
            "CT scan",
            "Pleural fluid culture",
            "Bronchoscopy"
        ],
        treatment: [
            "Antibiotics for bacterial pneumonia",
            "Antiviral medications for viral pneumonia",
            "Antifungal medications for fungal pneumonia",
            "Cough medicine",
            "Fever reducers/pain relievers",
            "Hospitalization for severe cases",
            "Oxygen therapy",
            "IV fluids",
            "Breathing treatments"
        ],
        prevention: [
            "Vaccination (pneumococcal vaccine, flu vaccine, COVID-19 vaccine)",
            "Good hygiene (frequent handwashing)",
            "Not smoking",
            "Maintaining a strong immune system",
            "Adequate rest and nutrition",
            "Avoiding contact with sick people",
            "Proper management of chronic conditions"
        ]
    },
    {
        name: "Psoriasis",
        description: "A chronic autoimmune condition that causes rapid buildup of skin cells, resulting in scaling on the skin's surface.",
        causes: [
            "Immune system dysfunction",
            "Genetic predisposition",
            "Environmental triggers",
            "Stress",
            "Infections (streptococcal throat infection)",
            "Injury to skin (cuts, scrapes, bug bites)",
            "Certain medications (lithium, beta blockers, antimalarials)",
            "Cold weather",
            "Smoking and alcohol consumption"
        ],
        symptoms: [
            "Red patches of skin covered with thick, silvery scales",
            "Small scaling spots (commonly seen in children)",
            "Dry, cracked skin that may bleed",
            "Itching, burning or soreness",
            "Thickened, pitted or ridged nails",
            "Swollen and stiff joints",
            "Patches anywhere on the body, most commonly on elbows, knees, scalp and lower back"
        ],
        diagnosis: [
            "Physical examination",
            "Medical history",
            "Skin biopsy",
            "Ruling out other skin conditions"
        ],
        treatment: [
            "Topical treatments (corticosteroids, vitamin D analogues, retinoids)",
            "Light therapy (phototherapy)",
            "Oral or injected medications (methotrexate, cyclosporine, biologics)",
            "Lifestyle changes",
            "Moisturizers",
            "Stress reduction techniques",
            "Alternative therapies (aloe vera, fish oil supplements)"
        ],
        prevention: [
            "No definitive prevention",
            "Identifying and avoiding triggers",
            "Stress management",
            "Regular moisturizing",
            "Limiting alcohol consumption",
            "Not smoking",
            "Maintaining a healthy weight",
            "Protecting skin from injury"
        ]
    },
    {
        name: "Pancreatitis",
        description: "Inflammation of the pancreas, an organ that produces digestive enzymes and insulin, which can be acute (sudden and severe) or chronic (long-lasting).",
        causes: [
            "Gallstones",
            "Alcohol abuse",
            "High triglyceride levels",
            "Certain medications",
            "Abdominal surgery or injury",
            "Pancreatic cancer",
            "Genetic disorders",
            "Autoimmune conditions",
            "Infections",
            "Cystic fibrosis"
        ],
        symptoms: [
            "Upper abdominal pain that radiates to the back",
            "Abdominal pain that worsens after eating",
            "Fever",
            "Rapid pulse",
            "Nausea and vomiting",
            "Tenderness when touching the abdomen",
            "Weight loss",
            "Oily, smelly stools (steatorrhea)",
            "Diabetes (in chronic cases)"
        ],
        diagnosis: [
            "Blood tests (amylase and lipase levels)",
            "Stool tests",
            "Abdominal ultrasound",
            "CT scan",
            "MRI",
            "Endoscopic ultrasound",
            "ERCP (endoscopic retrograde cholangiopancreatography)"
        ],
        treatment: [
            "Fasting to rest the pancreas",
            "Pain medications",
            "Intravenous (IV) fluids",
            "Nutritional support",
            "Endoscopic procedures",
            "Surgery to remove gallstones or damaged tissue",
            "Treatment for alcohol dependence",
            "Enzyme supplements",
            "Dietary changes",
            "Insulin (if diabetes develops)"
        ],
        prevention: [
            "Limiting alcohol consumption",
            "Low-fat diet",
            "Maintaining a healthy weight",
            "Regular exercise",
            "Not smoking",
            "Regular medical check-ups",
            "Management of underlying conditions"
        ]
    },
    {
        name: "Post-Traumatic Stress Disorder (PTSD)",
        description: "A mental health condition triggered by experiencing or witnessing a terrifying event, causing flashbacks, nightmares, and severe anxiety.",
        causes: [
            "Experiencing or witnessing traumatic events",
            "Combat exposure",
            "Childhood abuse or neglect",
            "Sexual or physical assault",
            "Serious accidents",
            "Natural disasters",
            "Terrorist attacks",
            "Genetic factors affecting stress and fear responses",
            "History of other mental health problems",
            "Substance abuse"
        ],
        symptoms: [
            "Intrusive memories (flashbacks, nightmares)",
            "Avoidance (avoiding places, activities, or people that remind of the trauma)",
            "Negative changes in thinking and mood (negative thoughts, hopelessness, detachment)",
            "Changes in physical and emotional reactions (being easily startled, always on guard)",
            "Difficulty sleeping",
            "Irritability or aggressive behavior",
            "Overwhelming guilt or shame",
            "Self-destructive behavior",
            "Difficulty concentrating",
            "Emotional numbness"
        ],
        diagnosis: [
            "Psychological evaluation",
            "DSM-5 criteria assessment",
            "Physical exam to check for medical problems",
            "Discussion of symptoms and traumatic events",
            "Screening questionnaires"
        ],
        treatment: [
            "Psychotherapy (cognitive behavioral therapy, EMDR, exposure therapy)",
            "Medications (antidepressants, anti-anxiety medications)",
            "Ketamine (in some cases)",
            "Support groups",
            "Stress management techniques",
            "Lifestyle changes",
            "Treatment for co-occurring conditions"
        ],
        prevention: [
            "Early intervention after trauma",
            "Seeking help after traumatic events",
            "Social support",
            "Learning healthy coping mechanisms",
            "Trauma-focused cognitive behavioral therapy",
            "Developing resilience",
            "Treatment of other mental health problems"
        ]
    },
    {
        name: "Polycystic Ovary Syndrome (PCOS)",
        description: "A hormonal disorder common among women of reproductive age, characterized by irregular periods, excess androgen levels, and polycystic ovaries.",
        causes: [
            "Insulin resistance",
            "Low-grade inflammation",
            "Excess androgen production",
            "Heredity",
            "Environmental factors",
            "Obesity (can worsen symptoms)"
        ],
        symptoms: [
            "Irregular periods or no periods",
            "Heavy bleeding during periods",
            "Excess facial and body hair (hirsutism)",
            "Acne",
            "Male-pattern baldness",
            "Weight gain or difficulty losing weight",
            "Darkening of skin (particularly along neck creases, in the groin, and underneath breasts)",
            "Skin tags",
            "Infertility",
            "Mood disorders (depression, anxiety)"
        ],
        diagnosis: [
            "Medical history and physical examination",
            "Pelvic examination",
            "Blood tests (hormone levels, glucose tolerance, cholesterol)",
            "Ultrasound of ovaries",
            "Ruling out other conditions"
        ],
        treatment: [
            "Lifestyle changes (diet, exercise)",
            "Birth control pills to regulate periods",
            "Anti-androgen medications",
            "Metformin to improve insulin resistance",
            "Clomiphene or letrozole for infertility",
            "Progestin therapy",
            "Hair removal treatments",
            "Acne treatments",
            "Fertility treatments"
        ],
        prevention: [
            "No known prevention",
            "Maintaining a healthy weight",
            "Regular exercise",
            "Healthy diet low in refined carbohydrates",
            "Regular medical check-ups",
            "Early management of symptoms",
            "Stress reduction"
        ]
    }
];

// Function to integrate the entries directly into the healthConditions array
(function() {
    // Find the index of Parkinson's Disease (the existing P entry)
    const pIndex = healthConditions.findIndex(c => c.name === "Parkinson's Disease");
    
    if (pIndex >= 0) {
        // Insert the new entries after Parkinson's Disease
        healthConditions.splice(pIndex + 1, 0, ...pEntries);
        console.log("Successfully added P entries after Parkinson's Disease");
        
        // Force a refresh of the current view
        const activeButton = document.querySelector('.alphabet-btn.active');
        if (activeButton) {
            if (activeButton.textContent === 'All') {
                // If "All" is active, refresh all conditions
                displayAllConditions();
            } else if (activeButton.textContent === 'P') {
                // If "P" is active, refresh P conditions
                filterByLetter('P');
            }
        }
    } else {
        console.warn("Parkinson's Disease not found in health conditions");
    }
})();
