let etchSquares;
const etchContainer = document.querySelector(".etch-a-sketch-container");
const canvasSizeButton = document.querySelector("#canvas-size-button");

const boardDims = {
    
    numRows: 16, 
    numCols: 16,

    set setHeight(newHeight){

        newHeight = Number(newHeight);

        if(typeof(newHeight) != "number"){
            this.numRows = 16;
            alert("Board height must be a number.")
        } else if(Number.isInteger(newHeight) == false){
            this.numRows =16;
            alert("Board height must be an integer.")
        }else if(newHeight > 128){
            this.numRows = 16;
            alert("Max board height is 16");
        } else if(newHeight < 2){
            this.numRows = 16;
            alert("Min board height is 2");
        } else {
            this.numRows = newHeight;
        }

    },

    set setWidth(newWidth){

        newWidth = Number(newWidth);

        if(typeof(newWidth) != "number"){
            this.numCols = 16;
            alert("Board height must be a number.")
        } else if(Number.isInteger(newWidth) == false){
            this.numCols =16;
            alert("Board height must be an integer.")
        }else if(newWidth > 128){
            this.numCols = 16;
            alert("Max board height is 16");
        } else if(newWidth < 2){
            this.numCols = 16;
            alert("Min board height is 2");
        } else {
            this.numCols = newWidth;
        }
        
    }

    
}


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

    for(let i = 0; i < boardDims.numRows; i++){
        // create the row
        let rowDiv = document.createElement("div");
        // create a row name
        rowDiv.id = "Row-" + String(i + 1);
        rowDiv.classList = "row"
        // create cols
        createCols(rowDiv, boardDims.numCols);
        // append to the container
        etchContainer.appendChild(rowDiv);

    }

}

createBoard();

function selectCanvasSize(){
    boardDims.setHeight = prompt("Enter desired canvas height", 16);
    boardDims.setWidth = prompt("Enter desired canvas width", 16);
    etchContainer.innerHTML = "";
    createBoard();
    let staticBoardSize = 160;
    let desiredPixels = (staticBoardSize / boardDims.numRows).toFixed(0);
    // select our etch squares
    etchSquares = document.querySelectorAll(".etch-square");
    // adjust the padding to fit squares in same area
    etchSquares.forEach(square => {
        square.style.padding = String(desiredPixels) + "px";
    }
    )
    
    initializePaintBrush();
}

canvasSizeButton.addEventListener('click', selectCanvasSize);

function initializePaintBrush(){
    // hover color change
    function mouseHoverAction(){
        this.style.backgroundColor = "red";
    }

    // select our etch squares
    etchSquares = document.querySelectorAll(".etch-square");

    // add listener
    etchSquares.forEach(square => {
        square.addEventListener('mouseover', mouseHoverAction);
    })
}

initializePaintBrush();