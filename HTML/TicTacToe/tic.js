const cells = document.querySelectorAll(".cell");
const restartBtn = document.querySelector(".restartBtn");
const statustext = document.querySelector(".status");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], 
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let options = ["", "", "", "", "", "", "", "", ""]
let currentPlayer = "X";
let running = false;

initializeGame();

function statusCheck() {
    statustext.textContent = `${currentPlayer}'s turn`;
}

function initializeGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartClicked);
    statusCheck();
    running = true;
}

function cellClicked() {
    const cellIndex = this.getAtribute("cellIndex");

    if(options[cellIndex] != "" || !running) {
        return;
    }

    updateCell(this, number);
    checkWinner();

}

function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function updatePlayer() {
    if (currentPlayer == "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }

    statusCheck();
}

function checkWinner() {
    let roundWon = false;

    for(let i = 0; i <= winConditions.length; i++) {
        const currConditions = winConditions[i];
        const colA = options[currConditions[0]];
        const colB = options[currConditions[1]];
        const colC = options[currConditions[2]];

        if (colA == colB && colB == colC) {
            roundWon = true;
            break;
        } else {
            continue;
        }
    }

    if (roundWon) {
        statustext.textContent = `${currentPlayer}'s Wins!`;
    } else if (!options.includes("")) {
        statusCheck.textContent = "Draw!";
        running = false;
    }
}

function restartClicked() {
    
}