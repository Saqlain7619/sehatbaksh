// New health condition entries to be added to the health-library.js file

// J Section Entries (to be added after Jaundice)
const jSectionEntries = [
    {
        name: "Juvenile Idiopathic Arthritis",
        description: "The most common type of arthritis in children, causing joint pain, swelling, and stiffness that can affect growth and development.",
        causes: [
            "Autoimmune reaction",
            "Genetic factors",
            "Environmental triggers",
            "Abnormal immune system response"
        ],
        symptoms: [
            "Joint pain and swelling",
            "Joint stiffness, especially in the morning",
            "Fever",
            "Rash",
            "Fatigue",
            "Growth problems",
            "Eye inflammation (uveitis)"
        ],
        diagnosis: [
            "Physical examination",
            "Blood tests",
            "Imaging tests (X-rays, MRI)",
            "Eye examination",
            "Ruling out other conditions"
        ],
        treatment: [
            "Nonsteroidal anti-inflammatory drugs (NSAIDs)",
            "Disease-modifying antirheumatic drugs (DMARDs)",
            "Biologic agents",
            "Corticosteroids",
            "Physical therapy",
            "Occupational therapy",
            "Regular eye examinations"
        ],
        prevention: [
            "No known prevention",
            "Early diagnosis and treatment",
            "Regular medical follow-up",
            "Maintaining physical activity",
            "Balanced nutrition"
        ]
    },
    {
        name: "Joint Dislocation",
        description: "A condition where bones are forced out of their normal positions at a joint, causing pain, immobility, and potential damage to surrounding tissues.",
        causes: [
            "Trauma or injury",
            "Sports accidents",
            "Falls",
            "Car accidents",
            "Congenital joint abnormalities",
            "Hypermobility syndromes"
        ],
        symptoms: [
            "Visible deformity of the joint",
            "Severe pain",
            "Swelling",
            "Inability to move the joint",
            "Numbness or tingling",
            "Muscle spasms",
            "Bruising"
        ],
        diagnosis: [
            "Physical examination",
            "X-rays",
            "CT scan",
            "MRI",
            "Arthrogram"
        ],
        treatment: [
            "Reduction (repositioning the joint)",
            "Immobilization with splint or sling",
            "Pain management",
            "Physical therapy",
            "Surgery (for severe cases or recurrent dislocations)"
        ],
        prevention: [
            "Strengthening exercises",
            "Proper sports technique",
            "Protective equipment during sports",
            "Fall prevention measures",
            "Treatment of underlying conditions"
        ]
    },
    {
        name: "Juvenile Diabetes (Type 1 Diabetes)",
        description: "An autoimmune condition where the pancreas produces little or no insulin, typically diagnosed in children and young adults.",
        causes: [
            "Autoimmune reaction",
            "Genetic factors",
            "Environmental triggers",
            "Viral infections (possibly)"
        ],
        symptoms: [
            "Increased thirst",
            "Frequent urination",
            "Extreme hunger",
            "Unintended weight loss",
            "Fatigue",
            "Irritability",
            "Blurred vision",
            "Fruity-smelling breath",
            "Nausea and vomiting"
        ],
        diagnosis: [
            "Blood sugar test",
            "Glycated hemoglobin (A1C) test",
            "Autoantibody tests",
            "Urine tests",
            "Ketone testing"
        ],
        treatment: [
            "Insulin therapy",
            "Blood sugar monitoring",
            "Healthy eating",
            "Regular physical activity",
            "Carbohydrate counting",
            "Continuous glucose monitoring",
            "Insulin pump therapy"
        ],
        prevention: [
            "No known prevention",
            "Regular monitoring",
            "Maintaining healthy lifestyle",
            "Diabetes education"
        ]
    },
    {
        name: "Jet Lag",
        description: "A temporary sleep disorder that occurs when traveling across multiple time zones, causing a mismatch between your internal clock and the local time.",
        causes: [
            "Rapid travel across multiple time zones",
            "Disruption of circadian rhythms",
            "Changes in light exposure",
            "Changes in meal times",
            "Dehydration during travel",
            "Stress of travel"
        ],
        symptoms: [
            "Disturbed sleep",
            "Daytime fatigue",
            "Difficulty concentrating",
            "Mood changes",
            "Gastrointestinal problems",
            "General feeling of unwellness",
            "Headaches",
            "Mild dehydration"
        ],
        diagnosis: [
            "Clinical evaluation",
            "Travel history",
            "Sleep pattern assessment",
            "Ruling out other sleep disorders"
        ],
        treatment: [
            "Adjusting to new time zone",
            "Light therapy",
            "Melatonin supplements",
            "Short-term sleep aids",
            "Staying hydrated",
            "Maintaining proper sleep hygiene"
        ],
        prevention: [
            "Gradually adjust sleep schedule before travel",
            "Stay hydrated during flight",
            "Avoid alcohol and caffeine during travel",
            "Adapt to local schedule immediately upon arrival",
            "Spend time outdoors in natural light",
            "Short naps if needed"
        ]
    },
    {
        name: "Jock Itch (Tinea Cruris)",
        description: "A fungal infection that affects the skin of the genitals, inner thighs, and buttocks, causing a red, itchy rash.",
        causes: [
            "Dermatophyte fungi",
            "Warm, moist environment",
            "Tight clothing",
            "Sweating",
            "Sharing towels or clothing",
            "Prolonged wetness",
            "Contact with infected person or surface"
        ],
        symptoms: [
            "Red, raised, itchy rash",
            "Burning sensation",
            "Flaking, peeling, or cracking skin",
            "Redness in groin and thigh area",
            "Abnormal skin color",
            "Change in skin texture"
        ],
        diagnosis: [
            "Visual examination",
            "Skin scraping and microscopic examination",
            "Fungal culture",
            "Wood's lamp examination"
        ],
        treatment: [
            "Antifungal creams, ointments, or powders",
            "Oral antifungal medications (for severe cases)",
            "Keeping the affected area clean and dry",
            "Loose-fitting clothing",
            "Changing clothes and underwear daily"
        ],
        prevention: [
            "Keep groin area clean and dry",
            "Wear loose-fitting cotton underwear",
            "Change clothes after sweating",
            "Don't share personal items",
            "Treat other fungal infections promptly",
            "Use antifungal powders during hot weather or sports"
        ]
    },
    {
        name: "Jaw Disorders (TMJ Disorders)",
        description: "A group of conditions affecting the temporomandibular joint (TMJ), which connects your jawbone to your skull, causing pain and dysfunction in the jaw joint and muscles.",
        causes: [
            "Jaw injury",
            "Arthritis",
            "Teeth grinding or clenching",
            "Stress and anxiety",
            "Malocclusion (improper bite)",
            "Connective tissue diseases",
            "Jaw joint erosion or misalignment"
        ],
        symptoms: [
            "Jaw pain or tenderness",
            "Pain around the ear",
            "Difficulty or pain while chewing",
            "Facial pain",
            "Clicking or popping sounds in jaw joint",
            "Locking of the jaw",
            "Headaches",
            "Dizziness",
            "Earaches or hearing problems"
        ],
        diagnosis: [
            "Physical examination",
            "Dental examination",
            "X-rays",
            "CT scan",
            "MRI",
            "TMJ arthroscopy"
        ],
        treatment: [
            "Pain relievers and anti-inflammatories",
            "Muscle relaxants",
            "Oral splints or mouth guards",
            "Physical therapy",
            "Counseling for stress management",
            "Corrective dental treatments",
            "Surgery (in severe cases)"
        ],
        prevention: [
            "Avoid extreme jaw movements",
            "Don't clench or grind teeth",
            "Use stress-reduction techniques",
            "Maintain good posture",
            "Use proper ergonomics",
            "Eat soft foods when experiencing symptoms"
        ]
    },
    {
        name: "Japanese Encephalitis",
        description: "A mosquito-borne viral infection that can cause inflammation of the brain, leading to severe complications and death in some cases.",
        causes: [
            "Japanese encephalitis virus",
            "Transmission through mosquito bites",
            "Exposure in rural areas with rice fields and pig farms",
            "Travel to endemic regions in Asia"
        ],
        symptoms: [
            "Most infections are asymptomatic",
            "Fever",
            "Headache",
            "Vomiting",
            "Confusion",
            "Difficulty moving",
            "Seizures",
            "Coma",
            "Neurological symptoms"
        ],
        diagnosis: [
            "Blood tests",
            "Cerebrospinal fluid analysis",
            "MRI of the brain",
            "Electroencephalogram (EEG)",
            "Virus-specific antibody detection"
        ],
        treatment: [
            "No specific antiviral treatment",
            "Supportive care",
            "Fluids and nutrition",
            "Medication for symptom relief",
            "Respiratory support if needed",
            "Anticonvulsants for seizures"
        ],
        prevention: [
            "Vaccination",
            "Mosquito control measures",
            "Use of insect repellent",
            "Wearing long-sleeved clothing",
            "Bed nets",
            "Avoiding outdoor activities during peak mosquito times"
        ]
    }
];

// K Section Entries (to be added after Kidney Stones)
const kSectionEntries = [
    {
        name: "Kawasaki Disease",
        description: "A rare condition that causes inflammation in the walls of blood vessels throughout the body, primarily affecting children under 5 years of age.",
        causes: [
            "Unknown exact cause",
            "Possible infectious trigger",
            "Genetic predisposition",
            "Abnormal immune response"
        ],
        symptoms: [
            "High fever lasting at least 5 days",
            "Rash on the main part of the body and in the genital area",
            "Red, swollen hands and feet",
            "Red eyes (conjunctivitis)",
            "Swollen, red, cracked lips and strawberry-like tongue",
            "Swollen lymph nodes in the neck",
            "Irritability"
        ],
        diagnosis: [
            "Clinical criteria (based on symptoms)",
            "Blood tests",
            "Urine tests",
            "Echocardiogram",
            "Electrocardiogram"
        ],
        treatment: [
            "Intravenous immunoglobulin (IVIG)",
            "Aspirin therapy",
            "Corticosteroids (in some cases)",
            "Cardiac monitoring",
            "Follow-up echocardiograms"
        ],
        prevention: [
            "No known prevention",
            "Early diagnosis and treatment to prevent complications",
            "Regular cardiac follow-up"
        ]
    },
    {
        name: "Klinefelter Syndrome",
        description: "A genetic condition that affects males who are born with an extra X chromosome, resulting in lower testosterone production and reduced fertility.",
        causes: [
            "Genetic abnormality (XXY chromosomes instead of XY)",
            "Random genetic error during formation of reproductive cells"
        ],
        symptoms: [
            "Taller than average height",
            "Longer legs, shorter torso",
            "Less muscle mass",
            "Less facial and body hair",
            "Broader hips",
            "Enlarged breast tissue (gynecomastia)",
            "Small testicles",
            "Infertility",
            "Learning disabilities"
        ],
        diagnosis: [
            "Physical examination",
            "Hormone testing",
            "Chromosome analysis (karyotype)",
            "Semen analysis"
        ],
        treatment: [
            "Testosterone replacement therapy",
            "Breast tissue removal (if needed)",
            "Fertility treatments",
            "Educational support",
            "Psychological counseling",
            "Speech and physical therapy"
        ],
        prevention: [
            "Not preventable (genetic condition)",
            "Genetic counseling for families"
        ]
    }
];

// L Section Entries (to be added after Lupus)
const lSectionEntries = [
    {
        name: "Leukemia",
        description: "A cancer of blood-forming tissues, including bone marrow, that hinders the body's ability to fight infection and produces abnormal white blood cells.",
        causes: [
            "Genetic mutations",
            "Exposure to high levels of radiation",
            "Exposure to certain chemicals (like benzene)",
            "Previous cancer treatment",
            "Certain genetic disorders",
            "Smoking"
        ],
        symptoms: [
            "Fatigue and weakness",
            "Frequent infections",
            "Easy bleeding or bruising",
            "Fever or chills",
            "Persistent, unexplained weight loss",
            "Swollen lymph nodes",
            "Enlarged liver or spleen",
            "Bone pain or tenderness",
            "Excessive sweating, especially at night"
        ],
        diagnosis: [
            "Blood tests",
            "Bone marrow biopsy",
            "Lumbar puncture (spinal tap)",
            "Imaging tests (CT, MRI)",
            "Genetic testing"
        ],
        treatment: [
            "Chemotherapy",
            "Radiation therapy",
            "Stem cell transplant",
            "Targeted drug therapy",
            "Immunotherapy",
            "CAR-T cell therapy",
            "Supportive care"
        ],
        prevention: [
            "Avoid exposure to high levels of radiation",
            "Avoid exposure to benzene and other chemicals",
            "Quit smoking",
            "Maintain a healthy lifestyle"
        ]
    },
    {
        name: "Liver Cirrhosis",
        description: "A late-stage liver disease in which healthy liver tissue is replaced with scar tissue, preventing the liver from functioning properly.",
        causes: [
            "Chronic alcohol abuse",
            "Chronic viral hepatitis (B and C)",
            "Nonalcoholic fatty liver disease",
            "Autoimmune hepatitis",
            "Inherited disorders",
            "Biliary diseases",
            "Medications",
            "Toxic exposures"
        ],
        symptoms: [
            "Fatigue",
            "Easy bruising and bleeding",
            "Jaundice (yellowing of skin and eyes)",
            "Fluid accumulation in the abdomen (ascites)",
            "Swelling in the legs",
            "Confusion, drowsiness, slurred speech",
            "Spider-like blood vessels on the skin",
            "Redness in the palms",
            "Itchy skin"
        ],
        diagnosis: [
            "Blood tests",
            "Imaging tests (ultrasound, CT, MRI)",
            "Liver biopsy",
            "Elastography",
            "Endoscopy"
        ],
        treatment: [
            "Treatment of underlying cause",
            "Medications to control symptoms",
            "Lifestyle changes",
            "Avoiding alcohol",
            "Managing complications",
            "Liver transplant (in advanced cases)"
        ],
        prevention: [
            "Limit alcohol consumption",
            "Maintain a healthy weight",
            "Get vaccinated against hepatitis",
            "Practice safe sex",
            "Avoid sharing needles",
            "Use medications as prescribed",
            "Avoid exposure to toxins"
        ]
    }
];
