// nextSequence, function that will generate a random number and add to the current sequence that is an array
// state, we will have the state in local
let sequenceOfSteps = [];
let gameStarted = false; // At the beginning we need to keypress
let level = 0;


const colors = ["green", "red", "yellow", "blue"];

function getRandomColor() {
    const randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}

const randomColor = getRandomColor();
console.log(randomColor);

function getRandomColor() {
    const randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}


function startGame() {
    sequenceOfSteps = [];
    $("#level-title").text("Level " + level);
    gameStarted = true;
    const randomColor = getRandomColor();
    sequenceOfSteps.push(randomColor);
}

// pulsar tecla inicia el juego

$(document).keypress(function () {
    if (!started) {
        startGame();

        nextSequence();
        started = true;
    }
});

=
// teclaPulsada


// efecto sonido pulsar botón
$(".")