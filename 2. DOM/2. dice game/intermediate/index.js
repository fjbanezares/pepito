// code to generate two random numers per player
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

// code to refer to the images per each player
var image1 = "dice" + randomNumber1 + ".png"
var image2 = "dice" + randomNumber2 + ".png"

// code to manipulate the DOM
// code to place image one into src attribute in element with  class img1
document.querySelector(".img1").setAttribute('src','images/'+ image1)

// code to place image one into src attribute in element with  class img1
document.querySelector(".img2").setAttribute('src','images/'+ image2)

// code to say who won
if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").textContent = '<- Player 1 Wins'
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").textContent = 'Player 2 Wins ->'
}
else {
    document.querySelector(".container h1").textContent = '<- Draw ->'
}

