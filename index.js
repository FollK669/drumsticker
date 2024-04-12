
var elm;

function clicker1() {
    elm = document.getElementById("wdrummer");
    elm.addEventListener("click", alerter("Wdrummer"));
}
document.addEventListener("keydown", function (event) {
    // De ingedrukte toets opslaan in een variabele
    var key = event.key.toLowerCase(); // Om ervoor te zorgen dat we vergelijken in kleine letters

    // Switch-case om te reageren op verschillende toetsen
    switch (key) {
        case "w": alerter("Wdrummer");  break;
        case "a": alerter("adrummer"); break;
        case "s": alerter("sdrummer"); break;
        case "d": alerter("ddrummer"); break;
        case "j": alerter("jdrummer"); break;
        case "k": alerter("kdrummer");  break;
        case "l": alerter("ldrummer"); break;
            // Aanroepen van de alerter functie met de parameter gelijk aan de ingedrukte toets

          
        // Voeg hier extra cases toe indien nodig
    }
});


function clicker2() {
    elm = document.getElementById("adrummer");
    elm.addEventListener("click", alerter("adrummer"));
    }

function clicker3() {
    elm = document.getElementById("sdrummer");
    elm.addEventListener("click", alerter("sdrummer"));
  
    }

    function clicker4() {
        elm = document.getElementById("ddrummer");
        elm.addEventListener("click", alerter("ddrummer"));
    }

    function clicker5() {
        elm = document.getElementById("jdrummer");
        elm.addEventListener("click", alerter("jdrummer"));
    }

    function clicker6() {
        elm = document.getElementById("kdrummer");
        elm.addEventListener("click", alerter("kdrummer"));
}

    function clicker7() {
        elm = document.getElementById("ldrummer");
        elm.addEventListener("click", alerter("ldrummer"));
    }




function alerter( keyss) {


    switch (keyss) {
        case "Wdrummer":  playSound("./sounds/crash.mp3");
            break;
        case "adrummer": playSound("./sounds/kick-bass.mp3");
            break;
        case "sdrummer": playSound("./sounds/snare.mp3");
            break;
        case "ddrummer": playSound("./sounds/tom-1.mp3");
            break;
        case "kdrummer": playSound("./sounds/tom-2.mp3");
            break;
        case "ldrummer": playSound("./sounds/tom-3.mp3");
            break;
        case "jdrummer": playSound("./sounds/tom-4.mp3");
            break;
    }
}


function playSound(filename) {
    var audio = new Audio(filename);
    audio.play();
}