let cells = []; //cells is an array which contains all the cells of the sudoku, it doesn't "stay" inside the soduku, it just contains all the cells (and the inputs of each cell in sudoku)

//create table gui using js
function sudoku_GUI() {
    let table = document.getElementById("gui");
    for (let i = 0; i < 9; i++) { //với cách tạo này, các ô cell trong sudoku sẽ được tạo từ trái sang phải, từ trên xuống dưới
        let row = document.createElement("tr");
        for (let r = 0; r < 9; r++) {
            let input = document.createElement("input");
            //set the input attributes
            input.type = "text";
            input.maxLength = 1;
            //input.onkeydown = validate; //this is event handler, gán trạng thái onkeydown của input cho validate function (sẽ declare sau), validate function check input nhập vào có phải là number ko, nma thế tsao ko dùng input.type = "number" luôn nhỉ?
            
            //creates cells and place input inside the cells, since we are in a "for loop" so we will do it one by one
            let cell = document.createElement("td");
            cell.appendChild(input); //push each input into each cell
            row.appendChild(cell); //push each cell into each row
            cells.push(input);
        }
        table.appendChild(row);
    }
}

sudoku_GUI();

//generate sudoku 
function generate_sudoku() {
    //the solve function has to be call/run in here in order to generate a sudoku
}

function solve_sudoku() {
    let numbers = [1,2,3,4,5,6,7,8,9];
    let array = [];
    //create a random first row
    for (i=0; i<9; i++) {
        let index = Math.floor(Math.random()*numbers.length);
        let result = numbers.splice(index,1);
        console.log(result);
        console.log(typeof numbers);
        cells[i].value = result;
    }//after successfully created we will move to create sudoku algorithm, we have to use while loop for this
    cells[10].value = 0;
    console.log(cells[10]);
}