// Direct integration script for H section entries

// H Section Entries to be added directly to the health-library.js file
const hEntries = [
    {
        name: "Hashimoto's Thyroiditis",
        description: "An autoimmune disorder in which the immune system attacks the thyroid gland, causing inflammation and reduced thyroid function (hypothyroidism), leading to a variety of symptoms affecting metabolism and energy levels.",
        causes: [
            "Autoimmune response (immune system mistakenly attacks thyroid tissue)",
            "Genetic factors",
            "Gender (more common in women)",
            "Family history of autoimmune diseases",
            "Excessive iodine intake",
            "Radiation exposure",
            "Certain medications",
            "Hormonal changes (pregnancy, menopause)",
            "Environmental triggers",
            "Viral or bacterial infections"
        ],
        symptoms: [
            "Fatigue and sluggishness",
            "Increased sensitivity to cold",
            "Constipation",
            "Pale, dry skin",
            "Puffy face",
            "Brittle nails",
            "Hair loss",
            "Enlargement of the tongue",
            "Unexplained weight gain",
            "Muscle aches, tenderness, and stiffness",
            "Joint pain and stiffness",
            "Muscle weakness",
            "Depression",
            "Memory problems",
            "Goiter (enlarged thyroid gland)",
            "Irregular or heavy menstrual periods"
        ],
        diagnosis: [
            "Blood tests for thyroid function (TSH, T3, T4)",
            "Thyroid antibody tests (anti-thyroid peroxidase, anti-thyroglobulin)",
            "Physical examination",
            "Medical history",
            "Thyroid ultrasound",
            "Thyroid scan (rarely needed)",
            "Fine-needle aspiration biopsy (in some cases)"
        ],
        treatment: [
            "Thyroid hormone replacement therapy (levothyroxine)",
            "Regular monitoring of thyroid hormone levels",
            "Dose adjustments as needed",
            "Dietary considerations (adequate iodine, selenium)",
            "Lifestyle modifications",
            "Management of associated conditions",
            "Stress reduction techniques",
            "Regular medical follow-up",
            "Avoidance of triggers",
            "Supportive care for symptoms"
        ],
        prevention: [
            "No known prevention (autoimmune condition)",
            "Early detection and treatment",
            "Regular check-ups for those with family history",
            "Balanced diet with appropriate iodine intake",
            "Stress management",
            "Avoiding radiation exposure when possible",
            "Regular thyroid function testing for high-risk individuals",
            "Healthy lifestyle habits"
        ]
    },
    {
        name: "Hemophilia",
        description: "A rare inherited bleeding disorder in which blood doesn't clot properly due to insufficient blood-clotting proteins (clotting factors), leading to excessive bleeding after injuries or surgeries, and sometimes spontaneous bleeding.",
        causes: [
            "Genetic mutation in clotting factor genes (X chromosome)",
            "Hemophilia A: deficiency in clotting factor VIII",
            "Hemophilia B: deficiency in clotting factor IX",
            "X-linked recessive inheritance pattern",
            "Primarily affects males",
            "Females are usually carriers",
            "Acquired hemophilia (rare, autoimmune condition)"
        ],
        symptoms: [
            "Excessive bleeding from cuts or injuries",
            "Easy bruising",
            "Spontaneous bleeding (especially in severe cases)",
            "Joint bleeding (hemarthrosis) causing pain and swelling",
            "Blood in urine or stool",
            "Prolonged bleeding after surgery or dental work",
            "Nosebleeds that are difficult to stop",
            "Internal bleeding",
            "Joint damage and arthritis over time",
            "Deep muscle bleeding",
            "Bleeding into the brain (intracranial hemorrhage) in severe cases"
        ],
        diagnosis: [
            "Blood clotting tests (PT, PTT)",
            "Factor assays to measure specific clotting factor levels",
            "Genetic testing",
            "Family history assessment",
            "Prenatal testing",
            "Carrier testing for females",
            "Evaluation of bleeding episodes"
        ],
        treatment: [
            "Clotting factor replacement therapy",
            "Recombinant clotting factors",
            "Desmopressin (DDAVP) for mild hemophilia A",
            "Antifibrinolytic medications",
            "Gene therapy (emerging treatment)",
            "Prophylactic treatment to prevent bleeding",
            "On-demand treatment for bleeding episodes",
            "Pain management",
            "Physical therapy for joint problems",
            "Comprehensive care at specialized hemophilia treatment centers",
            "Home treatment programs"
        ],
        prevention: [
            "No primary prevention (genetic disorder)",
            "Genetic counseling for families with history",
            "Carrier testing",
            "Prenatal diagnosis",
            "Preimplantation genetic diagnosis",
            "Prophylactic factor replacement to prevent bleeding",
            "Avoiding activities with high risk of injury",
            "Protective gear during physical activities",
            "Avoiding certain medications (aspirin, NSAIDs)",
            "Regular check-ups at hemophilia treatment centers"
        ]
    },
    {
        name: "Huntington's Disease",
        description: "A progressive, inherited neurodegenerative disorder that causes the breakdown of nerve cells in the brain, leading to movement disorders, cognitive decline, and psychiatric symptoms.",
        causes: [
            "Mutation in the HTT gene on chromosome 4",
            "Autosomal dominant inheritance pattern",
            "CAG trinucleotide repeat expansion",
            "Each child of an affected parent has a 50% chance of inheriting the mutation",
            "Longer CAG repeats correlate with earlier onset",
            "Genetic anticipation (earlier onset in successive generations)"
        ],
        symptoms: [
            "Movement disorders (chorea, dystonia, rigidity)",
            "Involuntary jerking or writhing movements",
            "Muscle problems (rigidity, contractures, difficulty swallowing)",
            "Slow or abnormal eye movements",
            "Impaired gait, posture, and balance",
            "Cognitive decline (difficulty organizing, prioritizing, focusing)",
            "Difficulty with problem-solving and multitasking",
            "Memory lapses and impairment",
            "Psychiatric disorders (depression, anxiety, obsessive-compulsive disorder)",
            "Personality changes (irritability, apathy, aggression)",
            "Weight loss",
            "Sleep disturbances",
            "Progressive decline in ability to perform daily activities"
        ],
        diagnosis: [
            "Genetic testing for HTT gene mutation",
            "Neurological examination",
            "Medical history and family history",
            "Brain imaging (MRI, CT scan)",
            "Psychiatric evaluation",
            "Cognitive assessment",
            "Predictive testing for at-risk individuals",
            "Prenatal testing"
        ],
        treatment: [
            "No cure available",
            "Medications to manage movement symptoms (tetrabenazine, deutetrabenazine)",
            "Psychiatric medications (antidepressants, antipsychotics)",
            "Physical therapy",
            "Occupational therapy",
            "Speech therapy",
            "Psychotherapy",
            "Nutritional support",
            "Supportive care",
            "Clinical trials of experimental treatments",
            "Multidisciplinary care approach"
        ],
        prevention: [
            "No primary prevention (genetic disorder)",
            "Genetic counseling for families with history",
            "Predictive genetic testing for at-risk individuals",
            "Preimplantation genetic diagnosis",
            "Family planning options",
            "Prenatal testing",
            "Supportive care to prevent complications",
            "Research into gene therapies and disease-modifying treatments"
        ]
    },
    {
        name: "Hyperthyroidism",
        description: "A condition in which the thyroid gland produces excessive thyroid hormone, leading to increased metabolism and various symptoms affecting multiple body systems.",
        causes: [
            "Graves' disease (autoimmune disorder)",
            "Toxic nodular goiter",
            "Thyroiditis (inflammation of the thyroid)",
            "Excessive iodine intake",
            "Thyroid adenoma",
            "Excessive thyroid medication",
            "Pituitary gland abnormalities",
            "Thyroid cancer (rare)",
            "Pregnancy-related conditions",
            "Genetic factors"
        ],
        symptoms: [
            "Weight loss despite increased appetite",
            "Rapid heartbeat (tachycardia)",
            "Irregular heartbeat (arrhythmia)",
            "Palpitations",
            "Increased sweating",
            "Heat intolerance",
            "Tremors (usually in hands)",
            "Nervousness, anxiety, irritability",
            "Fatigue and muscle weakness",
            "Sleep disturbances",
            "Frequent bowel movements or diarrhea",
            "Menstrual irregularities",
            "Enlarged thyroid gland (goiter)",
            "Bulging eyes (exophthalmos) in Graves' disease",
            "Thinning skin and brittle hair",
            "Reduced concentration"
        ],
        diagnosis: [
            "Blood tests for thyroid function (TSH, T3, T4)",
            "Thyroid antibody tests",
            "Radioactive iodine uptake test",
            "Thyroid scan",
            "Ultrasound of the thyroid",
            "Physical examination",
            "Medical history"
        ],
        treatment: [
            "Anti-thyroid medications (methimazole, propylthiouracil)",
            "Radioactive iodine therapy",
            "Beta-blockers for symptom relief",
            "Thyroid surgery (thyroidectomy)",
            "Treatment of underlying causes",
            "Monitoring thyroid function during treatment",
            "Eye care for Graves' ophthalmopathy",
            "Supportive care for symptoms",
            "Dietary considerations"
        ],
        prevention: [
            "Regular check-ups for those with family history",
            "Appropriate iodine intake",
            "Proper use of thyroid medications",
            "Monitoring thyroid function in high-risk individuals",
            "Avoiding triggers in those with known thyroid issues",
            "Early treatment of thyroid abnormalities",
            "Stress management",
            "Healthy lifestyle habits"
        ]
    },
    {
        name: "Herniated Disc",
        description: "A condition where the soft, gel-like center of a spinal disc pushes through a tear in the tougher exterior casing, potentially irritating nearby nerves and causing pain, numbness, or weakness in the arms or legs.",
        causes: [
            "Age-related disc degeneration",
            "Lifting heavy objects incorrectly",
            "Twisting and turning while lifting",
            "Traumatic injury",
            "Excessive body weight",
            "Genetic predisposition",
            "Repetitive strenuous activities",
            "Smoking (reduces oxygen supply to discs)",
            "Sedentary lifestyle",
            "Occupations requiring constant sitting or heavy lifting"
        ],
        symptoms: [
            "Pain radiating to arms or legs",
            "Numbness or tingling in affected areas",
            "Muscle weakness",
            "Pain that worsens with certain movements",
            "Pain that improves with certain positions",
            "Burning sensation along affected nerve",
            "In cervical herniation: neck pain, shoulder and arm problems",
            "In lumbar herniation: lower back pain, buttock, leg and foot problems",
            "Sciatica (radiating pain along sciatic nerve)",
            "Loss of bladder or bowel control (emergency symptom)"
        ],
        diagnosis: [
            "Medical history",
            "Physical examination",
            "Neurological examination",
            "MRI scan",
            "CT scan (sometimes with myelogram)",
            "X-rays (to rule out other causes)",
            "Electromyography (EMG) and nerve conduction studies",
            "Discogram (rarely used)"
        ],
        treatment: [
            "Conservative treatment (first approach for most cases)",
            "Rest (limited bed rest, avoiding activities that cause pain)",
            "Physical therapy",
            "Pain medications (NSAIDs, muscle relaxants)",
            "Epidural steroid injections",
            "Heat or cold therapy",
            "Traction",
            "Chiropractic manipulation (in selected cases)",
            "Surgery (for severe cases or when conservative treatment fails)",
            "Microdiscectomy",
            "Laminectomy",
            "Disc replacement (in selected cases)"
        ],
        prevention: [
            "Proper lifting techniques (using legs, not back)",
            "Maintaining good posture",
            "Regular exercise to strengthen back and core muscles",
            "Maintaining healthy weight",
            "Ergonomic work environment",
            "Taking breaks from sitting",
            "Avoiding smoking",
            "Proper body mechanics during physical activities",
            "Stretching exercises",
            "Avoiding prolonged inactivity"
        ]
    }
];

// Function to integrate the entries directly into the healthConditions array
(function() {
    // Find the index of Hepatitis (an existing H entry)
    const hIndex = healthConditions.findIndex(c => c.name === "Hepatitis");
    
    if (hIndex >= 0) {
        // Insert the new entries after Hepatitis
        healthConditions.splice(hIndex + 1, 0, ...hEntries);
        console.log("Successfully added H entries after Hepatitis");
        
        // Force a refresh of the current view
        const activeButton = document.querySelector('.alphabet-btn.active');
        if (activeButton) {
            if (activeButton.textContent === 'All') {
                // If "All" is active, refresh all conditions
                displayAllConditions();
            } else if (activeButton.textContent === 'H') {
                // If "H" is active, refresh H conditions
                filterByLetter('H');
            }
        }
    } else {
        console.warn("Hepatitis not found in health conditions");
    }
})();
