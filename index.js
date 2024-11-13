#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
//1) computer will generate a random number. DONE
//2) user input for guessing number. DONE
//3) compare user input with generate number and show result
//const randomNumber = Math.random();
var randomNumber = Math.floor(Math.random() * 8 - 1);
//console.log(randomNumber);
var answer = await inquirer_1.default.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    }
]);
//console.log(answer);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed a right number");
}
else {
    console.log("You guessed a wrong number");
}
