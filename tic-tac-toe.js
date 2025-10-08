//===========Layout Board========

// Wait for the page to finish load
window.addEventListener("DOMContentLoaded", function(){
    // Select the board grid
    const board = document.getElementById("board");

    // Div inside the game board (3x3 grid, 9 squares)
    const squares = board.getElementsByTagName("div");

    // Track game state 
    let gamestate = new Array(9).fill(null);

    let currentPlayer = "X";

    // Looping and Adding the square class
    for(let i = 0; i < squares.length; i++){
        const square  = squares[i];
        square.classList.add("square");


    //==============Add X or O to Square==========

    // Clicks square to alternate putting X or O
    square.addEventListener("click", function(){
        if(square.textContent === ''){                 // If square is empty
            square.textContent = currentPlayer;       // Set text it eirther X or O
            square.classList.add(currentPlayer)      // Add class for styling

            gamestate[i] = currentPlayer;     // Update the game state
            
            // Switch Player
            if (currentPlayer === "X"){       // Alternate between X and O
                currentPlayer = "O";
            } else{
                currentPlayer = "X";
            }
        }
    });


    //=============Styling the Mouse================



    }
});



