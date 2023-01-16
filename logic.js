//helper function to generate random number
function generateRand(){
    return Math.floor(3 * Math.random());
}

//returns computer's choice
function getComputerChoice(){
    options = ["rock", "paper", "scissors"];
    let choice = generateRand();
    return options[choice]; 
}

//gets player's choice
function getPlayerChoice(){
    let choice = prompt();
    return choice.toLowerCase();
}

/*
rock paper scissors logic
returns an array with 2 values
1. code value
2. string message
return value : 0 -> player wins
return value : 1 -> computer wins
return value : 2 -> draw
*/
                  
function playRound(playerSelection, computerSelection){
    switch(playerSelection){
        case "rock":
            if(computerSelection == "rock"){
                return [2, "Draw!"];
            } else if(computerSelection == "paper"){
                return [1, "You lose! Paper beats rock."];
            } else{
                return [0, "You win! Rock beats scissors."];
            }

        case "paper":
            if(computerSelection == "rock"){
                return [0, "You win! Paper beats rock."];
            } else if(computerSelection == "paper"){
                return [2, "Draw!"];
            } else{
                return [1, "You lose! Scissors beats paper."];   
            }
        
        case "scissors":
            if(computerSelection == "rock"){
                return [1, "You lose! Rock beats scissors."];
            } else if(computerSelection == "paper"){
                return [0, "You win! Scissors beats paper."];
            } else{
                return [2, "Draw!"];  
            }  
    }
}

function game(){
    var result, score = [0, 0, 0];
    for(let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice()
        result = playRound(playerSelection, computerSelection);
        console.log(result[1]);
        score[result[0]]++;
    }
    if(score[0] > score[1]) {
        console.log("You Win!!");
    }
    else {
        console.log("Computer wins!!");
    }
}

//invoking game function through button press
document.addEventListener("DOMContentLoaded", test);

function test(){
    var ele = document.getElementsByClassName("play");
    ele[0].addEventListener("mousedown", function(){
    game();
    });
}