// ask user to select rock, paper or scissor into the prompt
const askUserForInput = () => {
    let userInput = window.prompt("Please type rock, paper or scissor!");
    userInput = userInput.toLowerCase();
    return userInput
}
// have the compuer randomly generate rock paper or scissors
const generateRandomComputerInput = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    // return "paper"
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
// evaluate who won and give the appropriate response
const playRound = (userInput, computerInput) => {

    let outcome

    if (userInput === computerInput) {
        return "It's a tie!";
    } else if (userInput === "rock" && computerInput === "scissors") {
        return "You win!";
    } else if (userInput === "rock" && computerInput === "paper") {
        return "You lose!";
    } else if (userInput === "paper" && computerInput === "rock") {
        return "You win!";
    } else if (userInput === "paper" && computerInput === "scissors") {
        return "You lose!";
    } else if (userInput === "scissors" && computerInput === "paper") {
        return "You win!";
    } else if (userInput === "scissors" && computerInput === "rock") {
        return "You lose!";
    }

}

let userInput
let computerInput
let outcome

for(let rounds = 0; rounds < 5; rounds++) {
    userInput =  askUserForInput();
    computerInput = generateRandomComputerInput();
    outcome = playRound(userInput, computerInput);

    console.log("your choice",userInput);
    console.log("computer choice",computerInput);
    console.log("outcome",outcome);
    console.log("\n");
}