const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const outcome = document.querySelector(".display-outcome");

function computerPlay() {
    const rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random() * 3)];
}

let pScore = 0;
let cScore = 0;

function userPlay(playerChoice) {
    switch (playerChoice) {
        case "rock":
            switch (computerPlay()) {
                case "rock":
                    outcome.innerHTML = "It's a tie!";
                    break;
                case "paper":
                    cScore++;
                    computerScore.innerHTML = cScore;
                    outcome.innerHTML = "You lose against paper!";
                    break;
                case "scissors":
                    pScore++;
                    playerScore.innerHTML = pScore;
                    outcome.innerHTML = "You win against scissors!";
                    break;
            }
            break;

        case "paper":
            switch (computerPlay()) {
                case "rock":
                    pScore++;
                    playerScore.innerHTML = pScore;
                    outcome.innerHTML = "You win against rock!";
                    break;
                case "paper":
                    outcome.innerHTML = "It's a tie!";
                    break;
                case "scissors":
                    cScore++;
                    computerScore.innerHTML = cScore;
                    outcome.innerHTML = 'You lose against scsissors!';
                    break;
            }
            break;

        case "scissors":
            switch (computerPlay()) {
                case "rock":
                    cScore++;
                    computerScore.innerHTML = cScore;
                    outcome.innerHTML = 'You lose against rock!';
                    break;
                case "paper":
                    pScore++;
                    playerScore.innerHTML = pScore;
                    outcome.innerHTML = 'You win against scissors!';
                    break;
                case "scissors":
                    outcome.innerHTML = "It's a tie!";
                    break;
            }
            break;

        default:
            outcome.innerHTML = 'Wrong input!';
            break;
    }

    if (cScore == 10) {
        alert('You lose!');
        setTimeout(() => {
                location.reload(); // its reload the browser
            },
            4000);
    } else if (pScore == 10) {
        alert('You wins!');
        setTimeout(() => {
                location.reload(); // its reload the browser
            },
            4000);
    }
}