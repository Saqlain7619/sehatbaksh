// Custom Language Selector for Google Translate

// Common languages with their codes
const commonLanguages = [
    { code: 'en', name: 'English' },
    { code: 'ur', name: 'اردو' },  // Urdu
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'ar', name: 'العربية' },
    { code: 'zh-CN', name: '中文' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'ja', name: '日本語' },
    { code: 'ru', name: 'Русский' }
];

// Function to set language using Google Translate API
function setLanguage(languageCode) {
    if (languageCode) {
        // Store the selected language in localStorage
        localStorage.setItem('preferredLanguage', languageCode);
        
        // Apply the language if Google Translate is loaded
        if (window.google && window.google.translate) {
            var select = document.querySelector('.goog-te-combo');
            if (select) {
                select.value = languageCode;
                select.dispatchEvent(new Event('change'));
                
                // Update the displayed language in our custom selector
                updateDisplayedLanguage(languageCode);
                
                // Update RTL attribute for languages like Arabic and Urdu
                if (['ar', 'ur', 'he', 'fa'].includes(languageCode)) {
                    document.documentElement.setAttribute('dir', 'rtl');
                } else {
                    document.documentElement.setAttribute('dir', 'ltr');
                }
            }
        }
    }
}

// Get the language name by code
function getLanguageName(code) {
    const language = commonLanguages.find(lang => lang.code === code);
    return language ? language.name : code.toUpperCase();
}

// Update the displayed language in our custom selector
function updateDisplayedLanguage(languageCode) {
    const currentLangSpan = document.querySelector('.current-language');
    if (currentLangSpan) {
        currentLangSpan.textContent = getLanguageName(languageCode);
    }
}

// Create custom language selector UI
function createCustomLanguageSelector() {
    const translateElement = document.getElementById('google_translate_element');
    if (!translateElement) return;
    
    // Create the language button
    const languageButton = document.createElement('div');
    languageButton.className = 'language-selector';
    languageButton.innerHTML = '<i class="fas fa-globe language-icon"></i><span class="current-language">English</span>';
    
    // Create language dropdown
    const dropdown = document.createElement('div');
    dropdown.className = 'language-dropdown';
    
    // Add language options
    commonLanguages.forEach(language => {
        const option = document.createElement('div');
        option.className = 'language-option';
        option.setAttribute('data-lang', language.code);
        option.textContent = language.name;
        option.addEventListener('click', function() {
            setLanguage(language.code);
            dropdown.classList.remove('show');
        });
        dropdown.appendChild(option);
    });
    
    // Toggle dropdown visibility when clicking the button
    languageButton.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    });
    
    // Close dropdown when clicking elsewhere
    document.addEventListener('click', function() {
        dropdown.classList.remove('show');
    });
    
    // Prevent dropdown from closing when clicking on it
    dropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Append elements to the translate container
    translateElement.appendChild(languageButton);
    translateElement.appendChild(dropdown);
}

// Function to read URL parameters (for backward compatibility)
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Create our custom language selector UI first
    createCustomLanguageSelector();
    
    // Monitor for Google Translate widget to be ready
    var checkInterval = setInterval(function() {
        // When Google translation element is ready
        if (document.querySelector('.goog-te-combo')) {
            clearInterval(checkInterval);
            
            // Get language from localStorage
            var savedLanguage = localStorage.getItem('preferredLanguage');
            
            // Check URL parameter as fallback
            var urlLanguage = getUrlParameter('lang');
            
            // Apply saved language
            if (savedLanguage) {
                setLanguage(savedLanguage);
            } else if (urlLanguage) {
                setLanguage(urlLanguage);
            }
            
            // Add event listener to save user selection from original dropdown
            var langSelector = document.querySelector('.goog-te-combo');
            if (langSelector) {
                langSelector.addEventListener('change', function() {
                    localStorage.setItem('preferredLanguage', this.value);
                    updateDisplayedLanguage(this.value);
                    
                    // Re-initialize dynamic components after translation
                    setTimeout(function() {
                        // Re-initialize alphabet buttons if we're in the health library
                        if (typeof initializeAlphabetButtons === 'function') {
                            var alphabetContainer = document.getElementById('alphabetButtons');
                            if (alphabetContainer) {
                                // Clear existing buttons
                                alphabetContainer.innerHTML = '';
                                // Re-initialize
                                initializeAlphabetButtons();
                                // Re-display conditions
                                if (typeof displayAllConditions === 'function') {
                                    displayAllConditions();
                                }
                            }
                        }
                    }, 1000); // Give the translation a second to complete
                });
            }
        }
    }, 300); // Check every 300ms
    
    // Timeout after 10 seconds to prevent infinite checking
    setTimeout(function() {
        clearInterval(checkInterval);
    }, 10000);
});
