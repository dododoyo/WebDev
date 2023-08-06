// create audio objects for each color and the wrong sound
let greenSound = new Audio("sounds/green.mp3")
let blueSound = new Audio("sounds/blue.mp3")
let redSound = new Audio("sounds/red.mp3")
let yellowSound = new Audio("sounds/yellow.mp3")
let wrongSound = new Audio("sounds/wrong.mp3")

// array of button colors
let buttonColors = ["red", "blue", "green", "yellow"];

// arrays to store the game pattern and the user's chosen pattern
let gamePattern = [];
let userChosenPattern = [];

// variables to keep track of game state
let gameStarted = false;
let level = 0;

// function to play a sound based on the color name
function playSound(soundName) {
  if (soundName == "green") {
    greenSound.play();
  } else if (soundName == "red") {
    redSound.play();
  } else if (soundName == "blue") {
    blueSound.play();
  } else if (soundName == "yellow") {
    yellowSound.play();
  } else {
    wrongSound.play();
  }
}

// function to generate the next color in the game pattern
function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor)
  playSound(randomChosenColor);
  flashColor(randomChosenColor);

  level++;
  $('h1').text("Level - "+level);
  userChosenPattern = [];
  return randomNumber;
}

// function to flash a color on the screen
function flashColor(color) {
  $("#" + color).animate({opacity: 0,},100).animate({opacity: 1,},100);
}

// function to handle button clicks
function detectClicks(){
  $(".square").on("click", function (event) {
    let userChosenColor = event.target.id;
    userChosenPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userChosenPattern.length -1);
  })};

  $(".restart-button").on("click",function(event){
    gamePattern = [];

  //   // let randomNumber = Math.floor(Math.random() * 4);
  //   // let randomChosenColor = buttonColors[randomNumber];

  //   // gamePattern.push(randomChosenColor);
  //   // playSound(randomChosenColor);
  //   // flashColor(randomChosenColor);
  //   // $("h1").text("Level - " + level);  

    gamePattern.push(buttonColors[nextSequence()])
  //     gameStarted = true;
    
  });



// function to check if the user's pattern matches the game pattern
function checkAnswer(gameLevel){
  /**
   * This function checks if the user's chosen pattern matches the game pattern up to the current level.
   * If the patterns match, the function checks if the user has completed the current level.
   * If the user has completed the current level, the function calls the nextSequence function after a delay of 1 second.
   * If the patterns do not match, the function ends the game and displays a "Game Over" message.
   *  gameLevel - The current level of the game.
   */
  // check if the user's chosen pattern matches the game pattern up to the current level

  if (userChosenPattern[gameLevel] === gamePattern[gameLevel]) {
    console.log("success");
    // check if the user has completed the current level
    if (userChosenPattern.length === gamePattern.length) {
      // call the nextSequence function after a delay of 1 second
      setTimeout(nextSequence(), 1000);
    }
  } else {
    console.log("failed");
    // play the wrong sound
    playSound("w");
    // add a red background to the body to indicate game over
    $("body").addClass("game-over");
    // remove the red background after a delay of 200 milliseconds
    setTimeout(function () {
      $("body").removeClass("game-over"), 200;
    });
    // display a "Game Over" message
    $("h1").text("Game Over, Press any key to restart.");
    level = 0;
    gamePattern = [];
    gameStarted = false;
  }
}


// function to animate a button press
function animatePress(pressedColor){
  $("#" + pressedColor).addClass("pressed")

  setTimeout(function(){
    $("#" + pressedColor).removeClass("pressed");

  },100);
}

// function to detect key presses and start the game
function detectKeyPress(){
  $(document).on("keypress",function(){
    if (gameStarted == false){
      gamePattern.push(buttonColors[nextSequence()])
      gameStarted = true;
      // console.log(gamePattern);
    }
  })
}

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}

// start the game when a key is pressed
detectKeyPress();
detectClicks();