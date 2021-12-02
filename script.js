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

//boardFields.forEach(a => {
//    a.addEventListener('click', fieldSelector);    
//});

// FUNCTIONS

function fieldSelector(l, c) {
    if(turn === 'o'){
        boardFields[l][c].innerHTML = 'O';
        boardFields[l][c].setAttribute('disabled', '');
        gameBoard[l][c] = 'o';
        isWinner('o');
        turn = 'x';
        console.log(gameBoard[l][c]);
    }else{
        boardFields[l][c].innerHTML = 'X';
        boardFields[l][c].setAttribute('disabled', '');
        gameBoard[l][c] = 'x';
        isWinner('x');
        turn = 'o';
        console.log(gameBoard[l][c]);
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
    }else{
        console.log('e agora?')
    }
}
