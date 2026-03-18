// Disease Database with English translations
const diseaseDatabase = {
    "Tuberculosis": {
        symptoms: ["Cough", "Coughing up blood", "Chest pain", "Weakness", "Weight loss", "Night sweats", "Fever", "Loss of appetite", "Persistent cough for weeks", "Fatigue", "Chills", "Breathing difficulty", "Chest discomfort", "Phlegm production", "Reduced lung function", "Enlarged lymph nodes"],
        treatments: ["Antibiotics (typically 6-9 months)", "Directly Observed Treatment (DOT)", "Regular monitoring of liver function", "Complete course of medication", "Isolation during infectious period", "Nutritional support"],
        severity: "Severe"
    },
    "Pneumonia": {
        symptoms: ["Cough with phlegm", "High fever", "Difficulty breathing", "Chest pain", "Fatigue", "Rapid breathing", "Confusion (in elderly)", "Bluish lips or nails", "Shaking chills", "Excessive sweating", "Headache", "Loss of appetite", "Sharp chest pain when breathing deeply", "Coughing up yellow or green mucus", "Shortness of breath even at rest", "Muscle aches"],
        treatments: ["Antibiotics", "Rest", "Fluids", "Oxygen therapy (if needed)", "Hospitalization for severe cases", "Pain relievers", "Fever reducers"],
        severity: "Moderate"
    },
    "Asthma": {
        symptoms: ["Wheezing", "Shortness of breath", "Chest tightness", "Coughing", "Difficulty sleeping due to breathing problems", "Fatigue", "Anxiety", "Coughing attacks at night", "Wheezing when exhaling", "Breathing problems during exercise", "Worsening symptoms with respiratory infections", "Breathing difficulty when exposed to allergens", "Rapid breathing", "Shallow breathing", "Trouble speaking due to shortness of breath"],
        treatments: ["Inhaled corticosteroids", "Bronchodilators", "Leukotriene modifiers", "Avoiding triggers", "Regular check-ups", "Asthma action plan", "Breathing exercises"],
        severity: "Moderate"
    },
    "Diabetes": {
        symptoms: ["Frequent urination", "Excessive thirst", "Unexplained weight loss", "Extreme hunger", "Blurred vision", "Fatigue", "Slow-healing sores", "Frequent infections", "Tingling in hands or feet", "Dry mouth", "Itchy skin", "Irritability", "Yeast infections", "Nausea and vomiting", "Sweet-smelling breath", "Darkened skin patches"],
        treatments: ["Insulin therapy", "Blood sugar monitoring", "Healthy diet", "Regular exercise", "Oral medications", "Regular check-ups", "Foot care"],
        severity: "Severe"
    },
    "Hypertension": {
        symptoms: ["Headaches", "Shortness of breath", "Nosebleeds", "Chest pain", "Dizziness", "Visual changes", "Often asymptomatic", "Morning headaches", "Irregular heartbeat", "Blood in urine", "Pounding in chest or ears", "Fatigue", "Confusion", "Vision problems", "Difficulty breathing", "Facial flushing"],
        treatments: ["Blood pressure medications", "Low-sodium diet", "Regular exercise", "Weight management", "Stress reduction", "Limiting alcohol", "Regular monitoring"],
        severity: "Moderate"
    },
    "Malaria": {
        symptoms: ["High fever", "Chills", "Sweating", "Headache", "Nausea", "Vomiting", "Muscle pain", "Fatigue", "Cyclical fever patterns", "Abdominal pain", "Diarrhea", "Cough", "Rapid breathing", "Rapid heart rate", "Jaundice", "Enlarged spleen", "Confusion", "Seizures in severe cases"],
        treatments: ["Antimalarial medications", "Supportive care", "Fluids", "Rest", "Fever reducers", "Prevention measures"],
        severity: "Severe"
    },
    "Dengue Fever": {
        symptoms: ["High fever", "Severe headache", "Pain behind the eyes", "Joint and muscle pain", "Rash", "Mild bleeding", "Easy bruising", "Fatigue", "Nausea", "Vomiting", "Swollen glands", "Bone pain", "Severe abdominal pain", "Persistent vomiting", "Rapid breathing", "Blood in vomit or stool", "Restlessness", "Cold or clammy skin"],
        treatments: ["Pain relievers (avoiding aspirin)", "Fluids", "Rest", "Hospital care for severe cases", "Monitoring of blood pressure", "Blood transfusions (if needed)"],
        severity: "Severe"
    },
    "Urinary Tract Infection": {
        symptoms: ["Burning sensation during urination", "Frequent urination", "Cloudy or strong-smelling urine", "Pelvic pain", "Pressure in lower abdomen", "Low-grade fever", "Fatigue", "Blood in urine", "Persistent urge to urinate", "Passing small amounts of urine", "Discomfort in lower abdomen", "Pain during sexual intercourse", "Cramping in lower abdomen", "Urine that appears red, bright pink or cola-colored", "Confusion or delirium in elderly patients"],
        treatments: ["Antibiotics", "Pain relievers", "Increased fluid intake", "Avoiding irritants", "Cranberry products", "Probiotics"],
        severity: "Moderate"
    },
    "Migraine": {
        symptoms: ["Severe headache", "Throbbing pain", "Sensitivity to light", "Sensitivity to sound", "Nausea", "Vomiting", "Visual disturbances", "Dizziness", "Aura (visual phenomena)", "Tingling or numbness in face or extremities", "Difficulty speaking", "Pain on one side of head", "Pulsating pain", "Pain worsening with physical activity", "Neck stiffness", "Blind spots in vision", "Seeing flashing lights or zigzag patterns", "Food cravings before migraine", "Mood changes before migraine"],
        treatments: ["Pain relievers", "Triptans", "Anti-nausea medications", "Preventive medications", "Rest in dark room", "Cold compresses", "Avoiding triggers"],
        severity: "Moderate"
    },
    "Arthritis": {
        symptoms: ["Joint pain", "Stiffness", "Swelling", "Redness", "Decreased range of motion", "Fatigue", "Joint deformity (in severe cases)", "Morning stiffness", "Joint tenderness", "Joint warmth", "Grinding sensation", "Bone spurs", "Symmetrical joint involvement", "Fever in some types", "Weight loss in some types", "Anemia in some types", "Multiple joint involvement", "Joint locking", "Muscle weakness around affected joints"],
        treatments: ["Pain relievers", "Anti-inflammatory drugs", "Physical therapy", "Exercise", "Heat and cold therapy", "Joint protection", "Surgery (in severe cases)"],
        severity: "Moderate"
    },
    "Anemia": {
        symptoms: ["Fatigue", "Weakness", "Pale skin", "Shortness of breath", "Dizziness", "Cold hands and feet", "Headaches", "Irregular heartbeat", "Chest pain", "Brittle nails", "Pica (craving non-food items)", "Poor concentration", "Leg cramps", "Insomnia", "Lightheadedness", "Pale gums and eyelids", "Restless legs syndrome", "Increased susceptibility to infections"],
        treatments: ["Iron supplements", "Vitamin B12 supplements", "Folic acid", "Dietary changes", "Blood transfusions (in severe cases)", "Treating underlying causes"],
        severity: "Moderate"
    },
    "Hypothyroidism": {
        symptoms: ["Fatigue", "Weight gain", "Cold sensitivity", "Dry skin", "Constipation", "Muscle weakness", "Joint pain", "Depression", "Puffy face", "Hoarse voice", "Elevated cholesterol", "Muscle cramps", "Thinning hair", "Slowed heart rate", "Impaired memory", "Enlarged thyroid gland (goiter)", "Heavy or irregular menstrual periods", "Brittle nails", "Decreased sweating"],
        treatments: ["Thyroid hormone replacement", "Regular monitoring of thyroid levels", "Dietary adjustments", "Exercise", "Supplements (if needed)"],
        severity: "Moderate"
    },
    "Bronchitis": {
        symptoms: ["Persistent cough", "Production of mucus", "Shortness of breath", "Chest discomfort", "Mild fever", "Fatigue", "Wheezing", "Sore throat", "Nasal congestion", "Body aches", "Chills", "Chest tightness", "Coughing up discolored mucus", "Low-grade fever", "Difficulty sleeping due to coughing", "Rattling sound in lungs"],
        treatments: ["Rest", "Increased fluid intake", "Humidifier", "Over-the-counter pain relievers", "Cough suppressants", "Antibiotics (if bacterial)"],
        severity: "Moderate"
    },
    "Gastritis": {
        symptoms: ["Abdominal pain", "Nausea", "Vomiting", "Bloating", "Indigestion", "Loss of appetite", "Black stools (if bleeding)", "Burning sensation in stomach", "Hiccups", "Feeling of fullness", "Belching", "Heartburn", "Unintentional weight loss", "Abdominal tenderness when touched", "Vomiting blood", "Erosive damage to stomach lining"],
        treatments: ["Antacids", "Proton pump inhibitors", "H2 blockers", "Antibiotics (if H. pylori present)", "Avoiding irritants", "Dietary changes"],
        severity: "Moderate"
    },
    "Sinusitis": {
        symptoms: ["Facial pain", "Nasal congestion", "Thick nasal discharge", "Reduced sense of smell", "Cough", "Fatigue", "Headache", "Sore throat", "Fever", "Bad breath", "Dental pain", "Pain when bending forward", "Ear pressure", "Post-nasal drip", "Facial tenderness", "Pain between eyes", "Swelling around eyes"],
        treatments: ["Nasal corticosteroids", "Saline nasal irrigation", "Decongestants", "Pain relievers", "Antibiotics (if bacterial)", "Humidifier"],
        severity: "Mild"
    },
    "Eczema": {
        symptoms: ["Dry, itchy skin", "Red rashes", "Scaly patches", "Small bumps", "Thickened skin", "Sensitive skin", "Intense itching", "Cracked skin", "Raw skin from scratching", "Blisters", "Skin color changes", "Oozing or crusting", "Swelling", "Burning sensation", "Worse symptoms at night", "Patches on hands, feet, ankles, wrists, neck, upper chest"],
        treatments: ["Moisturizers", "Topical corticosteroids", "Antihistamines", "Avoiding triggers", "Wet wraps", "Phototherapy", "Immunosuppressants (severe cases)"],
        severity: "Mild"
    },
    "Psoriasis": {
        symptoms: ["Red patches of skin", "Silvery scales", "Dry, cracked skin", "Itching", "Burning sensation", "Thickened nails", "Joint pain (in psoriatic arthritis)", "Soreness around patches", "Bleeding when scales are removed", "Nail pitting", "Nail separation", "Scaly scalp", "Genital lesions", "Small scaling spots (guttate psoriasis)", "Smooth red patches in body folds", "Widespread redness and exfoliation in severe cases"],
        treatments: ["Topical corticosteroids", "Vitamin D analogues", "Retinoids", "Light therapy", "Oral medications", "Biologics", "Lifestyle modifications"],
        severity: "Moderate"
    },
    "Osteoporosis": {
        symptoms: ["Back pain", "Loss of height", "Stooped posture", "Bone fractures", "Often asymptomatic until fractures occur", "Receding gums", "Weakened grip strength", "Brittle fingernails", "Neck pain", "Reduced mobility", "Fractures from minor falls", "Compression fractures in spine", "Dowager's hump (kyphosis)", "Bone pain", "Easily broken bones"],
        treatments: ["Calcium and vitamin D supplements", "Bisphosphonates", "Hormone therapy", "Weight-bearing exercise", "Fall prevention", "Regular bone density tests"],
        severity: "Moderate"
    },
    "Kidney Stones": {
        symptoms: ["Severe pain in side and back", "Pain during urination", "Pink, red, or brown urine", "Cloudy or foul-smelling urine", "Nausea", "Vomiting", "Persistent urge to urinate", "Urinating more often than usual", "Urinating small amounts", "Fever and chills (if infection present)", "Pain radiating to lower abdomen and groin", "Fluctuating pain intensity", "Pain that comes in waves", "Restlessness", "Inability to find comfortable position"],
        treatments: ["Pain relievers", "Increased fluid intake", "Medical therapy to dissolve stones", "Sound wave therapy", "Surgery (for large stones)", "Dietary changes"],
        severity: "Moderate"
    },
    "Peptic Ulcer": {
        symptoms: ["Burning stomach pain", "Feeling of fullness", "Bloating", "Heartburn", "Nausea", "Intolerance to fatty foods", "Vomiting blood (severe cases)", "Abdominal pain that worsens when stomach is empty", "Pain that improves after eating or taking antacids", "Unexplained weight loss", "Appetite changes", "Dark blood in stools", "Tar-like stools", "Difficulty breathing", "Feeling faint", "Chest pain"],
        treatments: ["Antibiotics (if H. pylori present)", "Proton pump inhibitors", "Acid blockers", "Antacids", "Avoiding irritants", "Stress management"],
        severity: "Moderate"
    },
    "Glaucoma": {
        symptoms: ["Gradual loss of peripheral vision", "Eye pain", "Blurred vision", "Halos around lights", "Redness of eye", "Nausea (in acute cases)", "Often asymptomatic in early stages", "Severe headache (in acute cases)", "Vomiting (in acute cases)", "Tunnel vision in advanced stages", "Patchy blind spots", "Eye pressure", "Difficulty adjusting to dark rooms", "Seeing rainbow-colored circles around bright lights", "Vision loss", "Hazy vision"],
        treatments: ["Eye drops to reduce pressure", "Oral medications", "Laser treatment", "Surgery", "Regular eye exams", "Vision rehabilitation"],
        severity: "Severe"
    },
    "Cataracts": {
        symptoms: ["Cloudy or blurry vision", "Faded colors", "Glare and halos around lights", "Poor night vision", "Double vision", "Frequent prescription changes", "Difficulty reading", "Sensitivity to light", "Seeing 'halos' around lights", "Need for brighter light for reading", "Yellowing of colors", "Temporary improvement in near vision (second sight)", "Distorted vision", "Film over the eye", "Changes in color perception"],
        treatments: ["Surgery to remove cataracts", "New eyeglasses", "Anti-glare sunglasses", "Brighter lighting", "Magnifying lenses"],
        severity: "Moderate"
    },
    "Alzheimer's Disease": {
        symptoms: ["Memory loss", "Confusion", "Difficulty with familiar tasks", "Language problems", "Disorientation", "Mood changes", "Withdrawal from social activities", "Poor judgment", "Difficulty concentrating", "Personality changes", "Paranoia", "Agitation", "Wandering", "Repetitive behavior", "Sleep disturbances", "Difficulty recognizing family and friends", "Loss of impulse control", "Inability to learn new things", "Hallucinations in later stages", "Difficulty with spatial relationships"],
        treatments: ["Cholinesterase inhibitors", "Memantine", "Behavioral management", "Occupational therapy", "Physical exercise", "Cognitive stimulation", "Caregiver support"],
        severity: "Severe"
    },
    "Parkinson's Disease": {
        symptoms: ["Tremor", "Slowed movement", "Rigid muscles", "Impaired posture and balance", "Loss of automatic movements", "Speech changes", "Writing changes", "Masked face (reduced facial expressions)", "Shuffling gait", "Stooped posture", "Freezing (temporary inability to move)", "Small handwriting", "Soft or low voice", "Difficulty swallowing", "Sleep problems", "Constipation", "Depression", "Cognitive impairment in later stages"],
        treatments: ["Carbidopa-levodopa", "Dopamine agonists", "MAO-B inhibitors", "Physical therapy", "Speech therapy", "Deep brain stimulation", "Lifestyle modifications"],
        severity: "Severe"
    },
    "Multiple Sclerosis": {
        symptoms: ["Numbness or weakness in limbs", "Electric-shock sensations", "Tremor", "Lack of coordination", "Vision problems", "Fatigue", "Dizziness", "Slurred speech", "Double vision", "Partial or complete loss of vision", "Pain with eye movement", "Tingling or pain in parts of body", "Problems with sexual, bowel and bladder function", "Heat sensitivity", "Cognitive problems", "Depression", "Muscle spasms", "Balance problems", "Hearing loss"],
        treatments: ["Corticosteroids", "Disease-modifying therapies", "Physical therapy", "Occupational therapy", "Muscle relaxants", "Lifestyle modifications", "Mental health support"],
        severity: "Severe"
    },
    "Epilepsy": {
        symptoms: ["Temporary confusion", "Staring spells", "Uncontrollable jerking movements", "Loss of consciousness", "Fear or anxiety", "Cognitive symptoms", "Déjà vu", "Unusual smells or tastes", "Tingling sensation", "Falling suddenly", "Rigid muscles", "Convulsions", "Loss of bladder control", "Biting tongue", "Aura before seizures", "Altered awareness", "Memory gaps", "Fatigue after seizure", "Headache after seizure"],
        treatments: ["Anti-seizure medications", "Surgery", "Vagus nerve stimulation", "Ketogenic diet", "Responsive neurostimulation", "Avoiding triggers", "Regular medical follow-up"],
        severity: "Severe"
    },
    "Chronic Obstructive Pulmonary Disease": {
        symptoms: ["Shortness of breath", "Chronic cough", "Wheezing", "Chest tightness", "Frequent respiratory infections", "Fatigue", "Bluish lips or fingernails", "Weight loss", "Swelling in ankles, feet or legs", "Morning headaches", "Decreased exercise tolerance", "Coughing up mucus", "Barrel-shaped chest", "Need to clear throat in morning", "Difficulty taking deep breaths", "Increased shortness of breath during physical activities", "Recurrent respiratory infections", "Sleep problems"],
        treatments: ["Bronchodilators", "Inhaled steroids", "Oxygen therapy", "Pulmonary rehabilitation", "Lifestyle changes", "Surgery (in severe cases)", "Vaccination"],
        severity: "Severe"
    },
    "Heart Failure": {
        symptoms: ["Shortness of breath", "Fatigue", "Swelling in legs", "Rapid heartbeat", "Persistent cough", "Reduced ability to exercise", "Lack of appetite", "Confusion", "Swollen abdomen", "Weight gain from fluid retention", "Irregular heartbeat", "Wheezing", "Coughing up pink foamy mucus", "Difficulty concentrating", "Decreased alertness", "Nausea", "Chest pain if heart failure is caused by heart attack", "Need to urinate at night", "Swelling of the liver"],
        treatments: ["ACE inhibitors", "Beta blockers", "Diuretics", "Aldosterone antagonists", "Lifestyle changes", "Implantable devices", "Surgery (in some cases)"],
        severity: "Severe"
    },
    "Coronary Artery Disease": {
        symptoms: ["Chest pain (angina)", "Shortness of breath", "Pain in arms or shoulders", "Fatigue", "Dizziness", "Heart palpitations", "Nausea", "Sweating", "Pain in neck or jaw", "Numbness in arms or legs", "Anxiety", "Indigestion or heartburn", "Sleep disturbances", "Irregular heartbeat", "Weakness", "Cold sweats", "Pain that worsens with physical exertion", "Pain that improves with rest"],
        treatments: ["Medications to control symptoms", "Statins", "Blood thinners", "Angioplasty and stenting", "Coronary bypass surgery", "Lifestyle changes", "Cardiac rehabilitation"],
        severity: "Severe"
    }
};

// Updated symptom categories
const symptomCategories = {
    respiratory: [
        "Cough",
        "Shortness of breath",
        "Wheezing",
        "Chest tightness",
        "Pneumonia",
        "Asthma",
        "Chronic Obstructive Pulmonary Disease",
        "Persistent cough",
        "Coughing up blood",
        "Phlegm production",
        "Difficulty breathing",
        "Rapid breathing",
        "Chest discomfort",
        "Coughing attacks",
        "Breathing problems"
    ],
    cardiovascular: [
        "Chest pain (angina)",
        "Shortness of breath",
        "Pain in arms or shoulders",
        "Fatigue",
        "Dizziness",
        "Heart palpitations",
        "Nausea",
        "Sweating",
        "Heart Failure",
        "Coronary Artery Disease",
        "Irregular heartbeat",
        "Rapid heartbeat",
        "Swelling in legs",
        "Bluish lips or nails",
        "High blood pressure",
        "Low blood pressure",
        "Cold extremities"
    ],
    gastrointestinal: [
        "Abdominal pain",
        "Nausea",
        "Vomiting",
        "Bloating",
        "Indigestion",
        "Loss of appetite",
        "Black stools (if bleeding)",
        "Gastroenteritis",
        "Peptic Ulcer",
        "Diarrhea",
        "Constipation",
        "Heartburn",
        "Stomach cramps",
        "Difficulty swallowing",
        "Excessive gas",
        "Rectal bleeding",
        "Jaundice"
    ],
    infectious: [
        "Fever",
        "Chills",
        "Sweating",
        "Headache",
        "Nausea",
        "Vomiting",
        "Muscle pain",
        "Fatigue",
        "Malaria",
        "Dengue Fever",
        "Urinary Tract Infection",
        "Rash",
        "Sore throat",
        "Swollen lymph nodes",
        "Body aches",
        "Cough",
        "Weakness",
        "Loss of appetite"
    ],
    neurological: [
        "Headache",
        "Confusion",
        "Difficulty with familiar tasks",
        "Language problems",
        "Disorientation",
        "Mood changes",
        "Withdrawal from social activities",
        "Poor judgment",
        "Alzheimer's Disease",
        "Parkinson's Disease",
        "Multiple Sclerosis",
        "Epilepsy",
        "Tremor",
        "Seizures",
        "Memory loss",
        "Dizziness",
        "Numbness",
        "Tingling sensations",
        "Balance problems",
        "Vision changes",
        "Speech difficulties"
    ],
    dermatological: [
        "Rash",
        "Itching",
        "Dry skin",
        "Blisters",
        "Hives",
        "Eczema",
        "Psoriasis",
        "Skin discoloration",
        "Swelling",
        "Bruising",
        "Skin lesions",
        "Hair loss",
        "Nail changes",
        "Excessive sweating",
        "Skin pain",
        "Scaling",
        "Skin thickening"
    ],
    musculoskeletal: [
        "Joint pain",
        "Muscle pain",
        "Stiffness",
        "Swelling",
        "Reduced mobility",
        "Arthritis",
        "Osteoporosis",
        "Back pain",
        "Neck pain",
        "Weakness",
        "Cramping",
        "Joint clicking",
        "Bone pain",
        "Muscle spasms",
        "Joint deformity",
        "Difficulty walking"
    ],
    urological: [
        "Frequent urination",
        "Painful urination",
        "Blood in urine",
        "Cloudy urine",
        "Strong-smelling urine",
        "Urinary incontinence",
        "Urinary retention",
        "Kidney stones",
        "Urinary tract infection",
        "Lower abdominal pain",
        "Urinary urgency",
        "Decreased urine output",
        "Flank pain"
    ],
    ophthalmological: [
        "Blurred vision",
        "Eye pain",
        "Redness",
        "Sensitivity to light",
        "Floaters",
        "Vision loss",
        "Double vision",
        "Dry eyes",
        "Cataracts",
        "Glaucoma",
        "Eye discharge",
        "Itchy eyes",
        "Watery eyes",
        "Night blindness",
        "Halos around lights"
    ],
    general: [
        "Fatigue",
        "Fever",
        "Weight loss",
        "Weight gain",
        "Night sweats",
        "Malaise",
        "Weakness",
        "Loss of appetite",
        "Excessive thirst",
        "Excessive hunger",
        "Sleep disturbances",
        "Chills",
        "Dizziness",
        "Fainting"
    ]
};

// Export the database for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = diseaseDatabase;
}
