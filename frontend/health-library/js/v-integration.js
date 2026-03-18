// Direct integration script for V section entries

// V Section Entries to be added directly to the health-library.js file
const vEntries = [
    {
        name: "Vitiligo",
        description: "A long-term skin condition characterized by patches of skin losing their pigment, resulting in discolored patches in different areas of the body.",
        causes: [
            "Autoimmune disorder (immune system attacks melanocytes)",
            "Genetic factors",
            "Oxidative stress",
            "Neural factors",
            "Viral infections",
            "Sunburn",
            "Physical or emotional stress",
            "Exposure to certain chemicals",
            "Family history"
        ],
        symptoms: [
            "Patchy loss of skin color",
            "Premature whitening or graying of hair",
            "Loss of color in the tissues inside the mouth",
            "Loss of color in the inner layer of the eye (retina)",
            "Patches often appear symmetrically",
            "Most common areas: face, hands, arms, feet",
            "No other physical symptoms (not painful)",
            "Possible psychological distress",
            "Increased sensitivity to sunlight in affected areas"
        ],
        diagnosis: [
            "Physical examination",
            "Medical history",
            "Wood's lamp examination (special UV light)",
            "Skin biopsy (rarely needed)",
            "Blood tests to check for autoimmune conditions",
            "Eye examination"
        ],
        treatment: [
            "Topical corticosteroids",
            "Calcineurin inhibitors",
            "Phototherapy (narrowband UVB, PUVA)",
            "Excimer laser",
            "Skin grafting",
            "Depigmentation (for widespread vitiligo)",
            "Tattooing (micropigmentation)",
            "Sunscreen to protect affected areas",
            "Cosmetic camouflage products",
            "Psychological support"
        ],
        prevention: [
            "No known prevention",
            "Avoiding triggers like sunburn",
            "Stress management",
            "Protecting skin from injury",
            "Early treatment may prevent spreading",
            "Avoiding harsh chemicals on skin",
            "Regular skin checks",
            "Healthy lifestyle"
        ]
    },
    {
        name: "Vertigo",
        description: "A sensation of feeling off balance or dizzy, often described as a spinning sensation, which occurs due to problems with the inner ear, brain, or sensory nerve pathway.",
        causes: [
            "Benign paroxysmal positional vertigo (BPPV)",
            "Meniere's disease",
            "Vestibular neuritis or labyrinthitis",
            "Acoustic neuroma",
            "Migraine",
            "Head or neck injury",
            "Stroke or TIA",
            "Multiple sclerosis",
            "Medications",
            "Ear surgery",
            "Perilymph fistula",
            "Superior canal dehiscence syndrome"
        ],
        symptoms: [
            "Spinning sensation",
            "Swaying or tilting",
            "Feeling pulled in one direction",
            "Nausea and vomiting",
            "Abnormal or jerking eye movements (nystagmus)",
            "Headache",
            "Sweating",
            "Ringing in the ears or hearing loss",
            "Loss of balance",
            "Feeling of fullness in the ear"
        ],
        diagnosis: [
            "Medical history",
            "Physical examination",
            "Dix-Hallpike test",
            "Head impulse test",
            "Romberg test",
            "Electronystagmography (ENG) or videonystagmography (VNG)",
            "Rotary chair testing",
            "Posturography",
            "CT scan or MRI",
            "Audiometry"
        ],
        treatment: [
            "Canalith repositioning procedures (Epley maneuver for BPPV)",
            "Vestibular rehabilitation",
            "Medications (antihistamines, anticholinergics, benzodiazepines)",
            "Anti-nausea medications",
            "Diuretics (for Meniere's disease)",
            "Surgery (in severe cases)",
            "Lifestyle changes",
            "Balance therapy",
            "Stress management"
        ],
        prevention: [
            "Avoiding sudden head movements",
            "Rising slowly from sitting or lying positions",
            "Using good lighting when getting up at night",
            "Using a cane for stability if needed",
            "Removing hazards at home that might cause falls",
            "Regular exercise to improve balance",
            "Avoiding triggers (certain foods for Meniere's)",
            "Managing stress",
            "Vestibular exercises"
        ]
    },
    {
        name: "Vitamin D Deficiency",
        description: "A condition that occurs when the body doesn't get enough vitamin D, which is essential for calcium absorption, bone health, immune function, and other bodily processes.",
        causes: [
            "Limited sun exposure",
            "Dark skin (melanin reduces vitamin D production)",
            "Obesity (vitamin D gets trapped in fat tissue)",
            "Age (older adults produce less vitamin D)",
            "Digestive disorders (Crohn's, celiac, cystic fibrosis)",
            "Kidney or liver disease",
            "Certain medications (steroids, weight-loss drugs, seizure medications)",
            "Strict vegetarian or vegan diet",
            "Breastfed infants with no supplementation",
            "Living in northern latitudes"
        ],
        symptoms: [
            "Fatigue and tiredness",
            "Bone pain",
            "Muscle weakness, aches, or cramps",
            "Mood changes (depression)",
            "Impaired wound healing",
            "Bone loss (osteoporosis)",
            "Hair loss",
            "Increased susceptibility to infections",
            "In children: rickets (soft, weak bones)",
            "In adults: osteomalacia (softening of bones)"
        ],
        diagnosis: [
            "Blood test (25-hydroxyvitamin D level)",
            "Bone density scan",
            "Physical examination",
            "Medical history",
            "X-rays (in severe cases)"
        ],
        treatment: [
            "Vitamin D supplements (D2 or D3)",
            "Increased sun exposure (15-30 minutes several times a week)",
            "Dietary changes (fatty fish, fortified foods)",
            "Treating underlying conditions",
            "Calcium supplements (often given with vitamin D)",
            "Regular monitoring of blood levels",
            "In severe cases, prescription-strength supplements"
        ],
        prevention: [
            "Regular, moderate sun exposure",
            "Consuming vitamin D-rich foods",
            "Taking supplements if at risk",
            "Regular testing if in high-risk groups",
            "Fortified foods (milk, orange juice, cereals)",
            "Cod liver oil supplements",
            "Maintaining healthy weight",
            "Addressing underlying medical conditions"
        ]
    },
    {
        name: "Viral Hepatitis",
        description: "Inflammation of the liver caused by viral infection, with several types (A, B, C, D, E) that vary in severity, transmission methods, and long-term effects.",
        causes: [
            "Hepatitis A virus (HAV): contaminated food or water",
            "Hepatitis B virus (HBV): blood, semen, other body fluids",
            "Hepatitis C virus (HCV): primarily blood-to-blood contact",
            "Hepatitis D virus (HDV): requires HBV to replicate",
            "Hepatitis E virus (HEV): contaminated water",
            "Other viruses that can affect the liver (CMV, EBV, HSV)"
        ],
        symptoms: [
            "Fatigue",
            "Nausea and vomiting",
            "Abdominal pain, especially in upper right side",
            "Clay-colored bowel movements",
            "Loss of appetite",
            "Low-grade fever",
            "Dark urine",
            "Joint pain",
            "Jaundice (yellowing of skin and eyes)",
            "Itchy skin",
            "Many cases may be asymptomatic"
        ],
        diagnosis: [
            "Blood tests for viral antibodies and antigens",
            "Liver function tests",
            "Liver biopsy (in some cases)",
            "Ultrasound, CT scan, or MRI",
            "Elastography (measures liver stiffness)",
            "PCR tests (to detect viral genetic material)"
        ],
        treatment: [
            "Hepatitis A: Rest, supportive care, no specific treatment",
            "Hepatitis B: Antiviral medications, interferon",
            "Hepatitis C: Direct-acting antiviral drugs",
            "Hepatitis D: Interferon alpha",
            "Hepatitis E: Supportive care, ribavirin in severe cases",
            "Liver transplant (for end-stage liver disease)",
            "Avoiding alcohol and certain medications",
            "Monitoring for complications",
            "Nutritional support"
        ],
        prevention: [
            "Hepatitis A and B vaccines",
            "Practicing good hygiene",
            "Safe sex practices",
            "Not sharing needles or personal items",
            "Screening blood products",
            "Safe food handling",
            "Clean drinking water",
            "Avoiding high-risk behaviors",
            "Post-exposure prophylaxis for Hepatitis A and B"
        ]
    },
    {
        name: "Vaginitis",
        description: "Inflammation or infection of the vagina that can cause discharge, itching, and pain, commonly resulting from a change in the normal balance of vaginal bacteria or an infection.",
        causes: [
            "Bacterial vaginosis (imbalance of bacteria)",
            "Yeast infections (Candida)",
            "Trichomoniasis (parasite)",
            "Atrophic vaginitis (decreased estrogen)",
            "Allergic reactions or irritants",
            "Foreign bodies",
            "Sexually transmitted infections",
            "Hormonal changes",
            "Antibiotics (disrupting normal flora)",
            "Douching"
        ],
        symptoms: [
            "Abnormal vaginal discharge (color, odor, amount)",
            "Vaginal itching or irritation",
            "Pain during urination",
            "Pain during intercourse",
            "Light vaginal bleeding or spotting",
            "Fishy odor (bacterial vaginosis)",
            "Thick, white, cottage cheese-like discharge (yeast)",
            "Greenish-yellow, frothy discharge (trichomoniasis)",
            "Vaginal dryness (atrophic vaginitis)",
            "Redness and swelling of the vagina and vulva"
        ],
        diagnosis: [
            "Medical history",
            "Pelvic examination",
            "Vaginal pH testing",
            "Microscopic examination of discharge",
            "Cultures",
            "STI testing",
            "Wet mount preparation"
        ],
        treatment: [
            "Antibiotics (for bacterial vaginosis, trichomoniasis)",
            "Antifungal medications (for yeast infections)",
            "Estrogen therapy (for atrophic vaginitis)",
            "Removing irritants or allergens",
            "Treatment of sexual partners (for certain infections)",
            "Probiotics",
            "Avoiding douching and irritants",
            "Wearing cotton underwear",
            "Maintaining proper hygiene"
        ],
        prevention: [
            "Good hygiene practices",
            "Avoiding douches and scented products",
            "Wearing cotton underwear",
            "Wiping from front to back",
            "Safe sex practices",
            "Avoiding tight-fitting clothing",
            "Changing out of wet clothing promptly",
            "Maintaining healthy vaginal flora",
            "Regular gynecological check-ups",
            "Proper antibiotic use"
        ]
    }
];

// Function to integrate the entries directly into the healthConditions array
(function() {
    // Find the index of Varicose Veins (the existing V entry)
    const vIndex = healthConditions.findIndex(c => c.name === "Varicose Veins");
    
    if (vIndex >= 0) {
        // Insert the new entries after Varicose Veins
        healthConditions.splice(vIndex + 1, 0, ...vEntries);
        console.log("Successfully added V entries after Varicose Veins");
        
        // Force a refresh of the current view
        const activeButton = document.querySelector('.alphabet-btn.active');
        if (activeButton) {
            if (activeButton.textContent === 'All') {
                // If "All" is active, refresh all conditions
                displayAllConditions();
            } else if (activeButton.textContent === 'V') {
                // If "V" is active, refresh V conditions
                filterByLetter('V');
            }
        }
    } else {
        console.warn("Varicose Veins not found in health conditions");
    }
})();
