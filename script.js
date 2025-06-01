// Set your relationship start date here (format: YYYY-MM-DD)
const startDate = "2024-12-02"; // Change this to your actual start date

// Update the displayed start date
document.getElementById('start-date').textContent = new Date(startDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// Timer function
function updateTimer() {
    const start = new Date(startDate).getTime();
    const now = new Date().getTime();
    const difference = now - start;
    
    // Calculate time units
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Update the timer display
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update timer immediately and then every second
updateTimer();
setInterval(updateTimer, 1000);

// Function to reveal answers to cute questions
function revealAnswer(answerId) {
    const answer = document.getElementById(answerId);
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}

// Add a simple animation to photos when they come into view
document.addEventListener('DOMContentLoaded', function() {
    // Create a simple fade-in effect for sections as they scroll into view
    const sections = document.querySelectorAll('section');
    
    const fadeInOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };
    
    const fadeInObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        });
    }, fadeInOptions);
    
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        fadeInObserver.observe(section);
    });
});