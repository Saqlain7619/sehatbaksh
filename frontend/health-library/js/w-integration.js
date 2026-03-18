// Direct integration script for W section entries

// W Section Entries to be added directly to the health-library.js file
const wEntries = [
    {
        name: "Wilson's Disease",
        description: "A rare inherited disorder that causes copper to accumulate in the liver, brain, and other vital organs, eventually causing tissue damage and symptoms if left untreated.",
        causes: [
            "Genetic mutation in the ATP7B gene",
            "Autosomal recessive inheritance pattern",
            "Impaired copper transport and excretion",
            "Copper accumulation in tissues",
            "Both parents must be carriers for a child to inherit the disease"
        ],
        symptoms: [
            "Liver symptoms: jaundice, fatigue, abdominal pain, swelling",
            "Neurological symptoms: tremors, poor coordination, difficulty speaking",
            "Psychiatric symptoms: personality changes, depression, anxiety",
            "Kayser-Fleischer rings (copper deposits around cornea)",
            "Hemolytic anemia",
            "Kidney problems",
            "Bone and joint problems",
            "Menstrual irregularities",
            "Heart arrhythmias",
            "Symptoms typically appear between ages 5-35"
        ],
        diagnosis: [
            "Blood tests (low ceruloplasmin, high free copper)",
            "24-hour urine copper test",
            "Liver function tests",
            "Genetic testing for ATP7B mutations",
            "Liver biopsy to measure copper content",
            "Eye examination for Kayser-Fleischer rings",
            "MRI of brain",
            "Family screening"
        ],
        treatment: [
            "Lifelong copper chelation therapy (penicillamine, trientine)",
            "Zinc supplements to block copper absorption",
            "Dietary restrictions (avoiding high-copper foods)",
            "Liver transplantation (in severe cases)",
            "Regular monitoring of copper levels",
            "Symptomatic treatment for neurological symptoms",
            "Vitamin E supplements",
            "Treatment must continue for life"
        ],
        prevention: [
            "No primary prevention (genetic disorder)",
            "Genetic counseling for families with history",
            "Screening family members of affected individuals",
            "Early diagnosis and treatment prevents complications",
            "Prenatal testing available",
            "Maintaining treatment compliance",
            "Regular medical follow-up"
        ]
    },
    {
        name: "Whooping Cough (Pertussis)",
        description: "A highly contagious respiratory tract infection characterized by severe coughing fits followed by a high-pitched intake of breath that sounds like 'whoop'.",
        causes: [
            "Bordetella pertussis bacteria",
            "Airborne transmission through coughs and sneezes",
            "Direct contact with respiratory secretions",
            "Highly contagious (up to 90% of non-immune household contacts)",
            "Incubation period of 7-10 days"
        ],
        symptoms: [
            "Initial cold-like symptoms (runny nose, mild cough, low-grade fever)",
            "Paroxysmal coughing fits",
            "Characteristic 'whoop' sound when inhaling after coughing",
            "Vomiting after coughing episodes",
            "Exhaustion after coughing fits",
            "Symptoms may last 6-10 weeks ('100-day cough')",
            "Milder symptoms in vaccinated individuals",
            "More severe in infants (may not have 'whoop')",
            "Apnea (breathing stops) in babies",
            "Complications: pneumonia, seizures, brain damage"
        ],
        diagnosis: [
            "Clinical evaluation",
            "Nasopharyngeal swab for culture",
            "PCR testing",
            "Blood tests",
            "Chest X-ray (to check for complications)",
            "Medical history and symptom assessment"
        ],
        treatment: [
            "Antibiotics (macrolides: azithromycin, clarithromycin, erythromycin)",
            "Early treatment is most effective",
            "Cough suppressants generally not recommended",
            "Hospitalization for severe cases (especially infants)",
            "Oxygen therapy if needed",
            "Intravenous fluids for dehydration",
            "Isolation to prevent spread",
            "Rest and increased fluid intake",
            "Treatment of household contacts"
        ],
        prevention: [
            "DTaP vaccine for children under 7",
            "Tdap vaccine for adolescents and adults",
            "Vaccination during pregnancy",
            "Booster shots as recommended",
            "Cocooning (vaccinating all close contacts of newborns)",
            "Avoiding contact with infected individuals",
            "Covering coughs and sneezes",
            "Hand hygiene",
            "Prompt antibiotic treatment of cases"
        ]
    },
    {
        name: "Warts",
        description: "Small, rough growths on the skin caused by the human papillomavirus (HPV), which can appear anywhere on the body but commonly affect the hands, feet, and genital areas.",
        causes: [
            "Human papillomavirus (HPV) infection",
            "Direct skin-to-skin contact",
            "Indirect contact with contaminated objects",
            "Breaks in skin allowing virus entry",
            "Weakened immune system",
            "Moisture and warmth (facilitates virus growth)",
            "Over 100 types of HPV exist, causing different wart types"
        ],
        symptoms: [
            "Common warts: rough, raised bumps usually on hands and fingers",
            "Plantar warts: hard, grainy growths on feet, may cause pain when walking",
            "Flat warts: small, smooth, flat-topped bumps, often in large numbers",
            "Filiform warts: thread-like growths often on face",
            "Periungual warts: around fingernails and toenails",
            "Genital warts: flesh-colored bumps in genital area",
            "Most warts are painless unless in pressure areas",
            "May have black dots (clotted blood vessels)",
            "Vary in size and appearance"
        ],
        diagnosis: [
            "Visual examination",
            "Dermoscopy",
            "Biopsy (rarely needed)",
            "Acetic acid application (turns warts white)",
            "Ruling out other skin conditions",
            "HPV typing (for genital warts)"
        ],
        treatment: [
            "Many warts resolve without treatment (1-2 years)",
            "Salicylic acid preparations",
            "Cryotherapy (freezing with liquid nitrogen)",
            "Electrocautery (burning)",
            "Laser therapy",
            "Surgical excision",
            "Immunotherapy",
            "Bleomycin injections",
            "Duct tape occlusion",
            "Prescription medications (imiquimod, podofilox)",
            "HPV vaccine may help prevent some types"
        ],
        prevention: [
            "Avoiding direct contact with warts",
            "Not picking or scratching existing warts",
            "Keeping hands and feet dry",
            "Wearing footwear in public showers and pool areas",
            "Not sharing towels, razors, or other personal items",
            "HPV vaccination (prevents genital warts)",
            "Using condoms (reduces but doesn't eliminate genital wart risk)",
            "Boosting immune system",
            "Regular hand washing"
        ]
    },
    {
        name: "Wernicke-Korsakoff Syndrome",
        description: "A brain disorder caused by thiamine (vitamin B1) deficiency, typically seen in alcoholics, consisting of two phases: acute Wernicke's encephalopathy followed by chronic Korsakoff syndrome.",
        causes: [
            "Thiamine (vitamin B1) deficiency",
            "Chronic alcoholism (most common cause)",
            "Malnutrition",
            "Prolonged vomiting",
            "AIDS",
            "Kidney dialysis",
            "Cancer and its treatments",
            "Gastric bypass surgery",
            "Anorexia nervosa",
            "Severe morning sickness (hyperemesis gravidarum)"
        ],
        symptoms: [
            "Wernicke's phase: confusion, ataxia (loss of muscle coordination), eye abnormalities",
            "Korsakoff's phase: severe memory problems, inability to form new memories",
            "Confabulation (making up stories to fill memory gaps)",
            "Hallucinations",
            "Personality changes",
            "Vision changes (double vision, drooping eyelids)",
            "Loss of muscle coordination",
            "Unsteady, uncoordinated walking",
            "Decreased consciousness",
            "Hypotension (low blood pressure)",
            "Hypothermia (low body temperature)"
        ],
        diagnosis: [
            "Clinical evaluation",
            "Medical history",
            "Neurological examination",
            "Blood tests for thiamine levels",
            "MRI of the brain",
            "Cognitive and memory testing",
            "Ruling out other causes of symptoms",
            "Often diagnosed retrospectively"
        ],
        treatment: [
            "Immediate thiamine supplementation (IV initially)",
            "Balanced diet with ongoing thiamine supplementation",
            "Treatment of underlying causes (alcohol cessation)",
            "Supportive care",
            "Cognitive rehabilitation",
            "Treatment of complications",
            "Wernicke's encephalopathy is a medical emergency",
            "Korsakoff syndrome may be permanent despite treatment",
            "Multivitamin supplements"
        ],
        prevention: [
            "Adequate thiamine intake",
            "Balanced diet",
            "Alcohol abstinence or moderation",
            "Thiamine supplements for high-risk individuals",
            "Prompt treatment of conditions causing vomiting",
            "Nutritional support during illness",
            "Prophylactic thiamine for alcoholics",
            "Regular medical check-ups for at-risk individuals"
        ]
    },
    {
        name: "Whiplash",
        description: "A neck injury due to forceful, rapid back-and-forth movement of the neck, like the cracking of a whip, commonly occurring during rear-end automobile accidents.",
        causes: [
            "Rear-end car accidents",
            "Sports accidents (particularly contact sports)",
            "Physical abuse or assault (shaken baby syndrome)",
            "Falls",
            "Amusement park rides",
            "Sudden acceleration-deceleration forces",
            "Bicycle accidents",
            "Horseback riding accidents"
        ],
        symptoms: [
            "Neck pain and stiffness",
            "Worsening pain with neck movement",
            "Loss of range of motion in the neck",
            "Headaches, typically starting at the base of the skull",
            "Tenderness or pain in shoulders, upper back, or arms",
            "Tingling or numbness in the arms",
            "Fatigue",
            "Dizziness",
            "Blurred vision",
            "Ringing in the ears (tinnitus)",
            "Sleep disturbances",
            "Irritability",
            "Difficulty concentrating",
            "Memory problems",
            "Depression"
        ],
        diagnosis: [
            "Medical history",
            "Physical examination",
            "Neck movement assessment",
            "Neurological examination",
            "X-rays to rule out fractures or dislocations",
            "CT scan for detailed bone imaging",
            "MRI to detect soft tissue injuries",
            "Electromyography to detect nerve damage"
        ],
        treatment: [
            "Rest (short-term)",
            "Ice or heat application",
            "Over-the-counter pain medications",
            "Prescription pain relievers or muscle relaxants",
            "Cervical collar (limited use)",
            "Physical therapy",
            "Range-of-motion exercises",
            "Posture training",
            "Massage therapy",
            "Chiropractic care",
            "Acupuncture",
            "Transcutaneous electrical nerve stimulation (TENS)",
            "Psychological support for chronic pain",
            "Injections for severe pain"
        ],
        prevention: [
            "Proper headrest position in vehicles",
            "Wearing seatbelts",
            "Maintaining proper posture",
            "Strengthening neck muscles",
            "Using proper sports equipment",
            "Avoiding high-risk activities",
            "Defensive driving",
            "Maintaining safe following distance while driving",
            "Proper lifting techniques"
        ]
    }
];

// Function to integrate the entries directly into the healthConditions array
(function() {
    // Find the index of West Nile Virus (the existing W entry)
    const wIndex = healthConditions.findIndex(c => c.name === "West Nile Virus");
    
    if (wIndex >= 0) {
        // Insert the new entries after West Nile Virus
        healthConditions.splice(wIndex + 1, 0, ...wEntries);
        console.log("Successfully added W entries after West Nile Virus");
        
        // Force a refresh of the current view
        const activeButton = document.querySelector('.alphabet-btn.active');
        if (activeButton) {
            if (activeButton.textContent === 'All') {
                // If "All" is active, refresh all conditions
                displayAllConditions();
            } else if (activeButton.textContent === 'W') {
                // If "W" is active, refresh W conditions
                filterByLetter('W');
            }
        }
    } else {
        console.warn("West Nile Virus not found in health conditions");
    }
})();
