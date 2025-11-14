const startButton = document.getElementById('start');
const indicator = document.getElementById('indicator');

startButton.addEventListener('click', () => {
    let count = 10;
    
    const interval = setInterval(() => {
        if (count === 10) {
            indicator.textContent = `Countdown ${count}`;
            count--;
        } else if (count > 0) {
            indicator.textContent = count;
            count--;
        } else {
            indicator.textContent = 'Blast off';
            clearInterval(interval);
        }
    }, 1000);
});