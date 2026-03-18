// Direct integration script for X section entries

// X Section Entries to be added directly to the health-library.js file
const xEntries = [
    {
        name: "Xeroderma Pigmentosum",
        description: "A rare genetic disorder characterized by an extreme sensitivity to ultraviolet (UV) radiation, leading to severe sunburns and early development of skin cancers.",
        causes: [
            "Genetic mutations in XP genes (XPA through XPG, or XPV)",
            "Autosomal recessive inheritance",
            "Defects in DNA repair mechanisms",
            "Inability to repair damage caused by UV radiation",
            "Both parents must be carriers for a child to inherit the condition"
        ],
        symptoms: [
            "Extreme sensitivity to sunlight",
            "Severe sunburn with minimal sun exposure",
            "Freckling at an early age",
            "Dry skin",
            "Changes in skin pigmentation",
            "Premature skin aging",
            "Early development of skin cancers (before age 10)",
            "Eye problems (photophobia, conjunctivitis, corneal abnormalities)",
            "Neurological abnormalities in some types (hearing loss, poor coordination, intellectual disability)",
            "Increased risk of internal cancers"
        ],
        diagnosis: [
            "Clinical evaluation",
            "Skin biopsy",
            "UV sensitivity testing",
            "DNA repair testing",
            "Genetic testing",
            "Family history assessment",
            "Ophthalmological examination",
            "Neurological examination"
        ],
        treatment: [
            "No cure available",
            "Complete protection from UV radiation",
            "Protective clothing, hats, and eyewear",
            "High-SPF sunscreen",
            "UV-protective films on windows",
            "Regular skin examinations",
            "Prompt removal of pre-cancerous and cancerous lesions",
            "Vitamin D supplements (due to sun avoidance)",
            "Topical retinoids",
            "Oral retinoids (in some cases)",
            "Management of neurological symptoms",
            "Experimental treatments (enzyme therapy, gene therapy)"
        ],
        prevention: [
            "No primary prevention (genetic disorder)",
            "Genetic counseling for families with history",
            "Complete UV protection from birth",
            "Avoiding outdoor activities during peak sunlight hours",
            "Regular skin cancer screening",
            "Early intervention for skin abnormalities",
            "Environmental modifications (UV filters, special lighting)",
            "Nighttime outdoor activities instead of daytime"
        ]
    },
    {
        name: "Xanthoma",
        description: "Yellow-colored fatty deposits that develop under the skin, often associated with abnormal lipid levels and sometimes indicating underlying metabolic or liver disorders.",
        causes: [
            "High levels of blood lipids (cholesterol, triglycerides)",
            "Familial hypercholesterolemia",
            "Diabetes mellitus",
            "Hypothyroidism",
            "Primary biliary cirrhosis",
            "Certain medications",
            "Monoclonal gammopathy",
            "Obesity",
            "Pancreatitis",
            "Nephrotic syndrome"
        ],
        symptoms: [
            "Yellow-orange bumps or plaques on the skin",
            "Common locations: eyelids, joints, tendons, hands, feet, buttocks",
            "Usually painless",
            "May be soft or firm to touch",
            "Different types: xanthelasma (eyelids), tendinous xanthomas (tendons), eruptive xanthomas (widespread)",
            "May appear suddenly with severe lipid abnormalities",
            "Possible symptoms of underlying conditions (fatigue, weight changes)",
            "Possible cardiovascular symptoms if related to high cholesterol"
        ],
        diagnosis: [
            "Physical examination",
            "Lipid profile (cholesterol, triglycerides, HDL, LDL)",
            "Liver function tests",
            "Thyroid function tests",
            "Blood glucose levels",
            "Skin biopsy (if diagnosis uncertain)",
            "Screening for cardiovascular disease",
            "Genetic testing (for familial hypercholesterolemia)"
        ],
        treatment: [
            "Treatment of underlying lipid disorder",
            "Dietary modifications",
            "Weight loss if overweight",
            "Lipid-lowering medications (statins, fibrates)",
            "Management of diabetes or thyroid disorders",
            "Surgical removal (for cosmetic reasons)",
            "Laser treatment",
            "Chemical cauterization",
            "Cryotherapy",
            "Electrodesiccation",
            "May recur if underlying condition not controlled"
        ],
        prevention: [
            "Maintaining healthy cholesterol levels",
            "Regular exercise",
            "Healthy diet low in saturated and trans fats",
            "Weight management",
            "Controlling diabetes",
            "Regular medical check-ups",
            "Early treatment of lipid disorders",
            "Avoiding or minimizing medications that raise lipid levels",
            "Family screening if hereditary lipid disorders present"
        ]
    },
    {
        name: "X-linked Agammaglobulinemia",
        description: "A rare genetic disorder that affects the immune system, characterized by very low levels of protective antibodies (immunoglobulins) and an increased susceptibility to infections.",
        causes: [
            "Mutation in the Bruton tyrosine kinase (BTK) gene on the X chromosome",
            "X-linked recessive inheritance pattern",
            "Failure of B-cell development",
            "Inability to produce antibodies",
            "Primarily affects males",
            "Female carriers typically show no symptoms"
        ],
        symptoms: [
            "Recurrent bacterial infections starting after 6 months of age",
            "Frequent ear infections, sinusitis, pneumonia",
            "Gastrointestinal infections",
            "Skin infections",
            "Meningitis",
            "Sepsis",
            "Growth delays",
            "Absence of lymph nodes or tonsils",
            "Chronic diarrhea",
            "Increased risk of certain cancers",
            "Autoimmune disorders",
            "Enteroviral infections (can be severe)"
        ],
        diagnosis: [
            "Blood tests showing low or absent immunoglobulins",
            "Flow cytometry showing absence of B cells",
            "Genetic testing for BTK gene mutations",
            "Family history",
            "Absence of germinal centers in lymphoid tissues",
            "Poor antibody response to vaccines",
            "Prenatal diagnosis possible"
        ],
        treatment: [
            "Regular immunoglobulin replacement therapy (IVIG or SCIG)",
            "Prompt antibiotic treatment for infections",
            "Prophylactic antibiotics",
            "Avoidance of live vaccines",
            "Stem cell transplantation (in some cases)",
            "Management of complications",
            "Genetic counseling",
            "Regular monitoring by immunologist",
            "Nutritional support if needed"
        ],
        prevention: [
            "No primary prevention (genetic disorder)",
            "Genetic counseling for families with history",
            "Carrier testing for females in affected families",
            "Regular immunoglobulin therapy prevents many infections",
            "Avoiding exposure to infections",
            "Avoiding live vaccines",
            "Good hygiene practices",
            "Prompt treatment of infections"
        ]
    },
    {
        name: "Xerophthalmia",
        description: "A progressive eye disease caused by vitamin A deficiency, characterized by abnormal dryness of the conjunctiva and cornea, night blindness, and in severe cases, corneal ulceration and blindness.",
        causes: [
            "Severe vitamin A deficiency",
            "Malnutrition",
            "Poor dietary intake of vitamin A",
            "Malabsorption disorders",
            "Alcoholism",
            "Liver disease",
            "Cystic fibrosis",
            "Pancreatic insufficiency",
            "Restrictive diets",
            "Poverty and limited access to varied diet"
        ],
        symptoms: [
            "Night blindness (nyctalopia) - earliest symptom",
            "Dry, rough conjunctiva (Bitot's spots)",
            "Corneal dryness and ulceration",
            "Corneal softening (keratomalacia)",
            "Increased susceptibility to eye infections",
            "Photophobia (light sensitivity)",
            "Eye pain",
            "Blurred vision",
            "In severe cases, corneal scarring and blindness",
            "Other symptoms of vitamin A deficiency (dry skin, poor growth)"
        ],
        diagnosis: [
            "Clinical eye examination",
            "Medical history and dietary assessment",
            "Serum vitamin A levels",
            "Conjunctival impression cytology",
            "Dark adaptation testing",
            "Slit-lamp examination",
            "Assessment for underlying conditions",
            "Evaluation for other nutritional deficiencies"
        ],
        treatment: [
            "Immediate vitamin A supplementation",
            "High-dose vitamin A for severe deficiency",
            "Dietary modifications to include vitamin A-rich foods",
            "Treatment of underlying conditions",
            "Artificial tears for symptom relief",
            "Antibiotics for secondary infections",
            "Protective eyewear",
            "Surgical intervention for severe corneal damage",
            "Nutritional counseling",
            "Regular follow-up"
        ],
        prevention: [
            "Adequate dietary intake of vitamin A",
            "Consumption of foods rich in vitamin A (liver, dairy, eggs, yellow/orange fruits, green leafy vegetables)",
            "Vitamin A supplementation in high-risk populations",
            "Breastfeeding of infants",
            "Treatment of conditions that affect nutrient absorption",
            "Regular eye examinations",
            "Public health programs in areas with high prevalence",
            "Food fortification programs",
            "Education about balanced nutrition"
        ]
    },
    {
        name: "X-ray Radiation Injury",
        description: "Damage to tissues and cells caused by exposure to X-ray radiation, which can occur from medical procedures, occupational exposure, or accidents involving radiological equipment.",
        causes: [
            "Excessive exposure to diagnostic X-rays",
            "Radiation therapy",
            "Occupational exposure (radiologists, technicians)",
            "Radiation accidents",
            "Improper shielding during X-ray procedures",
            "Cumulative exposure over time",
            "Equipment malfunction",
            "Nuclear disasters"
        ],
        symptoms: [
            "Acute radiation syndrome (high doses): nausea, vomiting, diarrhea, fatigue",
            "Skin changes: redness, blistering, peeling, ulceration",
            "Radiation burns",
            "Hair loss in exposed areas",
            "Decreased blood cell counts",
            "Increased susceptibility to infections",
            "Cataracts",
            "Sterility or reduced fertility",
            "Long-term: increased cancer risk",
            "Genetic mutations (potential effect on offspring)",
            "Tissue fibrosis and scarring",
            "Radiation pneumonitis (lung inflammation)"
        ],
        diagnosis: [
            "History of radiation exposure",
            "Physical examination",
            "Blood tests (complete blood count)",
            "Dosimetry (measuring radiation dose)",
            "Imaging studies",
            "Skin biopsy",
            "Chromosomal analysis",
            "Monitoring for long-term effects"
        ],
        treatment: [
            "Decontamination (for external contamination)",
            "Supportive care",
            "Treatment of symptoms",
            "Wound care for radiation burns",
            "Blood transfusions if needed",
            "Antibiotics for infections",
            "Growth factors to stimulate blood cell production",
            "Stem cell transplantation (severe cases)",
            "Long-term monitoring for cancer and other effects",
            "Psychological support"
        ],
        prevention: [
            "Following safety protocols for radiation procedures",
            "Proper shielding during X-ray procedures",
            "Limiting unnecessary X-ray examinations",
            "Using the lowest effective radiation dose",
            "Regular maintenance of radiological equipment",
            "Proper training for radiation workers",
            "Radiation badges to monitor exposure",
            "Regular health monitoring for radiation workers",
            "Adherence to occupational exposure limits",
            "Alternative imaging when appropriate (ultrasound, MRI)"
        ]
    }
];

// Function to integrate the entries directly into the healthConditions array
(function() {
    // Find the index of Xerostomia (the existing X entry)
    const xIndex = healthConditions.findIndex(c => c.name === "Xerostomia (Dry Mouth)");
    
    if (xIndex >= 0) {
        // Insert the new entries after Xerostomia
        healthConditions.splice(xIndex + 1, 0, ...xEntries);
        console.log("Successfully added X entries after Xerostomia (Dry Mouth)");
        
        // Force a refresh of the current view
        const activeButton = document.querySelector('.alphabet-btn.active');
        if (activeButton) {
            if (activeButton.textContent === 'All') {
                // If "All" is active, refresh all conditions
                displayAllConditions();
            } else if (activeButton.textContent === 'X') {
                // If "X" is active, refresh X conditions
                filterByLetter('X');
            }
        }
    } else {
        console.warn("Xerostomia (Dry Mouth) not found in health conditions");
    }
})();
