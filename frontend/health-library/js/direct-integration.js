// Direct integration script for J section entries

// J Section Entries to be added directly to the health-library.js file
const jEntries = [
    {
        name: "Jaundice",
        description: "A condition characterized by yellowing of the skin, whites of the eyes, and mucous membranes due to high levels of bilirubin in the blood.",
        causes: [
            "Liver disease (hepatitis, cirrhosis)",
            "Bile duct obstruction",
            "Excessive breakdown of red blood cells (hemolysis)",
            "Genetic disorders affecting bilirubin processing",
            "Certain medications",
            "Pancreatic cancer",
            "Newborn jaundice (physiological)"
        ],
        symptoms: [
            "Yellow discoloration of skin and eyes",
            "Dark urine",
            "Pale stools",
            "Itching",
            "Fatigue",
            "Abdominal pain",
            "Weight loss",
            "Nausea and vomiting",
            "Fever (if infection is present)"
        ],
        diagnosis: [
            "Physical examination",
            "Blood tests (liver function, bilirubin levels)",
            "Imaging tests (ultrasound, CT scan, MRI)",
            "Liver biopsy",
            "Endoscopic retrograde cholangiopancreatography (ERCP)"
        ],
        treatment: [
            "Treatment of underlying cause",
            "Medications to manage symptoms",
            "Phototherapy (for newborn jaundice)",
            "Surgery for bile duct obstruction",
            "Liver transplant (in severe cases)"
        ],
        prevention: [
            "Vaccination against hepatitis",
            "Avoiding excessive alcohol consumption",
            "Maintaining a healthy weight",
            "Safe food and water practices",
            "Avoiding high-risk behaviors for viral hepatitis"
        ]
    },
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

// Function to integrate the entries directly into the healthConditions array
// We'll do this by modifying the original array instead of trying to reinitialize the UI
(function() {
    // Find the index of Joint Pain (the existing J entry)
    const jIndex = healthConditions.findIndex(c => c.name === "Joint Pain");
    
    if (jIndex >= 0) {
        // Insert the new entries after Joint Pain
        healthConditions.splice(jIndex + 1, 0, ...jEntries);
        console.log("Successfully added J entries after Joint Pain");
        
        // Force a refresh of the current view
        const activeButton = document.querySelector('.alphabet-btn.active');
        if (activeButton) {
            if (activeButton.textContent === 'All') {
                // If "All" is active, refresh all conditions
                displayAllConditions();
            } else if (activeButton.textContent === 'J') {
                // If "J" is active, refresh J conditions
                filterByLetter('J');
            }
        }
    } else {
        console.warn("Joint Pain not found in health conditions");
    }
})();
