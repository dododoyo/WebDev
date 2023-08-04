// Create audio objects for each button sound
let greenSound = new Audio("sounds/green.mp3");
let redSound = new Audio("sounds/red.mp3");
let yellowSound = new Audio("sounds/yellow.mp3");
let wrongSound = new Audio("sounds/wrong.mp3");
let blueSound = new Audio("sounds/blue.mp3");

// Set initial game state
let gameNotStarted = true;
let keySequence =  [];

// function to generate a random number between 0 and 3
function randomNumber() {
  return Math.floor(Math.random() * 4);
}

// function to map random number to a button letter
function randomLetter(randNumber) {
  if (randNumber == 0) {return "g";} 
  else if (randNumber == 1) {return "r";} 
  else if (randNumber == 2) {return "y";}
  else {return "b";}
}

// function to light up a button for 400ms
function lightButton(buttonName) {
  $("." + buttonName).addClass("lightUp");

  setTimeout(function () {
    $("." + buttonName).removeClass("lightUp");
  }, 400);
}


// function to show the next button
function showButton(buttonName){
  $("." + buttonName).animate({opacity:0}).animate({opacity:1})
}

// function to play  sound for a button
function playSoundButton(buttonName) 
{
  if (buttonName == "r") {redSound.play();} 
  else if (buttonName == "g") {greenSound.play();} 
  else if (buttonName == "y") {yellowSound.play();} 
  else if (buttonName == "b") {blueSound.play();} 
  else {wrongSound.play();}
}

// function to select a random button and light it up and play its sound
function selectRandom(){
  let randomLeter = randomLetter(randomNumber());

  showButton(randomLeter);

  playSoundButton(randomLeter);

  return randomLeter;
}

function playGame(colorSequence){
  
}



// Start the game when any key is pressed and name is not already running
$(document).on('keypress', function(){
  if (gameNotStarted){
    gameNotStarted = false;
    keySequence.push(selectRandom());
    $('h1').text("Level - "+keySequence.length.toString());
  }
});

while (gameNotStarted == false){
  $(".square").on("click", function (event) {
    let clickedClassList = event.target.classList;
  });

  $()

}






