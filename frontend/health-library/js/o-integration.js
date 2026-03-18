// Direct integration script for O section entries

// O Section Entries to be added directly to the health-library.js file
const oEntries = [
    {
        name: "Obsessive-Compulsive Disorder (OCD)",
        description: "A mental health disorder characterized by unwanted thoughts (obsessions) and repetitive behaviors (compulsions) that the person feels driven to perform.",
        causes: [
            "Genetic factors",
            "Brain structure and functioning abnormalities",
            "Imbalance of neurotransmitters (serotonin)",
            "Environmental factors",
            "Childhood trauma",
            "Infections (PANDAS/PANS in children)",
            "Learned behaviors"
        ],
        symptoms: [
            "Unwanted, intrusive thoughts, images, or urges (obsessions)",
            "Repetitive behaviors or mental acts (compulsions)",
            "Excessive cleaning or handwashing",
            "Ordering and arranging things in a particular way",
            "Repeatedly checking things",
            "Counting compulsions",
            "Seeking reassurance",
            "Significant distress or anxiety",
            "Time-consuming rituals (more than 1 hour per day)",
            "Interference with daily activities"
        ],
        diagnosis: [
            "Clinical evaluation",
            "Psychological assessment",
            "DSM-5 criteria",
            "Yale-Brown Obsessive Compulsive Scale",
            "Ruling out other mental health conditions"
        ],
        treatment: [
            "Cognitive-behavioral therapy (CBT)",
            "Exposure and response prevention (ERP)",
            "Selective serotonin reuptake inhibitors (SSRIs)",
            "Other medications (clomipramine, antipsychotics)",
            "Deep brain stimulation (in severe cases)",
            "Transcranial magnetic stimulation",
            "Support groups",
            "Stress management techniques"
        ],
        prevention: [
            "Early intervention for mild symptoms",
            "Stress management",
            "Regular treatment adherence",
            "Healthy lifestyle habits",
            "Support system",
            "Avoiding alcohol and recreational drugs"
        ]
    },
    {
        name: "Ovarian Cancer",
        description: "A type of cancer that begins in the ovaries, the female reproductive organs that produce eggs and hormones.",
        causes: [
            "Genetic mutations (BRCA1, BRCA2)",
            "Family history of ovarian, breast, or colorectal cancer",
            "Age (more common after menopause)",
            "Hormone replacement therapy",
            "Endometriosis",
            "Early menstruation or late menopause",
            "Never having been pregnant",
            "Obesity",
            "Fertility treatments"
        ],
        symptoms: [
            "Often asymptomatic in early stages",
            "Abdominal bloating or swelling",
            "Quickly feeling full when eating",
            "Weight loss",
            "Discomfort in the pelvic area",
            "Frequent urination",
            "Changes in bowel habits",
            "Back pain",
            "Fatigue",
            "Upset stomach or heartburn"
        ],
        diagnosis: [
            "Pelvic examination",
            "Transvaginal ultrasound",
            "Blood test for CA-125",
            "CT scan",
            "PET scan",
            "MRI",
            "Biopsy",
            "Genetic testing"
        ],
        treatment: [
            "Surgery (removal of ovaries, fallopian tubes, uterus)",
            "Chemotherapy",
            "Targeted therapy",
            "Hormone therapy",
            "Immunotherapy",
            "Radiation therapy (less common)",
            "Clinical trials",
            "Palliative care"
        ],
        prevention: [
            "Oral contraceptives (birth control pills)",
            "Breastfeeding",
            "Pregnancy",
            "Tubal ligation or hysterectomy",
            "Preventive surgery for high-risk women",
            "Genetic counseling for high-risk families",
            "Regular pelvic examinations",
            "Healthy lifestyle"
        ]
    },
    {
        name: "Otitis Media (Middle Ear Infection)",
        description: "An infection or inflammation of the middle ear, commonly affecting children, causing pain and sometimes hearing difficulties.",
        causes: [
            "Bacterial infections",
            "Viral infections",
            "Eustachian tube dysfunction",
            "Upper respiratory infections",
            "Allergies",
            "Enlarged adenoids",
            "Tobacco smoke exposure",
            "Bottle feeding while lying down (in infants)"
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
            "Tugging or pulling at the ear",
            "Poor appetite"
        ],
        diagnosis: [
            "Physical examination",
            "Otoscope examination",
            "Tympanometry",
            "Acoustic reflectometry",
            "Hearing tests (in recurrent cases)",
            "Fluid sample analysis (if drainage present)"
        ],
        treatment: [
            "Antibiotics (for bacterial infections)",
            "Pain relievers",
            "Ear drops",
            "Warm compress application",
            "Observation (watchful waiting) for mild cases",
            "Ear tubes (tympanostomy tubes) for recurrent cases",
            "Adenoid removal (in some cases)"
        ],
        prevention: [
            "Breastfeeding infants",
            "Avoiding bottle feeding while lying down",
            "Preventing common colds and respiratory infections",
            "Practicing good hand hygiene",
            "Avoiding cigarette smoke",
            "Pneumococcal and influenza vaccinations",
            "Treating allergies promptly",
            "Avoiding pacifier use after 6 months of age"
        ]
    },
    {
        name: "Osteoarthritis",
        description: "A degenerative joint disease characterized by the breakdown of joint cartilage and underlying bone, causing pain and stiffness.",
        causes: [
            "Joint wear and tear over time",
            "Aging",
            "Joint injuries or overuse",
            "Obesity",
            "Genetic factors",
            "Joint malformations",
            "Metabolic disorders",
            "Inflammatory diseases"
        ],
        symptoms: [
            "Joint pain during or after movement",
            "Joint stiffness, especially in the morning or after inactivity",
            "Tenderness when pressure is applied",
            "Loss of flexibility",
            "Grating sensation or crackling sound (crepitus)",
            "Bone spurs (osteophytes)",
            "Swelling",
            "Reduced range of motion"
        ],
        diagnosis: [
            "Physical examination",
            "Medical history",
            "X-rays",
            "MRI",
            "Joint fluid analysis",
            "Blood tests (to rule out other conditions)",
            "Bone scan (rarely)"
        ],
        treatment: [
            "Pain medications (acetaminophen, NSAIDs)",
            "Topical pain relievers",
            "Duloxetine (Cymbalta)",
            "Physical therapy",
            "Occupational therapy",
            "Exercise and weight management",
            "Assistive devices (canes, walkers)",
            "Corticosteroid injections",
            "Hyaluronic acid injections",
            "Joint replacement surgery"
        ],
        prevention: [
            "Maintaining a healthy weight",
            "Regular exercise",
            "Protecting joints during activities",
            "Good posture and body mechanics",
            "Avoiding repetitive stress on joints",
            "Strengthening muscles around joints",
            "Balanced diet rich in anti-inflammatory foods"
        ]
    },
    {
        name: "Obstructive Sleep Apnea",
        description: "A sleep disorder characterized by repeated interruptions in breathing during sleep due to blockage of the upper airway.",
        causes: [
            "Excess weight and obesity",
            "Large tonsils or adenoids",
            "Endocrine disorders",
            "Neuromuscular disorders",
            "Heart or kidney failure",
            "Genetic syndromes affecting facial structure",
            "Family history",
            "Alcohol or sedative use before sleep",
            "Smoking",
            "Nasal congestion or blockage"
        ],
        symptoms: [
            "Loud snoring",
            "Episodes of breathing cessation during sleep",
            "Gasping for air during sleep",
            "Awakening with dry mouth",
            "Morning headache",
            "Difficulty staying asleep (insomnia)",
            "Excessive daytime sleepiness",
            "Difficulty concentrating",
            "Irritability",
            "High blood pressure",
            "Decreased libido"
        ],
        diagnosis: [
            "Sleep history",
            "Physical examination",
            "Polysomnography (sleep study)",
            "Home sleep apnea testing",
            "Oximetry",
            "Evaluation of the head and neck"
        ],
        treatment: [
            "Continuous positive airway pressure (CPAP)",
            "Bilevel positive airway pressure (BiPAP)",
            "Oral appliances",
            "Lifestyle changes (weight loss, exercise)",
            "Positional therapy",
            "Surgery (uvulopalatopharyngoplasty, maxillomandibular advancement)",
            "Hypoglossal nerve stimulation",
            "Treatment of nasal allergies",
            "Avoiding alcohol and sedatives before bedtime"
        ],
        prevention: [
            "Maintaining a healthy weight",
            "Regular exercise",
            "Sleeping on your side",
            "Avoiding alcohol and sedatives before bedtime",
            "Quitting smoking",
            "Treating nasal congestion",
            "Regular sleep schedule"
        ]
    }
];

// Function to integrate the entries directly into the healthConditions array
(function() {
    // Find the index of Osteoporosis (the existing O entry)
    const oIndex = healthConditions.findIndex(c => c.name === "Osteoporosis");
    
    if (oIndex >= 0) {
        // Insert the new entries after Osteoporosis
        healthConditions.splice(oIndex + 1, 0, ...oEntries);
        console.log("Successfully added O entries after Osteoporosis");
        
        // Force a refresh of the current view
        const activeButton = document.querySelector('.alphabet-btn.active');
        if (activeButton) {
            if (activeButton.textContent === 'All') {
                // If "All" is active, refresh all conditions
                displayAllConditions();
            } else if (activeButton.textContent === 'O') {
                // If "O" is active, refresh O conditions
                filterByLetter('O');
            }
        }
    } else {
        console.warn("Osteoporosis not found in health conditions");
    }
})();
