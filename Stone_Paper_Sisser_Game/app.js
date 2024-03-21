document.addEventListener("DOMContentLoaded", function () {
    const choices = document.querySelectorAll(".choices button");
    const resultText = document.getElementById("result-text");

    choices.forEach((choice) => {
        choice.addEventListener("click", playGame);
    });

    function playGame() {
        const userChoice = this.id;
        const computerChoice = getComputerChoice();

        const result = determineWinner(userChoice, computerChoice);

        resultText.innerText = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
    }

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    function determineWinner(user, computer) {
        if (user === computer) {
            return "It's a tie!";
        }

        if ((user === "rock" && computer === "scissors") ||
            (user === "paper" && computer === "rock") ||
            (user === "scissors" && computer === "paper")) {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    }
});

