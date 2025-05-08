const board = document.querySelector("#board");

let currentPlayer = "X";

let gameBoard = ["", "", "", "", "", "", "", "", ""];


function createBoard() {
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        cell.addEventListener("click", handleCellClick);
        board.appendChild(cell);
    }
}

/**
 * klikanie w pole
 * @param {Event} event - x albo y
 */
function handleCellClick(event) {
    // kod do wyswietlania komunikatu
    const messageTur = document.querySelector('#message');
    console.log('Cell clicked:', event.target.dataset.index);

    // symbol gracza ktorego jest kolei
    event.target.textContent = currentPlayer;
    // uaktualnienie planszy
    gameBoard[event.target.dataset.index] = currentPlayer;
    console.log(checkWin());

    // Sprawdzenie czy kts wygral
    const winningCombo = checkWin();

    if (winningCombo) {
        // pokazanie ze ktos wygral
        messageTur.textContent = `${currentPlayer} wygrał!`;
        // tworzenie linii jak ktos wygra
        drawWinningLine(winningCombo);
        console.log(`${currentPlayer} wygrał!`);
    } else {
        // Zmiana gracza jak nikt nie wygral
        if (currentPlayer === "X") {
            currentPlayer = "O";
            messageTur.textContent = "Tura: O";
        } else {
            currentPlayer = "X";
            messageTur.textContent = "Tura: X";
        }
    }

    // Usunięcie możliwości ponownego kliknięcia w tę samą komórkę
    event.target.removeEventListener('click', handleCellClick);
}

/*sprawdzanie czy ktos wygral*/
function checkWin() {
    // Wszystkie możliwe kombinacje wygrywające
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // sprawdzanie kazdej mozliwosci do wygrania
    for (const condition of winConditions) {
        const [a, b, c] = condition;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return condition;
        }
    }

    return false;
}

// reset
const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", resetGame);

/**
 * reset gry
 */
function resetGame() {

    gameBoard = ["", "", "", "", "", "", "", "", ""];
    // x jako 1 gracz
    currentPlayer = "X";
    const cells = document.querySelectorAll(".cell");

    // wyczyszczenie pol
    cells.forEach((cell) => {
        cell.textContent = "";
        cell.addEventListener("click", handleCellClick);
    });

    // usuniecie linii jak jest
    const lines = document.querySelectorAll(".line");
    lines.forEach(line => line.remove());

    // uaktualnienie kogo jest tura
    document.getElementById("message").textContent = "Tura: X";
}
//reset do start
createBoard();
resetGame();

/**
 * rysowanie linii dla zwyciezcy
 * @param {Array} winningCombo
 */
function drawWinningLine(winningCombo) {
   // linia
    const line = document.createElement("div");
    line.classList.add("line");
    board.appendChild(line);

   
    const [start, , end] = winningCombo;

    // ustawienie linii dla wygranej
    if (start === 0 && end === 2) {
        // 1 poziomy
        line.style.top = "50px";
        line.style.left = "0";
    } else if (start === 3 && end === 5) {
        // 2 poziomy
        line.style.top = "155px";
        line.style.left = "0";
    } else if (start === 6 && end === 8) {
        // 3 poziomy
        line.style.top = "260px";
        line.style.left = "0";
    } else if (start === 0 && end === 6) {
        // 1 pionowy
        line.style.width = "322px";
        line.style.top = "0";
        line.style.left = "55px";
        line.style.transform = "rotate(90deg)";
    } else if (start === 1 && end === 7) {
        // 2 pionowy
        line.style.width = "322px";
        line.style.top = "0";
        line.style.left = "160px";
        line.style.transform = "rotate(90deg)";
    } else if (start === 2 && end === 8) {
        // 3 pionowy
        line.style.width = "322px";
        line.style.top = "0";
        line.style.left = "265px";
        line.style.transform = "rotate(90deg)";
    } else if (start === 0 && end === 8) {
        // przekatna lewo prawo
        line.style.width = "444px";
        line.style.top = "0";
        line.style.left = "3px";
        line.style.transform = "rotate(45.7deg)";
    } else if (start === 2 && end === 6) {
        // przekatna prawo lewo
        line.style.width = "444px";
        line.style.top = "318px";
        line.style.left = "0";
        line.style.transform = "rotate(-45.7deg)";
    }
}