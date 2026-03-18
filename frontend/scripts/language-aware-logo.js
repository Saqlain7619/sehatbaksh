/**
 * Language-aware logo system for MedPlus (Sehat Bakhsh)
 * Displays the logo text in English or Urdu based on the current language
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initial logo setup
    updateLogoForLanguage();
    
    // Set interval to check for language changes (Google Translate modifies the DOM)
    const languageCheckInterval = setInterval(updateLogoForLanguage, 1000);
    
    // After 10 seconds, reduce the frequency of checks to save resources
    setTimeout(() => {
        clearInterval(languageCheckInterval);
        setInterval(updateLogoForLanguage, 3000);
    }, 10000);
});

/**
 * Updates the logo text based on the current language
 */
function updateLogoForLanguage() {
    // Get all logo containers
    // Select all logo containers and ensure they are protected from Google Translate
    const logoContainers = document.querySelectorAll('.logo h1');
    logoContainers.forEach(logo => {
        logo.classList.add('notranslate');
        logo.setAttribute('translate', 'no');
    });
    
    if (logoContainers.length === 0) return;

    // Check if the page is in Urdu by looking for RTL direction
    const isUrdu = isPageInUrdu();
    
    // Update each logo container
    logoContainers.forEach(logo => {
        if (isUrdu) {
            // Urdu logo - force the font to override any conflicting styles
            // Always use Noto Nastaliq Urdu for Urdu
            logo.innerHTML = '<span class="urdu-logo-text">صحت بخش</span>';
            logo.setAttribute('lang', 'ur');
            logo.setAttribute('dir', 'rtl');
            logo.classList.add('urdu-logo');
        } else {
            // English logo
            // Always use 'Sehat Bakhsh' for English, never allow translation
            logo.textContent = 'Sehat Bakhsh';
            logo.classList.add('notranslate');
            logo.setAttribute('translate', 'no');
            logo.removeAttribute('lang');
            logo.removeAttribute('dir');
            logo.classList.remove('urdu-logo');
        }
    });
}

/**
 * Checks if the page is currently displayed in Urdu
 */
function isPageInUrdu() {
    // Check if Google Translate has added the RTL direction attribute
    const htmlElement = document.documentElement;
    if (htmlElement.dir === 'rtl') return true;
    
    // Check for the skiptranslate class which Google Translate adds
    const hasGoogleTranslate = document.body.classList.contains('translated-rtl');
    if (hasGoogleTranslate) return true;
    
    // Check for the goog-te-combo select element
    const translateCombo = document.querySelector('.goog-te-combo');
    if (translateCombo && translateCombo.value === 'ur') return true;
    
    // Last resort, check if there's a specific URL parameter or localStorage setting
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage === 'ur') return true;
    
    return false;
}

// Add specific styling for the Urdu logo
document.addEventListener('DOMContentLoaded', function() {
    // Create a style element for the Urdu logo styling
    const style = document.createElement('style');
    style.textContent = `
        /* Main logo styling */
        .logo h1 {
            transition: all 0.3s ease;
        }
        
        /* Specific styling for Urdu logo */
        .urdu-logo {
            font-size: 1.3em; /* Adjust size for Urdu script */
            letter-spacing: 0; /* Remove letter spacing for Urdu */
        }
        
        /* The inner span that contains the actual Urdu text */
        .urdu-logo-text {
            font-family: 'Noto Nastaliq Urdu', 'Urdu Typesetting', serif !important;
            font-weight: 500 !important;
            font-size: 1.5em !important;
            display: inline-block;
            margin-top: 5px;
            line-height: 1.4;
        }
        
        /* Make sure the Urdu text appears correctly in any container */
        [lang="ur"] .urdu-logo-text,
        [dir="rtl"] .urdu-logo-text {
            font-family: 'Noto Nastaliq Urdu', 'Urdu Typesetting', serif !important;
        }
        
        /* Responsive adjustments for smaller screens */
        @media (max-width: 768px) {
            .urdu-logo-text {
                font-size: 1.3em !important;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Conditionally load multiple Urdu fonts to ensure at least one works
    if (!document.querySelector('link[href*="fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu"]')) {
        const fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;500;600&display=swap';
        document.head.appendChild(fontLink);
    }
    
    // Add Amiri font as a fallback
    if (!document.querySelector('link[href*="fonts.googleapis.com/css2?family=Amiri"]')) {
        const amiriFontLink = document.createElement('link');
        amiriFontLink.rel = 'stylesheet';
        amiriFontLink.href = 'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap';
        document.head.appendChild(amiriFontLink);
    }
});
