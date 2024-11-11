// code to emit a sound and change css when keypressed




// code to emit a sound  and change css when push button

function makeSound(key) {

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


        default: console.log(key);

    }
}


function handleClick(elementClicked) {




    // alert(elementClicked);

    const buttonText = elementClicked.innerText;
    const inHTML = elementClicked.inHTML;

    // alert("Clicked button: " + inHTML);

    // Changing the background color of the clicked element
    elementClicked.style.backgroundColor = "red";
    makeSound(buttonText);


    // Reverting the background color after 500 milliseconds (0.5 seconds)
    setTimeout(function () {
        elementClicked.style.backgroundColor = "";
    }, 500);

}

// wrong
// it added the event listener to the window object, because it was not being called on any specific element.
//document.querySelectorAll("button").forEach(addEventListener("click", handleClick));

//right
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => handleClick(button));
});


document.addEventListener("keydown", handlePress);


function handlePress(tecla) {


    console.log("Clicked button: " + tecla.key);

    // Changing the background color of the clicked element
    makeSound(tecla.key);

    var teclaPulsade = document.querySelector("." + tecla.key);
    teclaPulsade.classList.add("pressed")

    // Reverting the background color after 500 milliseconds (0.5 seconds)
    setTimeout(function () {
        teclaPulsade.classList.remove("pressed")
    }, 500);

}