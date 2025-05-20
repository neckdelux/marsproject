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
        
     function cpy() {  
    const emailtxt = document.getElementById(email).textContent;
    navigator.clipboard.writeText(emailtxt)

}