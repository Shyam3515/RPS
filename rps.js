const totalScore = {PlayerScore:0,ComputerScore:0}
const resultDiv = document.getElementById('result')
const handsDiv = document.getElementById('hands')
const playerScore = document.getElementById('player-score')
const clear = document.getElementById("clear")
// Get Computers Choice
function getComputersChoice(){
    const rpsChoice = ['Rock','Paper','Scissor'];
    let computerChoice = Math.floor(Math.random() * rpsChoice.length);
    return rpsChoice[computerChoice];
}
// Choices
function getResult(playerChoice,computerChoice){
    let score;
    if(playerChoice == computerChoice){
        score = 0;
    }else if(playerChoice == 'Rock' && computerChoice == 'Scissor'){
        score = 1;
    }else if(playerChoice == 'Scissor' && computerChoice == 'Paper'){
        score = 1;
    }else if(playerChoice == 'Paper' && computerChoice == 'Rock'){
        score = 1;
    }else{
        score = -1;
    }
    return score;
}
// Onclick Buttons
function onClickRPS(playerChoice){
    const computersChoice = getComputersChoice();
    const score = getResult(playerChoice,computersChoice);
    totalScore['PlayerScore'] +=score;
    totalScore['ComputerScore'] -=score;
    showResult(score,playerChoice,computersChoice)
}
//Play Game - Main Logic
function playGame(){
    let rpsButtons = document.querySelectorAll('.rpsButton');
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton.value)
    });
    clear.onclick = () => clearGame(totalScore);
}
//Show Result
function showResult(score,playerChoice,computerChoice){
    switch (score) {
        case -1:
          result.innerText = `You Lose!`
          break;
        case 0:
          result.innerText = `It's a Draw!`
          break;
        case 1:
          result.innerText = `You Win!`
          break;
    }
    hands.innerText = `👱${playerChoice} VS 🤖${computerChoice}`;
    playerScore.innerText = `Your Score: ${totalScore['PlayerScore']}`
}
//Clear Button
function clearGame(totalScore){
    totalScore['PlayerScore'] = 0;
    totalScore['ComputerScore'] = 0;
    resultDiv.innerText = " ";
    handsDiv.innerText = " ";
    playerScore.innerText = " ";
}
//Calling Game
playGame();