document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (!localStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html';
    }

    // Handle logout
    document.getElementById('logoutBtn').addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'login.html';
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate__animated');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            
            if(elementPosition < screenPosition) {
                if(!element.classList.contains('animate__fadeInRight')) {
                    element.classList.add('animate__fadeInRight');
                }
            }
        });
    };

    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);

    // Handle appointment button clicks
    const appointmentButtons = document.querySelectorAll('.appointment-btn, .cta-btn');
    appointmentButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Add your appointment booking logic here
            alert('Appointment booking feature coming soon!');
        });
    });

    // Add scroll animation to navigation
    let lastScroll = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scroll Down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scroll Up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });

    // Tab Functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});
