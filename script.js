// GLOBAL VARIABLES
const gameBoard = [['a', 'a', 'a'], ['a', 'a', 'a'], ['a', 'a', 'a']];
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
        console.log(gameBoard[l][c]);
    }
}

