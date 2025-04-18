var lbs = document.getElementById('pounds');
var fill = document.getElementById('fill');
var upgradetxt = document.getElementById('upgradetxt');
var filltxt = document.getElementById('filltxt');
var rebirthBtn = document.getElementById('rebirth');
let rebirthMul = loadMultiplayer();
var pounds = 0;
var upgrade = 20;
var fillcolor = false;
let level = 1;
var eatSound = new Audio('blipSelect.wav');
eatSound.volume = 0.5;
var levelSound = new Audio('explosion.wav');
var rebirthSound = new Audio('synth.wav');
var fartSound = new Audio('fart-5-228245.mp3');
var multiText = document.getElementById('multiplier');
var fart = false


multiText.innerHTML = "Current Multiplier: " + rebirthMul

function eatQtrPnd() {
    pounds += 0.25 * rebirthMul;
    digest();
}

function eatBigMac() {
    if (level >= 2) {
        pounds += 0.5 * rebirthMul;
        digest();
    }
}

function eatDonut() {
    if (level >= 3) {
        pounds += 1 * rebirthMul;
        digest();
    }
}

function eatPizza() {
    if (level >= 4) {
        pounds += 3 * rebirthMul;
        digest();
    }
}

function rebirth() {
    if (level > 4) {
        if (fart != true) {
            level = 1;
            rebirthMul *= 2;
						 localStorage.setItem('rebirthMul', rebirthMul);
            document.getElementById("2").style.filter = "grayscale(1)";
            document.getElementById("3").style.filter = "grayscale(1)";
            document.getElementById("4").style.filter = "grayscale(1)";
            pounds = 0;
            upgrade = 20;
            filltxt.innerHTML = String(pounds) + 'lbs.';
            upgradetxt.innerHTML = String(upgrade) + 'lbs.';
            fill.style.width = (pounds / upgrade) * 100 + '%';
            rebirthBtn.style.backgroundColor = 'lightgray'
            multiText.innerHTML = "Current Multiplier: " + rebirthMul
            if (rebirthMul >= 1125899906842624) {
                rebirthBtn.innerHTML = "THE ULTIMATE FART";
                rebirthBtn.style.width = '20%'
                fart = true
            }
            rebirthSound.play();
        } else {
            fartSound.play();
            document.getElementById('win').style.visibility = "visible";
        }
    } else {
        alert("You do not have enough levels to do this. Minimum level is 5 (the level after pizza)")
    }
}

function digest() {
    lbs.innerHTML = "You currently weigh " + String(pounds) + " pounds and aren't bigger than KaseOh";
    fill.style.width = (pounds / upgrade) * 100 + '%';
    eatSound.play();
    
    if (pounds / upgrade >= 1) {
        upgrade *= 3.5;
        level += 1;
        console.log("Level UP!")
        console.log(String(level))
        levelSound.play();

        if (level > 4) {
            rebirthBtn.style.backgroundColor = 'lightgreen';
        }

        if (level >= 2) {
            document.getElementById("2").style.filter = "grayscale(0)";
        }
        
        if (level >= 3) {
            document.getElementById("3").style.filter = "grayscale(0)";
        }

        if (level >= 4) {
            document.getElementById("4").style.filter = "grayscale(0)";
        }
    
        if (upgrade % 1 !== 0)  {
            upgrade = Math.round(upgrade);
        }
        fill.style.width = (pounds / upgrade) * 100 + '%';
        upgradetxt.innerHTML = String(upgrade) + 'lbs.';
        if (fillcolor == true) {
            fill.style.backgroundImage = 'linear-gradient(to right, rgb(255, 100, 30), rgb(255, 170, 100))'
            fillcolor = false;
        } else {
            fill.style.backgroundImage = 'linear-gradient(to right, rgb(135, 0, 150), rgb(135, 70, 220))'
            fillcolor = true;
        }
    }
    filltxt.innerHTML = String(pounds) + 'lbs.';
}

function initializeAudio() {
    console.log("Initializing audio");
    mus = new Audio('Oops-I-Caused-an-Earthquake.wav')
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

document.addEventListener("DOMContentLoaded", function() {
    initializeAudio()
});

function loadMultiplayer() {
		 let saved = localStorage.getItem('rebirthMul');
		 return saved ? parseFloat(saved) : 1;