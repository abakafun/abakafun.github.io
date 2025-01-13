var mus;
var cpc = 1;
var nextUpgrade = 100;
var value = 0;
var clickButton;

function initializeAudio() {
    console.log("Initializing audio");
    mus = document.getElementById("music");
    function playMusic() {
        mus.play().then(() => {
            console.log("Audio started playing");
        }).catch(error => {
            console.error("Audio play failed:", error);
        });
    }

    // Play music initially
    playMusic();

    // Add event listener to play music again when it ends
    mus.addEventListener('ended', function() {
        console.log("Audio ended, playing again");
        playMusic();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeAudio();
    clickButton = document.querySelector('.click');
    clickButton.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
    
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
    
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
    
        ripple.addEventListener('animationend', function() {
            ripple.remove();
        });
    });
    clickUpgrade = document.querySelector('.upgrade');
    clickUpgrade.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
    
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
    
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
    
        ripple.addEventListener('animationend', function() {
            ripple.remove();
        });
    });
});



function addCount() {
    console.log(value);
    value = parseInt(value) + parseInt(cpc);
    console.log(value);

    document.getElementById("increment").innerHTML = String(value);
}

function goAway() {
    document.getElementById("welcome").remove()
}


function upgradeCount() {
    var upCount = document.getElementById("cpc");
    var upCost = document.getElementById("cpcBuy");

    if (value >= nextUpgrade) {
        cpc = cpc * 1.5

        if (cpc % 1 !== 0)  {
            cpc = Math.round(cpc);
        }

        upCount.innerHTML = String(cpc) + " Clicks per Click"
        value = value - nextUpgrade;

        nextUpgrade = nextUpgrade * 1.6
        document.getElementById("increment").innerHTML = value;

        console.log(nextUpgrade)

        if (nextUpgrade % 1 !== 0)  {
            nextUpgrade = Math.round(nextUpgrade);
        }

        console.log(nextUpgrade)

        setTimeout(10);

        upCost.innerHTML = String(nextUpgrade) + " Clicks";
    }
}