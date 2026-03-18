/**
 * Script to correctly setup Google Translate on department pages
 * This script ensures proper paths and consistent behavior
 */
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on a department page
    const isDepartmentPage = window.location.pathname.includes('/departments/');
    
    // Get the base path for resources
    const basePath = isDepartmentPage ? '../' : '';
    
    // Create link to stylesheet if it doesn't exist
    if (!document.querySelector('link[href$="translate-style.css"]')) {
        const styleLink = document.createElement('link');
        styleLink.rel = 'stylesheet';
        styleLink.href = basePath + 'styles/translate-style.css';
        document.head.appendChild(styleLink);
    }
    
    // Create or position the Google Translate element
    let translateElement = document.getElementById('google_translate_element');
    if (!translateElement) {
        translateElement = document.createElement('div');
        translateElement.id = 'google_translate_element';
        translateElement.style.position = 'absolute';
        translateElement.style.top = '20px';
        translateElement.style.right = '20px';
        translateElement.style.zIndex = '1000';
        
        // Insert at beginning of body or after header if it exists
        const header = document.querySelector('header');
        if (header) {
            header.parentNode.insertBefore(translateElement, header.nextSibling);
        } else {
            document.body.insertBefore(translateElement, document.body.firstChild);
        }
    }
    
    // Ensure we have the translation manager script
    if (!document.querySelector('script[src$="translate-manager.js"]')) {
        const script = document.createElement('script');
        script.src = basePath + 'scripts/translate-manager.js';
        document.body.appendChild(script);
    }
    
    // Hide the Google Translate banner
    const style = document.createElement('style');
    style.textContent = `
        .goog-te-banner-frame, 
        .skiptranslate,
        #goog-gt-tt, 
        .goog-te-balloon-frame,
        div#goog-gt- {
            display: none !important;
        }
        body {
            top: 0 !important;
            position: static !important;
        }
        .goog-text-highlight {
            background-color: transparent !important;
            box-shadow: none !important;
        }
    `;
    document.head.appendChild(style);
    
    // Function that initializes Google Translate
    window.googleTranslateElementInit = function() {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            autoDisplay: false
        }, 'google_translate_element');
    };
    
    // Load Google Translate API if not already loaded
    if (!document.querySelector('script[src*="translate.google.com"]')) {
        const googleScript = document.createElement('script');
        googleScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        googleScript.type = 'text/javascript';
        document.body.appendChild(googleScript);
    }
});
