const etchContainer = document.querySelector(".etch-a-sketch-container");

let numRows = 16;
let numCols = 16;

// create a function to create cols for each row (div)
// function takes a div and returns a div
function createCols(rowDiv, numCols){

    for(let i = 0; i < numCols; i++){
        
        // create column
        let colDiv = document.createElement("div");
        // create col name
        colDiv.id = rowDiv.id + "-Column-" + String(i + 1);
        // create class name
        colDiv.classList = "etch-square";
        // append to row
        rowDiv.appendChild(colDiv);
    }

}

function createBoard(){

    for(let i = 0; i < numRows; i++){
        // create the row
        let rowDiv = document.createElement("div");
        // create a row name
        rowDiv.id = "Row-" + String(i + 1);
        rowDiv.classList = "row"
        // create cols
        createCols(rowDiv, numCols);
        // append to the container
        etchContainer.appendChild(rowDiv);

    }

}

createBoard();

// hover color change
function mouseHoverAction(){
    console.log(this);
    this.style.backgroundColor = "red";
}

// select our etch squares
etchSquares = document.querySelectorAll(".etch-square");

// add listener
etchSquares.forEach(square => {
    square.addEventListener('mouseover', mouseHoverAction);
})
