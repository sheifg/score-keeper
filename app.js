"use strict";

// Selecting the elements:
const scorePlayer1 = document.querySelector(".score-player1");
const scorePlayer2 = document.querySelector(".score-player2");
const winningScore = document.querySelector("#score-win");
const btnPlayer1 = document.querySelector("#btn-player1");
const btnPlayer2 = document.querySelector("#btn-player2");
const btnReset = document.querySelector("#btn-reset");
let scorePlayer1Counter = 0;
let scorePlayer2Counter = 0;
let winningScoreValue = Number(winningScore.value);  // Number() to ensure the winningScoreValue is a number

// Function if the winning score changes:
function changeWinningScore(){
    winningScoreValue = Number(winningScore.value);
}

// Adding eventListener for change the value of the winning score in the input
winningScore.addEventListener("change", changeWinningScore);

// Function update and check the scores in order to end the game when the winning socre is reached
function updateScore(event) {
  if (event.target.id === "btn-player1") {
    scorePlayer1Counter++;
    scorePlayer1.textContent = scorePlayer1Counter;
    //Checking is the player1 reaches the winning score
    if (scorePlayer1Counter >= winningScoreValue) {
      btnPlayer1.disabled = true;
      btnPlayer2.disabled = true;
      scorePlayer1.style.color = "green";
      scorePlayer2.style.color = "red";
    }
  } else if (event.target.id === "btn-player2") {
    scorePlayer2Counter++;
    scorePlayer2.textContent = scorePlayer2Counter;
    //Checking is the player2 reaches the winning score
    if (scorePlayer2Counter >= winningScoreValue) {
      btnPlayer1.disabled = true;
      btnPlayer2.disabled = true;
      scorePlayer1.style.color = "red";
      scorePlayer2.style.color = "green";
    }
  }
}

// Adding eventListener to click the button of player1 and of player 2
btnPlayer1.addEventListener("click", updateScore);
btnPlayer2.addEventListener("click", updateScore);

// Function reset
function resetButton () {
    scorePlayer1Counter = 0;
    scorePlayer2Counter = 0;
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;
    btnPlayer1.disabled = false;
    btnPlayer2.disabled = false;
    // Another way to re-enable the player's buttons
    // btnPlayer1.removeAttribute('disabled');
    // btnPlayer2.removeAttribute('disabled');
    scorePlayer1.style.color = "black";
    scorePlayer2.style.color = "black";
}

// Adding eventListener to click the reset button
btnReset.addEventListener("click", resetButton);