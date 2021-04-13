function computerPlay() {
    let randOpt = Math.floor((Math.random() * 3) + 1)
    switch (randOpt) {
        case 1:
            let paper = 'paper';
            return paper;
            break;
        case 2:
            let scissors = 'scissors'
            return scissors;
            break;
        case 3:
            let stone = 'stone'
            return stone;
            break;
    }
}


function playRound(playerSelection, computerSelection) {
    let result = ''
    //paper
    if(playerSelection == 'paper' && computerSelection == 'stone'){
        result =  'player wins'
        return result
    }else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        result =  'computer wins'
        return result
    } else if(playerSelection == 'paper' && computerSelection == 'paper'){
        result = "it's a tie"
        return result
    }
    //stone
    if(playerSelection == 'stone' && computerSelection == 'scissors'){
        result = 'player wins'
        return result

    }else if(playerSelection == 'stone' && computerSelection == 'paper'){
        result =  'computer wins'
        return result
    } else if(playerSelection == 'stone' && computerSelection == 'stone'){
        result = "it's a tie"
        return result
    }
    //scissors
    if(playerSelection == 'scissors' && computerSelection == 'paper'){
        result = 'player wins'
        return result
    }else if(playerSelection == 'scissors' && computerSelection == 'stone'){
        result = 'computer wins'
        return result
    } else if(playerSelection == 'scissors' && computerSelection == 'scissors'){
        result = "it's a tie"
        return result
    }
}

// single win
function game(playerSelection){
    
    if(playerSelection == 'stone' || playerSelection == 'paper' || playerSelection == 'scissors'){

        let computerSelection = computerPlay()
        
        let score = playRound(playerSelection, computerSelection)
        
        return score
    } 
}

//update the score board
function updateScoreMessage(message){
    messageBoard.textContent = message
    rounds.textContent = `: ${numOfRounds}`
}

//update the score
function updateScores(score){
    numOfRounds++
    console.log(numOfRounds)
    if(score == 'computer wins'){
        computerWins += 1
        comScore.textContent = computerWins
        return 'Computer wins !!'
    } else if(score == 'player wins'){
        playerWins += 1
        userScore.textContent = playerWins
        return 'Player wins !!'
    } else if(score == "it's a tie"){
        return "It's a tie !!!"
    }
}

function clearsUI(){
    if(playerWins == 0 && computerWins == 0){
        userScore.textContent = 0
        comScore.textContent = 0
        messageBoard.textContent = ''
    } 
}

function playGame(choices){
    clearsUI()
    let winner = game(choices)
    scoreBoardMessage = updateScores(winner)
    updateScoreMessage(scoreBoardMessage)
}

function triggerStone(){
    let stone = 'stone'
    triggerProcess(stone)  
}

function triggerPaper(){
    let paper = 'paper'
    triggerProcess(paper)
}

function triggerScissors(){
    let scissors = 'scissors'
    triggerProcess(scissors)
}

function timedExecFunc(){
    let compts = computerWins
    let plypts = playerWins
    if(compts > plypts){
        messageBoard.textContent = 'Computer is The Champion !!!'
    } else if(plypts > compts){
        messageBoard.textContent = 'You are The Champion !!!'
    } else {
        messageBoard.textContent = "I cannot declare a winner!!! Care for a rematch?"
    }
}


function triggerProcess(triggerChoice){
    clearsUI()
    let winner = game(triggerChoice)
    scoreBoardMessage = updateScores(winner)
    updateScoreMessage(scoreBoardMessage)
    if(numOfRounds == 5){
        stoneBtn.removeEventListener('click',triggerStone)
        paperBtn.removeEventListener('click',triggerPaper)
        scissorsBtn.removeEventListener('click',triggerScissors)
        timedExecFunc()
        heading.textContent = 'Game Over'
        
    }
}


//reset everything
window.addEventListener('load',() => {
    userScore.textContent = 0
    comScore.textContent = 0
    messageBoard.textContent = ''
})


// // score slots
let userScore = document.querySelector('.usr-a-score')

let comScore = document.querySelector('.comp-a-a-score')

let messageBoard = document.querySelector('.sub')

let rounds = document.querySelector('.rounds')

let heading = document.querySelector('.score-heading')
// // declaring variables for the players score
let playerWins = 0
let computerWins = 0
let numOfRounds = 0

let stoneBtn = document.querySelector('.btn-stone')
let paperBtn = document.querySelector('.btn-paper')
let scissorsBtn = document.querySelector('.btn-scissors')
let restart = document.querySelector('#restart')

stoneBtn.addEventListener('click',triggerStone)
paperBtn.addEventListener('click',triggerPaper)
scissorsBtn.addEventListener('click',triggerScissors)
restart.addEventListener('click',()=>{
    playerWins = 0
    computerWins = 0
    numOfRounds = 0
    userScore.textContent = 0
    comScore.textContent = 0
    heading.textContent = 'Rounds'
    messageBoard.textContent = ''
    stoneBtn.addEventListener('click',triggerStone)
    paperBtn.addEventListener('click',triggerPaper)
    scissorsBtn.addEventListener('click',triggerScissors)
})













































// if(playerScore > computerScore){
//     console.log(`You're the winner with ${playerScore} win(s)!!`)
// } else if (playerScore < computerScore) {
//     console.log(`Computer is the winner with ${computerScore} win(s)!!`)
// } else if(playerScore == computerScore){
//     console.log('This game is a tie')
// } 







