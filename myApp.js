function grid(row, col) {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            
            document.getElementById("cont").appendChild(cell);
        }
    }
    document.getElementById("cont").style.gridTemplateColumns = `repeat(${row}, 1fr)`;
}
function reset() {
    let cellParent = document.getElementById("cont");
    while (cellParent.hasChildNodes()) {
        cellParent.removeChild(cellParent.firstChild);
    } 
}
function newGrid() {
    let gridSize = parseInt(prompt("What size do you want for the new grid?"));
    if (gridSize) {
        reset();
    grid(gridSize, gridSize);
    }
    else {
        return
    }
    
}

function randomColor () {
    
}


document.getElementById("cont").addEventListener("mouseover", function(e) {
    if (e.target && e.target.nodeName == "DIV") {
        e.target.className = "newCell";
    }
});

