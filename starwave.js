const container = document.getElementById('container');
const gridSize = 20;
const stars = [];

function createStars() {
    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${(x / gridSize) * 100}%`;
            star.style.top = `${(y / gridSize) * 100}%`;
            container.appendChild(star);
            stars.push(star);
        }
    }
}

function getDelay(x, y) {
    const maxDistance = Math.sqrt(2 * gridSize * gridSize);
    const distance = Math.sqrt(x * x + y * y);
    return (distance / maxDistance) * 2000; // 2000ms total animation time
}

function triggerAnimation() {
    stars.forEach((star, index) => {
        const x = index % gridSize;
        const y = Math.floor(index / gridSize);
        const delay = getDelay(x, y);
        
        setTimeout(() => {
            star.style.opacity = '1';
            setTimeout(() => {
                star.style.opacity = '0';
            }, 300); // Each star stays visible for 300ms
        }, delay);
    });
}

function initializeStarWave() {
    createStars();
    triggerAnimation();
}

// Run the animation when the page loads
document.addEventListener('DOMContentLoaded', initializeStarWave);

