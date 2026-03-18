// Direct integration script for Z section entries

// Z Section Entries to be added directly to the health-library.js file
const zEntries = [
    {
        name: "Zinc Deficiency",
        description: "A condition that occurs when the body doesn't have enough zinc, an essential trace element that plays a vital role in immune function, protein synthesis, wound healing, DNA synthesis, and cell division.",
        causes: [
            "Inadequate dietary intake",
            "Malabsorption disorders (Crohn's disease, celiac disease)",
            "Alcoholism",
            "Chronic kidney disease",
            "Chronic liver disease",
            "Sickle cell disease",
            "Diabetes",
            "Vegetarian or vegan diet without proper planning",
            "Excessive sweating",
            "Certain medications (diuretics, ACE inhibitors)",
            "Aging",
            "Pregnancy and lactation without supplementation"
        ],
        symptoms: [
            "Impaired immune function and frequent infections",
            "Delayed wound healing",
            "Loss of appetite",
            "Diarrhea",
            "Hair loss",
            "Skin lesions and rashes",
            "Changes in taste and smell",
            "Night blindness",
            "Growth retardation in children",
            "Delayed sexual maturation",
            "Hypogonadism in males",
            "Mental lethargy",
            "White spots on fingernails"
        ],
        diagnosis: [
            "Blood tests (serum zinc levels)",
            "Clinical evaluation of symptoms",
            "Medical history",
            "Dietary assessment",
            "Testing for underlying conditions",
            "Hair analysis (less reliable)",
            "Response to supplementation"
        ],
        treatment: [
            "Zinc supplements (oral or intravenous)",
            "Dietary modifications to include zinc-rich foods",
            "Treatment of underlying conditions",
            "Multivitamin/mineral supplements",
            "Regular monitoring of zinc levels during treatment",
            "Adjusting medication regimens that may affect zinc levels",
            "Nutritional counseling"
        ],
        prevention: [
            "Balanced diet including zinc-rich foods (meat, shellfish, legumes, nuts, seeds)",
            "Zinc supplements for high-risk groups",
            "Proper food preparation to preserve zinc content",
            "Zinc fortification of foods in areas with high deficiency rates",
            "Regular health check-ups",
            "Addressing malabsorption issues",
            "Limiting alcohol consumption",
            "Proper supplementation during pregnancy and lactation"
        ]
    },
    {
        name: "Zenker's Diverticulum",
        description: "A pouch that forms in the upper esophagus, typically in older adults, causing difficulty swallowing, regurgitation of undigested food, bad breath, and other symptoms.",
        causes: [
            "Increased pressure in the esophagus",
            "Dysfunction of the cricopharyngeal muscle",
            "Aging (most common in people over 70)",
            "Abnormal coordination of swallowing muscles",
            "Structural abnormalities",
            "Chronic inflammation",
            "Neurological disorders affecting swallowing",
            "More common in males"
        ],
        symptoms: [
            "Difficulty swallowing (dysphagia)",
            "Regurgitation of undigested food (sometimes hours after eating)",
            "Bad breath (halitosis)",
            "Coughing, especially when lying down",
            "Sensation of food stuck in the throat",
            "Gurgling sounds from the neck when swallowing",
            "Weight loss",
            "Aspiration pneumonia (complication)",
            "Choking episodes",
            "Neck swelling or lump sensation"
        ],
        diagnosis: [
            "Barium swallow (esophagram)",
            "Endoscopy (with caution due to perforation risk)",
            "Videofluoroscopic swallowing study",
            "Manometry (measures pressure in the esophagus)",
            "CT scan or MRI (in some cases)",
            "Physical examination",
            "Medical history"
        ],
        treatment: [
            "Endoscopic diverticulotomy (cutting the muscle between the diverticulum and esophagus)",
            "Open surgical diverticulectomy (removal of the pouch)",
            "Diverticulopexy (suspending the pouch)",
            "Cricopharyngeal myotomy (cutting the muscle that fails to relax)",
            "Dietary modifications (soft foods, small bites)",
            "Proper positioning during eating",
            "Treatment of complications (aspiration pneumonia)",
            "Botulinum toxin injection (temporary relief)"
        ],
        prevention: [
            "No specific prevention known",
            "Early treatment of swallowing disorders",
            "Proper management of neurological conditions affecting swallowing",
            "Regular medical check-ups for those with risk factors",
            "Swallowing therapy for those with dysphagia",
            "Avoiding foods that cause difficulty"
        ]
    },
    {
        name: "Zollinger-Ellison Syndrome",
        description: "A rare condition where tumors called gastrinomas form in the pancreas or duodenum, secreting excessive gastrin that causes the stomach to produce too much acid, leading to severe peptic ulcers and digestive problems.",
        causes: [
            "Gastrinoma tumors (usually in pancreas or duodenum)",
            "Excessive gastrin hormone production",
            "Multiple Endocrine Neoplasia type 1 (MEN1) genetic syndrome (in 25% of cases)",
            "Genetic factors",
            "Sporadic (non-inherited) mutations",
            "Unknown causes in many cases"
        ],
        symptoms: [
            "Abdominal pain",
            "Diarrhea (often severe and chronic)",
            "Heartburn and acid reflux",
            "Peptic ulcers (often multiple, resistant to treatment)",
            "Nausea and vomiting",
            "Bleeding in digestive tract",
            "Weight loss",
            "Fatty stool (steatorrhea)",
            "GERD symptoms",
            "Perforation of the intestinal lining (in severe cases)"
        ],
        diagnosis: [
            "Blood tests for gastrin levels",
            "Secretin stimulation test",
            "Endoscopy",
            "Endoscopic ultrasound",
            "CT scan or MRI",
            "Somatostatin receptor scintigraphy (Octreoscan)",
            "Gastric acid secretion tests",
            "Genetic testing for MEN1",
            "PET scan"
        ],
        treatment: [
            "Proton pump inhibitors (high doses)",
            "H2 receptor antagonists",
            "Surgical removal of tumors",
            "Treatment of metastatic disease (if present)",
            "Chemotherapy for malignant tumors",
            "Somatostatin analogs",
            "Liver-directed therapies for metastases",
            "Regular monitoring and follow-up",
            "Management of complications",
            "Genetic counseling for MEN1 cases"
        ],
        prevention: [
            "No known prevention",
            "Genetic counseling for families with MEN1",
            "Regular screening for those with MEN1",
            "Early detection and treatment",
            "Regular follow-up to detect recurrence",
            "Monitoring family members of affected individuals"
        ]
    },
    {
        name: "Zoon's Balanitis",
        description: "A rare, benign inflammatory condition affecting the glans penis (head of the penis) and sometimes the foreskin, characterized by a persistent red, shiny patch that doesn't respond to typical treatments.",
        causes: [
            "Chronic irritation",
            "Poor hygiene",
            "Heat",
            "Friction",
            "Retained smegma under foreskin",
            "Bacterial or fungal colonization",
            "Autoimmune reaction",
            "Unknown factors (idiopathic in many cases)",
            "More common in uncircumcised men",
            "More common in middle-aged and older men"
        ],
        symptoms: [
            "Well-defined, shiny, reddish-orange patches on the glans penis",
            "Lesions may have a moist, eroded appearance",
            "Usually asymptomatic or mildly uncomfortable",
            "Occasional itching or burning sensation",
            "Tenderness",
            "Discharge (in some cases)",
            "Lesions don't typically ulcerate",
            "Persistent for months to years",
            "Resistant to standard treatments for balanitis"
        ],
        diagnosis: [
            "Clinical examination",
            "Medical history",
            "Skin biopsy (definitive diagnosis)",
            "Dermoscopy",
            "Ruling out other conditions (lichen planus, psoriasis, erythroplasia of Queyrat)",
            "Testing for infections",
            "Histopathological examination showing characteristic features"
        ],
        treatment: [
            "Improved hygiene",
            "Topical corticosteroids",
            "Topical calcineurin inhibitors (tacrolimus, pimecrolimus)",
            "Topical antibiotics if secondary infection present",
            "Photodynamic therapy",
            "Laser therapy (CO2 or erbium:YAG)",
            "Circumcision (often curative)",
            "Topical imiquimod",
            "Regular follow-up",
            "Avoidance of irritants"
        ],
        prevention: [
            "Good genital hygiene",
            "Regular cleaning under the foreskin",
            "Avoiding irritants and harsh soaps",
            "Keeping the area dry",
            "Circumcision (preventive in high-risk individuals)",
            "Treating underlying conditions",
            "Regular medical check-ups",
            "Early treatment of any penile inflammation"
        ]
    },
    {
        name: "Zoonotic Diseases",
        description: "Infectious diseases that can be transmitted from animals to humans, caused by viruses, bacteria, parasites, and fungi that normally exist in animals but can infect humans through various routes of transmission.",
        causes: [
            "Direct contact with infected animals",
            "Contact with animal bodily fluids or waste",
            "Vector-borne transmission (mosquitoes, ticks, fleas)",
            "Foodborne transmission (undercooked meat, unpasteurized milk)",
            "Waterborne transmission",
            "Airborne transmission",
            "Environmental contamination",
            "Occupational exposure (farmers, veterinarians)",
            "Pet ownership",
            "Travel to endemic areas"
        ],
        symptoms: [
            "Vary widely depending on the specific disease",
            "Fever",
            "Fatigue",
            "Muscle aches",
            "Headache",
            "Rash",
            "Respiratory symptoms",
            "Gastrointestinal symptoms (diarrhea, vomiting)",
            "Neurological symptoms (in some diseases)",
            "Organ-specific symptoms depending on the pathogen"
        ],
        diagnosis: [
            "Medical history including animal exposure",
            "Physical examination",
            "Blood tests",
            "Serological testing",
            "PCR testing",
            "Culture of bacteria or fungi",
            "Imaging studies",
            "Specific tests for suspected zoonoses",
            "Epidemiological investigation"
        ],
        treatment: [
            "Depends on the specific disease",
            "Antibiotics for bacterial zoonoses",
            "Antivirals for some viral infections",
            "Antiparasitic medications",
            "Supportive care",
            "Hospitalization for severe cases",
            "Wound care for animal bites",
            "Management of complications",
            "Public health measures to prevent spread"
        ],
        prevention: [
            "Hand hygiene after animal contact",
            "Proper food handling and cooking",
            "Pasteurization of dairy products",
            "Vector control (mosquito nets, repellents)",
            "Vaccination of pets and livestock",
            "Vaccination of humans for certain zoonoses",
            "Avoiding contact with wild animals",
            "Proper disposal of animal waste",
            "Protective equipment for high-risk occupations",
            "Public health surveillance and response",
            "Clean water supply"
        ]
    }
];

// Function to integrate the entries directly into the healthConditions array
(function() {
    // Find the index of Zika Virus Disease (the existing Z entry)
    const zIndex = healthConditions.findIndex(c => c.name === "Zika Virus Disease");
    
    if (zIndex >= 0) {
        // Insert the new entries after Zika Virus Disease
        healthConditions.splice(zIndex + 1, 0, ...zEntries);
        console.log("Successfully added Z entries after Zika Virus Disease");
        
        // Force a refresh of the current view
        const activeButton = document.querySelector('.alphabet-btn.active');
        if (activeButton) {
            if (activeButton.textContent === 'All') {
                // If "All" is active, refresh all conditions
                displayAllConditions();
            } else if (activeButton.textContent === 'Z') {
                // If "Z" is active, refresh Z conditions
                filterByLetter('Z');
            }
        }
    } else {
        console.warn("Zika Virus Disease not found in health conditions");
    }
})();
