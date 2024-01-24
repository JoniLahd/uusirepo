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
  //Käydään läpi voittotilanteet
  for (const condition of winConditions) {
    //Haetaan pelitilan arvot voittoriviltä
    const [a, b, c] = condition.map(index => gameState[index]);
    //tarkistetaan onko voittorivillä kaikki arvot samat (ei-null)
    if (a !== null && a === b && b === c) {
        //näyttää voitto ilmoituksen pelaajalle ja päivittää tilan eli kuka voitti ja samalla käynnistää pelin uudelleen
        alert(`Player ${currentPlayer} wins!`);
        updateStatus();
       
        return; //keskeyttää funktion, koska peli päättyi
    }
  }
  // Jos kaikki solut ovat täynnä, mutta voittoriviä ei löytynyt, kyseessä on tasapeli
  if (!gameState.includes(null)) {
    // Näytää tasapeli-ilmoitus ja päivitää tilan(updateStatus())
    alert('It\'s a draw!');
    updateStatus();
   
    return; //keskeyttää funktion, koska peli päättyi
  }
}
