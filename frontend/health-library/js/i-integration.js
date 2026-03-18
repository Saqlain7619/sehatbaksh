// Direct integration script for I section entries

// I Section Entries to be added directly to the health-library.js file
const iEntries = [
    {
        name: "Inflammatory Bowel Disease (IBD)",
        description: "A group of chronic inflammatory disorders affecting the digestive tract, primarily including Crohn's disease and ulcerative colitis, characterized by periods of active disease and remission.",
        causes: [
            "Autoimmune reaction (immune system attacks digestive tract)",
            "Genetic factors",
            "Environmental triggers",
            "Abnormal immune response to gut bacteria",
            "Family history of IBD",
            "Smoking (increases risk for Crohn's disease)",
            "Dietary factors",
            "Stress (may trigger flares)",
            "Certain medications (NSAIDs)",
            "Gut microbiome imbalances"
        ],
        symptoms: [
            "Persistent diarrhea",
            "Abdominal pain and cramping",
            "Blood in stool",
            "Reduced appetite",
            "Unintended weight loss",
            "Fatigue",
            "Fever",
            "Night sweats",
            "In Crohn's: mouth sores, anal fissures, fistulas",
            "In ulcerative colitis: rectal pain, urgency to defecate",
            "Extraintestinal symptoms: joint pain, eye inflammation, skin disorders",
            "Growth delays in children",
            "Anemia",
            "Nutritional deficiencies"
        ],
        diagnosis: [
            "Medical history and physical examination",
            "Blood tests (anemia, inflammation markers)",
            "Stool tests (infection, inflammation markers)",
            "Colonoscopy with biopsy",
            "Upper endoscopy",
            "Imaging studies (CT scan, MRI, small bowel imaging)",
            "Capsule endoscopy",
            "Differential diagnosis to rule out other conditions",
            "Genetic testing (in some cases)"
        ],
        treatment: [
            "Anti-inflammatory drugs (5-ASA compounds, corticosteroids)",
            "Immune system suppressors (azathioprine, methotrexate)",
            "Biologics (anti-TNF agents, anti-integrin agents)",
            "JAK inhibitors",
            "Antibiotics (for infections or fistulas)",
            "Anti-diarrheal medications",
            "Pain relievers (avoiding NSAIDs)",
            "Nutritional supplements",
            "Special diets (elemental diet, specific carbohydrate diet)",
            "Surgery (for complications or treatment-resistant cases)",
            "Stress management",
            "Regular monitoring and follow-up"
        ],
        prevention: [
            "No known prevention (genetic component)",
            "Smoking cessation (especially for Crohn's disease)",
            "Stress management",
            "Regular exercise",
            "Balanced diet",
            "Avoiding trigger foods",
            "Probiotics (may help some patients)",
            "Regular medical check-ups",
            "Early treatment of flares",
            "Medication adherence to maintain remission"
        ]
    },
    {
        name: "Interstitial Cystitis",
        description: "A chronic bladder condition causing bladder pressure, bladder pain, and sometimes pelvic pain, ranging from mild discomfort to severe pain, with no infection or other obvious cause.",
        causes: [
            "Unknown exact cause",
            "Defect in the protective lining of the bladder",
            "Autoimmune reaction",
            "Hereditary factors",
            "Nerve damage or dysfunction",
            "Pelvic floor muscle dysfunction",
            "Previous bladder trauma",
            "Allergic reaction",
            "Cross-talk with other pelvic pain conditions",
            "Possible relation to certain infections"
        ],
        symptoms: [
            "Chronic pelvic pain",
            "Pressure or discomfort in the bladder",
            "Pain that worsens as bladder fills",
            "Relief after urination (temporarily)",
            "Urinary urgency (feeling need to urinate immediately)",
            "Urinary frequency (up to 60 times per day in severe cases)",
            "Pain during sexual intercourse",
            "Pain in the lower abdomen, pelvis, or perineum",
            "Symptoms that flare with certain foods or drinks",
            "Symptoms that worsen during menstruation",
            "Sleep disturbances due to nighttime urination"
        ],
        diagnosis: [
            "Medical history",
            "Physical examination",
            "Urinalysis and urine culture (to rule out infection)",
            "Cystoscopy with hydrodistention",
            "Potassium sensitivity test",
            "Urodynamic testing",
            "Pelvic floor assessment",
            "Exclusion of other conditions (UTI, bladder cancer, etc.)",
            "Symptom questionnaires and voiding diaries"
        ],
        treatment: [
            "Oral medications (pentosan polysulfate sodium, antihistamines, antidepressants)",
            "Bladder instillations (DMSO, heparin, lidocaine)",
            "Physical therapy for pelvic floor",
            "Nerve stimulation techniques",
            "Bladder training",
            "Dietary modifications (avoiding trigger foods)",
            "Stress reduction techniques",
            "Pain management",
            "Hydrodistention of the bladder",
            "Surgery (rare, for severe cases)",
            "Complementary approaches (acupuncture, massage)",
            "Support groups"
        ],
        prevention: [
            "No known prevention (cause unknown)",
            "Avoiding known trigger foods and beverages",
            "Stress management",
            "Pelvic floor relaxation techniques",
            "Regular, timed urination",
            "Avoiding holding urine for long periods",
            "Gentle exercise",
            "Avoiding tight clothing",
            "Maintaining good overall health",
            "Early treatment of symptoms"
        ]
    },
    {
        name: "Impetigo",
        description: "A highly contagious bacterial skin infection that primarily affects infants and children, characterized by red sores that rupture, ooze for a few days, and then form a yellowish-brown crust.",
        causes: [
            "Staphylococcus aureus bacteria",
            "Streptococcus pyogenes bacteria",
            "Entry of bacteria through breaks in the skin",
            "Direct contact with infected person",
            "Contact with items used by infected person",
            "Warm, humid environments (facilitates spread)",
            "Poor hygiene",
            "Crowded living conditions",
            "Weakened immune system",
            "Pre-existing skin conditions (eczema, dermatitis)"
        ],
        symptoms: [
            "Red sores that quickly rupture",
            "Oozing and crusting over with honey-colored crust",
            "Itching and soreness",
            "Spreading to nearby skin through scratching",
            "Bullous impetigo: larger blisters filled with clear fluid",
            "Ecthyma (deeper form): painful fluid or pus-filled sores",
            "Swollen lymph nodes (in severe cases)",
            "Fever (uncommon, but possible in severe cases)",
            "Most common around nose, mouth, hands, forearms, and legs",
            "Painless unless secondary infection develops"
        ],
        diagnosis: [
            "Physical examination",
            "Medical history",
            "Culture of the fluid from sores",
            "Gram stain",
            "Differential diagnosis from other skin conditions",
            "Assessment of severity and spread"
        ],
        treatment: [
            "Topical antibiotics (mupirocin, retapamulin)",
            "Oral antibiotics for widespread infection",
            "Gentle cleansing with soap and water",
            "Removal of crusts with warm soaks",
            "Keeping affected areas covered",
            "Avoiding scratching",
            "Separate towels and linens",
            "Cutting fingernails short",
            "Treatment of underlying skin conditions",
            "Follow-up to ensure resolution"
        ],
        prevention: [
            "Regular handwashing",
            "Keeping fingernails short and clean",
            "Prompt cleaning and covering of cuts and scrapes",
            "Not sharing personal items",
            "Regular bathing",
            "Washing clothes, linens, and towels in hot water",
            "Avoiding contact with infected individuals",
            "Keeping children with impetigo home from school until no longer contagious",
            "Treating underlying skin conditions",
            "Maintaining good overall hygiene"
        ]
    },
    {
        name: "Idiopathic Pulmonary Fibrosis",
        description: "A chronic, progressive lung disease characterized by the thickening and scarring (fibrosis) of lung tissue without a known cause, leading to decreased oxygen transfer and breathing difficulties.",
        causes: [
            "Unknown exact cause (idiopathic)",
            "Genetic factors",
            "Environmental exposures (dust, pollutants)",
            "Smoking",
            "Viral infections (potential trigger)",
            "Gastroesophageal reflux disease (GERD)",
            "Abnormal wound healing response",
            "Autoimmune processes",
            "Aging-related changes",
            "Occupational exposures"
        ],
        symptoms: [
            "Shortness of breath (dyspnea), initially with exertion",
            "Persistent dry, hacking cough",
            "Fatigue and weakness",
            "Unexplained weight loss",
            "Aching muscles and joints",
            "Clubbing of fingertips (widening and rounding)",
            "Crackling sound in lungs during examination",
            "Decreased exercise tolerance",
            "Chest discomfort",
            "In advanced stages: bluish skin (cyanosis)",
            "Right heart failure (cor pulmonale) in late stages"
        ],
        diagnosis: [
            "Medical history and physical examination",
            "Pulmonary function tests",
            "High-resolution CT scan",
            "Lung biopsy (surgical or bronchoscopic)",
            "Blood tests to rule out other conditions",
            "Arterial blood gas analysis",
            "Exercise testing",
            "Echocardiogram (to assess heart function)",
            "Multidisciplinary discussion for definitive diagnosis"
        ],
        treatment: [
            "Antifibrotic medications (pirfenidone, nintedanib)",
            "Oxygen therapy",
            "Pulmonary rehabilitation",
            "Treatment of complications",
            "Management of comorbidities",
            "Vaccination against respiratory infections",
            "Lung transplantation (for eligible patients)",
            "Palliative care for symptom management",
            "Clinical trials of new therapies",
            "Supportive care"
        ],
        prevention: [
            "No known prevention (cause unknown)",
            "Smoking cessation",
            "Avoiding environmental and occupational exposures",
            "Treatment of GERD",
            "Regular medical check-ups",
            "Early diagnosis and treatment",
            "Maintaining overall health",
            "Pulmonary rehabilitation",
            "Avoiding respiratory infections",
            "Genetic counseling for families with history"
        ]
    },
    {
        name: "Iron Deficiency Anemia",
        description: "A common type of anemia caused by insufficient iron in the body, leading to reduced production of hemoglobin, the protein in red blood cells that carries oxygen to tissues.",
        causes: [
            "Inadequate dietary iron intake",
            "Blood loss (menstruation, gastrointestinal bleeding)",
            "Pregnancy and childbirth",
            "Inability to absorb iron (celiac disease, gastric bypass)",
            "Internal bleeding (ulcers, polyps, cancer)",
            "Increased iron requirements (growth spurts, pregnancy)",
            "Certain medications that reduce iron absorption",
            "Vegetarian or vegan diet without proper planning",
            "Frequent blood donation",
            "Parasitic infections (hookworm)"
        ],
        symptoms: [
            "Fatigue and weakness",
            "Pale skin",
            "Shortness of breath",
            "Dizziness or lightheadedness",
            "Cold hands and feet",
            "Headaches",
            "Brittle nails",
            "Hair loss",
            "Sore or inflamed tongue",
            "Restless legs syndrome",
            "Unusual cravings for non-food items (pica)",
            "Reduced appetite",
            "Increased susceptibility to infections",
            "Heart palpitations",
            "Poor concentration and memory"
        ],
        diagnosis: [
            "Complete blood count (CBC)",
            "Serum ferritin test",
            "Serum iron level",
            "Total iron-binding capacity (TIBC)",
            "Transferrin saturation",
            "Peripheral blood smear",
            "Testing for occult blood in stool",
            "Endoscopy or colonoscopy (if GI bleeding suspected)",
            "Medical history",
            "Physical examination"
        ],
        treatment: [
            "Oral iron supplements",
            "Intravenous iron (for severe cases or absorption issues)",
            "Dietary changes to increase iron intake",
            "Vitamin C to enhance iron absorption",
            "Treatment of underlying causes",
            "Blood transfusion (in severe cases)",
            "Monitoring response to treatment",
            "Iron-rich foods (red meat, leafy greens, beans)",
            "Avoiding foods that inhibit iron absorption with meals",
            "Regular follow-up blood tests"
        ],
        prevention: [
            "Iron-rich diet",
            "Iron supplements for high-risk groups",
            "Vitamin C with meals to enhance absorption",
            "Regular screening for those at risk",
            "Treatment of underlying conditions",
            "Spacing iron supplements and calcium-rich foods/supplements",
            "Regular medical check-ups",
            "Limiting tea, coffee, and dairy with iron-rich meals",
            "Treatment of parasitic infections",
            "Iron fortification of foods"
        ]
    }
];

// Function to integrate the entries directly into the healthConditions array
(function() {
    // Find the index of Insomnia (an existing I entry)
    const iIndex = healthConditions.findIndex(c => c.name === "Insomnia");
    
    if (iIndex >= 0) {
        // Insert the new entries after Insomnia
        healthConditions.splice(iIndex + 1, 0, ...iEntries);
        console.log("Successfully added I entries after Insomnia");
        
        // Force a refresh of the current view
        const activeButton = document.querySelector('.alphabet-btn.active');
        if (activeButton) {
            if (activeButton.textContent === 'All') {
                // If "All" is active, refresh all conditions
                displayAllConditions();
            } else if (activeButton.textContent === 'I') {
                // If "I" is active, refresh I conditions
                filterByLetter('I');
            }
        }
    } else {
        console.warn("Insomnia not found in health conditions");
    }
})();
