var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 = (randomNumber1 * 6) + 1);
if(randomNumber1===1)
{
    document.querySelector(".img1").src = "images/dice1.png";
}
else if (randomNumber1 === 2) {
    document.querySelector(".img1").src = "images/dice2.png";
}
else if (randomNumber1 === 3) {
    document.querySelector(".img1").src = "images/dice3.png";
}
else if (randomNumber1 === 4) {
    document.querySelector(".img1").src = "images/dice4.png";
}
else if (randomNumber1 === 5) {
    document.querySelector(".img1").src = "images/dice5.png";
}
else  {
    document.querySelector(".img1").src = "images/dice6.png";
}
////////////////////////////////////////////////////////////////
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 = (randomNumber2 * 6) + 1);
if (randomNumber2 === 1) {
    document.querySelector(".img2").src = "images/dice1.png";
}
else if (randomNumber2 === 2) {
    document.querySelector(".img2").src = "images/dice2.png";
}
else if (randomNumber2 === 3) {
    document.querySelector(".img2").src = "images/dice3.png";
}
else if (randomNumber2 === 4) {
    document.querySelector(".img2").src = "images/dice4.png";
}
else if (randomNumber2 === 5) {
    document.querySelector(".img2").src = "images/dice5.png";
}
else if (randomNumber2 === 6) {
    document.querySelector(".img2").src = "images/dice6.png";
}
///////////////////////////////////////////////////////////////
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩PLAYER 1 WIN!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER 2 WIN!🚩";
}
else {
    document.querySelector("h1").innerHTML = "IT'S A DRAW! 🙌";
}