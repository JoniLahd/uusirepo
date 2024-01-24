//haetaan tarvittavat elementit html tiedostosta.
const board = document.getElementById('board');
const cells = Array.from(board.children);
const restartBtn = document.getElementById('restart-btn');
const status = document.getElementById('status');

//Alustetaan pelitila, nykyinen pelaaja ja asetetaan EvenListenerit solujen(cell) klikkauksille ja uudelleenkäynnistyspainikkeelle(restartGame).
let currentPlayer = 'X';
let gameState = Array(9).fill(null);

//Määritetään handleCellClick-funktio, joka käsittelee solun klikkauksia, päivittää pelitilan ja tarkistaa voiton tai tasapelin.
function handleCellClick(event) {
    const cellIndex = event.target.dataset.cellIndex;
    if (gameState[cellIndex] !== null) return;
    gameState[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;
    checkForWin();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateStatus();
  }
  
  //Määritetään checkForWin-funktio, joka tarkistaa voiton vertaamalla pelitilaa voittotilanteisiin.
  function checkForWin() {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  