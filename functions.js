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
let win = 0;
let loss = 0;
const resH2 = document.querySelector('#output');
const rockBtn = document.querySelector('#rock');
const papBtn = document.querySelector('#paper');
const sciBtn = document.querySelector('#scissors');
const winCount = document.querySelector('#winNum');
const lossCount = document.querySelector('#lossNum');

function wlCounter(){
    if(resH2.textContent.substr(4,1) == "W"){
        win++;
        winCount.textContent = win;
     }
     if(resH2.textContent.substr(4,1) == "l"){
         loss++;
         lossCount.textContent = loss;
      }
      if(win == 5){
         alert("You Win the Game!!!!");
         rockBtn.disabled = true;
         papBtn.disabled = true;
         sciBtn.disabled = true;

     }
     if(loss == 5){
         alert("You lose the computer won");
         rockBtn.disabled = true;
         papBtn.disabled = true;
         sciBtn.disabled = true;
     }
}

rockBtn.addEventListener('click', () => {
    resH2.textContent=play(0, computerPlay());
    wlCounter();
});

papBtn.addEventListener('click', () => {
    resH2.textContent=play(1, computerPlay());
    wlCounter();
});

sciBtn.addEventListener('click', () => {
    resH2.textContent=play(2, computerPlay());
    wlCounter();
});
