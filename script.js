// GLOBAL VARIABLES
const gameBoard = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
let turn = 'o';

const winningConditions = [
    gameBoard[1][1]
];

// ELEMENTS
const l1c1 = document.getElementById('l1c1');
const l1c2 = document.getElementById('l1c2');
const l1c3 = document.getElementById('l1c3');
const l2c1 = document.getElementById('l2c1');
const l2c2 = document.getElementById('l2c2');
const l2c3 = document.getElementById('l2c3');
const l3c1 = document.getElementById('l3c1');
const l3c2 = document.getElementById('l3c2');
const l3c3 = document.getElementById('l3c3');

const boardFields = [[l1c1, l1c2, l1c3], [l2c1, l2c2, l2c3], [l3c1, l3c2, l3c3]];

// LISTENERS

// FUNCTIONS

function fieldSelector(l, c) {
    if(turn === 'o'){
        boardFields[l][c].innerHTML = 'O';
        boardFields[l][c].setAttribute('disabled', '');
        gameBoard[l][c] = 'o';
        let winnerFlag = isWinner('o');
        if(!winnerFlag){
            turn = 'x';
            console.log(gameBoard[l][c]);
            machinePlay ()
        }else{
            turn = 'end';
        }
        
    }else{
        boardFields[l][c].innerHTML = 'X';
        boardFields[l][c].setAttribute('disabled', '');
        gameBoard[l][c] = 'x';
        let winnerFlag = isWinner('x');
        if(!winnerFlag){
            turn = 'o';
            console.log(gameBoard[l][c]);
        }else{
            turn = 'end';
        }

    }
}

function isWinner(player) {
    if(
        gameBoard[0][0] === gameBoard[0][1] && gameBoard[0][1] === gameBoard[0][2] ||
        gameBoard[1][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[1][2] ||
        gameBoard[2][0] === gameBoard[2][1] && gameBoard[2][1] === gameBoard[2][2] ||
        gameBoard[0][0] === gameBoard[1][0] && gameBoard[1][0] === gameBoard[2][0] ||
        gameBoard[0][1] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][1] ||
        gameBoard[0][2] === gameBoard[1][2] && gameBoard[1][2] === gameBoard[2][2] ||
        gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2] ||
        gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]
    ){
        console.log(`${player} ganhou`);
        if(player === 'o'){

            boardFields.forEach(a => {
                    a.forEach(b =>{
                        b.setAttribute('disabled', '');
                    });    
                });

            l1c2.style.background = 'black';
            l2c1.style.background = 'black';
            l2c3.style.background = 'black';
            l3c2.style.background = 'black';
        }else{

            boardFields.forEach(a => {
                a.forEach(b =>{
                    b.setAttribute('disabled', '');
                });    
            });

            l1c1.style.background = 'black';
            l1c3.style.background = 'black';
            l2c2.style.background = 'black';
            l3c1.style.background = 'black';
            l3c3.style.background = 'black';
        }
        return(true);
    }else{
        console.log('e agora?')
        return(false);
    }
}

function machinePlay () {
    let options = [...gameBoard];
    console.log(options);
    
    let rowOption;
    let againFlag = true;
    
    while (againFlag){
    rowOption = Math.floor(Math.random() * options.length);
    console.log(rowOption); // ou 0 ou 1 ou 2
    
    
    options[rowOption].forEach(a => {
        
        console.log(options[a]);
        if(againFlag === true){
            if(a != 'o' && a != 'x'){
                againFlag = false;
            }
        };
        
    });

    };

    let columnOption = 0;
    //debugger;
    while(options[rowOption][columnOption] === 'o' || options[rowOption][columnOption] === 'x'){
        //debugger;
        columnOption++;
    }

    boardFields[rowOption][columnOption].innerHTML = 'X';
    boardFields[rowOption][columnOption].setAttribute('disabled', '');
    gameBoard[rowOption][columnOption] = 'x';
    let winnerFlag = isWinner('x');
    if(!winnerFlag){
        turn = 'o';
    }else{
        turn = 'end';
    }
    
}