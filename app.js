let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComChoice = () => {
  /* random string nikalne k liye Math.floor function use kiya jo ki random no. generate krega
     jo is array me as a Index kam krega jisse random string nikal jayegi */
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
  //rock, paper, scissors
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win!  Your  ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost.  ${compChoice}  beats  Your  ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  console.log("user choice  = ", userChoice);
  // generate comChoice
  const compChoice = genComChoice();
  console.log("com choice  = ", compChoice);
  
// userChoice and comChoice fight who is win
  if (userChoice === compChoice) {
    
    //Draw condition
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // com ki choice paper, scissor
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // com choice rock, scissor agr paper hota to game draw ho jata
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

// individual div me se choice nikal rhe
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
