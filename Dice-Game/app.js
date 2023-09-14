function throwDice(){
  let randomFirst = Math.floor(Math.random() * 6) + 1;
  if (randomFirst == 1) {
    document.getElementById("dice-1").classList.add("fa-dice-one");
  } else if (randomFirst == 2) {
    document.getElementById("dice-1").classList.add("fa-dice-two");
  } else if (randomFirst == 3) {
    document.getElementById("dice-1").classList.add("fa-dice-three");
  } else if (randomFirst == 4) {
    document.getElementById("dice-1").classList.add("fa-dice-four");
  } else if (randomFirst == 5) {
    document.getElementById("dice-1").classList.add("fa-dice-five");
  } 
  else{
    document.getElementById("dice-1").classList.add("fa-dice-six");
  }


  let randomSecond = Math.floor(Math.random() * 6) + 1;
  if (randomSecond == 1) {
    document.getElementById("dice-2").classList.add("fa-dice-one");
  } else if (randomSecond == 2) {
    document.getElementById("dice-2").classList.add("fa-dice-two");
  } else if (randomSecond == 3) {
    document.getElementById("dice-2").classList.add("fa-dice-three");
  } else if (randomSecond == 4) {
    document.getElementById("dice-2").classList.add("fa-dice-four");
  } else if (randomSecond == 5) {
    document.getElementById("dice-2").classList.add("fa-dice-five");
  } else {
    document.getElementById("dice-2").classList.add("fa-dice-six");
  }

  if (randomFirst > randomSecond) {
    document.getElementById("title-text").textContent = "Player-1 Won 🏆";
  } else if (randomFirst < randomSecond) {
    document.getElementById("title-text").textContent = "Player-2 Won 🏆";
  } else {
    document.getElementById("title-text").textContent = "Draw 🤝";
  }
  
}


// call throwDice() on only when page is reloaded not when loaded for the first time

window.onload = throwDice();
