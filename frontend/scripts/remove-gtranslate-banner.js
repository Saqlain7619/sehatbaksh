// Script to ensure Google Translate banner never appears
(function() {
    // Remove banner as soon as possible
    function removeBanner() {
        // Handle body positioning issue
        if (document.body) {
            document.body.style.top = '0px';
            document.body.style.position = 'static';
        }
        
        // Hide Google elements by class
        const elementsToHide = [
            'goog-te-banner-frame',
            'skiptranslate'
        ];
        
        elementsToHide.forEach(className => {
            const elements = document.getElementsByClassName(className);
            if (elements && elements.length > 0) {
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.display = 'none';
                }
            }
        });
        
        // Hide specific iframes that Google Translate creates
        const iframes = document.getElementsByTagName('iframe');
        for (let i = 0; i < iframes.length; i++) {
            const iframe = iframes[i];
            if (iframe.src.indexOf('translate.google') >= 0) {
                iframe.style.display = 'none';
            }
        }
    }
    
    // Run on page load
    removeBanner();
    
    // Also run after potential banner appears
    setTimeout(removeBanner, 300);
    setTimeout(removeBanner, 800);
    setTimeout(removeBanner, 1500);
    
    // Attempt to handle dynamic changes
    const observer = new MutationObserver(function(mutations) {
        removeBanner();
    });
    
    // Start observing when the body becomes available
    if (document.body) {
        observer.observe(document.body, { 
            childList: true,
            subtree: true 
        });
    } else {
        document.addEventListener('DOMContentLoaded', function() {
            observer.observe(document.body, { 
                childList: true,
                subtree: true 
            });
        });
    }
})();
