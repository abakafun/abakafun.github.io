const prefixes = ["trans", "neo", "auto", "hyper"];
const suffixes = ["ize", "ment", "ology", "ship"];

function generateWord() {
    root.value = prefixes[Math.floor(Math.random() * prefixes.length)];
    suf.value = suffixes[Math.floor(Math.random() * suffixes.length)];
        
    updateFinalWord();
}

function updateFinalWord() {
    if (root.value.charAt(root.value.length - 1) === suf.value.charAt(0)) {
        sufResult = suf.value.slice(1);
    } else {
        sufResult = suf.value;
    }

    if (pre.value.charAt(pre.value.length - 1) === root.value.charAt(0)) {
        preResult = pre.value.slice(0, pre.value.length - 1);
    } else {
        preResult = pre.value;
    }

    finalWord = preResult + root.value + sufResult;

    if (finalWord == '') {
        finalWord = "Your Word Here";
    }

    result.innerHTML = finalWord;
}

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

document.addEventListener("DOMContentLoaded", function() {
    initializeAudio()

    var root = document.getElementById("root");
    var suf = document.getElementById("suf");
    var pre = document.getElementById("pre");
    var def = document.getElementById("def");
    var definition = document.getElementById("definition");
    var sc = document.getElementById("sc");
    var result = document.getElementById("result");
    var sufResult;
    var preResult;
    var finalDef;
    var finalWord;

    definition.innerHTML = sc.value + ": Your Definiton Here";

    root.addEventListener("input", function() {
        updateFinalWord();
    });

    suf.addEventListener("input", function() {
        updateFinalWord();
    });

    pre.addEventListener("input", function() {
        updateFinalWord();
    });

    def.addEventListener("input", function() {
        updateFinalDef();
    });

    sc.addEventListener("input", function() {
        updateFinalDef();
    });

    

    

    document.getElementById("generate").addEventListener("click", generateWord);


    function updateFinalDef() {
        finalDef = def.value;

        if (finalDef == '') {
            finalDef = "Your Definition Here";
        }

        definition.innerHTML = sc.value + ": " + finalDef;
    }
});
