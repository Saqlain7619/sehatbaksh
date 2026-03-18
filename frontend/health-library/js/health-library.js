// Health conditions database - Comprehensive A-Z listing
const healthConditions = [
    // A
    {
        name: "Asthma",
        description: "A chronic respiratory condition characterized by inflammation and narrowing of the airways, causing recurring periods of wheezing, chest tightness, shortness of breath, and coughing.",
        causes: [
            "Genetic factors",
            "Environmental allergens (pollen, dust mites, pet dander)",
            "Air pollution",
            "Respiratory infections",
            "Physical activity (exercise-induced asthma)",
            "Cold air",
            "Stress and strong emotions",
            "Certain medications (beta blockers, aspirin)"
        ],
        symptoms: [
            "Shortness of breath",
            "Chest tightness or pain",
            "Wheezing when exhaling",
            "Trouble sleeping due to breathing difficulties",
            "Coughing or wheezing attacks worsened by respiratory virus",
            "Fatigue"
        ],
        diagnosis: [
            "Physical examination",
            "Detailed medical history",
            "Lung function tests (spirometry)",
            "Peak flow measurement",
            "Methacholine challenge",
            "Allergy testing",
            "Imaging tests (chest X-ray, CT scan)"
        ],
        treatment: [
            "Long-term control medications (inhaled corticosteroids, leukotriene modifiers)",
            "Quick-relief medications (short-acting beta agonists)",
            "Allergy medications",
            "Bronchial thermoplasty",
            "Biologics for severe asthma",
            "Asthma action plan"
        ],
        prevention: [
            "Identify and avoid asthma triggers",
            "Get vaccinated for influenza and pneumonia",
            "Monitor breathing",
            "Take prescribed medications as directed",
            "Use air conditioning to reduce airborne allergens",
            "Maintain optimal humidity",
            "Regular exercise to strengthen lungs"
        ]
    },
    {
        name: "Arthritis",
        description: "Inflammation of one or more joints, causing pain and stiffness that can worsen with age. The most common types are osteoarthritis and rheumatoid arthritis.",
        causes: [
            "Joint cartilage breakdown (osteoarthritis)",
            "Autoimmune response (rheumatoid arthritis)",
            "Uric acid crystals (gout)",
            "Infections",
            "Genetic factors",
            "Age-related wear and tear",
            "Previous joint injury",
            "Obesity"
        ],
        symptoms: [
            "Joint pain",
            "Stiffness",
            "Swelling",
            "Redness",
            "Decreased range of motion",
            "Fatigue",
            "Joint deformity (in advanced cases)",
            "Fever (in some types)"
        ],
        diagnosis: [
            "Physical examination",
            "Medical history",
            "Blood tests",
            "Imaging tests (X-rays, MRI, ultrasound)",
            "Joint fluid analysis",
            "Arthroscopy"
        ],
        treatment: [
            "Medications (NSAIDs, corticosteroids, DMARDs)",
            "Physical therapy",
            "Occupational therapy",
            "Joint assistive devices",
            "Joint replacement surgery",
            "Weight management",
            "Alternative therapies (acupuncture, massage)"
        ],
        prevention: [
            "Maintain healthy weight",
            "Regular exercise",
            "Protect joints during activities",
            "Good posture",
            "Balanced diet rich in anti-inflammatory foods",
            "Avoid smoking",
            "Regular medical check-ups"
        ]
    },
    {
        name: "Alzheimer's Disease",
        description: "A progressive neurological disorder that causes brain cells to degenerate and die, leading to a continuous decline in thinking, behavioral and social skills that disrupts a person's ability to function independently.",
        causes: [
            "Combination of genetic, lifestyle and environmental factors",
            "Age (primary risk factor)",
            "Family history",
            "Abnormal protein deposits in the brain (plaques and tangles)",
            "Down syndrome",
            "Head injuries",
            "Poor cardiovascular health"
        ],
        symptoms: [
            "Memory loss that disrupts daily life",
            "Challenges in planning or solving problems",
            "Difficulty completing familiar tasks",
            "Confusion with time or place",
            "Trouble understanding visual images and spatial relationships",
            "New problems with words in speaking or writing",
            "Misplacing things and losing the ability to retrace steps",
            "Decreased or poor judgment",
            "Withdrawal from work or social activities",
            "Changes in mood and personality"
        ],
        diagnosis: [
            "Medical history and neurological examination",
            "Mental status testing",
            "Physical and neurological examination",
            "Brain imaging (MRI, CT, PET)",
            "Laboratory tests to rule out other conditions",
            "Genetic testing"
        ],
        treatment: [
            "Cholinesterase inhibitors",
            "Memantine",
            "Other medications to treat symptoms",
            "Occupational therapy",
            "Environmental modifications",
            "Exercise programs",
            "Cognitive training",
            "Caregiver support and education"
        ],
        prevention: [
            "Regular physical exercise",
            "Healthy diet (Mediterranean diet)",
            "Cognitive stimulation",
            "Social engagement",
            "Quality sleep",
            "Management of cardiovascular risk factors",
            "Lifelong learning"
        ]
    },
    {
        name: "Anemia",
        description: "A condition in which the blood doesn't have enough healthy red blood cells or hemoglobin to carry adequate oxygen to the body's tissues.",
        causes: [
            "Iron deficiency",
            "Vitamin deficiency (B12, folate)",
            "Chronic diseases (cancer, kidney disease, rheumatoid arthritis)",
            "Inherited blood disorders (sickle cell anemia, thalassemia)",
            "Blood loss",
            "Bone marrow problems",
            "Autoimmune disorders",
            "Certain medications"
        ],
        symptoms: [
            "Fatigue",
            "Weakness",
            "Pale or yellowish skin",
            "Irregular heartbeats",
            "Shortness of breath",
            "Dizziness or lightheadedness",
            "Chest pain",
            "Cold hands and feet",
            "Headaches"
        ],
        diagnosis: [
            "Complete blood count (CBC)",
            "Peripheral blood smear",
            "Iron studies",
            "Vitamin B12 and folate levels",
            "Reticulocyte count",
            "Bone marrow examination (in severe cases)",
            "Hemoglobin electrophoresis (for inherited anemias)"
        ],
        treatment: [
            "Iron, vitamin B12, or folate supplements",
            "Medications to increase red blood cell production",
            "Blood transfusions",
            "Bone marrow transplant (in severe cases)",
            "Treatment of underlying conditions",
            "Dietary changes",
            "Splenectomy (for certain types)"
        ],
        prevention: [
            "Iron-rich diet (red meat, beans, leafy greens)",
            "Vitamin C to enhance iron absorption",
            "Vitamin B12 and folate-rich foods",
            "Regular medical check-ups",
            "Prenatal vitamins during pregnancy",
            "Treating underlying conditions"
        ]
    },
    {
        name: "Anxiety Disorders",
        description: "A group of mental health conditions characterized by significant feelings of anxiety, fear, apprehension, and worry that are strong enough to interfere with daily activities.",
        causes: [
            "Brain chemistry imbalances",
            "Environmental stressors",
            "Genetics",
            "Medical conditions",
            "Trauma",
            "Substance use or withdrawal",
            "Personality factors"
        ],
        symptoms: [
            "Excessive worry or fear",
            "Feeling agitated or restless",
            "Fatigue",
            "Difficulty concentrating",
            "Irritability",
            "Muscle tension",
            "Sleep disturbances",
            "Panic attacks (in some types)",
            "Avoidance behaviors",
            "Physical symptoms (rapid heartbeat, sweating, trembling)"
        ],
        diagnosis: [
            "Psychological evaluation",
            "Physical examination to rule out medical causes",
            "Comparison of symptoms with DSM-5 criteria",
            "Anxiety scales and assessments",
            "Medical tests to exclude physical conditions"
        ],
        treatment: [
            "Psychotherapy (cognitive behavioral therapy)",
            "Medications (antidepressants, anti-anxiety medications)",
            "Stress management techniques",
            "Relaxation techniques",
            "Lifestyle changes",
            "Support groups",
            "Alternative therapies (yoga, meditation)"
        ],
        prevention: [
            "Stress management",
            "Regular physical activity",
            "Healthy sleep habits",
            "Balanced diet",
            "Limit caffeine and alcohol",
            "Avoid recreational drugs",
            "Seek help early for mental health concerns",
            "Maintain social connections"
        ]
    },
    {
        name: "Appendicitis",
        description: "Inflammation of the appendix, a finger-shaped pouch that projects from the colon on the lower right side of the abdomen.",
        causes: [
            "Obstruction of the appendix opening",
            "Infection",
            "Inflammatory bowel disease",
            "Trauma to the abdomen",
            "Tumors (rarely)"
        ],
        symptoms: [
            "Sudden pain that begins around the navel and shifts to the lower right abdomen",
            "Pain that worsens with movement, coughing, or sneezing",
            "Nausea and vomiting",
            "Loss of appetite",
            "Low-grade fever",
            "Abdominal swelling",
            "Inability to pass gas",
            "Constipation or diarrhea"
        ],
        diagnosis: [
            "Physical examination",
            "Blood tests to check for infection",
            "Urine test to rule out urinary tract infection",
            "Imaging tests (CT scan, ultrasound, MRI)",
            "Pelvic exam (for women)"
        ],
        treatment: [
            "Appendectomy (surgical removal of the appendix)",
            "Laparoscopic surgery (minimally invasive)",
            "Open surgery (for complicated cases)",
            "Antibiotics (before and after surgery)",
            "Pain medications",
            "Drainage of abscess (if present)"
        ],
        prevention: [
            "No known prevention",
            "High-fiber diet may reduce risk",
            "Prompt medical attention for abdominal pain",
            "Regular medical check-ups"
        ]
    },
    {
        name: "Atrial Fibrillation",
        description: "An irregular and often rapid heart rate that can increase the risk of strokes, heart failure, and other heart-related complications.",
        causes: [
            "Abnormal heart structure",
            "Coronary artery disease",
            "High blood pressure",
            "Heart attack",
            "Heart valve problems",
            "Congenital heart defects",
            "Sleep apnea",
            "Thyroid disease",
            "Excessive alcohol or caffeine consumption",
            "Certain medications"
        ],
        symptoms: [
            "Palpitations (sensations of a racing, uncomfortable, irregular heartbeat)",
            "Weakness",
            "Reduced ability to exercise",
            "Fatigue",
            "Lightheadedness",
            "Dizziness",
            "Shortness of breath",
            "Chest pain"
        ],
        diagnosis: [
            "Electrocardiogram (ECG)",
            "Holter monitor",
            "Event recorder",
            "Echocardiogram",
            "Blood tests",
            "Stress test",
            "Chest X-ray"
        ],
        treatment: [
            "Medications to control heart rate",
            "Medications to prevent blood clots",
            "Cardioversion (electrical or with medications)",
            "Catheter ablation",
            "Surgical maze procedure",
            "Left atrial appendage closure",
            "Lifestyle changes"
        ],
        prevention: [
            "Heart-healthy lifestyle",
            "Control blood pressure",
            "Maintain healthy weight",
            "Regular physical activity",
            "Avoid excessive alcohol and caffeine",
            "Don't smoke",
            "Manage stress",
            "Regular medical check-ups"
        ]
    },
    {
        name: "Allergies",
        description: "An abnormal immune response to substances (allergens) that are typically harmless to most people.",
        causes: [
            "Airborne allergens (pollen, dust mites, pet dander, mold)",
            "Certain foods (nuts, shellfish, eggs, milk)",
            "Insect stings (bees, wasps)",
            "Medications (penicillin, sulfa drugs)",
            "Latex",
            "Genetic predisposition"
        ],
        symptoms: [
            "Sneezing",
            "Itching (of eyes, nose, mouth, skin)",
            "Runny nose",
            "Watery eyes",
            "Congestion",
            "Rash or hives",
            "Swelling",
            "Anaphylaxis (severe, life-threatening reaction)",
            "Wheezing or shortness of breath (in respiratory allergies)"
        ],
        diagnosis: [
            "Skin prick test",
            "Blood tests (specific IgE)",
            "Patch test",
            "Elimination diet (for food allergies)",
            "Challenge test (under medical supervision)",
            "Medical history"
        ],
        treatment: [
            "Avoidance of allergens",
            "Medications (antihistamines, decongestants, corticosteroids)",
            "Immunotherapy (allergy shots)",
            "Sublingual immunotherapy",
            "Emergency epinephrine (for severe reactions)",
            "Nasal irrigation"
        ],
        prevention: [
            "Identify and avoid triggers",
            "Keep indoor air clean",
            "Use allergen-proof bed covers",
            "Regular cleaning to reduce dust and mold",
            "Stay indoors on high pollen days",
            "Wear a mask when cleaning or outdoors during high allergen seasons",
            "Read food labels carefully (for food allergies)"
        ]
    },
    {
        name: "Aortic Aneurysm",
        description: "An abnormal bulge that occurs in the wall of the aorta, the major blood vessel that carries blood from the heart to the body.",
        causes: [
            "Atherosclerosis (hardening of the arteries)",
            "High blood pressure",
            "Genetic conditions (Marfan syndrome, Ehlers-Danlos syndrome)",
            "Infection in the aorta",
            "Trauma",
            "Age-related weakening of aortic walls",
            "Smoking"
        ],
        symptoms: [
            "Often no symptoms until rupture",
            "Deep, constant pain in abdomen or back (abdominal aneurysm)",
            "Chest or upper back pain (thoracic aneurysm)",
            "Hoarseness",
            "Difficulty swallowing",
            "Shortness of breath",
            "Pulsating sensation in the abdomen",
            "Severe, sudden pain (sign of rupture - medical emergency)"
        ],
        diagnosis: [
            "Ultrasound",
            "CT scan",
            "MRI",
            "Echocardiogram",
            "Angiography",
            "Physical examination (doctor may feel a pulsating mass in abdomen)"
        ],
        treatment: [
            "Watchful waiting with regular monitoring (for small aneurysms)",
            "Medications to lower blood pressure and relax blood vessels",
            "Surgery (open surgical repair)",
            "Endovascular repair (less invasive procedure)",
            "Emergency surgery for ruptured aneurysms"
        ],
        prevention: [
            "Control blood pressure",
            "Stop smoking",
            "Exercise regularly",
            "Eat a healthy diet",
            "Maintain healthy weight",
            "Limit alcohol consumption",
            "Regular screening for those at high risk",
            "Manage stress"
        ]
    },
    {
        name: "Acne",
        description: "A skin condition characterized by the appearance of pimples, blackheads, whiteheads, and in severe cases, nodules and cysts, typically on the face, chest, and back.",
        causes: [
            "Excess oil (sebum) production",
            "Hair follicles clogged by oil and dead skin cells",
            "Bacteria (Propionibacterium acnes)",
            "Inflammation",
            "Hormonal changes (puberty, menstrual cycles, pregnancy)",
            "Certain medications",
            "Diet (high glycemic foods, dairy)",
            "Stress"
        ],
        symptoms: [
            "Whiteheads (closed plugged pores)",
            "Blackheads (open plugged pores)",
            "Small red, tender bumps (papules)",
            "Pimples (pustules with pus at their tips)",
            "Large, solid, painful lumps beneath the skin (nodules)",
            "Painful, pus-filled lumps beneath the skin (cystic lesions)",
            "Scarring",
            "Skin discoloration"
        ],
        diagnosis: [
            "Visual examination by dermatologist",
            "Medical history",
            "Assessment of severity (mild, moderate, severe)",
            "Exclusion of other skin conditions"
        ],
        treatment: [
            "Topical treatments (benzoyl peroxide, salicylic acid, retinoids)",
            "Oral antibiotics",
            "Oral contraceptives (for women)",
            "Anti-androgen agents",
            "Isotretinoin (for severe cases)",
            "Steroid injections",
            "Light therapy",
            "Chemical peels",
            "Extraction of large cysts"
        ],
        prevention: [
            "Gentle cleansing twice daily",
            "Use of non-comedogenic products",
            "Regular exfoliation",
            "Keeping hands away from face",
            "Avoiding excessive sun exposure",
            "Balanced diet",
            "Stress management",
            "Regular skin care routine"
        ]
    },
    // B
    {
        name: "Bronchitis",
        description: "Inflammation of the lining of the bronchial tubes, which carry air to and from the lungs.",
        causes: [
            "Viral infections",
            "Bacterial infections",
            "Exposure to irritants (tobacco smoke, air pollution)",
            "Workplace exposure to certain chemicals or dust"
        ],
        symptoms: [
            "Persistent cough with mucus production",
            "Fatigue",
            "Shortness of breath",
            "Slight fever and chills",
            "Chest discomfort"
        ],
        diagnosis: [
            "Physical examination",
            "Medical history",
            "Chest X-ray",
            "Pulmonary function tests",
            "Sputum tests"
        ],
        treatment: [
            "Rest and fluids",
            "Over-the-counter pain relievers",
            "Cough medicine",
            "Antibiotics (only for bacterial bronchitis)",
            "Bronchodilators",
            "Humidifier use"
        ],
        prevention: [
            "Avoid smoking and secondhand smoke",
            "Get vaccinated (flu, pneumonia)",
            "Wash hands frequently",
            "Use masks in polluted environments",
            "Strengthen immunity through healthy lifestyle"
        ]
    },
    {
        name: "Back Pain",
        description: "Pain felt in the back that usually originates from the muscles, nerves, bones, joints or other structures in the spine.",
        causes: [
            "Muscle or ligament strain",
            "Bulging or ruptured disks",
            "Arthritis",
            "Skeletal irregularities (scoliosis, lordosis)",
            "Osteoporosis",
            "Poor posture",
            "Improper lifting",
            "Obesity",
            "Psychological stress"
        ],
        symptoms: [
            "Muscle ache",
            "Shooting or stabbing pain",
            "Pain that radiates down the leg",
            "Limited flexibility or range of motion",
            "Inability to stand straight",
            "Pain that worsens with bending, lifting, standing or walking",
            "Pain that improves with reclining"
        ],
        diagnosis: [
            "Medical history",
            "Physical examination",
            "X-ray",
            "MRI or CT scan",
            "Electromyography (EMG)",
            "Bone scan",
            "Blood tests"
        ],
        treatment: [
            "Over-the-counter pain relievers",
            "Muscle relaxants",
            "Topical pain relievers",
            "Physical therapy",
            "Cortisone injections",
            "Cognitive behavioral therapy",
            "Surgery (in severe cases)"
        ],
        prevention: [
            "Maintain a healthy weight",
            "Exercise regularly to strengthen back muscles",
            "Use proper lifting techniques",
            "Maintain good posture",
            "Ensure ergonomic work environment",
            "Avoid prolonged sitting",
            "Quit smoking",
            "Manage stress"
        ]
    },
    {
        name: "Bipolar Disorder",
        description: "A mental health condition that causes extreme mood swings that include emotional highs (mania or hypomania) and lows (depression).",
        causes: [
            "Biological differences in brain structure and function",
            "Genetic factors",
            "Neurotransmitter imbalances",
            "Hormonal imbalances",
            "Environmental factors (stress, trauma)",
            "Substance abuse"
        ],
        symptoms: [
            "Manic episodes (abnormally upbeat, increased activity, energy, agitation)",
            "Depressive episodes (sadness, hopelessness, loss of interest, fatigue)",
            "Sleep disturbances",
            "Psychosis (in severe cases)",
            "Impaired judgment",
            "Risky behavior during manic episodes",
            "Suicidal thoughts during depressive episodes"
        ],
        diagnosis: [
            "Psychiatric assessment",
            "Physical examination to rule out other conditions",
            "Mood charting",
            "Criteria from the Diagnostic and Statistical Manual of Mental Disorders (DSM-5)",
            "Psychological evaluation"
        ],
        treatment: [
            "Mood stabilizers",
            "Antipsychotics",
            "Antidepressants (with caution)",
            "Anti-anxiety medications",
            "Psychotherapy (cognitive behavioral therapy, interpersonal therapy)",
            "Electroconvulsive therapy (in severe cases)",
            "Lifestyle management"
        ],
        prevention: [
            "Medication adherence",
            "Regular therapy sessions",
            "Stress management",
            "Healthy sleep habits",
            "Avoiding alcohol and recreational drugs",
            "Regular exercise",
            "Building a strong support network",
            "Recognizing early warning signs"
        ]
    },
    {
        name: "Bladder Cancer",
        description: "A type of cancer that begins in the cells of the bladder, a hollow muscular organ in the lower abdomen that stores urine.",
        causes: [
            "Smoking and tobacco use",
            "Exposure to chemicals (especially in manufacturing)",
            "Chronic bladder inflammation",
            "Parasitic infections",
            "Previous cancer treatments",
            "Genetic mutations",
            "Age (risk increases with age for many types)",
            "Gender (more common in men)"
        ],
        symptoms: [
            "Blood in urine (hematuria)",
            "Frequent urination",
            "Painful urination",
            "Back pain",
            "Pelvic pain",
            "Urinary urgency",
            "Weight loss",
            "Fatigue"
        ],
        diagnosis: [
            "Urine tests (urinalysis, urine cytology)",
            "Cystoscopy",
            "Biopsy",
            "Imaging tests (CT urogram, MRI, ultrasound)",
            "Bone scan (if metastasis is suspected)",
            "Genomic testing"
        ],
        treatment: [
            "Surgery (transurethral resection, cystectomy)",
            "Intravesical therapy",
            "Chemotherapy",
            "Radiation therapy",
            "Immunotherapy",
            "Targeted therapy",
            "Clinical trials",
            "Reconstructive surgery after bladder removal"
        ],
        prevention: [
            "Quit smoking",
            "Avoid exposure to chemicals",
            "Drink plenty of fluids",
            "Eat a variety of fruits and vegetables",
            "Regular medical check-ups",
            "Prompt treatment of urinary infections"
        ]
    },
    {
        name: "Bronchiolitis",
        description: "A common lung infection in infants and young children caused by a virus affecting the bronchioles, the smallest airways in the lungs.",
        causes: [
            "Respiratory syncytial virus (RSV) - most common cause",
            "Human metapneumovirus",
            "Influenza virus",
            "Adenovirus",
            "Parainfluenza virus",
            "Mycoplasma pneumoniae"
        ],
        symptoms: [
            "Runny nose",
            "Congestion",
            "Slight fever",
            "Cough",
            "Wheezing",
            "Rapid breathing",
            "Flaring of nostrils",
            "Difficulty feeding",
            "Bluish color of the skin (in severe cases)"
        ],
        diagnosis: [
            "Physical examination",
            "Medical history",
            "Chest X-ray",
            "Blood tests",
            "Nasal swab to identify the virus",
            "Pulse oximetry to measure oxygen levels"
        ],
        treatment: [
            "Supportive care (rest, fluids)",
            "Nasal saline drops and suction",
            "Humidified air",
            "Oxygen therapy (if needed)",
            "Hospitalization (in severe cases)",
            "Intravenous fluids (if dehydrated)",
            "Rarely, antiviral medications"
        ],
        prevention: [
            "Hand washing",
            "Avoiding contact with sick people",
            "Cleaning and disinfecting surfaces",
            "Covering coughs and sneezes",
            "Palivizumab (preventive medication for high-risk infants)",
            "Breastfeeding (provides immunity)",
            "Avoiding exposure to tobacco smoke"
        ]
    },
    {
        name: "Brain Tumor",
        description: "A mass or growth of abnormal cells in the brain that can be benign (non-cancerous) or malignant (cancerous).",
        causes: [
            "Genetic factors",
            "Exposure to radiation",
            "Family history of brain tumors",
            "Immune system disorders",
            "Certain genetic syndromes",
            "Age (risk increases with age for many types)",
            "Unknown factors (for many brain tumors)"
        ],
        symptoms: [
            "Headaches that worsen in the morning",
            "Seizures",
            "Difficulty with balance or coordination",
            "Personality or behavior changes",
            "Memory problems",
            "Nausea and vomiting",
            "Vision problems",
            "Speech difficulties",
            "Fatigue",
            "Weakness or paralysis on one side of the body"
        ],
        diagnosis: [
            "Neurological examination",
            "Imaging tests (MRI, CT scan)",
            "Biopsy",
            "Spinal tap (lumbar puncture)",
            "Angiogram",
            "Skull X-ray",
            "EEG (electroencephalogram)"
        ],
        treatment: [
            "Surgery",
            "Radiation therapy",
            "Radiosurgery",
            "Chemotherapy",
            "Targeted drug therapy",
            "Immunotherapy",
            "Rehabilitation therapy",
            "Palliative care",
            "Clinical trials"
        ],
        prevention: [
            "Avoid excessive exposure to radiation",
            "Protective equipment in high-risk occupations",
            "Healthy lifestyle",
            "Regular medical check-ups",
            "No proven prevention for most brain tumors"
        ]
    },
    {
        name: "Bursitis",
        description: "Inflammation of the bursae, small fluid-filled sacs that cushion the bones, tendons, and muscles near joints.",
        causes: [
            "Repetitive motions or positions that put pressure on bursae",
            "Trauma or injury to a joint",
            "Inflammatory arthritis (rheumatoid arthritis, gout)",
            "Infection (septic bursitis)",
            "Age-related changes",
            "Certain occupations or hobbies"
        ],
        symptoms: [
            "Joint pain and tenderness",
            "Swelling",
            "Limited motion",
            "Redness and warmth around the affected area",
            "Pain that worsens with movement or pressure",
            "Fever (if infection is present)"
        ],
        diagnosis: [
            "Physical examination",
            "Medical history",
            "Imaging tests (X-ray, MRI, ultrasound)",
            "Aspiration (removing fluid from the bursa for testing)",
            "Blood tests (to check for infection or rheumatic diseases)"
        ],
        treatment: [
            "Rest and activity modification",
            "Ice to reduce swelling",
            "Over-the-counter pain relievers",
            "Physical therapy",
            "Corticosteroid injections",
            "Antibiotics (for infected bursitis)",
            "Surgery (rarely needed)",
            "Assistive devices"
        ],
        prevention: [
            "Protect joints with padding",
            "Take frequent breaks from repetitive activities",
            "Maintain a healthy weight",
            "Exercise regularly to strengthen muscles",
            "Use proper posture and technique",
            "Warm up before exercise",
            "Gradually increase intensity of activities"
        ]
    },
    {
        name: "Bell's Palsy",
        description: "A condition that causes sudden weakness in the muscles on one side of the face, making it appear to droop.",
        causes: [
            "Herpes simplex virus (HSV-1)",
            "Herpes zoster virus (chickenpox and shingles)",
            "Epstein-Barr virus",
            "Cytomegalovirus",
            "Adenovirus",
            "Rubella",
            "Mumps",
            "Influenza B",
            "Facial nerve inflammation or compression"
        ],
        symptoms: [
            "Rapid onset of mild weakness to total paralysis on one side of the face",
            "Facial droop and difficulty making facial expressions",
            "Pain around the jaw or behind the ear",
            "Increased sensitivity to sound",
            "Headache",
            "Loss of taste",
            "Changes in tear and saliva production",
            "Difficulty eating and drinking",
            "Difficulty closing one eye"
        ],
        diagnosis: [
            "Physical examination",
            "Medical history",
            "Electromyography (EMG)",
            "Imaging tests (MRI, CT) to rule out other causes",
            "Blood tests to check for infection or other medical conditions"
        ],
        treatment: [
            "Corticosteroids to reduce inflammation",
            "Antiviral medications",
            "Eye protection (artificial tears, eye patch)",
            "Physical therapy",
            "Facial massage",
            "Electrical stimulation",
            "Pain medications",
            "Surgery (rarely needed)"
        ],
        prevention: [
            "No specific prevention",
            "Managing stress",
            "Protecting against cold exposure",
            "Maintaining good general health",
            "Prompt treatment of ear infections"
        ]
    },
    {
        name: "Bone Cancer",
        description: "A malignant tumor of the bone that destroys normal bone tissue, either beginning in the bone (primary) or spreading to the bone from elsewhere (secondary).",
        causes: [
            "Genetic mutations",
            "Previous radiation therapy",
            "Paget's disease of bone",
            "Genetic disorders (Li-Fraumeni syndrome, hereditary retinoblastoma)",
            "Bone marrow transplantation",
            "Exposure to chemicals (beryllium, vinyl chloride)"
        ],
        symptoms: [
            "Bone pain that worsens at night or with activity",
            "Swelling and tenderness near the affected area",
            "Weakened bone leading to fractures",
            "Fatigue",
            "Unintended weight loss",
            "Fever",
            "Anemia"
        ],
        diagnosis: [
            "Imaging tests (X-ray, CT, MRI, PET scan, bone scan)",
            "Blood tests",
            "Biopsy",
            "Bone marrow aspiration and biopsy",
            "Genetic testing"
        ],
        treatment: [
            "Surgery (to remove the tumor)",
            "Chemotherapy",
            "Radiation therapy",
            "Cryosurgery",
            "Targeted therapy",
            "Immunotherapy",
            "Stem cell transplant",
            "Rehabilitation"
        ],
        prevention: [
            "No specific prevention for most bone cancers",
            "Avoiding excessive radiation exposure",
            "Regular check-ups for those with risk factors",
            "Genetic counseling for families with hereditary conditions"
        ]
    },
    {
        name: "Bronchiectasis",
        description: "A chronic condition where the bronchial tubes of the lungs are permanently damaged, widened, and thickened, allowing for mucus build-up and increasing the risk of infection.",
        causes: [
            "Cystic fibrosis",
            "Immunodeficiency disorders",
            "Inflammatory bowel disease",
            "Autoimmune disorders",
            "Severe pneumonia or tuberculosis",
            "Whooping cough or measles",
            "Inhaled foreign object",
            "Gastroesophageal reflux disease (GERD)",
            "Alpha-1 antitrypsin deficiency"
        ],
        symptoms: [
            "Chronic cough with large amounts of mucus",
            "Shortness of breath",
            "Wheezing",
            "Chest pain",
            "Coughing up blood",
            "Fatigue",
            "Weight loss",
            "Recurrent respiratory infections",
            "Clubbing of fingertips"
        ],
        diagnosis: [
            "Chest CT scan",
            "Chest X-ray",
            "Pulmonary function tests",
            "Sputum culture",
            "Bronchoscopy",
            "Blood tests",
            "Sweat test (for cystic fibrosis)"
        ],
        treatment: [
            "Antibiotics for infections",
            "Bronchodilators to open airways",
            "Inhaled corticosteroids to reduce inflammation",
            "Mucus thinners",
            "Airway clearance techniques",
            "Oxygen therapy",
            "Pulmonary rehabilitation",
            "Surgery (for complications)",
            "Lung transplant (in advanced cases)"
        ],
        prevention: [
            "Childhood immunizations",
            "Prompt treatment of lung infections",
            "Avoiding respiratory irritants",
            "Regular flu and pneumonia vaccinations",
            "Airway clearance techniques",
            "Good nutrition and hydration",
            "Regular exercise"
        ]
    },
    // C
    {
        name: "Coronary Artery Disease",
        description: "A condition where the major blood vessels that supply the heart with blood, oxygen, and nutrients become damaged or diseased.",
        causes: [
            "Plaque buildup in arteries (atherosclerosis)",
            "High blood pressure",
            "High cholesterol",
            "Smoking",
            "Diabetes",
            "Family history",
            "Obesity",
            "Physical inactivity",
            "Stress"
        ],
        symptoms: [
            "Chest pain (angina)",
            "Shortness of breath",
            "Pain in the neck, jaw, throat, upper abdomen, or back",
            "Numbness or weakness in arms or legs",
            "Heart attack (in severe cases)"
        ],
        diagnosis: [
            "Electrocardiogram (ECG)",
            "Echocardiogram",
            "Stress test",
            "Cardiac catheterization and angiogram",
            "CT scan",
            "MRI"
        ],
        treatment: [
            "Lifestyle changes",
            "Medications (statins, beta-blockers, ACE inhibitors)",
            "Angioplasty and stent placement",
            "Coronary artery bypass surgery",
            "Cardiac rehabilitation"
        ],
        prevention: [
            "Healthy diet low in saturated fats and sodium",
            "Regular exercise",
            "Maintain healthy weight",
            "Quit smoking",
            "Manage stress",
            "Control blood pressure, cholesterol, and diabetes",
            "Limit alcohol consumption"
        ]
    },
    {
        name: "Chronic Obstructive Pulmonary Disease (COPD)",
        description: "A chronic inflammatory lung disease that causes obstructed airflow from the lungs, making it difficult to breathe. It includes emphysema and chronic bronchitis.",
        causes: [
            "Smoking (primary cause)",
            "Long-term exposure to air pollution",
            "Occupational exposure to dust and chemicals",
            "Alpha-1 antitrypsin deficiency (genetic)",
            "Repeated respiratory infections",
            "Aging"
        ],
        symptoms: [
            "Shortness of breath, especially during physical activity",
            "Wheezing",
            "Chest tightness",
            "Chronic cough with mucus",
            "Frequent respiratory infections",
            "Fatigue",
            "Unintended weight loss (in later stages)",
            "Swelling in ankles, feet or legs"
        ],
        diagnosis: [
            "Pulmonary function tests (spirometry)",
            "Chest X-ray",
            "CT scan",
            "Arterial blood gas analysis",
            "Laboratory tests",
            "Pulse oximetry"
        ],
        treatment: [
            "Smoking cessation",
            "Bronchodilators",
            "Inhaled steroids",
            "Antibiotics",
            "Anti-diarrheal medications",
            "Pain relievers",
            "Nutritional supplements",
            "Biologic therapies",
            "Surgery (for complications)",
            "Dietary changes"
        ],
        prevention: [
            "No specific prevention",
            "Smoking cessation",
            "Stress management",
            "Regular exercise",
            "Balanced diet",
            "Avoiding NSAIDs",
            "Regular medical check-ups"
        ]
    },
    {
        name: "Celiac Disease",
        description: "An autoimmune disorder in which ingestion of gluten leads to damage in the small intestine, preventing proper nutrient absorption.",
        causes: [
            "Genetic predisposition",
            "Environmental factors",
            "Immune system abnormalities",
            "Consuming gluten (found in wheat, barley, and rye)",
            "Viral infections (may trigger in genetically predisposed individuals)",
            "Changes in gut bacteria"
        ],
        symptoms: [
            "Diarrhea",
            "Fatigue",
            "Weight loss",
            "Bloating and gas",
            "Abdominal pain",
            "Nausea and vomiting",
            "Constipation",
            "Anemia",
            "Rash (dermatitis herpetiformis)",
            "Headaches",
            "Joint pain",
            "Neurological symptoms"
        ],
        diagnosis: [
            "Blood tests for antibodies",
            "Genetic testing",
            "Intestinal biopsy",
            "Endoscopy",
            "Response to gluten-free diet"
        ],
        treatment: [
            "Strict gluten-free diet",
            "Nutritional supplements (if deficient)",
            "Medication for dermatitis herpetiformis",
            "Steroids (in severe cases)",
            "Regular follow-up with healthcare providers",
            "Support groups"
        ],
        prevention: [
            "No prevention for the disease itself",
            "Strict gluten-free diet to prevent complications",
            "Regular medical follow-up",
            "Nutritional monitoring",
            "Education about hidden sources of gluten"
        ]
    },
    {
        name: "Crohn's Disease",
        description: "A type of inflammatory bowel disease (IBD) that causes inflammation of the digestive tract, leading to abdominal pain, severe diarrhea, fatigue, weight loss, and malnutrition.",
        causes: [
            "Immune system dysfunction",
            "Genetic factors",
            "Environmental triggers",
            "Smoking",
            "Previous intestinal infections",
            "Nonsteroidal anti-inflammatory medications",
            "Diet high in fat or refined foods"
        ],
        symptoms: [
            "Diarrhea",
            "Abdominal pain and cramping",
            "Blood in stool",
            "Fatigue",
            "Reduced appetite and weight loss",
            "Mouth sores",
            "Perianal disease",
            "Inflammation of skin, eyes and joints",
            "Fever",
            "Malnutrition"
        ],
        diagnosis: [
            "Blood tests",
            "Fecal occult blood test",
            "Colonoscopy",
            "Endoscopy",
            "CT scan",
            "MRI",
            "Capsule endoscopy",
            "Balloon-assisted enteroscopy"
        ],
        treatment: [
            "Anti-inflammatory drugs",
            "Immune system suppressors",
            "Antibiotics",
            "Anti-diarrheal medications",
            "Pain relievers",
            "Nutritional supplements",
            "Biologic therapies",
            "Surgery (for complications)",
            "Dietary changes"
        ],
        prevention: [
            "No specific prevention",
            "Smoking cessation",
            "Stress management",
            "Regular exercise",
            "Balanced diet",
            "Avoiding NSAIDs",
            "Regular medical check-ups"
        ]
    },
    {
        name: "Cataracts",
        description: "A clouding of the normally clear lens of the eye, leading to decreased vision. It is most common in older adults.",
        causes: [
            "Aging",
            "Eye injury",
            "Radiation exposure",
            "Genetic disorders",
            "Diabetes",
            "Hypertension",
            "Obesity",
            "Smoking",
            "Excessive alcohol consumption",
            "Prolonged corticosteroid use",
            "Excessive exposure to sunlight"
        ],
        symptoms: [
            "Cloudy, blurry or dim vision",
            "Increased difficulty with vision at night",
            "Sensitivity to light and glare",
            "Need for brighter light for reading",
            "Seeing halos around lights",
            "Frequent changes in eyeglass or contact lens prescription",
            "Fading or yellowing of colors",
            "Double vision in a single eye"
        ],
        diagnosis: [
            "Visual acuity test",
            "Slit-lamp examination",
            "Retinal examination",
            "Applanation tonometry (to measure eye pressure)"
        ],
        treatment: [
            "New eyeglasses or contact lenses (early stages)",
            "Anti-glare sunglasses",
            "Magnifying lenses",
            "Surgery to remove the cloudy lens and replace with an artificial lens",
            "Laser surgery (in some cases)"
        ],
        prevention: [
            "Regular eye examinations",
            "Quit smoking",
            "Manage other health problems",
            "Maintain a healthy diet rich in fruits and vegetables",
            "Wear sunglasses to block ultraviolet sunlight",
            "Reduce alcohol consumption"
        ]
    },
    {
        name: "Cervical Cancer",
        description: "A type of cancer that occurs in the cells of the cervix — the lower part of the uterus that connects to the vagina.",
        causes: [
            "Human papillomavirus (HPV) infection (primary cause)",
            "Smoking",
            "Weakened immune system",
            "Multiple sexual partners",
            "Early sexual activity",
            "Long-term use of birth control pills",
            "Socioeconomic factors",
            "Exposure to diethylstilbestrol (DES) before birth"
        ],
        symptoms: [
            "Vaginal bleeding after intercourse, between periods or after menopause",
            "Watery, bloody vaginal discharge that may be heavy and have a foul odor",
            "Pelvic pain",
            "Pain during intercourse",
            "No symptoms in early stages"
        ],
        diagnosis: [
            "Pap test (Pap smear)",
            "HPV DNA test",
            "Colposcopy",
            "Biopsy",
            "Endocervical curettage",
            "Imaging tests (CT, MRI, PET)"
        ],
        treatment: [
            "Surgery (removal of cancer tissue, hysterectomy)",
            "Radiation therapy",
            "Chemotherapy",
            "Targeted therapy",
            "Immunotherapy",
            "Palliative care"
        ],
        prevention: [
            "HPV vaccination",
            "Regular Pap tests",
            "Safe sex practices",
            "Limiting number of sexual partners",
            "Not smoking",
            "Maintaining a healthy immune system"
        ]
    },
    {
        name: "Chronic Kidney Disease",
        description: "A condition characterized by a gradual loss of kidney function over time, which can progress to kidney failure.",
        causes: [
            "Diabetes",
            "High blood pressure",
            "Glomerulonephritis",
            "Polycystic kidney disease",
            "Recurrent kidney infections",
            "Urinary tract obstructions",
            "Vesicoureteral reflux",
            "Certain medications",
            "Autoimmune diseases"
        ],
        symptoms: [
            "Nausea",
            "Vomiting",
            "Loss of appetite",
            "Fatigue and weakness",
            "Sleep problems",
            "Changes in urine output",
            "Decreased mental sharpness",
            "Muscle twitches and cramps",
            "Swelling of feet and ankles",
            "Persistent itching",
            "Chest pain (if fluid builds up around the lining of the heart)",
            "Shortness of breath (if fluid builds up in the lungs)"
        ],
        diagnosis: [
            "Blood tests",
            "Urine tests",
            "Imaging tests (ultrasound, CT scan, MRI)",
            "Kidney biopsy",
            "GFR (glomerular filtration rate) measurement"
        ],
        treatment: [
            "Medications to control blood pressure",
            "Medications to lower cholesterol levels",
            "Medications to treat anemia",
            "Medications to relieve swelling",
            "Medications to protect bones",
            "Dietary changes",
            "Dialysis",
            "Kidney transplant"
        ],
        prevention: [
            "Manage diabetes and high blood pressure",
            "Maintain a healthy weight",
            "Follow a low-salt, low-fat diet",
            "Exercise regularly",
            "Avoid smoking and excessive alcohol",
            "Avoid nephrotoxic drugs",
            "Regular check-ups if at high risk"
        ]
    },
    {
        name: "Colorectal Cancer",
        description: "Cancer that starts in the colon or rectum, often beginning as small, noncancerous clumps of cells called polyps that can become cancerous over time.",
        causes: [
            "Age (risk increases with age)",
            "Personal history of polyps or colorectal cancer",
            "Inflammatory intestinal conditions",
            "Inherited syndromes (Lynch syndrome, FAP)",
            "Family history of colorectal cancer",
            "Low-fiber, high-fat diet",
            "Sedentary lifestyle",
            "Diabetes",
            "Obesity",
            "Smoking",
            "Alcohol consumption",
            "Radiation therapy for previous cancers"
        ],
        symptoms: [
            "Change in bowel habits (diarrhea, constipation)",
            "Rectal bleeding or blood in stool",
            "Persistent abdominal discomfort (cramps, gas, pain)",
            "Feeling that bowel doesn't empty completely",
            "Weakness or fatigue",
            "Unexplained weight loss",
            "Iron deficiency anemia"
        ],
        diagnosis: [
            "Colonoscopy",
            "Sigmoidoscopy",
            "Fecal occult blood test",
            "Stool DNA test",
            "CT colonography (virtual colonoscopy)",
            "Blood tests (CEA level)",
            "Biopsy"
        ],
        treatment: [
            "Surgery (polypectomy, colectomy)",
            "Radiation therapy",
            "Chemotherapy",
            "Targeted drug therapy",
            "Immunotherapy",
            "Palliative care",
            "Clinical trials"
        ],
        prevention: [
            "Regular screening",
            "High-fiber, low-fat diet",
            "Regular exercise",
            "Maintain healthy weight",
            "Limit alcohol consumption",
            "Stop smoking",
            "Take aspirin (consult doctor first)",
            "Hormone replacement therapy (for some women)"
        ]
    },
    {
        name: "Carpal Tunnel Syndrome",
        description: "A condition that causes numbness, tingling, and weakness in the hand due to pressure on the median nerve as it travels through the wrist.",
        causes: [
            "Repetitive hand movements",
            "Wrist anatomy (smaller carpal tunnel)",
            "Hand or wrist injuries",
            "Rheumatoid arthritis",
            "Diabetes",
            "Thyroid disorders",
            "Pregnancy",
            "Obesity",
            "Workplace factors (vibrating tools, cold environment)"
        ],
        symptoms: [
            "Numbness, tingling in thumb, index, middle, and ring fingers",
            "Pain or burning sensation that travels up the arm",
            "Weakness in hand and tendency to drop objects",
            "Shock-like sensations in fingers",
            "Pain or tingling that worsens at night",
            "Symptoms that worsen with hand or wrist use"
        ],
        diagnosis: [
            "Physical examination",
            "Tinel's sign test",
            "Phalen's maneuver",
            "Electromyography",
            "Nerve conduction study",
            "Ultrasound",
            "X-ray (to rule out other causes)",
            "MRI"
        ],
        treatment: [
            "Wrist splinting",
            "Nonsteroidal anti-inflammatory drugs",
            "Corticosteroid injections",
            "Physical therapy",
            "Yoga",
            "Ultrasound therapy",
            "Surgery (carpal tunnel release)",
            "Workplace modifications"
        ],
        prevention: [
            "Take breaks from repetitive activities",
            "Stretch hands and wrists regularly",
            "Improve posture",
            "Keep wrists in neutral position",
            "Use ergonomic tools and keyboard",
            "Avoid flexing wrists for long periods",
            "Keep hands warm",
            "Manage underlying conditions"
        ]
    },
    {
        name: "Cirrhosis",
        description: "A late-stage liver disease in which healthy liver tissue is replaced with scar tissue, preventing the liver from functioning properly.",
        causes: [
            "Chronic alcohol abuse",
            "Chronic viral hepatitis (B, C, D)",
            "Nonalcoholic fatty liver disease",
            "Hemochromatosis",
            "Wilson's disease",
            "Alpha-1 antitrypsin deficiency",
            "Autoimmune hepatitis",
            "Primary biliary cholangitis",
            "Primary sclerosing cholangitis",
            "Medications",
            "Prolonged exposure to toxins"
        ],
        symptoms: [
            "Fatigue",
            "Easily bleeding or bruising",
            "Loss of appetite",
            "Nausea",
            "Swelling in legs, feet or ankles (edema)",
            "Weight loss",
            "Itchy skin",
            "Jaundice (yellowing of skin and eyes)",
            "Fluid accumulation in the abdomen (ascites)",
            "Spider-like blood vessels on the skin",
            "Confusion, drowsiness and slurred speech (hepatic encephalopathy)",
            "Redness in the palms of the hands"
        ],
        diagnosis: [
            "Blood tests",
            "Imaging tests (ultrasound, CT, MRI)",
            "Liver biopsy",
            "Elastography",
            "Endoscopy (to check for enlarged veins)"
        ],
        treatment: [
            "Treatment of underlying cause",
            "Medications to manage symptoms",
            "Nutritional support",
            "Avoiding alcohol and certain medications",
            "Treatment for complications",
            "Liver transplant (in advanced cases)"
        ],
        prevention: [
            "Limit alcohol consumption",
            "Maintain a healthy weight",
            "Get vaccinated against hepatitis",
            "Use medications as directed",
            "Avoid contact with chemicals",
            "Practice safe sex",
            "Don't share needles",
            "Get regular medical care"
        ]
    },
    // D
    {
        name: "Diabetes Type 2",
        description: "A chronic metabolic condition characterized by high blood sugar levels due to insulin resistance or insufficient insulin production.",
        causes: [
            "Overweight or obesity",
            "Physical inactivity",
            "Family history",
            "Age (risk increases with age)",
            "Prediabetes",
            "Gestational diabetes",
            "Polycystic ovary syndrome",
            "Areas of darkened skin (acanthosis nigricans)"
        ],
        symptoms: [
            "Increased thirst and frequent urination",
            "Increased hunger",
            "Fatigue",
            "Blurred vision",
            "Slow-healing sores",
            "Frequent infections",
            "Unexplained weight loss",
            "Numbness or tingling in hands or feet"
        ],
        diagnosis: [
            "Glycated hemoglobin (A1C) test",
            "Random blood sugar test",
            "Fasting blood sugar test",
            "Oral glucose tolerance test"
        ],
        treatment: [
            "Healthy eating",
            "Regular physical activity",
            "Weight loss",
            "Diabetes medications or insulin therapy",
            "Blood sugar monitoring",
            "Bariatric surgery (in some cases)"
        ],
        prevention: [
            "Lose excess weight",
            "Be more physically active",
            "Eat healthy foods",
            "Control blood pressure and cholesterol",
            "Quit smoking",
            "Regular health screenings if at risk"
        ]
    },
    {
        name: "Depression",
        description: "A mood disorder that causes a persistent feeling of sadness and loss of interest, affecting how you feel, think, and behave and can lead to a variety of emotional and physical problems.",
        causes: [
            "Brain chemistry imbalances",
            "Hormonal changes",
            "Genetic factors",
            "Biological differences",
            "Life events (trauma, loss, stress)",
            "Medications and medical conditions",
            "Substance abuse",
            "Personality traits (low self-esteem, pessimism)"
        ],
        symptoms: [
            "Persistent sad, anxious, or empty mood",
            "Loss of interest in activities once enjoyed",
            "Feelings of hopelessness or pessimism",
            "Irritability",
            "Fatigue and decreased energy",
            "Difficulty concentrating or making decisions",
            "Insomnia or oversleeping",
            "Appetite and weight changes",
            "Thoughts of death or suicide",
            "Physical symptoms (headaches, digestive problems)"
        ],
        diagnosis: [
            "Physical examination",
            "Lab tests (to rule out medical conditions)",
            "Psychiatric evaluation",
            "DSM-5 criteria assessment",
            "Psychological questionnaires",
            "Mood tracking"
        ],
        treatment: [
            "Psychotherapy (cognitive behavioral therapy, interpersonal therapy)",
            "Antidepressant medications",
            "Electroconvulsive therapy (for severe cases)",
            "Transcranial magnetic stimulation",
            "Light therapy (for seasonal depression)",
            "Exercise and physical activity",
            "Lifestyle changes",
            "Support groups"
        ],
        prevention: [
            "Stress management techniques",
            "Regular exercise",
            "Maintain social connections",
            "Quality sleep",
            "Healthy diet",
            "Avoid alcohol and recreational drugs",
            "Seek help early for mental health concerns",
            "Mindfulness and meditation"
        ]
    },
    {
        name: "Dementia",
        description: "A group of symptoms affecting memory, thinking and social abilities severely enough to interfere with daily functioning, caused by damage to brain cells.",
        causes: [
            "Alzheimer's disease (most common cause)",
            "Vascular disorders",
            "Lewy body dementia",
            "Frontotemporal dementia",
            "Traumatic brain injury",
            "Infections affecting the brain",
            "Huntington's disease",
            "Parkinson's disease",
            "Creutzfeldt-Jakob disease",
            "Chronic alcohol or drug use"
        ],
        symptoms: [
            "Memory loss",
            "Difficulty communicating or finding words",
            "Difficulty with visual and spatial abilities",
            "Difficulty reasoning or problem-solving",
            "Difficulty handling complex tasks",
            "Difficulty with coordination and motor functions",
            "Confusion and disorientation",
            "Personality changes",
            "Depression",
            "Anxiety",
            "Paranoia",
            "Agitation",
            "Inappropriate behavior"
        ],
        diagnosis: [
            "Medical history and physical examination",
            "Neurological examination",
            "Cognitive and neuropsychological tests",
            "Brain scans (CT, MRI, PET)",
            "Laboratory tests",
            "Psychiatric evaluation",
            "Genetic tests (in some cases)"
        ],
        treatment: [
            "Cholinesterase inhibitors",
            "Memantine",
            "Other medications to treat symptoms",
            "Occupational therapy",
            "Environmental modifications",
            "Cognitive stimulation therapy",
            "Behavioral therapy",
            "Caregiver support and education"
        ],
        prevention: [
            "Regular physical exercise",
            "Healthy diet",
            "Mental stimulation",
            "Quality sleep",
            "Stress management",
            "Social engagement",
            "Avoid smoking and excessive alcohol",
            "Control cardiovascular risk factors",
            "Protect against head injury"
        ]
    },
    {
        name: "Deep Vein Thrombosis (DVT)",
        description: "A blood clot that forms in a deep vein, usually in the leg, that can cause pain and swelling and may lead to serious complications if the clot breaks loose and travels to the lungs.",
        causes: [
            "Prolonged immobility (long flights, bed rest)",
            "Injury or surgery",
            "Pregnancy",
            "Birth control pills or hormone replacement therapy",
            "Being overweight or obese",
            "Smoking",
            "Cancer",
            "Heart failure",
            "Inflammatory bowel disease",
            "Inherited blood clotting disorders",
            "Advanced age",
            "Previous DVT"
        ],
        symptoms: [
            "Swelling in the affected leg",
            "Pain or tenderness in the leg",
            "Red or discolored skin",
            "Warmth in the affected area",
            "Visible surface veins",
            "Leg fatigue",
            "Note: Sometimes no symptoms occur"
        ],
        diagnosis: [
            "Physical examination",
            "Ultrasound",
            "Blood test (D-dimer)",
            "Venography",
            "MRI",
            "CT scan"
        ],
        treatment: [
            "Blood thinners (anticoagulants)",
            "Clot busters (thrombolytics) for severe cases",
            "Filters in the vena cava (if anticoagulants aren't suitable)",
            "Compression stockings",
            "Elevation of the affected leg",
            "Surgery (rarely needed)"
        ],
        prevention: [
            "Stay active and exercise regularly",
            "Maintain a healthy weight",
            "Avoid sitting or standing for long periods",
            "Wear compression stockings if at risk",
            "Move around during long flights or car trips",
            "Follow doctor's recommendations after surgery",
            "Quit smoking",
            "Manage conditions that increase risk"
        ]
    },
    {
        name: "Dyslexia",
        description: "A learning disorder characterized by difficulty reading due to problems identifying speech sounds and learning how they relate to letters and words.",
        causes: [
            "Genetic factors",
            "Brain differences in areas that process language",
            "Hereditary factors (family history)",
            "Environmental factors",
            "Premature birth or low birth weight",
            "Exposure to nicotine, drugs, alcohol, or infection during pregnancy"
        ],
        symptoms: [
            "Late talking",
            "Learning new words slowly",
            "Difficulty forming words correctly",
            "Problems remembering or naming letters, numbers, colors",
            "Difficulty learning nursery rhymes or playing rhyming games",
            "Reading well below the expected level for age",
            "Problems processing and understanding what is heard",
            "Difficulty finding the right word",
            "Problems remembering sequences",
            "Difficulty seeing similarities and differences in letters and words",
            "Inability to sound out unfamiliar words",
            "Difficulty spelling",
            "Avoiding reading activities"
        ],
        diagnosis: [
            "Educational assessment",
            "Vision, hearing and neurological tests",
            "Psychological assessment",
            "Questionnaires and observations",
            "Reading and language tests",
            "IQ tests"
        ],
        treatment: [
            "Educational techniques",
            "Individual education plans",
            "Phonological awareness training",
            "Multisensory structured language education",
            "Assistive technology (text-to-speech, speech-to-text)",
            "Tutoring and specialized instruction",
            "Emotional support",
            "Accommodations in school or workplace"
        ],
        prevention: [
            "Early intervention",
            "Reading to children from an early age",
            "Encouraging language development",
            "Regular vision and hearing screenings",
            "Healthy pregnancy practices",
            "Note: Dyslexia cannot be prevented, but early intervention can reduce its impact"
        ]
    },
    {
        name: "Diverticulitis",
        description: "Inflammation or infection in one or more small pouches (diverticula) that can form in the digestive tract, most commonly in the colon.",
        causes: [
            "Development of diverticula (diverticulosis)",
            "Low-fiber diet",
            "Aging",
            "Obesity",
            "Smoking",
            "Lack of exercise",
            "Certain medications (NSAIDs, steroids)",
            "Genetic factors"
        ],
        symptoms: [
            "Persistent abdominal pain (usually lower left side)",
            "Fever",
            "Nausea",
            "Vomiting",
            "Constipation or diarrhea",
            "Bloating",
            "Rectal bleeding (in some cases)",
            "Tenderness in the abdomen"
        ],
        diagnosis: [
            "Physical examination",
            "Blood tests",
            "Stool tests",
            "CT scan",
            "Colonoscopy (usually after acute phase)",
            "Barium enema X-ray",
            "Ultrasound"
        ],
        treatment: [
            "Antibiotics",
            "Liquid or low-fiber diet during flares",
            "Pain relievers",
            "Rest",
            "Surgery (for complications or recurrent episodes)",
            "Drainage of abscesses",
            "Gradual return to normal diet after recovery"
        ],
        prevention: [
            "High-fiber diet",
            "Plenty of fluids",
            "Regular exercise",
            "Maintain healthy weight",
            "Avoid smoking",
            "Limit red meat",
            "Limit NSAIDs use",
            "Manage stress"
        ]
    },
    {
        name: "Down Syndrome",
        description: "A genetic disorder caused by the presence of all or part of a third copy of chromosome 21, characterized by intellectual disability, developmental delays, and distinctive facial features.",
        causes: [
            "Trisomy 21 (nondisjunction) - most common form",
            "Translocation",
            "Mosaicism",
            "Advanced maternal age increases risk",
            "Genetic predisposition"
        ],
        symptoms: [
            "Flattened facial features",
            "Small head and ears",
            "Short neck",
            "Protruding tongue",
            "Upward slanting eyes",
            "Unusually shaped ears",
            "Poor muscle tone",
            "Broad, short hands with a single crease in the palm",
            "Relatively short fingers",
            "Small stature",
            "Intellectual disabilities",
            "Developmental delays",
            "Higher risk of certain medical conditions (heart defects, hearing loss, etc.)"
        ],
        diagnosis: [
            "Prenatal screening tests (blood tests, ultrasound)",
            "Prenatal diagnostic tests (amniocentesis, chorionic villus sampling)",
            "Physical examination after birth",
            "Chromosomal karyotype"
        ],
        treatment: [
            "Early intervention programs",
            "Speech therapy",
            "Physical therapy",
            "Occupational therapy",
            "Educational support",
            "Treatment for associated medical conditions",
            "Behavioral therapy",
            "Family support services"
        ],
        prevention: [
            "Genetic counseling for high-risk families",
            "Prenatal screening and diagnosis",
            "Note: Down syndrome cannot be prevented, but risk assessment and early intervention are important"
        ]
    },
    {
        name: "Dermatitis",
        description: "Inflammation of the skin characterized by itchy, red, swollen, and sore skin, sometimes with blisters or a rash. There are several types including atopic, contact, and seborrheic dermatitis.",
        causes: [
            "Allergic reactions",
            "Irritating substances",
            "Genetic factors",
            "Environmental factors",
            "Immune system dysfunction",
            "Stress",
            "Hormonal changes",
            "Microorganisms (yeast, bacteria)",
            "Heat and sweating"
        ],
        symptoms: [
            "Itching",
            "Redness",
            "Dry, cracked skin",
            "Swelling",
            "Blisters (in some types)",
            "Flaking or scaling",
            "Oozing or crusting",
            "Thickened skin (in chronic cases)",
            "Darkening of the skin",
            "Pain or tenderness"
        ],
        diagnosis: [
            "Physical examination",
            "Medical history",
            "Patch testing (for allergic contact dermatitis)",
            "Skin biopsy (rarely needed)",
            "Blood tests (to rule out other conditions)"
        ],
        treatment: [
            "Avoiding triggers",
            "Moisturizers",
            "Corticosteroid creams or ointments",
            "Calcineurin inhibitors",
            "Antihistamines for itching",
            "Phototherapy",
            "Antibiotics (if infection is present)",
            "Oral corticosteroids (for severe cases)",
            "Immunosuppressants (for severe cases)"
        ],
        prevention: [
            "Identify and avoid triggers",
            "Use mild soaps and detergents",
            "Moisturize regularly",
            "Avoid hot water for bathing",
            "Wear protective clothing when needed",
            "Manage stress",
            "Use humidifiers in dry environments",
            "Avoid scratching"
        ]
    },
    {
        name: "Dry Eye Syndrome",
        description: "A chronic condition in which the eyes don't produce enough tears or the tears evaporate too quickly, leading to discomfort and potential vision problems.",
        causes: [
            "Age (more common in older adults)",
            "Gender (more common in women, especially after menopause)",
            "Medical conditions (rheumatoid arthritis, diabetes, thyroid disorders)",
            "Medications (antihistamines, decongestants, antidepressants)",
            "Environmental factors (wind, smoke, dry air)",
            "Long-term contact lens use",
            "Prolonged digital screen use",
            "Refractive eye surgeries",
            "Vitamin A deficiency",
            "Meibomian gland dysfunction"
        ],
        symptoms: [
            "Stinging, burning or scratchy sensation",
            "Stringy mucus in or around the eyes",
            "Sensitivity to light",
            "Redness",
            "Feeling like something is in your eye",
            "Difficulty wearing contact lenses",
            "Difficulty with nighttime driving",
            "Watery eyes (the body's response to irritation)",
            "Blurred vision or eye fatigue",
            "Pain in the eyes"
        ],
        diagnosis: [
            "Comprehensive eye examination",
            "Schirmer test (measures tear production)",
            "Tear break-up time test",
            "Staining the cornea and conjunctiva",
            "Tear osmolarity test",
            "Meibomian gland evaluation"
        ],
        treatment: [
            "Over-the-counter artificial tears",
            "Prescription eye drops to increase tear production",
            "Medications to reduce inflammation",
            "Tear duct plugs (punctal plugs)",
            "Meibomian gland expression",
            "Light therapy and eyelid massage",
            "Autologous serum drops",
            "Special contact lenses (scleral lenses)",
            "Lifestyle and environmental modifications"
        ],
        prevention: [
            "Take breaks during computer use (20-20-20 rule)",
            "Position computer screen below eye level",
            "Avoid direct air flow to the eyes",
            "Use a humidifier",
            "Wear wraparound sunglasses outdoors",
            "Stay hydrated",
            "Consume omega-3 fatty acids",
            "Proper contact lens hygiene",
            "Warm compresses for eyelids"
        ]
    },
    {
        name: "Dupuytren's Contracture",
        description: "A hand deformity that causes knots of tissue to form under the skin of the palm, eventually creating a thick cord that can pull one or more fingers into a bent position.",
        causes: [
            "Genetic factors (family history)",
            "Northern European ancestry",
            "Age (more common after 50)",
            "Gender (more common in men)",
            "Diabetes",
            "Smoking and alcohol consumption",
            "Certain medications",
            "Hand trauma or repetitive hand vibration",
            "Liver disease"
        ],
        symptoms: [
            "Nodules or lumps in the palm",
            "Pits or dimples in the skin of the palm",
            "Thickened skin on the palm",
            "Cords of tissue that cause fingers to bend toward the palm",
            "Inability to fully straighten affected fingers",
            "Difficulty placing hand flat on a surface",
            "Challenges with certain activities (putting hands in pockets, shaking hands)",
            "Ring and little fingers most commonly affected",
            "Usually painless or minimal pain"
        ],
        diagnosis: [
            "Physical examination",
            "Medical history",
            "Tabletop test (inability to lay hand flat on table)",
            "Measurement of degree of contracture",
            "Assessment of hand function"
        ],
        treatment: [
            "Observation for mild cases",
            "Needle aponeurotomy (breaking up cords with a needle)",
            "Collagenase injections to dissolve cords",
            "Surgery (fasciectomy) to remove affected tissue",
            "Physical therapy after treatment",
            "Splinting",
            "Radiation therapy (early disease)"
        ],
        prevention: [
            "No proven prevention methods",
            "Avoid smoking",
            "Moderate alcohol consumption",
            "Hand exercises may help maintain flexibility",
            "Early treatment when symptoms appear",
            "Regular monitoring if at high risk"
        ]
    },
    // E
    {
        name: "Eczema (Atopic Dermatitis)",
        description: "A chronic skin condition characterized by itchy, inflamed skin.",
        causes: [
            "Genetic factors",
            "Immune system dysfunction",
            "Environmental triggers",
            "Skin barrier defects",
            "Allergies"
        ],
        symptoms: [
            "Dry, sensitive skin",
            "Intense itching",
            "Red to brownish-gray patches",
            "Small, raised bumps",
            "Thickened, cracked, or scaly skin",
            "Raw, sensitive skin from scratching"
        ],
        diagnosis: [
            "Physical examination",
            "Medical history",
            "Patch testing for allergies",
            "Skin biopsy (rarely needed)"
        ],
        treatment: [
            "Moisturizers",
            "Topical corticosteroids",
            "Topical calcineurin inhibitors",
            "Oral antihistamines",
            "Phototherapy",
            "Oral or injectable immunosuppressants (for severe cases)",
            "Biologics"
        ],
        prevention: [
            "Identify and avoid triggers",
            "Regular moisturizing",
            "Take shorter baths or showers with warm (not hot) water",
            "Use gentle soaps",
            "Pat dry instead of rubbing",
            "Wear soft, breathable fabrics",
            "Manage stress"
        ]
    },
    {
        name: "Endometriosis",
        description: "A disorder in which tissue similar to the tissue that normally lines the inside of the uterus (the endometrium) grows outside the uterus, causing pain and potential fertility issues.",
        causes: [
            "Retrograde menstruation",
            "Cellular metaplasia",
            "Embryonic cell transformation",
            "Surgical scar implantation",
            "Endometrial cell transport via blood or lymphatic vessels",
            "Immune system dysfunction",
            "Genetic factors",
            "Environmental factors"
        ],
        symptoms: [
            "Painful periods (dysmenorrhea)",
            "Pain during or after sex",
            "Pain with bowel movements or urination",
            "Excessive bleeding during periods or between periods",
            "Infertility",
            "Fatigue",
            "Diarrhea, constipation, bloating or nausea during menstrual periods",
            "Lower back and abdominal pain"
        ],
        diagnosis: [
            "Pelvic examination",
            "Ultrasound",
            "Magnetic resonance imaging (MRI)",
            "Laparoscopy (the definitive method)",
            "Biopsy",
            "CA-125 blood test"
        ],
        treatment: [
            "Pain medications",
            "Hormone therapy (birth control pills, progestin therapy, gonadotropin-releasing hormone agonists)",
            "Conservative surgery to remove endometrial implants",
            "Hysterectomy with removal of ovaries (in severe cases)",
            "Fertility treatment (if trying to become pregnant)",
            "Alternative therapies (acupuncture, chiropractic care)",
            "Lifestyle modifications"
        ],
        prevention: [
            "No known prevention",
            "Regular exercise",
            "Avoiding large amounts of alcohol and caffeine",
            "Reducing exposure to environmental chemicals",
            "Early diagnosis and treatment to prevent progression",
            "Hormonal birth control may reduce risk"
        ]
    },
    {
        name: "Epilepsy",
        description: "A neurological disorder characterized by recurrent seizures, which are sudden surges of electrical activity in the brain causing changes in behavior, movements, feelings, and levels of consciousness.",
        causes: [
            "Genetic factors",
            "Head trauma",
            "Brain conditions (tumors, strokes)",
            "Infectious diseases (meningitis, AIDS, viral encephalitis)",
            "Prenatal injury or brain malformation",
            "Developmental disorders (autism, neurofibromatosis)",
            "Fever-induced seizures (in children)",
            "Unknown causes (in many cases)"
        ],
        symptoms: [
            "Temporary confusion",
            "Staring spells",
            "Uncontrollable jerking movements of arms and legs",
            "Loss of consciousness or awareness",
            "Psychic symptoms (fear, anxiety, déjà vu)",
            "Cognitive or emotional symptoms (fear, anxiety, déjà vu)",
            "Altered senses (taste, smell, vision, hearing)",
            "Symptoms vary depending on seizure type"
        ],
        diagnosis: [
            "Neurological examination",
            "Blood tests",
            "Electroencephalogram (EEG)",
            "Computerized tomography (CT scan)",
            "Magnetic resonance imaging (MRI)",
            "Positron emission tomography (PET)",
            "Single-photon emission computerized tomography (SPECT)",
            "Neuropsychological tests"
        ],
        treatment: [
            "Anti-seizure medications",
            "Surgery to remove the area of the brain causing seizures",
            "Vagus nerve stimulation",
            "Responsive neurostimulation",
            "Deep brain stimulation",
            "Dietary therapy (ketogenic diet)",
            "Lifestyle modifications",
            "Rescue medications for cluster seizures"
        ],
        prevention: [
            "Take medications as prescribed",
            "Get adequate sleep",
            "Wear a medical alert bracelet",
            "Avoid seizure triggers (if known)",
            "Maintain regular medical care",
            "Avoid excessive alcohol consumption",
            "Wear protective gear during activities with risk of head injury",
            "Prenatal care to prevent complications that might lead to epilepsy"
        ]
    },
    {
        name: "Emphysema",
        description: "A lung condition that causes shortness of breath due to damage to the air sacs (alveoli) in the lungs, often as part of chronic obstructive pulmonary disease (COPD).",
        causes: [
            "Smoking (primary cause)",
            "Long-term exposure to airborne irritants",
            "Alpha-1 antitrypsin deficiency (genetic)",
            "Air pollution",
            "Occupational exposure to dust and chemicals",
            "Age (natural lung aging)",
            "Second-hand smoke exposure"
        ],
        symptoms: [
            "Shortness of breath, especially during physical activity",
            "Chronic cough",
            "Wheezing",
            "Chest tightness",
            "Frequent respiratory infections",
            "Fatigue",
            "Unintended weight loss",
            "Barrel-shaped chest",
            "Bluish discoloration of lips or fingernail beds (cyanosis)"
        ],
        diagnosis: [
            "Physical examination",
            "Pulmonary function tests (spirometry)",
            "Chest X-ray",
            "CT scan",
            "Arterial blood gas analysis",
            "Pulse oximetry",
            "Alpha-1 antitrypsin deficiency test"
        ],
        treatment: [
            "Smoking cessation",
            "Bronchodilators",
            "Inhaled steroids",
            "Antibiotics for infections",
            "Pulmonary rehabilitation",
            "Supplemental oxygen",
            "Lung volume reduction surgery",
            "Lung transplant (in severe cases)",
            "Bullectomy (removal of large air spaces)"
        ],
        prevention: [
            "Don't smoke or stop smoking",
            "Avoid secondhand smoke",
            "Protect against occupational exposure",
            "Protect against indoor and outdoor air pollution",
            "Get vaccinated against respiratory infections",
            "Prevent respiratory infections",
            "Exercise regularly"
        ]
    },
    {
        name: "Ear Infection (Otitis Media)",
        description: "An infection of the middle ear, the air-filled space behind the eardrum containing the tiny vibrating bones of the ear, often caused by bacteria or viruses.",
        causes: [
            "Bacteria (Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis)",
            "Viruses (respiratory syncytial virus, rhinovirus, influenza)",
            "Eustachian tube dysfunction",
            "Upper respiratory infections",
            "Allergies",
            "Enlarged adenoids",
            "Tobacco smoke exposure",
            "Bottle-feeding while lying down (in infants)"
        ],
        symptoms: [
            "Ear pain",
            "Difficulty hearing or responding to sounds",
            "Fluid draining from the ear",
            "Difficulty sleeping",
            "Fever",
            "Headache",
            "Loss of balance",
            "Irritability in infants and young children",
            "Tugging or pulling at an ear",
            "Loss of appetite"
        ],
        diagnosis: [
            "Physical examination with otoscope",
            "Pneumatic otoscopy (checking eardrum movement)",
            "Tympanometry (measuring eardrum movement)",
            "Acoustic reflectometry (measuring sound reflection)",
            "Tympanocentesis (removing fluid for testing)",
            "Hearing tests"
        ],
        treatment: [
            "Antibiotics (for bacterial infections)",
            "Pain management (over-the-counter pain relievers)",
            "Ear drops for pain",
            "Observation (watchful waiting) for mild cases",
            "Ear tubes (tympanostomy tubes) for recurrent infections",
            "Adenoid removal (if enlarged adenoids are contributing)",
            "Warm compress to relieve pain"
        ],
        prevention: [
            "Breastfeeding infants",
            "Avoid bottle-feeding while lying down",
            "Prevent common colds and respiratory infections",
            "Practice good hand hygiene",
            "Avoid secondhand smoke",
            "Vaccinations (pneumococcal, influenza)",
            "Manage allergies",
            "Avoid pacifier use after 6 months of age"
        ]
    },
    {
        name: "Encephalitis",
        description: "Inflammation of the brain tissue, usually caused by viral infection, but can also be caused by bacterial infection, fungi, parasites, or autoimmune reactions.",
        causes: [
            "Herpes simplex virus",
            "Enteroviruses",
            "Arboviruses (mosquito or tick-borne)",
            "Rabies virus",
            "Childhood infections (measles, mumps)",
            "Bacterial infections (rare)",
            "Fungal infections (rare)",
            "Parasitic infections (rare)",
            "Autoimmune encephalitis"
        ],
        symptoms: [
            "Fever",
            "Headache",
            "Vomiting",
            "Confusion or disorientation",
            "Seizures",
            "Stiff neck",
            "Light sensitivity",
            "Drowsiness or lethargy",
            "Unconsciousness",
            "Memory problems",
            "Speech or hearing problems",
            "Muscle weakness or paralysis"
        ],
        diagnosis: [
            "Neurological examination",
            "Brain imaging (MRI, CT scan)",
            "Spinal tap (lumbar puncture)",
            "Blood tests",
            "Electroencephalogram (EEG)",
            "Brain biopsy (rare)"
        ],
        treatment: [
            "Antiviral medications (for viral causes)",
            "Antibiotics (for bacterial causes)",
            "Antifungal medications (for fungal causes)",
            "Antiparasitic medications (for parasitic causes)",
            "Immunotherapy (for autoimmune causes)",
            "Corticosteroids to reduce inflammation",
            "Anticonvulsants for seizures",
            "Sedatives for restlessness",
            "Mechanical ventilation (if breathing affected)",
            "Supportive care (fluids, nutrition)"
        ],
        prevention: [
            "Vaccinations (measles, mumps, rubella, Japanese encephalitis)",
            "Avoid mosquito and tick bites",
            "Practice good hygiene",
            "Cook food thoroughly",
            "Avoid contact with sick individuals",
            "Protect against rabies (avoid contact with wild animals)",
            "Proper handwashing"
        ]
    },
    {
        name: "Erectile Dysfunction",
        description: "The inability to get or maintain an erection firm enough for sexual intercourse, often caused by physical conditions, psychological factors, or a combination of both.",
        causes: [
            "Heart disease",
            "Clogged blood vessels (atherosclerosis)",
            "High cholesterol or high blood pressure",
            "Diabetes",
            "Obesity",
            "Metabolic syndrome",
            "Parkinson's disease",
            "Multiple sclerosis",
            "Certain prescription medications",
            "Tobacco use",
            "Alcoholism and substance abuse",
            "Sleep disorders",
            "Treatments for prostate cancer or enlarged prostate",
            "Surgeries or injuries affecting the pelvic area or spinal cord",
            "Psychological causes (stress, anxiety, depression, relationship problems)"
        ],
        symptoms: [
            "Trouble getting an erection",
            "Trouble maintaining an erection",
            "Reduced sexual desire",
            "Premature or delayed ejaculation",
            "Anxiety or stress about sexual performance",
            "Relationship problems due to stress and anxiety about ED"
        ],
        diagnosis: [
            "Medical and sexual history",
            "Physical examination",
            "Blood tests (check for diabetes, heart disease, low testosterone)",
            "Urine tests",
            "Ultrasound",
            "Psychological examination",
            "Overnight erection test",
            "Injection test"
        ],
        treatment: [
            "Oral medications (PDE5 inhibitors)",
            "Self-injections",
            "Urethral suppositories",
            "Testosterone replacement (if levels are low)",
            "Penis pumps (vacuum erection devices)",
            "Penile implants",
            "Psychological counseling",
            "Lifestyle changes",
            "Exercise",
            "Treating underlying conditions"
        ],
        prevention: [
            "Manage chronic health conditions",
            "Stop smoking",
            "Reduce alcohol consumption",
            "Exercise regularly",
            "Maintain a healthy weight",
            "Reduce stress",
            "Get help for anxiety or depression",
            "Regular check-ups with healthcare provider"
        ]
    },
    {
        name: "Ebola Virus Disease",
        description: "A rare but severe and often fatal illness caused by Ebola virus infection, characterized by fever, bleeding, and damage to multiple organ systems.",
        causes: [
            "Ebola virus (filovirus family)",
            "Contact with infected animals (fruit bats, monkeys, apes)",
            "Contact with bodily fluids of infected people",
            "Contact with contaminated objects",
            "Sexual transmission",
            "Laboratory exposure"
        ],
        symptoms: [
            "Sudden onset of fever",
            "Severe headache",
            "Muscle pain",
            "Fatigue",
            "Sore throat",
            "Vomiting",
            "Diarrhea",
            "Rash",
            "Impaired kidney and liver function",
            "Internal and external bleeding",
            "Low white blood cell and platelet counts",
            "Elevated liver enzymes"
        ],
        diagnosis: [
            "Blood tests (ELISA, PCR)",
            "Antigen-capture detection tests",
            "Antibody-capture enzyme-linked immunosorbent assay (ELISA)",
            "Serum neutralization test",
            "Reverse transcriptase polymerase chain reaction (RT-PCR) assay",
            "Electron microscopy",
            "Virus isolation by cell culture"
        ],
        treatment: [
            "Supportive care (fluids, electrolytes)",
            "Maintaining oxygen status and blood pressure",
            "Treating other infections if they occur",
            "Antiviral medications (remdesivir, others under investigation)",
            "Monoclonal antibody treatments (Inmazeb, Ebanga)",
            "Experimental treatments in outbreaks",
            "Convalescent plasma"
        ],
        prevention: [
            "Avoid contact with infected people or animals",
            "Proper hand hygiene",
            "Proper handling of potentially contaminated materials",
            "Avoid consumption of bushmeat",
            "Proper burial practices during outbreaks",
            "Vaccination (rVSV-ZEBOV) for high-risk individuals",
            "Isolation of infected individuals",
            "Contact tracing during outbreaks",
            "Use of personal protective equipment by healthcare workers"
        ]
    },
    {
        name: "Esophageal Cancer",
        description: "Cancer that occurs in the esophagus, the long, hollow tube that runs from the throat to the stomach, usually beginning in the cells that line the inside of the esophagus.",
        causes: [
            "Gastroesophageal reflux disease (GERD)",
            "Barrett's esophagus",
            "Smoking",
            "Heavy alcohol consumption",
            "Obesity",
            "Diet low in fruits and vegetables",
            "Drinking very hot liquids regularly",
            "Achalasia (difficulty swallowing due to esophageal nerve problems)",
            "Human papillomavirus (HPV) infection",
            "Radiation treatment to the chest or upper abdomen",
            "Age (more common in older adults)"
        ],
        symptoms: [
            "Difficulty swallowing (dysphagia)",
            "Weight loss without trying",
            "Chest pain, pressure or burning",
            "Worsening indigestion or heartburn",
            "Coughing or hoarseness",
            "Vomiting",
            "Coughing up blood",
            "Fatigue",
            "Bone pain (if cancer has spread)"
        ],
        diagnosis: [
            "Barium swallow X-ray",
            "Endoscopy",
            "Biopsy",
            "Endoscopic ultrasound",
            "CT scan",
            "PET scan",
            "Bronchoscopy (if lung involvement is suspected)",
            "Thoracoscopy and laparoscopy",
            "Molecular testing of the tumor"
        ],
        treatment: [
            "Surgery (esophagectomy)",
            "Radiation therapy",
            "Chemotherapy",
            "Targeted drug therapy",
            "Immunotherapy",
            "Electrocoagulation",
            "Laser therapy",
            "Photodynamic therapy",
            "Esophageal stent placement",
            "Palliative care"
        ],
        prevention: [
            "Quit smoking",
            "Drink alcohol in moderation or not at all",
            "Maintain a healthy weight",
            "Eat a diet rich in fruits and vegetables",
            "Treat GERD and Barrett's esophagus",
            "Regular screening for those at high risk",
            "Avoid very hot beverages",
            "HPV vaccination (may help prevent some cases)"
        ]
    },
    {
        name: "Endocarditis",
        description: "An infection of the inner lining of the heart chambers and valves (endocardium), usually caused by bacteria, fungi or other germs that enter the bloodstream and attach to damaged areas of the heart.",
        causes: [
            "Bacteria in the bloodstream (most common)",
            "Fungal infections (less common)",
            "Pre-existing heart conditions (damaged or artificial valves)",
            "Intravenous drug use",
            "Dental procedures",
            "Indwelling catheters or medical devices",
            "Chronic skin infections",
            "Compromised immune system"
        ],
        symptoms: [
            "Fever and chills",
            "Fatigue",
            "Aching joints and muscles",
            "Night sweats",
            "Shortness of breath",
            "Chest pain when breathing",
            "Swelling in feet, legs or abdomen",
            "Heart murmur",
            "Small, tender nodules on fingers or toes",
            "Red, painful lesions under fingernails (splinter hemorrhages)",
            "Petechiae (tiny purple or red spots on skin)"
        ],
        diagnosis: [
            "Blood cultures",
            "Echocardiogram (transthoracic or transesophageal)",
            "Electrocardiogram (ECG)",
            "Chest X-ray",
            "CT scan or MRI",
            "Complete blood count",
            "C-reactive protein test or erythrocyte sedimentation rate"
        ],
        treatment: [
            "Antibiotics (intravenous, often for 2-6 weeks)",
            "Antifungal medications (for fungal endocarditis)",
            "Surgery to repair or replace damaged valves",
            "Surgery to drain abscesses",
            "Treatment of complications",
            "Long-term antibiotic therapy in some cases"
        ],
        prevention: [
            "Antibiotic prophylaxis before certain dental or surgical procedures (for high-risk individuals)",
            "Good oral hygiene",
            "Avoid intravenous drug use",
            "Prompt treatment of infections",
            "Regular medical care for heart conditions",
            "Proper wound care",
            "Regular dental check-ups"
        ]
    },
    // F
    {
        name: "Fibromyalgia",
        description: "A disorder characterized by widespread musculoskeletal pain accompanied by fatigue, sleep, memory and mood issues.",
        causes: [
            "Genetic factors",
            "Infections",
            "Physical or emotional trauma",
            "Central nervous system abnormalities",
            "Stress"
        ],
        symptoms: [
            "Widespread pain",
            "Fatigue",
            "Cognitive difficulties ('fibro fog')",
            "Sleep disturbances",
            "Headaches",
            "Depression or anxiety",
            "Irritable bowel syndrome",
            "Painful menstrual periods"
        ],
        diagnosis: [
            "Medical history",
            "Physical examination",
            "Widespread pain index (WPI)",
            "Symptom severity scale (SS)",
            "Tests to rule out other conditions"
        ],
        treatment: [
            "Pain medications",
            "Antidepressants",
            "Anti-seizure drugs",
            "Physical therapy",
            "Occupational therapy",
            "Counseling",
            "Stress management techniques"
        ],
        prevention: [
            "Regular exercise",
            "Stress reduction",
            "Good sleep hygiene",
            "Healthy diet",
            "Pacing activities"
        ]
    },
    {
        name: "Food Allergies",
        description: "An immune system reaction that occurs after eating a certain food, causing symptoms ranging from mild to severe.",
        causes: [
            "Immune system overreaction to food proteins",
            "Genetic predisposition",
            "Environmental factors",
            "Cross-reactivity between allergens"
        ],
        symptoms: [
            "Tingling or itching in the mouth",
            "Hives, itching or eczema",
            "Swelling of lips, face, tongue, throat or other body parts",
            "Wheezing, nasal congestion or trouble breathing",
            "Abdominal pain, diarrhea, nausea or vomiting",
            "Dizziness, lightheadedness or fainting",
            "Anaphylaxis (severe, potentially life-threatening reaction)"
        ],
        diagnosis: [
            "Detailed medical history",
            "Skin prick tests",
            "Blood tests (IgE antibody test)",
            "Elimination diet",
            "Oral food challenge",
            "Food diary"
        ],
        treatment: [
            "Strict avoidance of allergen",
            "Antihistamines for mild symptoms",
            "Epinephrine auto-injector for severe reactions",
            "Emergency medical care for anaphylaxis",
            "Oral immunotherapy (in some cases)"
        ],
        prevention: [
            "Strict avoidance of trigger foods",
            "Reading food labels carefully",
            "Informing restaurants about allergies",
            "Wearing medical alert bracelet",
            "Having emergency medication available",
            "Early introduction of potential allergens to infants (under medical supervision)"
        ]
    },
    {
        name: "Flu (Influenza)",
        description: "A contagious respiratory illness caused by influenza viruses that infect the nose, throat, and sometimes the lungs.",
        causes: [
            "Influenza A viruses",
            "Influenza B viruses",
            "Influenza C viruses",
            "Airborne transmission",
            "Direct contact with infected individuals"
        ],
        symptoms: [
            "Fever or feeling feverish/chills",
            "Cough",
            "Sore throat",
            "Runny or stuffy nose",
            "Muscle or body aches",
            "Headaches",
            "Fatigue",
            "Vomiting and diarrhea (more common in children)"
        ],
        diagnosis: [
            "Physical examination",
            "Rapid influenza diagnostic tests",
            "Viral culture",
            "PCR testing",
            "Immunofluorescence tests"
        ],
        treatment: [
            "Antiviral medications (oseltamivir, zanamivir, peramivir, baloxavir)",
            "Rest and hydration",
            "Over-the-counter pain relievers",
            "Decongestants",
            "Humidifier use"
        ],
        prevention: [
            "Annual flu vaccination",
            "Regular handwashing",
            "Avoiding close contact with sick people",
            "Covering coughs and sneezes",
            "Staying home when sick",
            "Cleaning and disinfecting surfaces"
        ]
    },
    {
        name: "Fractures",
        description: "A break in a bone caused by force, trauma, or a medical condition that weakens the bone.",
        causes: [
            "Traumatic injury",
            "Overuse or repetitive motion",
            "Osteoporosis",
            "Bone cancer",
            "Osteogenesis imperfecta"
        ],
        symptoms: [
            "Pain that intensifies with movement",
            "Swelling",
            "Bruising",
            "Deformity",
            "Inability to bear weight",
            "Limited mobility",
            "Grinding sensation (crepitus)",
            "Audible crack at time of injury"
        ],
        diagnosis: [
            "Physical examination",
            "X-rays",
            "CT scan",
            "MRI",
            "Bone scan"
        ],
        treatment: [
            "Immobilization (cast, splint, brace)",
            "Reduction (realignment of bone)",
            "Pain management",
            "Surgery (internal or external fixation)",
            "Physical therapy",
            "Bone stimulation"
        ],
        prevention: [
            "Safety measures during activities",
            "Proper protective equipment",
            "Fall prevention",
            "Adequate calcium and vitamin D intake",
            "Weight-bearing exercise",
            "Treatment of osteoporosis",
            "Regular check-ups"
        ]
    },
    {
        name: "Fatty Liver Disease",
        description: "A condition characterized by the accumulation of fat in the liver, which can lead to liver damage and cirrhosis if not addressed.",
        causes: [
            "Obesity",
            "Insulin resistance",
            "High blood sugar",
            "High levels of fats in the blood",
            "Rapid weight loss",
            "Excessive alcohol consumption",
            "Certain medications",
            "Genetic factors"
        ],
        symptoms: [
            "Often asymptomatic in early stages",
            "Fatigue",
            "Pain or discomfort in the upper right abdomen",
            "Enlarged liver",
            "Unexplained weight loss",
            "Weakness",
            "Jaundice (in advanced cases)",
            "Fluid buildup in the abdomen (ascites)"
        ],
        diagnosis: [
            "Blood tests for liver function",
            "Imaging tests (ultrasound, CT scan, MRI)",
            "Transient elastography (FibroScan)",
            "Liver biopsy"
        ],
        treatment: [
            "Weight loss",
            "Dietary changes",
            "Regular exercise",
            "Diabetes management",
            "Cholesterol management",
            "Avoiding alcohol",
            "Medications (vitamin E, pioglitazone)",
            "Liver transplant (in severe cases)"
        ],
        prevention: [
            "Maintaining healthy weight",
            "Regular exercise",
            "Balanced diet",
            "Limited alcohol consumption",
            "Diabetes management",
            "Regular health check-ups"
        ]
    },
    {
        name: "Fetal Alcohol Spectrum Disorders",
        description: "A group of conditions that can occur in a person whose mother consumed alcohol during pregnancy, causing physical, behavioral, and learning problems.",
        causes: [
            "Maternal alcohol consumption during pregnancy",
            "Alcohol crossing the placenta to the fetus",
            "Disruption of normal fetal development",
            "Timing, frequency, and amount of alcohol exposure"
        ],
        symptoms: [
            "Abnormal facial features",
            "Small head size",
            "Shorter-than-average height",
            "Low body weight",
            "Poor coordination",
            "Hyperactive behavior",
            "Learning disabilities",
            "Speech and language delays",
            "Intellectual disability",
            "Poor reasoning and judgment skills",
            "Sleep and sucking problems as a baby",
            "Vision or hearing problems",
            "Heart, kidney, or bone problems"
        ],
        diagnosis: [
            "Physical examination",
            "Neurodevelopmental evaluation",
            "Maternal alcohol history",
            "Facial feature analysis",
            "Cognitive and behavioral assessments",
            "Brain imaging"
        ],
        treatment: [
            "No cure, but early intervention can help",
            "Medication for symptoms",
            "Behavior and education therapy",
            "Parent training",
            "Special education and social services",
            "Alternative approaches (art therapy, animal therapy)",
            "Adult vocational and life skills training"
        ],
        prevention: [
            "Complete abstinence from alcohol during pregnancy",
            "Avoiding alcohol when trying to get pregnant",
            "Birth control use when drinking alcohol",
            "Alcohol treatment programs",
            "Public education and awareness"
        ]
    },
    {
        name: "Fungal Infections",
        description: "Infections caused by fungi that can affect the skin, nails, lungs, or other parts of the body.",
        causes: [
            "Dermatophytes (ringworm, athlete's foot, jock itch)",
            "Candida (thrush, vaginal yeast infections)",
            "Aspergillus (aspergillosis)",
            "Cryptococcus (cryptococcosis)",
            "Histoplasma (histoplasmosis)",
            "Weakened immune system",
            "Antibiotics that disrupt normal flora",
            "Warm, moist environments"
        ],
        symptoms: [
            "Skin rash or redness",
            "Itching",
            "Scaling or flaking skin",
            "White patches in mouth or throat",
            "Vaginal itching and discharge",
            "Nail discoloration or thickening",
            "Fever (in systemic infections)",
            "Cough or chest pain (in lung infections)",
            "Headache (in fungal meningitis)"
        ],
        diagnosis: [
            "Physical examination",
            "Skin scrapings or nail clippings",
            "KOH preparation",
            "Fungal culture",
            "Blood tests",
            "Biopsy",
            "Imaging studies for internal infections"
        ],
        treatment: [
            "Topical antifungal medications",
            "Oral antifungal medications",
            "Intravenous antifungal medications",
            "Keeping affected areas clean and dry",
            "Proper hygiene",
            "Immune system support"
        ],
        prevention: [
            "Good hygiene practices",
            "Keeping skin clean and dry",
            "Avoiding sharing personal items",
            "Wearing breathable fabrics",
            "Using antifungal powders in susceptible areas",
            "Wearing shoes in public showers and locker rooms",
            "Maintaining good overall health"
        ]
    },
    {
        name: "Fibrocystic Breast Changes",
        description: "Common, benign changes in breast tissue that cause lumpiness, tenderness, and sometimes pain, typically related to hormonal fluctuations.",
        causes: [
            "Hormonal fluctuations during menstrual cycle",
            "Excess estrogen",
            "Fluid accumulation in breast cysts",
            "Ductal hyperplasia",
            "Fibrosis (thickening of breast tissue)"
        ],
        symptoms: [
            "Breast lumps or areas of thickening",
            "Breast tenderness or pain",
            "Green or dark brown nipple discharge",
            "Changes in breast size or fullness",
            "Symptoms that worsen before menstruation",
            "Symptoms that improve after menstruation"
        ],
        diagnosis: [
            "Clinical breast examination",
            "Mammogram",
            "Breast ultrasound",
            "Fine-needle aspiration",
            "Core needle biopsy",
            "Excisional biopsy (if cancer suspected)"
        ],
        treatment: [
            "Over-the-counter pain relievers",
            "Oral contraceptives",
            "Danazol (for severe cases)",
            "Tamoxifen (for severe cases)",
            "Surgical removal of cysts (rarely needed)",
            "Wearing a supportive bra"
        ],
        prevention: [
            "Limiting caffeine intake",
            "Reducing salt intake",
            "Taking vitamin E supplements",
            "Wearing a supportive bra",
            "Regular breast self-exams",
            "Regular clinical breast exams",
            "Following recommended mammogram schedule"
        ]
    },
    {
        name: "Frontotemporal Dementia",
        description: "A group of disorders caused by progressive nerve cell loss in the brain's frontal or temporal lobes, affecting behavior, personality, language, and movement.",
        causes: [
            "Abnormal protein buildup in the brain",
            "Genetic mutations",
            "Family history",
            "Tau protein abnormalities",
            "TDP-43 protein abnormalities",
            "FUS protein abnormalities"
        ],
        symptoms: [
            "Behavioral changes (inappropriate actions, loss of empathy)",
            "Personality changes",
            "Lack of judgment and inhibition",
            "Apathy",
            "Compulsive or repetitive behavior",
            "Language problems (difficulty speaking or understanding)",
            "Movement disorders (tremor, rigidity, muscle spasms)",
            "Memory problems (typically occur later than in Alzheimer's)"
        ],
        diagnosis: [
            "Medical history and physical examination",
            "Neurological examination",
            "Neuropsychological testing",
            "Brain imaging (MRI, CT, PET)",
            "Genetic testing",
            "Blood tests (to rule out other conditions)",
            "Cerebrospinal fluid analysis"
        ],
        treatment: [
            "No cure available",
            "Medications for behavioral symptoms",
            "Antidepressants for mood symptoms",
            "Antipsychotics (with caution)",
            "Speech therapy",
            "Occupational therapy",
            "Physical therapy",
            "Support groups and counseling"
        ],
        prevention: [
            "No known prevention",
            "Genetic counseling for families with history",
            "Maintaining brain health through exercise",
            "Cognitive stimulation",
            "Healthy diet",
            "Social engagement"
        ]
    },
    {
        name: "Fibroids (Uterine Fibroids)",
        description: "Noncancerous growths of the uterus that often appear during childbearing years, ranging from tiny seedlings to bulky masses that can distort the uterus.",
        causes: [
            "Genetic factors",
            "Hormonal influences (estrogen and progesterone)",
            "Extracellular matrix (ECM) overproduction",
            "Growth factors",
            "Family history"
        ],
        symptoms: [
            "Heavy menstrual bleeding",
            "Menstrual periods lasting more than a week",
            "Pelvic pressure or pain",
            "Frequent urination",
            "Difficulty emptying the bladder",
            "Constipation",
            "Backache or leg pains",
            "Pain during intercourse",
            "Enlarged abdomen or uterus"
        ],
        diagnosis: [
            "Pelvic examination",
            "Ultrasound",
            "MRI",
            "Hysterosalpingography",
            "Hysteroscopy",
            "Endometrial biopsy",
            "Blood tests to check for anemia"
        ],
        treatment: [
            "Watchful waiting",
            "Medications to regulate hormones",
            "Gonadotropin-releasing hormone (GnRH) agonists",
            "Progestin-releasing intrauterine device (IUD)",
            "Tranexamic acid for heavy bleeding",
            "Nonsteroidal anti-inflammatory drugs (NSAIDs)",
            "Myomectomy (surgical removal of fibroids)",
            "Hysterectomy (removal of the uterus)",
            "Uterine artery embolization",
            "Focused ultrasound surgery",
            "Radiofrequency ablation"
        ],
        prevention: [
            "No known prevention",
            "Maintaining healthy weight",
            "Regular exercise",
            "Balanced diet rich in fruits and vegetables",
            "Limiting alcohol consumption",
            "Reducing red meat consumption"
        ]
    },
    // G
    {
        name: "Gastroesophageal Reflux Disease (GERD)",
        description: "A digestive disorder that affects the lower esophageal sphincter, causing stomach acid to flow back into the esophagus.",
        causes: [
            "Hiatal hernia",
            "Weak lower esophageal sphincter",
            "Obesity",
            "Pregnancy",
            "Smoking",
            "Certain foods and beverages",
            "Medications"
        ],
        symptoms: [
            "Heartburn",
            "Regurgitation of food or sour liquid",
            "Difficulty swallowing",
            "Feeling of a lump in the throat",
            "Chest pain, pressure or burning",
            "Worsening indigestion or heartburn",
            "Coughing or hoarseness",
            "Vomiting",
            "Coughing up blood"
        ],
        diagnosis: [
            "Medical history",
            "Upper endoscopy",
            "Ambulatory acid (pH) probe test",
            "Esophageal manometry",
            "X-ray of the upper digestive system"
        ],
        treatment: [
            "Antacids",
            "H-2-receptor blockers",
            "Proton pump inhibitors",
            "Baclofen",
            "Surgical procedures (fundoplication, LINX device)"
        ],
        prevention: [
            "Maintain healthy weight",
            "Avoid trigger foods and beverages",
            "Eat smaller meals",
            "Don't lie down after eating",
            "Elevate the head of your bed",
            "Quit smoking",
            "Avoid tight-fitting clothes"
        ]
    },
    {
        name: "Gallstones",
        description: "Hardened deposits of digestive fluid that can form in the gallbladder, varying in size from as small as a grain of sand to as large as a golf ball.",
        causes: [
            "Too much cholesterol in bile",
            "Too much bilirubin in bile",
            "Gallbladder not emptying correctly",
            "Obesity",
            "Rapid weight loss",
            "High-fat, high-cholesterol, low-fiber diet",
            "Diabetes",
            "Family history",
            "Age (over 40)",
            "Female gender",
            "Certain medications"
        ],
        symptoms: [
            "Sudden and rapidly intensifying pain in the upper right abdomen",
            "Pain in the center of the abdomen, below the breastbone",
            "Back pain between the shoulder blades",
            "Pain in the right shoulder",
            "Nausea or vomiting",
            "Fever or chills",
            "Yellowing of skin and eyes (jaundice)",
            "Clay-colored stools"
        ],
        diagnosis: [
            "Abdominal ultrasound",
            "CT scan",
            "Magnetic resonance imaging (MRI)",
            "Endoscopic retrograde cholangiopancreatography (ERCP)",
            "Hepatobiliary iminodiacetic acid (HIDA) scan",
            "Blood tests"
        ],
        treatment: [
            "Wait-and-see approach for asymptomatic gallstones",
            "Gallbladder removal surgery (cholecystectomy)",
            "Medications to dissolve gallstones (rarely used)",
            "ERCP with stone removal",
            "Pain medications",
            "Dietary changes"
        ],
        prevention: [
            "Maintain a healthy weight",
            "Avoid rapid weight loss",
            "Eat a balanced diet high in fiber and low in fat",
            "Regular physical activity",
            "Scheduled meals (avoiding skipping)"
        ]
    },
    {
        name: "Glaucoma",
        description: "A group of eye conditions that damage the optic nerve, often caused by abnormally high pressure in the eye, which can lead to vision loss and blindness if untreated.",
        causes: [
            "Increased intraocular pressure",
            "Optic nerve damage",
            "Genetic factors",
            "Age (over 60)",
            "Ethnicity (higher risk in African Americans, Asians, and Hispanics)",
            "Family history",
            "Medical conditions (diabetes, heart disease, high blood pressure)",
            "Eye injuries",
            "Certain medications (corticosteroids)",
            "Thin corneas"
        ],
        symptoms: [
            "Open-angle glaucoma: gradual loss of peripheral vision",
            "Angle-closure glaucoma: severe eye pain, nausea, vomiting, blurred vision, halos around lights, red eyes",
            "Normal-tension glaucoma: often asymptomatic until advanced stages",
            "Congenital glaucoma: cloudy eyes, excessive tearing, sensitivity to light"
        ],
        diagnosis: [
            "Tonometry (measuring intraocular pressure)",
            "Ophthalmoscopy (examining optic nerve)",
            "Perimetry (visual field test)",
            "Gonioscopy (examining drainage angle)",
            "Pachymetry (measuring corneal thickness)",
            "Optical coherence tomography (OCT)"
        ],
        treatment: [
            "Eye drops to reduce pressure",
            "Oral medications",
            "Laser therapy (trabeculoplasty, iridotomy, cyclophotocoagulation)",
            "Surgery (trabeculectomy, drainage tubes, minimally invasive glaucoma surgery)",
            "Regular follow-up with ophthalmologist"
        ],
        prevention: [
            "Regular eye exams (especially after age 40)",
            "Knowledge of family history",
            "Eye protection to prevent injury",
            "Regular exercise (moderate)",
            "Limited caffeine consumption",
            "Proper use of prescribed eye drops"
        ]
    },
    {
        name: "Gout",
        description: "A form of inflammatory arthritis characterized by sudden, severe attacks of pain, swelling, redness and tenderness in the joints, often at the base of the big toe.",
        causes: [
            "Elevated uric acid levels in blood (hyperuricemia)",
            "Underexcretion of uric acid by kidneys",
            "Overproduction of uric acid",
            "Diet high in purines (red meat, seafood)",
            "Alcohol consumption",
            "Obesity",
            "Certain medications (diuretics, aspirin)",
            "Medical conditions (untreated high blood pressure, diabetes, metabolic syndrome)",
            "Genetic factors",
            "Recent surgery or trauma"
        ],
        symptoms: [
            "Intense joint pain (especially big toe, ankles, knees, elbows, wrists, fingers)",
            "Lingering discomfort after initial pain subsides",
            "Inflammation and redness",
            "Limited range of motion",
            "Tophi (urate crystal deposits under skin)",
            "Kidney stones"
        ],
        diagnosis: [
            "Joint fluid test (to look for urate crystals)",
            "Blood tests (to measure uric acid levels)",
            "X-rays (to rule out other causes)",
            "Ultrasound (to detect urate crystals)",
            "Dual-energy CT scan"
        ],
        treatment: [
            "NSAIDs for pain and inflammation",
            "Colchicine to reduce inflammation",
            "Corticosteroids (oral or injected)",
            "Medications to block uric acid production (xanthine oxidase inhibitors)",
            "Medications to improve uric acid removal (uricosurics)",
            "Lifestyle modifications"
        ],
        prevention: [
            "Limit intake of foods high in purines",
            "Maintain healthy weight",
            "Limit or avoid alcohol",
            "Stay hydrated",
            "Exercise regularly",
            "Preventive medications if recommended by doctor"
        ]
    },
    // H
    {
        name: "Hypertension (High Blood Pressure)",
        description: "A common condition where the long-term force of the blood against artery walls is high enough to cause health problems.",
        causes: [
            "Age",
            "Family history",
            "Obesity",
            "Sedentary lifestyle",
            "Tobacco use",
            "High sodium diet",
            "Low potassium diet",
            "Excessive alcohol consumption",
            "Stress",
            "Chronic conditions (kidney disease, diabetes, sleep apnea)"
        ],
        symptoms: [
            "Most people have no symptoms (silent killer)",
            "Headaches (in severe cases)",
            "Shortness of breath (in severe cases)",
            "Nosebleeds (in severe cases)"
        ],
        diagnosis: [
            "Blood pressure readings on multiple occasions",
            "Medical history",
            "Physical examination",
            "Blood and urine tests",
            "Electrocardiogram (ECG)",
            "Echocardiogram",
            "Ambulatory monitoring"
        ],
        treatment: [
            "Lifestyle changes",
            "Diuretics",
            "ACE inhibitors",
            "Angiotensin II receptor blockers",
            "Calcium channel blockers",
            "Beta-blockers",
            "Renin inhibitors"
        ],
        prevention: [
            "Healthy diet (DASH diet)",
            "Regular physical activity",
            "Maintain healthy weight",
            "Limit alcohol consumption",
            "Quit smoking",
            "Reduce sodium intake",
            "Manage stress",
            "Regular health checkups"
        ]
    },
    {
        name: "Hepatitis",
        description: "Inflammation of the liver, most commonly caused by viral infection but can also result from liver damage caused by alcohol, toxins, and certain medications.",
        causes: [
            "Hepatitis A virus (spread through contaminated food or water)",
            "Hepatitis B virus (spread through blood, semen, other body fluids)",
            "Hepatitis C virus (spread through contaminated blood)",
            "Hepatitis D virus (requires hepatitis B to replicate)",
            "Hepatitis E virus (spread through contaminated water)",
            "Autoimmune hepatitis (immune system attacks liver cells)",
            "Alcoholic hepatitis (excessive alcohol consumption)",
            "Toxic hepatitis (exposure to certain chemicals, drugs, or supplements)"
        ],
        symptoms: [
            "Fatigue",
            "Flu-like symptoms",
            "Dark urine",
            "Pale stool",
            "Abdominal pain",
            "Loss of appetite",
            "Unexplained weight loss",
            "Yellowing of skin and eyes (jaundice)",
            "Itchy skin"
        ],
        diagnosis: [
            "Blood tests (liver function, viral antibodies)",
            "Imaging tests (ultrasound, CT scan, MRI)",
            "Liver biopsy",
            "Elastography (measures liver stiffness)"
        ],
        treatment: [
            "Rest and adequate hydration",
            "Antiviral medications",
            "Immune-suppressing drugs (for autoimmune hepatitis)",
            "Liver transplant (for severe cases)",
            "Abstinence from alcohol"
        ],
        prevention: [
            "Vaccination (hepatitis A and B)",
            "Good hygiene practices",
            "Safe food and water consumption",
            "Safe sex practices",
            "Avoid sharing needles or personal items"
        ]
    },
    // I
    {
        name: "Influenza (Flu)",
        description: "A contagious respiratory illness caused by influenza viruses that infect the nose, throat, and sometimes the lungs.",
        causes: [
            "Influenza A viruses",
            "Influenza B viruses",
            "Influenza C viruses",
            "Airborne transmission",
            "Direct contact with infected individuals"
        ],
        symptoms: [
            "Fever or feeling feverish/chills",
            "Cough",
            "Sore throat",
            "Runny or stuffy nose",
            "Muscle or body aches",
            "Headaches",
            "Fatigue",
            "Vomiting and diarrhea (more common in children)"
        ],
        diagnosis: [
            "Physical examination",
            "Rapid influenza diagnostic tests",
            "Viral culture",
            "PCR testing",
            "Immunofluorescence tests"
        ],
        treatment: [
            "Antiviral medications (oseltamivir, zanamivir, peramivir, baloxavir)",
            "Rest and hydration",
            "Over-the-counter pain relievers",
            "Decongestants",
            "Humidifier use"
        ],
        prevention: [
            "Annual flu vaccination",
            "Regular handwashing",
            "Avoiding close contact with sick people",
            "Covering coughs and sneezes",
            "Staying home when sick",
            "Cleaning and disinfecting surfaces"
        ]
    },
    {
        name: "Irritable Bowel Syndrome (IBS)",
        description: "A common disorder affecting the large intestine, causing abdominal pain, bloating, and altered bowel habits.",
        causes: [
            "Abnormal muscle contractions in the intestine",
            "Nervous system abnormalities",
            "Severe infection",
            "Early life stress",
            "Changes in gut microbes",
            "Food sensitivities"
        ],
        symptoms: [
            "Abdominal pain or cramping",
            "Bloating",
            "Gas",
            "Diarrhea or constipation (sometimes alternating)",
            "Mucus in the stool"
        ],
        diagnosis: [
            "Medical history",
            "Physical examination",
            "Rome criteria for IBS diagnosis",
            "Tests to rule out other conditions (blood tests, stool tests, colonoscopy)"
        ],
        treatment: [
            "Dietary changes (low-FODMAP diet)",
            "Fiber supplements",
            "Anti-diarrheal medications",
            "Laxatives",
            "Antispasmodic medications",
            "Antidepressants (for pain and depression)",
            "IBS-specific medications",
            "Psychological therapies"
        ],
        prevention: [
            "Identify and avoid trigger foods",
            "Eat at regular times",
            "Drink plenty of fluids",
            "Exercise regularly",
            "Manage stress",
            "Get enough sleep"
        ]
    },
    {
        name: "Insomnia",
        description: "A sleep disorder characterized by difficulty falling asleep, staying asleep, or both, leading to daytime fatigue and other symptoms.",
        causes: [
            "Stress and anxiety",
            "Depression",
            "Medical conditions",
            "Medications",
            "Poor sleep habits",
            "Caffeine or alcohol use",
            "Irregular sleep schedule"
        ],
        symptoms: [
            "Difficulty falling asleep",
            "Waking up frequently",
            "Early morning awakening",
            "Not feeling well-rested",
            "Daytime tiredness",
            "Difficulty concentrating",
            "Mood changes"
        ],
        diagnosis: [
            "Sleep history",
            "Physical examination",
            "Sleep diary",
            "Sleep study",
            "Psychological evaluation"
        ],
        treatment: [
            "Sleep hygiene education",
            "Cognitive behavioral therapy",
            "Relaxation techniques",
            "Sleep medications",
            "Treatment of underlying conditions"
        ],
        prevention: [
            "Regular sleep schedule",
            "Comfortable sleep environment",
            "Limit screen time before bed",
            "Avoid caffeine and alcohol",
            "Regular exercise",
            "Stress management"
        ]
    },
    // J
    {
        name: "Joint Pain",
        description: "Discomfort that arises from any joint in the body, often caused by injury, inflammation, or disease.",
        causes: [
            "Arthritis",
            "Injury",
            "Infection",
            "Overuse",
            "Gout"
        ],
        symptoms: [
            "Pain in affected joint",
            "Swelling",
            "Stiffness",
            "Reduced range of motion",
            "Warmth or redness"
        ],
        diagnosis: [
            "Physical examination",
            "X-rays",
            "Blood tests",
            "Joint fluid analysis",
            "MRI"
        ],
        treatment: [
            "Pain relievers",
            "Anti-inflammatory medications",
            "Physical therapy",
            "Heat or cold therapy",
            "Surgery (in severe cases)"
        ],
        prevention: [
            "Regular exercise",
            "Maintaining healthy weight",
            "Proper posture",
            "Avoiding overuse",
            "Protective equipment during sports"
        ]
    },
    // K
    {
        name: "Kidney Stones",
        description: "Hard deposits made of minerals and salts that form inside the kidneys and can cause severe pain when passing through the urinary tract.",
        causes: [
            "Dehydration",
            "Diet high in protein, sodium, and sugar",
            "Obesity",
            "Family history",
            "Certain medical conditions (e.g., urinary tract infections, gout)",
            "Some medications"
        ],
        symptoms: [
            "Severe pain in side and back, below ribs",
            "Pain that radiates to lower abdomen and groin",
            "Pain that comes in waves and fluctuates in intensity",
            "Pink, red, or brown urine",
            "Cloudy or foul-smelling urine",
            "Nausea and vomiting",
            "Persistent need to urinate",
            "Urinating more often than usual",
            "Fever and chills (if infection is present)"
        ],
        diagnosis: [
            "Blood tests",
            "Urine tests",
            "Imaging tests (X-ray, ultrasound, CT scan)",
            "Analysis of passed stones"
        ],
        treatment: [
            "Pain relievers",
            "Medical expulsive therapy",
            "Increased fluid intake",
            "Extracorporeal shock wave lithotripsy (ESWL)",
            "Ureteroscopy",
            "Percutaneous nephrolithotomy",
            "Parathyroid gland surgery (in some cases)"
        ],
        prevention: [
            "Drink plenty of water",
            "Reduce sodium intake",
            "Limit animal protein",
            "Get enough calcium from food",
            "Limit oxalate-rich foods",
            "Medications to prevent stone formation"
        ]
    },
    // L
    {
        name: "Lupus (Systemic Lupus Erythematosus)",
        description: "A chronic autoimmune disease that can damage any part of the body, including skin, joints, and organs.",
        causes: [
            "Genetic factors",
            "Environmental triggers (sunlight, infections)",
            "Hormonal factors",
            "Certain medications"
        ],
        symptoms: [
            "Fatigue",
            "Fever",
            "Joint pain, stiffness, and swelling",
            "Butterfly-shaped rash on face",
            "Skin lesions",
            "Shortness of breath",
            "Chest pain",
            "Dry eyes",
            "Headaches, confusion, memory loss",
            "Raynaud's phenomenon"
        ],
        diagnosis: [
            "Blood and urine tests",
            "Antinuclear antibody (ANA) test",
            "Comprehensive physical examination",
            "Kidney and liver assessment",
            "Imaging tests"
        ],
        treatment: [
            "NSAIDs for pain and inflammation",
            "Antimalarial drugs",
            "Corticosteroids",
            "Immunosuppressants",
            "Biologics",
            "Lifestyle modifications"
        ],
        prevention: [
            "Avoid sun exposure",
            "Wear protective clothing and sunscreen",
            "Regular exercise",
            "Healthy diet",
            "Avoid smoking",
            "Manage stress",
            "Get regular check-ups"
        ]
    },
    // M
    {
        name: "Multiple Sclerosis (MS)",
        description: "A potentially disabling disease of the brain and spinal cord (central nervous system) where the immune system attacks the protective sheath (myelin) that covers nerve fibers.",
        causes: [
            "Autoimmune reaction",
            "Genetic factors",
            "Environmental factors",
            "Viral infections",
            "Geographical location (more common in temperate climates)"
        ],
        symptoms: [
            "Numbness or weakness in limbs",
            "Electric-shock sensations with certain neck movements",
            "Tremor, lack of coordination or unsteady gait",
            "Vision problems",
            "Slurred speech",
            "Fatigue",
            "Dizziness",
            "Problems with bowel and bladder function",
            "Cognitive impairment"
        ],
        diagnosis: [
            "Medical history and neurological examination",
            "MRI",
            "Spinal fluid analysis",
            "Evoked potential tests",
            "Blood tests to rule out other conditions"
        ],
        treatment: [
            "Disease-modifying therapies",
            "Corticosteroids for relapses",
            "Plasma exchange (plasmapheresis)",
            "Physical therapy",
            "Muscle relaxants",
            "Medications for fatigue, depression, pain",
            "Lifestyle modifications"
        ],
        prevention: [
            "No known prevention",
            "Vitamin D supplementation may help",
            "Healthy lifestyle",
            "Early treatment to slow progression"
        ]
    },
    // N
    {
        name: "Narcolepsy",
        description: "A chronic sleep disorder characterized by overwhelming daytime drowsiness and sudden attacks of sleep.",
        causes: [
            "Low levels of hypocretin (brain chemical)",
            "Autoimmune disorders",
            "Genetic factors",
            "Brain injuries",
            "Environmental toxins"
        ],
        symptoms: [
            "Excessive daytime sleepiness",
            "Sudden loss of muscle tone (cataplexy)",
            "Sleep paralysis",
            "Hallucinations",
            "Disrupted nighttime sleep",
            "Automatic behaviors"
        ],
        diagnosis: [
            "Sleep history",
            "Sleep diary",
            "Polysomnography (sleep study)",
            "Multiple sleep latency test (MSLT)",
            "Hypocretin level measurement"
        ],
        treatment: [
            "Stimulants",
            "Selective serotonin reuptake inhibitors (SSRIs)",
            "Serotonin and norepinephrine reuptake inhibitors (SNRIs)",
            "Sodium oxybate (Xyrem)",
            "Lifestyle adjustments",
            "Scheduled naps"
        ],
        prevention: [
            "No known prevention",
            "Regular sleep schedule",
            "Avoid alcohol and caffeine before bedtime",
            "Regular exercise (not close to bedtime)"
        ]
    },
    // O
    {
        name: "Osteoporosis",
        description: "A bone disease that occurs when the body loses too much bone, makes too little bone, or both, leading to weak and brittle bones.",
        causes: [
            "Aging",
            "Menopause",
            "Low calcium intake",
            "Vitamin D deficiency",
            "Sedentary lifestyle",
            "Smoking and alcohol consumption",
            "Certain medications (corticosteroids)",
            "Medical conditions affecting bone health"
        ],
        symptoms: [
            "Back pain",
            "Loss of height over time",
            "Stooped posture",
            "Bone fractures that occur easily",
            "Often no symptoms until a fracture occurs"
        ],
        diagnosis: [
            "Bone density test (DEXA scan)",
            "FRAX score (fracture risk assessment)",
            "Blood and urine tests",
            "X-rays",
            "Vertebral fracture assessment"
        ],
        treatment: [
            "Bisphosphonates",
            "Hormone-related therapy",
            "Denosumab (Prolia)",
            "Teriparatide (Forteo)",
            "Calcium and vitamin D supplements",
            "Exercise programs",
            "Fall prevention strategies"
        ],
        prevention: [
            "Adequate calcium and vitamin D intake",
            "Regular weight-bearing exercise",
            "Avoid smoking and excessive alcohol",
            "Bone density testing",
            "Medication when appropriate",
            "Fall prevention"
        ]
    },
    // P
    {
        name: "Parkinson's Disease",
        description: "A progressive nervous system disorder that affects movement, often including tremors, stiffness, and difficulty with balance and coordination.",
        causes: [
            "Loss of nerve cells in the substantia nigra",
            "Genetic mutations",
            "Environmental triggers",
            "Presence of Lewy bodies",
            "Alpha-synuclein protein misfolding"
        ],
        symptoms: [
            "Tremor (often starting in a limb)",
            "Slowed movement (bradykinesia)",
            "Rigid muscles",
            "Impaired posture and balance",
            "Loss of automatic movements",
            "Speech changes",
            "Writing changes",
            "Cognitive impairment (in advanced stages)"
        ],
        diagnosis: [
            "Medical history and neurological examination",
            "DaTscan (dopamine transporter scan)",
            "Response to Parkinson's medication",
            "Blood tests to rule out other conditions",
            "MRI or CT scan"
        ],
        treatment: [
            "Carbidopa-levodopa",
            "Dopamine agonists",
            "MAO B inhibitors",
            "Catechol O-methyltransferase (COMT) inhibitors",
            "Anticholinergics",
            "Deep brain stimulation",
            "Physical therapy",
            "Occupational therapy",
            "Speech therapy"
        ],
        prevention: [
            "No proven prevention",
            "Regular exercise may reduce risk",
            "Caffeine consumption may be protective",
            "Antioxidant-rich diet"
        ]
    },
    // Q
    {
        name: "Q Fever",
        description: "A bacterial infection caused by Coxiella burnetii, which is spread by cattle, sheep, and goats.",
        causes: [
            "Infection with Coxiella burnetii bacteria",
            "Inhalation of contaminated dust",
            "Contact with infected animals",
            "Consumption of unpasteurized dairy products",
            "Tick bites (rarely)"
        ],
        symptoms: [
            "High fever",
            "Severe headache",
            "Fatigue",
            "Muscle pain",
            "Confusion",
            "Sore throat",
            "Chest pain",
            "Nausea, vomiting, and diarrhea",
            "Rash"
        ],
        diagnosis: [
            "Blood tests for antibodies",
            "PCR test",
            "Chest X-ray",
            "Liver function tests"
        ],
        treatment: [
            "Antibiotics (doxycycline)",
            "Longer treatment for chronic Q fever",
            "Supportive care",
            "Heart valve surgery (in severe cases)"
        ],
        prevention: [
            "Avoid unpasteurized dairy products",
            "Proper handling of animals and animal products",
            "Appropriate disposal of animal birth products",
            "Disinfection of contaminated areas",
            "Vaccination (for high-risk occupations)"
        ]
    },
    // R
    {
        name: "Rheumatoid Arthritis",
        description: "A chronic inflammatory disorder affecting many joints, including those in the hands and feet, causing painful swelling that can eventually result in bone erosion and joint deformity.",
        causes: [
            "Autoimmune reaction",
            "Genetic factors",
            "Environmental factors",
            "Hormonal factors",
            "Smoking"
        ],
        symptoms: [
            "Tender, warm, swollen joints",
            "Joint stiffness (worse in mornings)",
            "Fatigue, fever, and loss of appetite",
            "Symmetrical pattern of affected joints",
            "Rheumatoid nodules",
            "Early joint damage"
        ],
        diagnosis: [
            "Physical examination",
            "Blood tests (rheumatoid factor, anti-CCP)",
            "Inflammatory markers (ESR, CRP)",
            "X-rays",
            "MRI and ultrasound"
        ],
        treatment: [
            "NSAIDs",
            "Steroids",
            "Disease-modifying antirheumatic drugs (DMARDs)",
            "Biological agents",
            "JAK inhibitors",
            "Physical therapy",
            "Occupational therapy",
            "Surgery in advanced cases"
        ],
        prevention: [
            "No known prevention",
            "Quit smoking",
            "Early diagnosis and treatment",
            "Regular exercise",
            "Balanced diet",
            "Stress management"
        ]
    },
    // S
    {
        name: "Stroke",
        description: "A medical emergency where blood supply to part of the brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients.",
        causes: [
            "Blocked artery (ischemic stroke)",
            "Leaking or bursting of blood vessel (hemorrhagic stroke)",
            "Temporary disruption of blood flow (transient ischemic attack)",
            "High blood pressure",
            "Smoking",
            "Diabetes",
            "High cholesterol",
            "Atrial fibrillation"
        ],
        symptoms: [
            "Trouble speaking and understanding",
            "Paralysis or numbness of face, arm or leg",
            "Vision problems in one or both eyes",
            "Headache",
            "Trouble walking",
            "Dizziness",
            "Loss of balance or coordination"
        ],
        diagnosis: [
            "Physical examination",
            "CT scan",
            "MRI",
            "Carotid ultrasound",
            "Cerebral angiogram",
            "Echocardiogram",
            "Blood tests"
        ],
        treatment: [
            "Emergency IV medication (tPA)",
            "Emergency endovascular procedures",
            "Carotid endarterectomy",
            "Medications to prevent blood clots",
            "Blood pressure medications",
            "Statins",
            "Rehabilitation"
        ],
        prevention: [
            "Control high blood pressure",
            "Lower cholesterol and saturated fat",
            "Quit smoking",
            "Control diabetes",
            "Maintain a healthy weight",
            "Exercise regularly",
            "Eat a diet rich in fruits and vegetables",
            "Limit alcohol consumption",
            "Manage stress"
        ]
    },
    // T
    {
        name: "Tuberculosis (TB)",
        description: "An infectious disease caused by Mycobacterium tuberculosis bacteria that primarily affects the lungs but can also affect other parts of the body.",
        causes: [
            "Infection with Mycobacterium tuberculosis",
            "Close contact with infected individuals",
            "Weakened immune system",
            "Living or working in high-risk settings",
            "Substance abuse"
        ],
        symptoms: [
            "Coughing that lasts three or more weeks",
            "Coughing up blood",
            "Chest pain",
            "Pain with breathing or coughing",
            "Unintentional weight loss",
            "Fatigue",
            "Fever",
            "Night sweats",
            "Chills",
            "Loss of appetite"
        ],
        diagnosis: [
            "Skin test (tuberculin test)",
            "Blood tests",
            "Chest X-ray",
            "Sputum tests",
            "CT scan",
            "Biopsy"
        ],
        treatment: [
            "Antibiotics for 6-9 months",
            "Multiple antibiotics simultaneously",
            "Directly observed therapy (DOT)",
            "Treatment for drug-resistant TB",
            "Hospitalization (in severe cases)"
        ],
        prevention: [
            "BCG vaccine",
            "Testing and treatment for latent TB",
            "Infection control measures",
            "Avoid close contact with known TB patients until they're not contagious",
            "HIV prevention and treatment"
        ]
    },
    // U
    {
        name: "Urinary Tract Infection (UTI)",
        description: "An infection in any part of the urinary system, including kidneys, bladder, ureters, and urethra.",
        causes: [
            "Bacteria entering the urinary tract",
            "E. coli (most common cause)",
            "Sexual activity",
            "Female anatomy",
            "Urinary tract abnormalities",
            "Blocked urinary flow",
            "Weakened immune system",
            "Catheter use"
        ],
        symptoms: [
            "Strong, persistent urge to urinate",
            "Burning sensation when urinating",
            "Passing frequent, small amounts of urine",
            "Cloudy urine",
            "Red, bright pink or cola-colored urine",
            "Strong-smelling urine",
            "Pelvic pain (in women)",
            "Rectal pain (in men)"
        ],
        diagnosis: [
            "Urine analysis",
            "Urine culture",
            "Imaging tests (for recurrent UTIs)",
            "Cystoscopy",
            "Urodynamic testing"
        ],
        treatment: [
            "Antibiotics",
            "Pain medication",
            "Increased fluid intake",
            "Cranberry products (may help prevent recurrence)",
            "Hospitalization (for severe infections)"
        ],
        prevention: [
            "Drink plenty of liquids",
            "Urinate frequently",
            "Wipe from front to back (for women)",
            "Empty bladder after sexual intercourse",
            "Avoid irritating feminine products",
            "Change birth control method (if recurrent UTIs)"
        ]
    },
    // V
    {
        name: "Varicose Veins",
        description: "Enlarged, twisted veins that commonly appear in the legs and feet, often causing pain and discomfort.",
        causes: [
            "Weakened vein walls",
            "Faulty vein valves",
            "Increased pressure in the veins",
            "Pregnancy",
            "Age",
            "Obesity",
            "Standing or sitting for long periods",
            "Family history"
        ],
        symptoms: [
            "Veins that appear dark purple or blue",
            "Twisted, bulging veins",
            "Aching or heavy feeling in legs",
            "Burning, throbbing, muscle cramping",
            "Worsened pain after sitting or standing",
            "Itching around veins",
            "Skin discoloration around veins"
        ],
        diagnosis: [
            "Physical examination",
            "Ultrasound",
            "Venogram",
            "CT scan or MRI (rarely needed)"
        ],
        treatment: [
            "Self-care (exercise, elevation, compression stockings)",
            "Sclerotherapy",
            "Laser treatment",
            "Endovenous thermal ablation",
            "High ligation and vein stripping",
            "Ambulatory phlebectomy",
            "Endoscopic vein surgery"
        ],
        prevention: [
            "Exercise regularly",
            "Maintain a healthy weight",
            "Avoid high heels and tight hosiery",
            "Elevate legs when resting",
            "Avoid sitting or standing for long periods",
            "Wear compression stockings"
        ]
    },
    // W
    {
        name: "West Nile Virus",
        description: "A mosquito-borne viral infection that can cause a fatal neurological disease in humans.",
        causes: [
            "Infection with West Nile virus",
            "Mosquito bites (primary transmission)",
            "Blood transfusions (rarely)",
            "Organ transplants (rarely)",
            "Mother-to-child transmission (rarely)"
        ],
        symptoms: [
            "No symptoms in most cases (80%)",
            "Fever",
            "Headache",
            "Body aches",
            "Joint pains",
            "Vomiting",
            "Diarrhea",
            "Rash",
            "Severe neurological illness (in some cases)",
            "Meningitis or encephalitis (in severe cases)"
        ],
        diagnosis: [
            "Blood tests",
            "Spinal fluid tests",
            "Brain imaging (CT or MRI)",
            "Electroencephalography (EEG)"
        ],
        treatment: [
            "No specific treatment",
            "Over-the-counter pain relievers",
            "Hospitalization for severe cases",
            "Intravenous fluids",
            "Respiratory support",
            "Prevention of secondary infections"
        ],
        prevention: [
            "Use insect repellent",
            "Wear long-sleeved shirts and long pants",
            "Treat clothing with permethrin",
            "Avoid outdoor activities at peak mosquito times",
            "Remove standing water around home",
            "Use mosquito nets",
            "Support local mosquito control programs"
        ]
    },
    // X
    {
        name: "Xerostomia (Dry Mouth)",
        description: "A condition characterized by decreased saliva production, causing dryness in the mouth.",
        causes: [
            "Medications (over 400 medications can cause dry mouth)",
            "Aging",
            "Dehydration",
            "Radiation therapy to head and neck",
            "Chemotherapy",
            "Nerve damage",
            "Sjögren's syndrome",
            "HIV/AIDS",
            "Diabetes",
            "Smoking or chewing tobacco"
        ],
        symptoms: [
            "Dryness or stickiness in the mouth",
            "Thick, stringy saliva",
            "Bad breath",
            "Difficulty chewing, speaking, and swallowing",
            "Dry or sore throat",
            "Hoarseness",
            "Dry or grooved tongue",
            "Changed sense of taste",
            "Problems wearing dentures",
            "Increased dental decay"
        ],
        diagnosis: [
            "Medical history",
            "Physical examination",
            "Measurement of saliva production",
            "Blood tests",
            "Imaging studies (for salivary gland issues)"
        ],
        treatment: [
            "Addressing underlying causes",
            "Saliva substitutes",
            "Mouth moisturizers",
            "Saliva stimulants",
            "Prescription medications (pilocarpine, cevimeline)",
            "Fluoride treatments to prevent tooth decay",
            "Avoiding irritating foods and beverages"
        ],
        prevention: [
            "Stay hydrated",
            "Breathe through nose, not mouth",
            "Use a humidifier",
            "Avoid caffeine, alcohol, and tobacco",
            "Avoid sugary or acidic foods",
            "Chew sugar-free gum or suck on sugar-free candies",
            "Practice good oral hygiene"
        ]
    },
    // Y
    {
        name: "Yellow Fever",
        description: "An acute viral hemorrhagic disease transmitted by infected mosquitoes, characterized by fever, jaundice, and bleeding.",
        causes: [
            "Infection with yellow fever virus",
            "Bite from infected Aedes or Haemagogus mosquitoes"
        ],
        symptoms: [
            "Sudden onset of fever",
            "Chills",
            "Severe headache",
            "Back pain",
            "Body aches",
            "Nausea and vomiting",
            "Fatigue and weakness",
            "Jaundice (yellowing of skin and eyes)",
            "Bleeding from multiple sites (in severe cases)",
            "Liver and kidney failure (in severe cases)"
        ],
        diagnosis: [
            "Blood tests",
            "Polymerase chain reaction (PCR) test",
            "Antibody testing",
            "Liver function tests"
        ],
        treatment: [
            "No specific antiviral treatment",
            "Supportive care",
            "Hospitalization for severe cases",
            "Intravenous fluids",
            "Blood products for severe bleeding",
            "Dialysis for kidney failure"
        ],
        prevention: [
            "Yellow fever vaccine",
            "Mosquito control measures",
            "Use insect repellent",
            "Wear protective clothing",
            "Use bed nets",
            "Avoid outdoor activities during peak mosquito times",
            "International travel precautions"
        ]
    },
    // Z
    {
        name: "Zika Virus Disease",
        description: "A mosquito-borne viral infection that can cause birth defects when contracted during pregnancy.",
        causes: [
            "Infection with Zika virus",
            "Bite from infected Aedes mosquitoes",
            "Sexual transmission",
            "Mother-to-child transmission",
            "Blood transfusion (rare)"
        ],
        symptoms: [
            "Mild fever",
            "Rash",
            "Joint pain",
            "Conjunctivitis (red eyes)",
            "Muscle pain",
            "Headache",
            "Many infected people have no symptoms"
        ],
        diagnosis: [
            "Blood or urine tests",
            "PCR test",
            "Antibody testing",
            "Testing amniotic fluid (during pregnancy)"
        ],
        treatment: [
            "No specific treatment",
            "Rest",
            "Fluids",
            "Acetaminophen for fever and pain",
            "Avoid aspirin and NSAIDs until dengue is ruled out"
        ],
        prevention: [
            "Avoid mosquito bites",
            "Use insect repellent",
            "Wear long-sleeved shirts and long pants",
            "Stay in places with air conditioning or window/door screens",
            "Remove standing water around home",
            "Practice safe sex",
            "Pregnant women should avoid travel to areas with Zika"
        ]
    }
];

// Function to initialize alphabet buttons
function initializeAlphabetButtons() {
    const alphabetContainer = document.getElementById('alphabetButtons');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    for (let i = 0; i < alphabet.length; i++) {
        const letter = alphabet[i];
        const button = document.createElement('button');
        button.className = 'alphabet-btn';
        button.textContent = letter;
        button.addEventListener('click', () => filterByLetter(letter));
        alphabetContainer.appendChild(button);
    }
    
    // Add "All" button
    const allButton = document.createElement('button');
    allButton.className = 'alphabet-btn active';
    allButton.textContent = 'All';
    allButton.addEventListener('click', () => displayAllConditions());
    alphabetContainer.insertBefore(allButton, alphabetContainer.firstChild);
}

// Function to filter conditions by starting letter
function filterByLetter(letter) {
    // Update active button
    const buttons = document.querySelectorAll('.alphabet-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === letter) {
            btn.classList.add('active');
        }
    });
    
    // Filter conditions
    const filteredConditions = healthConditions.filter(condition => 
        condition.name.charAt(0).toUpperCase() === letter
    );
    
    displayConditionsByLetter(filteredConditions, letter);
}

// Function to display all conditions grouped by letter
function displayAllConditions() {
    // Update active button
    const buttons = document.querySelectorAll('.alphabet-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === 'All') {
            btn.classList.add('active');
        }
    });
    
    // Group conditions by first letter
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const container = document.getElementById('conditionsContainer');
    container.innerHTML = '';
    
    for (let i = 0; i < alphabet.length; i++) {
        const letter = alphabet[i];
        const letterConditions = healthConditions.filter(condition => 
            condition.name.charAt(0).toUpperCase() === letter
        );
        
        if (letterConditions.length > 0) {
            const letterGroup = createLetterGroup(letter, letterConditions);
            container.appendChild(letterGroup);
        }
    }
}

// Function to display conditions filtered by letter
function displayConditionsByLetter(conditions, letter) {
    const container = document.getElementById('conditionsContainer');
    container.innerHTML = '';
    
    if (conditions.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.textContent = `No health conditions found starting with "${letter}"`;
        container.appendChild(noResults);
        return;
    }
    
    const letterGroup = createLetterGroup(letter, conditions);
    container.appendChild(letterGroup);
}

// Function to create a letter group with conditions
function createLetterGroup(letter, conditions) {
    const group = document.createElement('div');
    group.className = 'condition-letter-group';
    
    const heading = document.createElement('h2');
    heading.className = 'condition-letter-heading';
    heading.textContent = letter;
    group.appendChild(heading);
    
    const cards = document.createElement('div');
    cards.className = 'condition-cards';
    
    conditions.forEach(condition => {
        cards.appendChild(createConditionCard(condition));
    });
    
    group.appendChild(cards);
    return group;
}

// Function to create a condition card
function createConditionCard(condition) {
    const card = document.createElement('div');
    card.className = 'condition-card';
    
    // Create card header
    const header = document.createElement('div');
    header.className = 'condition-header';
    const title = document.createElement('h3');
    title.textContent = condition.name;
    header.appendChild(title);
    card.appendChild(header);
    
    // Create card body
    const body = document.createElement('div');
    body.className = 'condition-body';
    
    // Description
    const description = document.createElement('div');
    description.className = 'condition-description';
    description.textContent = condition.description;
    body.appendChild(description);
    
    // Tabs - improved with data-index to ensure language independence
    const tabs = document.createElement('div');
    tabs.className = 'condition-tabs';
    
    const tabNames = ['Causes', 'Symptoms', 'Diagnosis', 'Treatment', 'Prevention'];
    const tabContents = [condition.causes, condition.symptoms, condition.diagnosis, condition.treatment, condition.prevention];
    
    // Store the tab and content references for direct access
    const tabElements = [];
    const contentElements = [];
    
    tabNames.forEach((name, index) => {
        // Create tab with numerical index
        const tab = document.createElement('div');
        tab.className = 'condition-tab';
        tab.textContent = name;
        tab.dataset.tabIndex = index; // Use numerical index instead of name
        
        if (index === 0) {
            tab.classList.add('active');
        }
        
        tabElements.push(tab);
        tabs.appendChild(tab);
    });
    
    body.appendChild(tabs);
    
    // Tab contents - create now so we can reference them
    tabNames.forEach((name, index) => {
        const content = document.createElement('div');
        content.className = 'condition-content';
        content.dataset.contentIndex = index; // Use numerical index
        
        if (index === 0) {
            content.classList.add('active');
        }
        
        const list = document.createElement('ul');
        tabContents[index].forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            list.appendChild(listItem);
        });
        
        content.appendChild(list);
        body.appendChild(content);
        contentElements.push(content);
    });
    
    // Add a single event listener to the tabs container for better performance
    // and to ensure it works with translated content
    tabs.addEventListener('click', (e) => {
        // Find the closest tab element if clicked on a child element
        const tabElement = e.target.closest('.condition-tab');
        if (!tabElement) return; // Not a tab click
        
        // Get the tab index from the data attribute
        const clickedIndex = parseInt(tabElement.dataset.tabIndex);
        
        // Remove active class from all tabs and contents
        tabElements.forEach(tab => tab.classList.remove('active'));
        contentElements.forEach(content => content.classList.remove('active'));
        
        // Activate the clicked tab and its corresponding content
        tabElements[clickedIndex].classList.add('active');
        contentElements[clickedIndex].classList.add('active');
    });
    
    // The tab contents are already created and added to the body above
    // No need to create them again
    
    card.appendChild(body);
    return card;
}

// Function to search conditions
function searchConditions() {
    const searchTerm = document.getElementById('conditionSearch').value.toLowerCase();
    
    if (searchTerm.trim() === '') {
        displayAllConditions();
        return;
    }
    
    const filteredConditions = healthConditions.filter(condition => 
        condition.name.toLowerCase().includes(searchTerm) ||
        condition.description.toLowerCase().includes(searchTerm) ||
        condition.causes.some(cause => cause.toLowerCase().includes(searchTerm)) ||
        condition.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm)) ||
        condition.diagnosis.some(diagnosis => diagnosis.toLowerCase().includes(searchTerm)) ||
        condition.treatment.some(treatment => treatment.toLowerCase().includes(searchTerm)) ||
        condition.prevention.some(prevention => prevention.toLowerCase().includes(searchTerm))
    );
    
    const container = document.getElementById('conditionsContainer');
    container.innerHTML = '';
    
    if (filteredConditions.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.textContent = `No health conditions found matching "${searchTerm}"`;
        container.appendChild(noResults);
        return;
    }
    
    // Group search results by first letter
    const groupedConditions = {};
    filteredConditions.forEach(condition => {
        const firstLetter = condition.name.charAt(0).toUpperCase();
        if (!groupedConditions[firstLetter]) {
            groupedConditions[firstLetter] = [];
        }
        groupedConditions[firstLetter].push(condition);
    });
    
    // Display grouped search results
    Object.keys(groupedConditions).sort().forEach(letter => {
        const letterGroup = createLetterGroup(letter, groupedConditions[letter]);
        container.appendChild(letterGroup);
    });
}

// Initialize the library
document.addEventListener('DOMContentLoaded', () => {
    initializeAlphabetButtons();
    displayAllConditions();
    
    // Add search input event listener
    document.getElementById('conditionSearch').addEventListener('input', searchConditions);
    
    // Set up a MutationObserver to detect Google Translate changes
    // This helps ensure tab functionality works after translation
    setTimeout(() => {
        setupTranslationSupport();
    }, 1000);
});

// Function to set up support for Google Translate
function setupTranslationSupport() {
    // Monitor for Google Translate DOM changes that might break tabs
    const observer = new MutationObserver((mutations) => {
        // When the page content changes due to translation, refresh tab click handlers
        document.querySelectorAll('.condition-tabs').forEach(tabContainer => {
            // Make sure the container has our special handler
            if (!tabContainer.hasAttribute('translation-observer-added')) {
                tabContainer.setAttribute('translation-observer-added', 'true');
                
                // Add delegated event handler for all tab clicks
                tabContainer.addEventListener('click', (e) => {
                    const tabElement = e.target.closest('.condition-tab');
                    if (!tabElement) return; // Not a tab
                    
                    // Find all sibling tabs and content elements
                    const tabParent = tabElement.parentElement;
                    const allTabs = Array.from(tabParent.querySelectorAll('.condition-tab'));
                    const tabIndex = allTabs.indexOf(tabElement);
                    
                    // Get the card/container for this set of tabs
                    const card = tabParent.closest('.condition-card');
                    const body = card.querySelector('.condition-body');
                    const allContents = Array.from(body.querySelectorAll('.condition-content'));
                    
                    // Remove active class from all tabs and contents
                    allTabs.forEach(tab => tab.classList.remove('active'));
                    allContents.forEach(content => content.classList.remove('active'));
                    
                    // Add active class to clicked tab and corresponding content
                    tabElement.classList.add('active');
                    if (allContents[tabIndex]) {
                        allContents[tabIndex].classList.add('active');
                    }
                });
            }
        });
    });
    
    // Start observing the document for Google Translate changes
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false
    });
}
