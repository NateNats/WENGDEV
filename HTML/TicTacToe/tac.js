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
const X_class = "X"
const Circle_class = "Circle"
let running = false
let turn

cells.forEach(cell => {cell.addEventListener("click", handleClick, {once: true})})

function handleClick(e) {
    const cell = e.target
    const currentPlayer = turn ? Circle_class : X_class
    placeMark(cell, currentPlayer)
}

function placeMark(cell, currentPlayer) {

}



