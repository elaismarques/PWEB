// console.log("Vamos Jogar!!!")
alert("Vamos Jogar!!!")

function getComputerChoice() {
    const choices = ['papel', 'pedra', 'tesoura'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if(playerSelection === computerSelection) {
        return (`Empatou ${playerSelection} empata com ${computerSelection}`)
    } else 
    if ((playerSelection == 'pedra' && computerSelection == 'tesoura' )||
    (playerSelection == 'papel' && computerSelection == 'pedra') ||
    (playerSelection == 'tesoura' && computerSelection == 'papel')
    ) {
        return (`jogador Ganhou! ${playerSelection} vence ${computerSelection}`)
    } else {
        return (`jogador Perdeu... ${computerSelection} vence ${playerSelection}`)
    }
}

// return (playRound(playerSelection, computerSelection))


function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    
    for(let i = 0; i <= 2; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Escolha: pedra, papel or tesoura")
        const result = playRound(playerSelection, computerSelection);

        console.log('jogador:' + playerSelection)
        console.log('computador:' + computerSelection)
        console.log(result)

        if(result.includes('jogador Ganhou!')) {
            playerScore++;
        } else if(result.includes('jogador Perdeu...')) {
                computerScore++;
        }
    }
    if (playerScore > computerScore) {
        // console.log("Jogador ganhou essa rodada!")
        alert("Jogador ganhou essa rodada!")
    }
    else if (playerScore < computerScore) {
        // console.log("Jogador perdeu essa rodada.")
        alert("Jogador perdeu essa rodada.")
    } else {
        // console.log("Empatou")
        alert("Empatou")
    }
        
}
playGame()