// Create random stars
const starsContainer = document.getElementById('starsContainer');
const numStars = 200;

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

// Scroll animation - MODIFIED FOR MOVEMENT FROM CENTER TO RIGHT
const planetContainer = document.getElementById('planetContainer');
const welcomeText = document.getElementById('welcomeText');
const heroText = document.querySelector('.hero-text');
const heroTextOutline = document.querySelector('.hero-text-outline');

// Check if we are on the home page
if (welcomeText && heroText && heroTextOutline) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollPosition <= 0) {
            planetContainer.style.transform = 'translate(-50%, -10%)';
            heroText.style.opacity = 1;
            welcomeText.style.opacity = 0;
            return;
        }

        if (scrollPosition <= 0) {
            planetContainer.style.transform = 'translate(-50%, -10%)';
            heroTextOutline.style.opacity = 1;
            welcomeText.style.opacity = 0;
            return;
        }

        // As user scrolls, move Mars from center to right and slightly reduce its size
        if (scrollPosition > 0) {
            // Calculate scale (make planet slightly smaller as scroll increases)
            const scale = Math.max(0.85, 1 - (scrollPosition / (windowHeight * 3)));
            
            // Move planet from center to right
            // Start at 50% left (center) and move right as scroll increases
            const leftPosition = Math.max(50 + (scrollPosition / 20), 65);
            
            planetContainer.style.transform = `translate(-50%, -50%) translateX(${scrollPosition}px) scale(${scale})`;
            
            // Move text up and fade it out
            const textOpacity = Math.max(0, 1 - scrollPosition / (windowHeight / 2));
            heroText.style.opacity = textOpacity;
            heroTextOutline.style.opacity = textOpacity;
            
            // Fade in welcome text
            if (scrollPosition > windowHeight * 0.15) {
                welcomeText.style.opacity = Math.min((scrollPosition - windowHeight * 0.15) / 200, 1);
            } else {
                welcomeText.style.opacity = 0;
            }
            document.addEventListener("DOMContentLoaded", function () {
                const form = document.getElementById("loginForm");
              
                form.addEventListener("submit", function (e) {
                  e.preventDefault(); // Prevent form from submitting the normal way
              
                  const email = document.getElementById("email").value;
                  const password = document.getElementById("password").value;
              
                  // Replace this with your actual user check logic if needed
                  if (email === "admin@mars.com" && password === "1234") {
                    // Save login info
                    localStorage.setItem("loggedIn", "true");
                    // Optionally save user name/email
                    localStorage.setItem("userEmail", email);
              
                    // Redirect to home
                    window.location.href = "home.html";
                  } else {
                    alert("Invalid email or password 🚫👽");
                  }
                });
              });
              
        }
    });
}

// Page transition effects
    // document.addEventListener('DOMContentLoaded', function() {
    //     // Get the login link in nav
    //     const loginLink = document.querySelector('.login a');
        
    //     // If login link exists
    //     if (loginLink) {
    //         loginLink.addEventListener('click', function(e) {
    //             // Prevent default navigation
    //             e.preventDefault();
                
    //             // Check if we need to go to login page or back to home
    //             const isGoingToLogin = loginLink.getAttribute('href') === '#' || 
    //                                 loginLink.getAttribute('href') === 'login.html';
                
    //             // Page we'll eventually navigate to
    //             const targetPage = isGoingToLogin ? 'login.html' : 'home.html';
                
    //             // If we're going to login page
    //             if (isGoingToLogin) {
    //                 // Add transitioning class to body for CSS animations
    //                 document.body.classList.add('page-transitioning');
                    
    //                 // Animate the planet to left
    //                 if (planetContainer) {
    //                     planetContainer.style.transition = 'transform 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
    //                     planetContainer.style.transform = 'translate(-150%, -50%) scale(0.8) rotate(-20deg)';
    //                 }
                    
    //                 // Fade out hero text
    //                 if (heroText) {
    //                     heroText.style.transition = 'opacity 0.6s ease-out';
    //                     heroText.style.opacity = 0;
    //                 }
                    
    //                 if (heroTextOutline) {
    //                     heroTextOutline.style.transition = 'opacity 0.6s ease-out';
    //                     heroTextOutline.style.opacity = 0;
    //                 }
                    
    //                 // Fade out welcome text if it's visible
    //                 if (welcomeText && window.getComputedStyle(welcomeText).opacity > 0) {
    //                     welcomeText.style.transition = 'opacity 0.6s ease-out';
    //                     welcomeText.style.opacity = 0;
    //                 }
                    
    //                 // After animation completes, navigate to login page
    //                 setTimeout(() => {
    //                     sessionStorage.setItem('comingFromHome', 'true');
    //                     window.location.href = targetPage;
    //                 }, 1200); // Matches the transition duration
    //             } else {
    //                 // Going back to home
    //                 if (planetContainer) {
    //                     planetContainer.style.transition = 'transform 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
    //                     planetContainer.style.transform = 'translate(-50%, -10%)';
    //                 }
                    
    //                 setTimeout(() => {
    //                     sessionStorage.setItem('comingFromLogin', 'true');
    //                     window.location.href = targetPage;
    //                 }, 1200);
    //             }
    //         });
    //     }
        
    //     // Handle entrance animations when page loads
    //     if (document.body.classList.contains('login-page')) {
    //         if (sessionStorage.getItem('comingFromHome') === 'true') {
    //             // If we came from home page, animate the planet from left
    //             if (planetContainer) {
    //                 planetContainer.style.transform = 'translate(-150%, -50%) scale(0.8) rotate(-20deg)';
                    
    //                 // Force a reflow to ensure the initial position is applied
    //                 void planetContainer.offsetWidth;
                    
    //                 // Now animate to the final position
    //                 planetContainer.style.transition = 'transform 0.8s ease-out';
    //                 planetContainer.style.transform = 'translate(-85%, -50%) scale(0.75)';
    //             }
                
    //             // Also animate in the login form
    //             const loginContainer = document.querySelector('.login-container');
    //             if (loginContainer) {
    //                 loginContainer.style.opacity = 0;
    //                 loginContainer.style.transform = 'translate(50%, -50%) translateX(50px)';
                    
    //                 // Force a reflow
    //                 void loginContainer.offsetWidth;
                    
    //                 // Animate in
    //                 loginContainer.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    //                 loginContainer.style.opacity = 1;
    //                 loginContainer.style.transform = 'translate(50%, -50%)';
    //             }
                
    //             // Clear the session flag
    //             sessionStorage.removeItem('comingFromHome');
    //         }
    //     } else {
    //         // On home page
    //         if (sessionStorage.getItem('comingFromLogin') === 'true') {
    //             // Coming from login, animate planet back to center
    //             if (planetContainer) {
    //                 planetContainer.style.transform = 'translate(-85%, -50%) scale(0.75)';
                    
    //                 // Force a reflow
    //                 void planetContainer.offsetWidth;
                    
    //                 // Animate to center
    //                 planetContainer.style.transition = 'transform 0.8s ease-out';
    //                 planetContainer.style.transform = 'translate(-50%, -10%)';
    //             }
                
    //             // Fade in texts
    //             if (heroText) {
    //                 heroText.style.opacity = 0;
                    
    //                 // Force a reflow
    //                 void heroText.offsetWidth;
                    
    //                 heroText.style.transition = 'opacity 0.8s ease-out';
    //                 heroText.style.opacity = 1;
    //             }
                
    //             if (heroTextOutline) {
    //                 heroTextOutline.style.opacity = 0;
                    
    //                 // Force a reflow
    //                 void heroTextOutline.offsetWidth;
                    
    //                 heroTextOutline.style.transition = 'opacity 0.8s ease-out';
    //                 heroTextOutline.style.opacity = 1;
    //             }
                
    //             // Clear the session flag
    //             sessionStorage.removeItem('comingFromLogin');
    //         }
    //     }
//});
