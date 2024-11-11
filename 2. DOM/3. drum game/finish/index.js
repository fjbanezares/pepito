// Initialize the total number of drum buttons present in the document.
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Loop through each drum button to assign event listeners.
for (var i = 0; i < numberOfDrumButtons; i++) {

  // Add a click event listener to each drum button.
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    // Retrieve the content (character) of the clicked button.
    var buttonInnerHTML = this.innerHTML;

    // Trigger the corresponding sound based on the button's character.
    makeSound(buttonInnerHTML);

    // Activate the animation for the button.
    buttonAnimation(buttonInnerHTML);

  });
}

// Add an event listener for keypress events to the entire document.
document.addEventListener("keypress", function (event) {

  // Trigger the sound corresponding to the key that was pressed.
  makeSound(event.key);

  // Activate the animation for the corresponding button.
  buttonAnimation(event.key);

});

/**
 * Function to play a specific sound based on the provided key.
 * @param {string} key - The character representing a specific sound.
 */
function makeSound(key) {

  // Use a switch statement to determine which sound to play.
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    // Handle any unexpected input.
    default:
      console.log("Key not mapped to any sound:", key);
  }
}

/**
 * Function to animate a button upon being activated.
 * @param {string} currentKey - The character representing a specific button.
 */
function buttonAnimation(currentKey) {

  // Target the active button using its class.
  var activeButton = document.querySelector("." + currentKey);

  // Add the 'pressed' class to create a visual effect.
  activeButton.classList.add("pressed");

  // Remove the 'pressed' class after a brief delay to reset the button's appearance.
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
