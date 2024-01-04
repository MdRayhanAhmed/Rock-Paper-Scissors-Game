let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
// console.log(choices);
let msg = document.querySelector("#msg");
// console.log(msg);

let userScorePtag = document.querySelector("#user-score");
let compScorePtag = document.querySelector("#comp-score");
const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randInx = Math.floor(Math.random() * 3);
    // console.log(options[randInx]);
    return options[randInx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePtag.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePtag.innerText = compScore;
        msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    //generate comp choice
    const compChoice = getCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //paper,scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === 'paper') {
            // rock,scissors
            userWin = compChoice === "rock" ? true : false;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach(choice => {
    choice.addEventListener(('click'), () => {
        let userChoice = choice.getAttribute("id");
        // console.log(userChoice);
        playGame(userChoice);
    })

});