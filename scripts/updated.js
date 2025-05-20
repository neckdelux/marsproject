// Create random stars
document.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.getElementById('starsContainer');
    const numStars = 200;
    
    if (starsContainer) {
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Random size between 1px and 3px
            const size = Math.random() * 2 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            
            // Random position
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            
            // Random animation delay
            star.style.animationDelay = `${Math.random() * 4}s`;
            
            // Random brightness
            const brightness = Math.random() * 0.7 + 0.3;
            star.style.opacity = brightness;
            
            starsContainer.appendChild(star);
        }
    }
    
    // Initialize the FAQ accordions
    initFAQ();
    
    // Initialize the newsletter form
    initNewsletter();
    
    // Initialize mobile menu
    initMobileMenu();
});

// Function to copy email to clipboard
function copyEmail() {
    const emailElement = document.getElementById('email');
    const confirmationElement = document.getElementById('copyConfirmation');
    
    if (emailElement) {
        const emailText = emailElement.textContent;
        
        // Use the modern clipboard API
        navigator.clipboard.writeText(emailText)
            .then(() => {
                // Show the confirmation message
                if (confirmationElement) {
                    confirmationElement.style.display = 'block';
                    
                    // Hide after 2 seconds
                    setTimeout(() => {
                        confirmationElement.style.display = 'none';
                    }, 2000);
                }
            })
            .catch(err => {
                console.error('Could not copy text:', err);
                
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = emailText;
                document.body.appendChild(textArea);
                textArea.select();
                
                try {
                    document.execCommand('copy');
                    if (confirmationElement) {
                        confirmationElement.style.display = 'block';
                        setTimeout(() => {
                            confirmationElement.style.display = 'none';
                        }, 2000);
                    }
                } catch (err) {
                    console.error('Fallback: Could not copy text:', err);
                }
                
                document.body.removeChild(textArea);
            });
    }
}

// Initialize FAQ accordion functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const toggle = item.querySelector('.faq-toggle');
        
        if (question) {
            question.addEventListener('click', () => {
                // Toggle the current item
                item.classList.toggle('active');
                
                // Update the toggle symbol
                if (toggle) {
                    toggle.textContent = item.classList.contains('active') ? '-' : '+';
                }
                
                // Optional: Close other items when one is opened
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        const otherToggle = otherItem.querySelector('.faq-toggle');
                        if (otherToggle) {
                            otherToggle.textContent = '+';
                        }
                    }
                });
            });
        }
    });
}

// Initialize newsletter form functionality
function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    const messageElement = document.getElementById('newsletter-message');
    
    if (form && messageElement) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput) {
                const email = emailInput.value.trim();
                
                if (email) {
                    // Here you would normally send the data to your server
                    // For now, we'll just simulate success
                    
                    // Clear the input
                    emailInput.value = '';
                    
                    // Show success message
                    messageElement.textContent = 'Thank you for subscribing!';
                    messageElement.style.color = '#4CAF50';
                    messageElement.style.display = 'block';
                    
                    // Clear the message after 3 seconds
                    setTimeout(() => {
                        messageElement.textContent = '';
                        messageElement.style.display = 'none';
                    }, 3000);
                }
            }
        });
    }
}

// Initialize mobile menu functionality
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const items = document.querySelector('.items');
    
    if (hamburger && items) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            items.classList.toggle('active');
            hamburger.classList.toggle('active'); // Optional: add active class to hamburger
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !items.contains(e.target) && items.classList.contains('active')) {
                items.classList.remove('active');
                hamburger.classList.remove('active'); // Optional: remove active class from hamburger
            }
        });
    }
}