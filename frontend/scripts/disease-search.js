document.addEventListener('DOMContentLoaded', function() {
    const symptomInput = document.getElementById('symptomInput');
    const addSymptomBtn = document.getElementById('addSymptom');
    const selectedSymptomsDiv = document.getElementById('selectedSymptoms');
    const searchBtn = document.getElementById('searchDiseases');
    const resultsSection = document.getElementById('resultsSection');
    const diseasesList = document.getElementById('diseasesList');
    const treatmentInfo = document.getElementById('treatmentInfo');

    let selectedSymptoms = new Set();
    let probabilityChart = null;
    let symptomsMatchChart = null;

    // Define symptom categories with English translations
    const symptomCategories = {
        "Heart Disease": ["Heart Palpitations", "Heart Failure", "Cardiac Issues"],
        "Neurological": ["Stroke", "Epilepsy", "Neurological Disorders"],
        "Bone Disease": ["Bone Pain", "Joint Pain"],
        "Pediatric Disease": ["Children's Diseases", "Childhood Fever"],
        "Urinary Disease": ["Urinary Tract Infection", "Urinary Tract"],
        // Add more categories and symptoms as needed
    };

    // Create a flat list of all symptoms from the disease database (deduplicated, case-insensitive)
    function getAllSymptomsFromDatabase() {
        const symptomsSet = new Set();
        if (typeof diseaseDatabase !== 'undefined') {
            Object.values(diseaseDatabase).forEach(disease => {
                if (Array.isArray(disease.symptoms)) {
                    disease.symptoms.forEach(sym => symptomsSet.add(sym.trim()));
                }
            });
        }
        return Array.from(symptomsSet);
    }
    const allSymptoms = getAllSymptomsFromDatabase();

    // Initialize Charts
    function initializeCharts() {
        const probabilityCtx = document.getElementById('probabilityChart').getContext('2d');
        const symptomsCtx = document.getElementById('symptomsMatchChart').getContext('2d');

        probabilityChart = new Chart(probabilityCtx, {
            type: 'bar',
            data: {
                labels: [],
                datasets: [{
                    label: 'Disease Probability (%)',
                    data: [],
                    backgroundColor: [
                        'rgba(123, 211, 247, 0.8)',
                        'rgba(76, 175, 80, 0.8)',
                        'rgba(255, 152, 0, 0.8)',
                        'rgba(244, 67, 54, 0.8)',
                        'rgba(156, 39, 176, 0.8)'
                    ],
                    borderColor: [
                        'rgba(123, 211, 247, 1)',
                        'rgba(76, 175, 80, 1)',
                        'rgba(255, 152, 0, 1)',
                        'rgba(244, 67, 54, 1)',
                        'rgba(156, 39, 176, 1)'
                    ],
                    borderWidth: 1,
                    borderRadius: 6,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        padding: 10,
                        titleFont: {
                            size: 14
                        },
                        bodyFont: {
                            size: 14
                        },
                        displayColors: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            display: true,
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            font: {
                                size: 12
                            },
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                size: 12
                            }
                        }
                    }
                }
            }
        });

        symptomsMatchChart = new Chart(symptomsCtx, {
            type: 'doughnut',
            data: {
                labels: ['Matching Symptoms', 'Non-Matching Symptoms'],
                datasets: [{
                    data: [0, 100],
                    backgroundColor: [
                        'rgba(76, 175, 80, 0.8)',
                        'rgba(200, 200, 200, 0.5)'
                    ],
                    borderColor: [
                        'rgba(76, 175, 80, 1)',
                        'rgba(200, 200, 200, 1)'
                    ],
                    borderWidth: 1,
                    hoverOffset: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        padding: 10,
                        titleFont: {
                            size: 14
                        },
                        bodyFont: {
                            size: 14
                        }
                    }
                }
            }
        });
    }

    initializeCharts();

    // Create suggestions dropdown
    function createSuggestionsDropdown() {
        let existingDropdown = document.getElementById('symptomSuggestions');
        if (existingDropdown) {
            existingDropdown.remove();
        }

        const dropdown = document.createElement('div');
        dropdown.id = 'symptomSuggestions';
        dropdown.className = 'symptom-suggestions';
        return dropdown;
    }

    // Show symptom suggestions
    function showSymptomSuggestions(input) {
        const dropdown = createSuggestionsDropdown();
        const inputValue = input.trim();
        
        const suggestions = allSymptoms
            .filter(symptom => 
                symptom.includes(inputValue.toLowerCase()) && 
                !selectedSymptoms.has(symptom)
            )
            .slice(0, 10); // Limit to 10 suggestions for usability
        
        if (suggestions.length === 0) return;
        
        suggestions.forEach(symptom => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.textContent = symptom;
            div.addEventListener('click', () => {
                addSymptom(symptom);
                dropdown.remove();
            });
            dropdown.appendChild(div);
        });
        
        const inputRect = symptomInput.getBoundingClientRect();
        dropdown.style.position = 'absolute';
        dropdown.style.top = (window.scrollY + inputRect.bottom) + 'px';
        dropdown.style.left = (window.scrollX + inputRect.left) + 'px';
        dropdown.style.width = inputRect.width + 'px';
        document.body.appendChild(dropdown);
    }

    // Add symptom to selected symptoms
    function addSymptom(symptom) {
        if (!selectedSymptoms.has(symptom)) {
            selectedSymptoms.add(symptom);
            const tag = document.createElement('div');
            tag.className = 'symptom-tag animate__animated animate__fadeIn';
            tag.innerHTML = `${symptom} <button class="remove-symptom"><i class="fas fa-times"></i></button>`;
            
            tag.querySelector('.remove-symptom').addEventListener('click', () => {
                tag.classList.remove('animate__fadeIn');
                tag.classList.add('animate__fadeOut');
                setTimeout(() => {
                    selectedSymptoms.delete(symptom);
                    tag.remove();
                }, 500);
            });
            
            selectedSymptomsDiv.appendChild(tag);
        }
        symptomInput.value = '';
        const dropdown = document.getElementById('symptomSuggestions');
        if (dropdown) dropdown.remove();
    }

    // Helper function to detect if text is likely Urdu
    function isUrduText(text) {
        // Urdu Unicode range check
        const urduPattern = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/;
        console.log('Checking if text is Urdu:', text, urduPattern.test(text));
        return urduPattern.test(text);
    }

    // Translate symptoms to English if they are in Urdu
    async function translateSymptomsIfNeeded(symptoms) {
        try {
            console.log('Checking symptoms for translation:', symptoms);
            // Check each symptom individually rather than just checking if any are Urdu
            let hasAnyUrduSymptom = false;
            
            // Process each symptom individually
            const translatedSymptoms = symptoms.map(symptom => {
                const isUrdu = isUrduText(symptom);
                if (isUrdu) {
                    hasAnyUrduSymptom = true;
                }
                return { original: symptom, isUrdu };
            });
            
            console.log('Has Urdu symptoms:', hasAnyUrduSymptom);
            
            if (hasAnyUrduSymptom) {
                // Create a simple translation placeholder since we can't directly use Google Translate API
                // In a real implementation, this would use a proper API
                const commonUrduSymptomMap = {
                    // Basic symptoms
                    'سر درد': 'Headache',
                    'شدید سر درد': 'Severe Headache',
                    'بخار': 'Fever',
                    'تیز بخار': 'High Fever',
                    'کھانسی': 'Cough',
                    'خشک کھانسی': 'Dry Cough',
                    'بلغم والی کھانسی': 'Cough with phlegm',
                    'گلے میں درد': 'Sore Throat',
                    'گلے کی سوزش': 'Throat Inflammation',
                    
                    // Pain symptoms
                    'پیٹ میں درد': 'Stomach Pain',
                    'پیٹ درد': 'Stomach Pain',
                    'شدید پیٹ درد': 'Severe Abdominal Pain',
                    'سینے میں درد': 'Chest Pain',
                    'سینہ درد': 'Chest Pain',
                    'جوڑوں میں درد': 'Joint Pain',
                    'پٹھوں میں درد': 'Muscle Pain',
                    'آنکھوں کے پیچھے درد': 'Pain Behind Eyes',
                    'آنکھوں میں تکلیف': 'Eye Pain',
                    'آنکھ کا درد': 'Eye Pain',
                    'ہڈیوں میں درد': 'Bone Pain',
                    'کمر درد': 'Back Pain',
                    
                    // Digestive symptoms
                    'متلی': 'Nausea',
                    'الٹی': 'Vomiting',
                    'قے': 'Vomiting',
                    'مسلسل الٹی': 'Persistent Vomiting',
                    'اسہال': 'Diarrhea',
                    'قبض': 'Constipation',
                    'بھوک میں کمی': 'Loss of Appetite',
                    'زیادہ پیاس': 'Excessive Thirst',
                    'بھوک میں اضافہ': 'Increased Hunger',
                    
                    // Respiratory symptoms
                    'سانس میں دشواری': 'Difficulty Breathing',
                    'سانس کی تکلیف': 'Difficulty Breathing',
                    'سانس کی قلت': 'Shortness of Breath',
                    'گھرگھراہٹ': 'Wheezing',
                    'تیز سانس': 'Rapid Breathing',
                    'سینے میں جکڑن': 'Chest Tightness',
                    'رات کو کھانسی': 'Coughing at Night',
                    'خون کی کھانسی': 'Coughing up Blood',
                    'بلغم': 'Phlegm',
                    
                    // General symptoms
                    'کمزوری': 'Weakness',
                    'تھکاوٹ': 'Fatigue',
                    'تھکان': 'Fatigue',
                    'وزن میں کمی': 'Weight Loss',
                    'وزن بڑھنا': 'Weight Gain',
                    'رات کو پسینہ': 'Night Sweats',
                    'کپکپی': 'Chills',
                    'ٹھنڈی کا احساس': 'Cold Sensitivity',
                    'پسینہ': 'Sweating',
                    'بے چینی': 'Restlessness',
                    
                    // Skin symptoms
                    'خارش': 'Itching',
                    'کھجلی': 'Itching',
                    'جلد کی خشکی': 'Dry Skin',
                    'دانے': 'Rash',
                    'چھالے': 'Blisters',
                    'پیلی جلد': 'Jaundice',
                    'آسانی سے چوٹ لگنا': 'Easy Bruising',
                    'سوزش': 'Inflammation',
                    'لال جلد': 'Redness',
                    'سوجن': 'Swelling',
                    
                    // Neurological symptoms
                    'دل کی دھڑکن': 'Heart Palpitations',
                    'بے ہوشی': 'Fainting',
                    'چکر آنا': 'Dizziness',
                    'چکر': 'Dizziness',
                    'الجھن': 'Confusion',
                    'دورے': 'Seizures',
                    'کمزور یادداشت': 'Memory Problems',
                    'بولنے میں دشواری': 'Difficulty Speaking',
                    'جھٹکے': 'Tremors',
                    'سر گھومنا': 'Vertigo',
                    
                    // Sensory symptoms
                    'دھندلا نظر': 'Blurred Vision',
                    'دھندلی نظر': 'Blurred Vision',
                    'آنکھوں میں پانی': 'Watery Eyes',
                    'روشنی سے حساسیت': 'Light Sensitivity',
                    'آواز سے حساسیت': 'Sound Sensitivity',
                    'کان کی آواز': 'Ringing in Ears',
                    'سن ہونا': 'Numbness',
                    'جھنجھناہٹ': 'Tingling',
                    
                    // Urinary symptoms
                    'بار بار پیشاب': 'Frequent Urination',
                    'پیشاب میں جلن': 'Burning Urination',
                    'پیشاب میں خون': 'Blood in Urine',
                    'بدبودار پیشاب': 'Strong-smelling Urine',
                    'گدلا پیشاب': 'Cloudy Urine',
                    
                    // Common diseases
                    'زکام': 'Common Cold',
                    'فلو': 'Flu',
                    'انفلوئنزا': 'Influenza',
                    'الرجی': 'Allergy',
                    'ذیابیطس': 'Diabetes',
                    'شوگر': 'Diabetes',
                    'دمہ': 'Asthma',
                    'ٹی بی': 'Tuberculosis',
                    'تپ دق': 'Tuberculosis',
                    'ملیریا': 'Malaria',
                    'ڈینگی': 'Dengue Fever',
                    'ہائی بلڈ پریشر': 'Hypertension',
                    'بلڈ پریشر': 'Hypertension',
                    'دل کی بیماری': 'Heart Disease',
                    'نمونیا': 'Pneumonia',
                    'گردے کی بیماری': 'Kidney Disease',
                    'جگر کی بیماری': 'Liver Disease',
                    'تھائیرائیڈ کی کمی': 'Hypothyroidism',
                    'خون کی کمی': 'Anemia',
                    'مائیگرین': 'Migraine',
                    'صدمہ': 'Trauma',
                    'چوٹ': 'Injury',
                    'زخم': 'Wound',
                    'جلنا': 'Burn'
                };

                // Process each symptom and translate if it's in Urdu
                const finalTranslatedSymptoms = translatedSymptoms.map(item => {
                    if (item.isUrdu) {
                        // Try to find a translation
                        return commonUrduSymptomMap[item.original] || item.original;
                    } else {
                        // Keep English symptoms as-is
                        return item.original;
                    }
                });

                console.log('Translated symptoms:', finalTranslatedSymptoms);
                return finalTranslatedSymptoms;
            }
            
            // If no Urdu symptoms detected, return original symptoms array
            return symptoms.map(symptom => symptom);
        } catch (error) {
            console.error('Translation error:', error);
            return symptoms; // Return original symptoms if translation fails
        }
    }

    // Find disease matches
    async function findDiseaseMatches(symptoms) {
        if (symptoms.length === 0) return [];

        // Translate symptoms to English if they're in Urdu
        const translatedSymptoms = await translateSymptomsIfNeeded(symptoms);
        console.log('Original symptoms:', symptoms);
        console.log('Translated symptoms:', translatedSymptoms);
        
        const matches = [];
        
        // Calculate matches for each disease
        for (const [diseaseName, diseaseInfo] of Object.entries(diseaseDatabase)) {
            const diseaseSymptoms = diseaseInfo.symptoms;
            
            // Improved matching logic to handle more variations
            const matchingSymptoms = translatedSymptoms.filter(userSymptom => {
                const userSymptomTrim = userSymptom.trim().toLowerCase();
                
                // Check for exact match
                if (diseaseSymptoms.some(ds => ds.toLowerCase() === userSymptomTrim)) {
                    return true;
                }
                
                // Check for partial match (disease symptom contains user symptom)
                if (diseaseSymptoms.some(ds => ds.toLowerCase().includes(userSymptomTrim))) {
                    return true;
                }
                
                // Check for partial match (user symptom contains disease symptom)
                if (diseaseSymptoms.some(ds => userSymptomTrim.includes(ds.toLowerCase()))) {
                    return true;
                }
                
                // Check for word-by-word match with better accuracy
                const userWords = userSymptomTrim.split(/\s+/);
                if (userWords.length > 1) {
                    return diseaseSymptoms.some(ds => {
                        const dsLower = ds.toLowerCase();
                        const dsWords = dsLower.split(/\s+/);
                        // Check if at least half of the words match
                        const matchingWords = userWords.filter(word => 
                            word.length > 3 && dsWords.some(dsWord => 
                                dsWord.includes(word) || word.includes(dsWord)
                            )
                        );
                        return matchingWords.length >= Math.ceil(userWords.length / 2);
                    });
                }
                
                return false;
            });
            
            if (matchingSymptoms.length > 0) {
                // Calculate weighted match score
                const userSymptomMatchRatio = matchingSymptoms.length / translatedSymptoms.length;
                const diseaseSymptomMatchRatio = matchingSymptoms.length / diseaseSymptoms.length;
                
                // Weight the ratios (60% user symptoms, 40% disease symptoms)
                const weightedScore = (userSymptomMatchRatio * 0.6 + diseaseSymptomMatchRatio * 0.4) * 100;
                const matchPercentage = Math.min(100, Math.round(weightedScore));
                
                // Only include if match percentage is above threshold
                if (matchPercentage >= 20) {
                    matches.push({
                        name: diseaseName,
                        score: matchPercentage,
                        matchingSymptoms: matchingSymptoms,
                        allSymptoms: diseaseSymptoms,
                        matchingSymptomCount: matchingSymptoms.length,
                        totalSymptomCount: diseaseSymptoms.length,
                        severity: diseaseInfo.severity,
                        treatments: diseaseInfo.treatments
                    });
                }
            }
        }
        
        // Sort matches by score (descending)
        return matches.sort((a, b) => b.score - a.score);
    }

    // Update results display
    function updateResults(matches) {
        diseasesList.innerHTML = '';
        treatmentInfo.innerHTML = '';
        
        if (matches.length === 0) {
            diseasesList.innerHTML = '<div class="no-results">No matches found for your symptoms. Try adding more symptoms or different ones.</div>';
            return;
        }
        
        // Update probability chart
        const topMatches = matches.slice(0, 5);
        probabilityChart.data.labels = topMatches.map(match => match.name);
        probabilityChart.data.datasets[0].data = topMatches.map(match => match.score);
        probabilityChart.update();
        
        // Update symptoms match chart for the top match
        const topMatch = matches[0];
        symptomsMatchChart.data.datasets[0].data = [
            topMatch.matchingSymptomCount,
            topMatch.totalSymptomCount - topMatch.matchingSymptomCount
        ];
        symptomsMatchChart.update();
        
        // Display disease list
        matches.forEach((match, index) => {
            const diseaseItem = document.createElement('div');
            diseaseItem.className = 'disease-item';
            diseaseItem.dataset.index = index;
            
            let severityClass = '';
            let severityText = '';
            
            switch(match.severity.toLowerCase()) {
                case 'mild':
                case 'low':
                case 'ہلکا':
                    severityClass = 'severity-low';
                    severityText = 'Mild';
                    break;
                case 'moderate':
                case 'medium':
                case 'درمیانی':
                case 'درمیانہ':
                    severityClass = 'severity-medium';
                    severityText = 'Moderate';
                    break;
                case 'severe':
                case 'high':
                case 'شدید':
                    severityClass = 'severity-high';
                    severityText = 'Severe';
                    break;
                default:
                    severityClass = 'severity-medium';
                    severityText = 'Moderate';
            }
            
            // Get unmatched symptoms to show as additional possible symptoms
            const unmatchedSymptoms = match.allSymptoms.filter(s => 
                !match.matchingSymptoms.includes(s)
            );
            
            diseaseItem.innerHTML = `
                <h3>${match.name}</h3>
                <p>Match: <span class="match-percentage">${match.score}%</span></p>
                <p>Severity: <span class="${severityClass}">${severityText}</span></p>
                <p class="matched-symptoms"><strong>Matched Symptoms:</strong> ${match.matchingSymptoms.join(', ')}</p>
                <p class="other-symptoms"><strong>Other Possible Symptoms:</strong> ${unmatchedSymptoms.slice(0, 5).join(', ')}${unmatchedSymptoms.length > 5 ? '...' : ''}</p>
            `;
            
            diseaseItem.addEventListener('click', () => {
                // Remove selected class from all items
                document.querySelectorAll('.disease-item').forEach(item => {
                    item.classList.remove('selected');
                });
                
                // Add selected class to clicked item
                diseaseItem.classList.add('selected');
                
                // Show treatment info for selected disease
                showTreatments(match);
                
                // Update online search links
                updateOnlineSearchLinks(match.name);
            });
            
            diseasesList.appendChild(diseaseItem);
        });
        
        // Show treatment for first disease by default
        showTreatments(matches[0]);
        
        // Update online search links for first disease
        updateOnlineSearchLinks(matches[0].name);
    }

    // Update online search links
    function updateOnlineSearchLinks(diseaseName) {
        const googleLink = document.querySelector('.search-link.google');
        const mayoLink = document.querySelector('.search-link.mayo');
        const webmdLink = document.querySelector('.search-link.webmd');
        const medlineLink = document.querySelector('.search-link.medline');
        const healthlineLink = document.querySelector('.search-link.healthline');
        
        const encodedDisease = encodeURIComponent(diseaseName);
        
        googleLink.href = `https://www.google.com/search?q=${encodedDisease}+symptoms+treatment`;
        mayoLink.href = `https://www.mayoclinic.org/search/search-results?q=${encodedDisease}`;
        webmdLink.href = `https://www.webmd.com/search/search_results/default.aspx?query=${encodedDisease}`;
        medlineLink.href = `https://medlineplus.gov/search.html?query=${encodedDisease}`;
        healthlineLink.href = `https://www.healthline.com/search?q1=${encodedDisease}`;
    }

    // Search diseases based on selected symptoms
    async function searchDiseases() {
        const symptomsArray = Array.from(selectedSymptoms);
        
        if (symptomsArray.length === 0) {
            alert('Please add at least one symptom before searching.');
            return;
        }
        
        try {
            // Show loading indicator
            diseasesList.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-pulse"></i> Analyzing symptoms...</div>';
            resultsSection.style.display = 'block';
            resultsSection.scrollIntoView({ behavior: 'smooth' });
            
            // Find disease matches with Urdu translation support
            const matches = await findDiseaseMatches(symptomsArray);
            
            // Update results display
            updateResults(matches);
            
            // If no matches found, show generic search options
            if (matches.length === 0) {
                const symptomsString = symptomsArray.join(' ');
                updateOnlineSearchLinks(symptomsString);
                
                treatmentInfo.innerHTML = `
                    <div class="partial-match-info">
                        <p>No specific matches found in our database. We've prepared online search links for your symptoms.</p>
                        <p>Consider consulting a healthcare professional for proper diagnosis.</p>
                    </div>
                `;
            }
        } catch (error) {
            console.error('Error searching diseases:', error);
            diseasesList.innerHTML = '<div class="error">An error occurred while searching. Please try again.</div>';
        }
    }

    // Add click handler for search links
    document.addEventListener('click', (e) => {
        if (e.target.closest('.search-link')) {
            const link = e.target.closest('.search-link');
            window.open(link.href, '_blank');
            e.preventDefault();
        }
    });

    // Display treatment information
    function showTreatments(match) {
        treatmentInfo.innerHTML = '';
        
        let severityClass = '';
        let severityText = '';
        
        switch(match.severity.toLowerCase()) {
            case 'mild':
            case 'low':
            case 'ہلکا':
                severityClass = 'severity-low';
                severityText = 'Mild';
                break;
            case 'moderate':
            case 'medium':
            case 'درمیانی':
            case 'درمیانہ':
                severityClass = 'severity-medium';
                severityText = 'Moderate';
                break;
            case 'severe':
            case 'high':
            case 'شدید':
                severityClass = 'severity-high';
                severityText = 'Severe';
                break;
            default:
                severityClass = 'severity-medium';
                severityText = 'Moderate';
        }
        
        const treatmentSection = document.createElement('div');
        treatmentSection.className = 'treatment-section';
        
        treatmentSection.innerHTML = `
            <h4>${match.name} - Treatment Information</h4>
            <p>Severity: <span class="${severityClass}">${severityText}</span></p>
            <p>This condition requires the following treatments:</p>
            <ul>
                ${match.treatments.map(treatment => `<li>${treatment}</li>`).join('')}
            </ul>
            <div class="disclaimer-mini">
                <p><strong>Note:</strong> Always consult with a healthcare professional before starting any treatment.</p>
            </div>
        `;
        
        treatmentInfo.appendChild(treatmentSection);
    }

    // Event Listeners
    addSymptomBtn.addEventListener('click', () => {
        const symptom = symptomInput.value.trim();
        if (symptom) addSymptom(symptom);
    });
    
    symptomInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            const symptom = symptomInput.value.trim();
            if (symptom) addSymptom(symptom);
        } else {
            showSymptomSuggestions(symptomInput.value);
        }
    });
    
    symptomInput.addEventListener('focus', () => {
        showSymptomSuggestions(symptomInput.value);
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.symptom-suggestions') && !e.target.closest('#symptomInput')) {
            const dropdown = document.getElementById('symptomSuggestions');
            if (dropdown) dropdown.remove();
        }
    });
    
    searchBtn.addEventListener('click', searchDiseases);
});
