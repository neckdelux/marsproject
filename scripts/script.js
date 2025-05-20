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
        heroTextOutine.style.opacity = 1;
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
            }
        });
