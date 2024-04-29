#! /usr/bin/env node

// Importing Inquirer & Chalk Packages

import inquirer from "inquirer";
import chalk from "chalk";

// Display a Colorfull Welcome Meesage

console.log(chalk.italic.bold.blueBright("\n \t\t My Word Counter Track"));
console.log("=".repeat(60));

// Prompt the user to enter Sentence
let answers= await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence:"
    }
]);

// Trimming the Sentence & splitting it into words based on "Spaces"
let words= answers.sentence.trim().split(" ");

// Analysis of user input sentences
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence: "));
console.log(words);
console.log(chalk.bold(`\n - Word Counter: ${chalk.italic.yellowBright(words.length)}`));
console.log("=".repeat(60));






