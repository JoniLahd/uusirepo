//haetaan tarvittavat elementit html tiedostosta.
const board = document.getElementById('board');
const cells = Array.from(board.children);
const restartBtn = document.getElementById('restart-btn');
const status = document.getElementById('status');

//Alustetaan pelitila, nykyinen pelaaja ja asetetaan EvenListenerit solujen(cell) klikkauksille ja uudelleenkäynnistyspainikkeelle(restartGame).
let currentPlayer = 'X';
let gameState = Array(9).fill(null);
