// Generate the first random number.
var randNum1 = Math.random();
randNum1 = randNum1 * 6; 
randNum1 = Math.floor(randNum1) + 1;

// Generate the second random number
var randNum2 = Math.random();
randNum2 = randNum2 * 6; 
randNum2 = Math.floor(randNum2) + 1;

var imgSource1 = "./images/dice" + randNum1 + ".png";
document.querySelector(".img1").setAttribute("src", imgSource1);

var imgSource2 = "./images/dice" + randNum2 + ".png";
document.querySelector(".img2").setAttribute("src", imgSource2);

if (randNum1 > randNum2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!"
}

else if(randNum1 === randNum2) {
    document.querySelector("h1").innerHTML = "Draw!"

}

else if(randNum1 < randNum2) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩"

}

