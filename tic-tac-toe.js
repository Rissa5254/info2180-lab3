//===========Layout Board========

// Wait for the page to finish load
window.addEventListener("DOMContentLoaded", function(){
    // Select the board grid
    const board = document.getElementById("board");

    // Div inside the game board (3x3 grid, 9 squares)
    const squares = board.getElementsByTagName("div");

    const statusdiv = document.getElementById("status");

    // Track game state 
    let gamestate = new Array(9).fill(null);

    let currentPlayer = "X";

    let gameOver = false; 

    // Looping and Adding the square class
    for(let i = 0; i < squares.length; i++){
        const square  = squares[i];
        square.classList.add("square");


    //=============Adding X or O to Square==========

    // Clicks square to alternate putting X or O
    square.addEventListener("click", function(){
        if(gameOver || square.textContent !== '') return;      // Stop moves after winner
            square.textContent = currentPlayer;               // Set text it eirther X or O
            square.classList.add(currentPlayer)              // Add class for styling

            gamestate[i] = currentPlayer;     // Update the game state

            // Check if X or O is the Winner after each move
            
            if (checkWinner(gamestate,currentPlayer)){
                statusdiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                statusdiv.classList.add("you-won");
                gameOver = true;
            }
            
            // Switch Player
            if (currentPlayer === "X"){       // Alternate between X and O
                currentPlayer = "O";
            } else{
                currentPlayer = "X";
            } 
    });


    //=============Styling the Mouse================
    square.addEventListener("mouseenter", function(){
        square.classList.add("hover");
        console.log("Mouse has enter this square.");
    })
    square.addEventListener("mouseleave", function(){
        square.classList.remove("hover");
        console.log("Mouse has left this square.");
    })


    //===========Checking for Winner and Updating Status==========

    // Function to check winner
    function checkWinner(board, player){
        const winningCombo = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],       // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8],       // columns
            [0, 4, 8], [2, 4, 6]                   // diagonals 
        ];
        
        for(let combo of winningCombo){
            const[a, b, c] = combo;

            if(board[a] === player && board[b] === player && board[c] === player){
                return true;   // The player has 3 in a row.
            }
        }
        return false;      // The player does not have 3 in a row.
    }
    };


    //=================Restarting the Game===================
    const newgame = document.querySelector(".btn");
    newgame.addEventListener("click", function(){
        gamestate.fill(null);
        gameOver = false;
        currentPlayer = "X";
        console.log("New Game.");


        // Clear squares
        for(let i = 0; i < squares.length; i++){
            squares[i].textContent = "";
            squares[i].classList.remove("X", "O");
        }

        // Reset status message
        statusdiv.textContent = "Move your mouse over a square and click to play an X or an O.";
        statusdiv.classList.remove("you-won");  
    });    

});



 

  


