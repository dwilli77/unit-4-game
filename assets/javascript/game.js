/*======================================================
==Set the beginning playing field ======================
======================================================*/

let wins = 0;
let losses = 0;

let userScore = 0;

let targetNumber = Math.floor(Math.random() * 101) + 19;
$('.target-display').text(targetNumber);

// Randomize Crystal Values (2 crystals cannot have the same value)
const randomizeCrystalValues = function () {
    let crystalArray = [];
    for(let i = 0; i < 4; i++){
        let crystalValues = Math.ceil(Math.random() * 12);
        while(crystalArray.indexOf(crystalValues) > -1){
            crystalValues=Math.ceil(Math.random() * 12)
        };
        crystalArray.push(crystalValues);
        $('#crystal-image'+i).attr('data-crystalvalue', crystalArray[i]);
    }
};
// Run the above function to initialize the crystal values
randomizeCrystalValues();

// Set up WIN function - diplays that you win and updates Win counter
const win = function() {
    $('.result-display').text("YOU WIN!!").addClass('winner');
    $('.results-box').removeClass('d-none');
    wins++;
    $('.wins-display').text(wins);
}

// Set up LOSE function - displays that you lose and updates Loss counter
const lose = function() {
    $('.result-display').text("YOU LOSE!!").addClass('loser');
    $('.results-box').removeClass('d-none');
    losses++;
    $('.losses-display').text(losses);
}

// Set up RESET function - restarts the game and reverts necessary numbers back to base case
const reset = function() {
    targetNumber = Math.floor(Math.random() * 101) + 19;
    $('.target-display').text(targetNumber);
    userScore = 0;
    $('.results-box').addClass('d-none');
    $('.result-display').removeClass('winner', 'loser');
    
}