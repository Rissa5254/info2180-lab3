// Wait for the page to finish load
window.addEventListener("DOMContentLoaded", function(){
    // Select the board grid
    const board = document.getElementById("board");

    // Div inside the game board (3x3 grid, 9 squares)
    const squares = document.getElementsByTagName("div");

    // Looping and Adding the square class
    for(let i = 0; i < squares.length; i++){
        sqaures[i].classList.add("squares");
    }
});