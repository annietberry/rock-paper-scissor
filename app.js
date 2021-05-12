const choices = ['rock', 'paper', 'scissor']

function play(playerChoice){
  const i = Math.floor(Math.random() * choices.length)
  const computerChoice = choices[i]
  console.log(computerChoice)
  detWinner(playerChoice, computerChoice)
}

function detWinner(playerChoice, computerChoice){
  //TIE
  if (playerChoice == computerChoice){
    alert("We have a tie!")
  }

  //playerChoice is rock 
  if (playerChoice =='rock'){
    if (computerChoice == 'paper'){
      alert("You lose!")
    }
    else if (computerChoice == 'scissor'){
      alert("You win!")
    }
  }
  // if (playerChoice == 'rock' && computerChoice == 'paper'){
  //   alert("You lose!")
  // }
  // if (playerChoice == 'rock' && computerChoice == 'scissor'){
  //   alert("You win!")
  // }

  //playerChoice is scissors
  if (playerChoice =='scissor'){
    if (computerChoice =='paper'){
      alert("You win")
    }
    else if(computerChoice == 'rock'){
      alert("You lose")
    }
  }
  // if (playerChoice == 'scissor' && computerChoice == 'paper'){
    //   alert("You win!")
    // }
  // if (playerChoice == 'scissor'  && computerChoice == 'rock'){
    //   alert("You lose!")
    // }
    
    //playerChoice is paper 
    if (playerChoice == 'paper'){
      if(computerChoice == 'scissor'){
        alert("You lose")
      }
      else if(computerChoice == 'rock'){
        alert("You win!")
      }
    }
    // if (playerChoice == 'paper' && computerChoice == 'scissor'){
      //   alert("You lose!")
      // }
      // if (playerChoice == 'paper'  && computerChoice == 'rock'){
        //   alert("You win!")
        // }
        
      }

// function chooseRandomComputerChoice(){
//   const i = Math.floor(Math.random() * choices.length)
//   const computerChoice = choices[i]
//   console.log(computerChoice)
// }

