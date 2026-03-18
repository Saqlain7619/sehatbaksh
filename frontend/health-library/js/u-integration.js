// Direct integration script for U section entries

// U Section Entries to be added directly to the health-library.js file
const uEntries = [
    {
        name: "Ulcerative Colitis",
        description: "A chronic inflammatory bowel disease that causes inflammation and ulcers in the digestive tract, primarily affecting the innermost lining of the large intestine (colon) and rectum.",
        causes: [
            "Immune system malfunction",
            "Genetic factors",
            "Environmental triggers",
            "Abnormal immune response to gut bacteria",
            "Family history",
            "Age (most often develops before 30)",
            "Ethnicity (higher risk in white people of European descent and Jewish people)",
            "Diet high in fat or refined foods",
            "Stress (may worsen but not cause)"
        ],
        symptoms: [
            "Diarrhea, often with blood or pus",
            "Abdominal pain and cramping",
            "Rectal pain and bleeding",
            "Urgency to defecate",
            "Inability to defecate despite urgency",
            "Weight loss",
            "Fatigue",
            "Fever",
            "Failure to grow in children",
            "Joint pain",
            "Skin and eye inflammation",
            "Liver disease (in severe cases)"
        ],
        diagnosis: [
            "Medical history",
            "Physical examination",
            "Blood tests",
            "Stool tests",
            "Colonoscopy",
            "Flexible sigmoidoscopy",
            "CT scan",
            "MRI",
            "X-ray",
            "Biopsy of colon tissue"
        ],
        treatment: [
            "Anti-inflammatory drugs (5-ASA, corticosteroids)",
            "Immune system suppressors",
            "Biologics (anti-TNF, anti-integrins, JAK inhibitors)",
            "Antibiotics",
            "Pain relievers",
            "Anti-diarrheal medications",
            "Iron supplements",
            "Surgery (colectomy in severe cases)",
            "Dietary modifications",
            "Stress management",
            "Probiotics"
        ],
        prevention: [
            "No known prevention",
            "Regular screening if at high risk",
            "Smoking cessation (may worsen symptoms)",
            "Stress management",
            "Regular exercise",
            "Balanced diet",
            "Avoiding trigger foods",
            "Medication adherence once diagnosed",
            "Regular medical follow-up"
        ]
    },
    {
        name: "Urethritis",
        description: "Inflammation of the urethra, the tube that carries urine from the bladder to outside the body, often caused by infection and resulting in pain during urination.",
        causes: [
            "Sexually transmitted infections (gonorrhea, chlamydia, mycoplasma)",
            "Bacterial infections (E. coli, streptococcus)",
            "Viral infections (herpes simplex virus)",
            "Parasitic infections (trichomonas)",
            "Chemical irritants (spermicides, soaps, lotions)",
            "Injury or trauma to the urethra",
            "Urinary catheters",
            "Autoimmune conditions"
        ],
        symptoms: [
            "Burning or pain during urination",
            "Frequent or urgent need to urinate",
            "Difficulty starting urination",
            "Itching, tenderness, or swelling in the penis or vagina",
            "Discharge from the urethra (clear, white, or pus-like)",
            "Blood in urine or semen",
            "Pain during sexual intercourse",
            "Enlarged lymph nodes in the groin area",
            "Redness at the opening of the urethra"
        ],
        diagnosis: [
            "Medical history",
            "Physical examination",
            "Urinalysis",
            "Urine culture",
            "Swab of urethral discharge",
            "STI testing",
            "Cystoscopy (in some cases)",
            "Ultrasound (in some cases)"
        ],
        treatment: [
            "Antibiotics for bacterial infections",
            "Antiviral medications for viral causes",
            "Antiparasitic medications for parasitic infections",
            "Pain relievers",
            "Increased fluid intake",
            "Avoiding irritants",
            "Abstaining from sexual activity until treatment is complete",
            "Treatment of sexual partners (for STIs)",
            "Follow-up testing to ensure cure"
        ],
        prevention: [
            "Safe sex practices (condoms)",
            "Regular STI testing",
            "Monogamous relationships",
            "Good hygiene",
            "Avoiding irritating products",
            "Urinating after sexual intercourse",
            "Adequate hydration",
            "Prompt treatment of urinary tract infections"
        ]
    },
    {
        name: "Uveitis",
        description: "Inflammation of the uvea, the middle layer of the eye that contains the iris, ciliary body, and choroid, which can lead to vision loss if not treated promptly.",
        causes: [
            "Autoimmune disorders (rheumatoid arthritis, lupus, ankylosing spondylitis)",
            "Infections (tuberculosis, herpes, toxoplasmosis, syphilis)",
            "Inflammatory diseases (sarcoidosis, Crohn's disease)",
            "Eye injury or surgery",
            "Certain cancers (lymphoma)",
            "Genetic predisposition",
            "Unknown causes (idiopathic)"
        ],
        symptoms: [
            "Eye redness",
            "Eye pain",
            "Light sensitivity (photophobia)",
            "Blurred vision",
            "Floaters (small dark spots in vision)",
            "Decreased vision",
            "Irregular pupil shape",
            "Headaches",
            "Small pupil size",
            "Tearing"
        ],
        diagnosis: [
            "Comprehensive eye examination",
            "Slit-lamp examination",
            "Dilated eye exam",
            "Optical coherence tomography (OCT)",
            "Fluorescein angiography",
            "Ultrasound of the eye",
            "Blood tests for underlying conditions",
            "Chest X-ray (for sarcoidosis)",
            "Testing for infectious causes"
        ],
        treatment: [
            "Corticosteroid eye drops",
            "Oral corticosteroids",
            "Immunosuppressive medications",
            "Biologic response modifiers",
            "Antibiotics, antivirals, or antifungals (for infections)",
            "Mydriatic eye drops (to dilate pupil and reduce pain)",
            "Treatment of underlying conditions",
            "Surgery (in severe cases)",
            "Pain management"
        ],
        prevention: [
            "Regular eye examinations",
            "Prompt treatment of eye infections",
            "Management of autoimmune conditions",
            "Eye protection to prevent injury",
            "Regular medical check-ups",
            "Early intervention when symptoms appear",
            "Avoiding smoking",
            "Healthy lifestyle"
        ]
    },
    {
        name: "Urticaria (Hives)",
        description: "A skin reaction that causes itchy welts, which can vary in size and appear anywhere on the body, often triggered by an allergic reaction or other causes.",
        causes: [
            "Allergic reactions to foods, medications, or insect bites",
            "Physical triggers (cold, heat, pressure, sun exposure, exercise)",
            "Infections (viral, bacterial, or parasitic)",
            "Emotional stress",
            "Certain medical conditions (thyroid disease, lupus)",
            "Contact with plants, animals, or chemicals",
            "Genetic factors",
            "Autoimmune response",
            "Idiopathic (unknown cause)"
        ],
        symptoms: [
            "Raised, red or skin-colored welts (wheals)",
            "Intense itching",
            "Welts that vary in size, change shape, and appear and fade repeatedly",
            "Angioedema (swelling of deeper layers of skin, especially around eyes and lips)",
            "Welts that may blanch (turn white) when pressed",
            "Symptoms may last minutes to days",
            "Chronic urticaria: symptoms persist for more than 6 weeks"
        ],
        diagnosis: [
            "Medical history",
            "Physical examination",
            "Skin tests for allergies",
            "Blood tests",
            "Skin biopsy (rarely)",
            "Challenge tests (for physical urticaria)",
            "Food or medication elimination diets",
            "Diary to track triggers"
        ],
        treatment: [
            "Antihistamines",
            "Corticosteroids (short-term for severe cases)",
            "Anti-inflammatory medications",
            "Immune-modulating drugs (for chronic cases)",
            "Omalizumab (for chronic urticaria)",
            "Epinephrine (for severe reactions with anaphylaxis)",
            "Avoiding identified triggers",
            "Cool compresses",
            "Oatmeal baths",
            "Stress management"
        ],
        prevention: [
            "Identifying and avoiding triggers",
            "Keeping a food diary",
            "Reading medication labels carefully",
            "Wearing medical alert identification",
            "Having emergency medication available",
            "Regular medical follow-up",
            "Stress reduction techniques",
            "Avoiding extreme temperatures (for physical urticaria)"
        ]
    },
    {
        name: "Umbilical Hernia",
        description: "A condition where part of the intestine protrudes through a weakness in the abdominal muscles around the navel (umbilicus), creating a bulge under the skin.",
        causes: [
            "Incomplete closure of the abdominal muscles after birth",
            "Increased pressure in the abdomen",
            "Pregnancy (especially multiple pregnancies)",
            "Obesity",
            "Previous abdominal surgery",
            "Chronic cough",
            "Chronic constipation",
            "Ascites (fluid in the abdomen)",
            "Heavy lifting",
            "Premature birth or low birth weight"
        ],
        symptoms: [
            "Bulge or swelling near the navel",
            "Bulge more noticeable when crying, coughing, or straining",
            "Bulge that may disappear when lying down or relaxed",
            "Usually painless in children",
            "May cause discomfort or pain in adults",
            "Tenderness at the site",
            "Discoloration of the bulge (if strangulation occurs)",
            "Vomiting (in severe cases with obstruction)"
        ],
        diagnosis: [
            "Physical examination",
            "Medical history",
            "Ultrasound",
            "CT scan (in complex cases)",
            "MRI (rarely)"
        ],
        treatment: [
            "Watchful waiting (many infantile hernias close naturally by age 4-5)",
            "Surgery (herniorraphy or hernioplasty)",
            "Laparoscopic repair",
            "Mesh placement for larger hernias",
            "Pain management",
            "Reducing risk factors (weight loss, avoiding heavy lifting)",
            "Emergency surgery for strangulated hernias"
        ],
        prevention: [
            "Maintaining a healthy weight",
            "Proper lifting techniques",
            "Avoiding heavy lifting",
            "Treating conditions that cause chronic coughing",
            "Managing constipation",
            "Core-strengthening exercises",
            "Smoking cessation",
            "Proper nutrition during pregnancy"
        ]
    }
];

// Function to integrate the entries directly into the healthConditions array
(function() {
    // Find the index of Urinary Tract Infection (the existing U entry)
    const uIndex = healthConditions.findIndex(c => c.name === "Urinary Tract Infection (UTI)");
    
    if (uIndex >= 0) {
        // Insert the new entries after Urinary Tract Infection
        healthConditions.splice(uIndex + 1, 0, ...uEntries);
        console.log("Successfully added U entries after Urinary Tract Infection (UTI)");
        
        // Force a refresh of the current view
        const activeButton = document.querySelector('.alphabet-btn.active');
        if (activeButton) {
            if (activeButton.textContent === 'All') {
                // If "All" is active, refresh all conditions
                displayAllConditions();
            } else if (activeButton.textContent === 'U') {
                // If "U" is active, refresh U conditions
                filterByLetter('U');
            }
        }
    } else {
        console.warn("Urinary Tract Infection (UTI) not found in health conditions");
    }
})();
