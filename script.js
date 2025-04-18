const targetTime = new Date('2025-04-20T17:00:00Z').getTime();

const interval = setInterval(() => {
    const now = Date.now();
    if (now >= targetTime) {
        document.getElementById('caseoh').disabled = false;
        document.getElementById('caseoh').style.filter = 'grayscale(0)';
        document.getElementById('caseoh').innerHTML = "";
        clearInterval(interval);
    }
}, 1000)