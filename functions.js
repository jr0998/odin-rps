//0 = Rock
//1 = Paper
//2 = Scissors

function computerPlay(){
    let x = Math.floor(Math.random()* 3);
    return x;
}
function play(pMove, cMove){
if(pMove == cMove){
    return "The game is a Tie";
}
if(pMove==0 && cMove ==2){
    return "You Win! Rock beats Scisssors";
}
if(pMove==0 && cMove ==1){
    return "You lose! Paper beats rock";
}
if(pMove==1 && cMove ==0){
    return "You Win! Paper beats Rock";
}
if(pMove==1 && cMove ==2){
    return "You lose! Scissor beats Paper";
}
if(pMove==2 && cMove ==0){
    return "You lose! Rock beats Scisssors";
}
if(pMove==2 && cMove ==1){
    return "You Win! Scissors beats Paper";
}
}
function convertInput(userInput){
let cInput = userInput.toLowerCase();
if(cInput == "rock")
    return 0;
if(cInput == "paper")
    return 1;
if(cInput == "scissors")
    return 2;
}
function game(){
    let input = prompt("Rock, Paper, Or Scissors?");
    let compIn = computerPlay();
    let playIn = convertInput(input); 
    console.log(compIn);
    console.log(playIn);
    console.log(play(playIn,compIn));

}
game();