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
        colDiv.classList = rowDiv.classList + "-Column-" + String(i + 1);
        // append to row
        rowDiv.appendChild(colDiv);
    }

}

for(let i = 0; i < numRows; i++){
    // create the row
    let rowDiv = document.createElement("div");
    // create a row name
    rowDiv.classList = "Row-" + String(i + 1);
    // create cols
    createCols(rowDiv, numCols);
    // append to the container
    etchContainer.appendChild(rowDiv);


}