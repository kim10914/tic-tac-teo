const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0], //2차원 배열
];
let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
]; //플레이어가 2명이니까 배열을 사용하겠습니다.

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const gameAreaElemet = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");

const editPlayer1BynElement = document.getElementById("edit-player-1-btn");
const editPlayer2BynElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const startNewGameBtnElemet = document.getElementById("start-game-btn");
// const gameFieldElements = document.querySelectorAll("#game-board li");
const gameBoardElement = document.getElementById("game-board");

editPlayer1BynElement.addEventListener("click", openPlayerConfig);
editPlayer2BynElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", colsePlayerConfig);
backdropElement.addEventListener("click", colsePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtnElemet.addEventListener("click", startNewGame);

// for(const gameFieldElement of gameFieldElements){
//     gameFieldElement.addEventListener("click",selectGameField);

// }

//↑ 대안책
gameBoardElement.addEventListener("click", selectGameField); // 잘 작동한다.
