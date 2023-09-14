
let boom = new Audio("sounds/clap.mp3");
let clap = new Audio("sounds/clap.mp3");
let hitDrum = new Audio("sounds/hit-drum.mp3");
let kickDrum = new Audio("sounds/kick-drum.mp3");
let punch = new Audio("sounds/punch.mp3");
let punch2 = new Audio("sounds/punch2.mp3");
let punchBoxing = new Audio("sounds/punch-boxing.mp3");

function makeSound(keyStroke){
  switch (keyStroke) {
      case 'w':
        boom.play();
        break;
      case 'a':
        clap.play();
        break;
      case 's':
        hitDrum.play();
        break;
      case 'd':
        kickDrum.play();
        break;
      case 'j':
        punch.play();
        break;
      case 'k':
        punch2.play();
        break;
      case 'l':
        punchBoxing.play();
        break;
    
      default:
        console.log(keyStroke); 
        break;

}};

function addAnimation(theEvent){ 
  let keyPressed = document.querySelector("#" + theEvent)
  keyPressed.classList.add("flash");
  // console.log(keyPressed.classList);
  setTimeout(function(){
    keyPressed.classList.remove('flash');
  },200);
};

// event listener to handle keys from keyboard.
document.addEventListener("keypress",function (event) 
{
  let clickedKey = event.key;
  makeSound(clickedKey);
  addAnimation(clickedKey);
});


// event listener to handle clicks on screen.
let drumsList = document.getElementsByClassName("drum");
for (let i = 0; i < drumsList.length; i++) {
  drumsList[i].addEventListener("click", function () {
    let clickedObject = this.innerHTML;
    makeSound(clickedObject);
    addAnimation(clickedObject);
  })};
