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

 window.onload = () => {
    // Multiple bursts for extra effect
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: Math.random() * 0.6 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    // Show modal popup
    document.getElementById('loveModal').style.display = 'flex';
  };

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    // Make it clickable
    heart.addEventListener('click', (e) => {
      showLoveMessage(e.pageX, e.pageY);
    });

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
  }

  function showLoveMessage(x, y) {
    const msg = document.createElement('div');
    msg.textContent = "I love you 💘";
    msg.style.position = 'absolute';
    msg.style.left = x + 'px';
    msg.style.top = y + 'px';
    msg.style.transform = 'translate(-50%, -50%)';
    msg.style.fontSize = '1.2rem';
    msg.style.color = '#ff2d75';
    msg.style.background = 'white';
    msg.style.padding = '5px 10px';
    msg.style.borderRadius = '10px';
    msg.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    msg.style.zIndex = 9999;
    msg.style.opacity = 1;
    msg.style.transition = 'opacity 1s ease-out';

    document.body.appendChild(msg);

    setTimeout(() => {
      msg.style.opacity = 0;
      setTimeout(() => msg.remove(), 1000);
    }, 1000);
  }

  setInterval(createHeart, 150);
  
function closeModal() {
    document.getElementById('loveModal').style.display = 'none';
}  
