// Hey! Welcome to the Super-Unpredictable Dice Game of Destiny. Buckle up!

// Player 1's turn: Let's roll the dice and hope it doesn't land on the floor.
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Magic ball says: you got a number between 1-6!

// Alright, let's pick the right dice image for Player 1. No cheating!
var randomDiceImage = "dice" + randomNumber1 + ".png"; // Looking for that dice... ah! Found it.

// Just adding the folder path. Keeping things organized like my sock drawer.
var randomImageSource = "images/" + randomDiceImage; // Now, let's dig deep into the images folder.

// And... voilà! Player 1's dice is set. Hope it's a lucky one!
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// Player 2's turn: No pressure, but Player 1 did pretty well.
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Another roll, another destiny.

// Quick image pick for Player 2. We're all rooting for you... maybe.
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Drumroll please... let's announce the champion!
// If Player 1 has the bigger number... (and bragging rights)
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins! Dance like no one's watching!";
}
// If Player 2 steals the show...
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩 Bow down to the Dice Master!";
}
// Or... it's just awkward for everyone.
else {
  document.querySelector("h1").innerHTML = "Draw! Awkward... Let's pretend that didn't happen.";
}

// Thanks for playing! Remember, it's not about winning; it's about... okay, it's about winning.
