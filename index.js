const fs = require('fs');
const inquirer = require("inquirer");

async function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username: "
        },
        {
            type: "input",
            name: "title",
            message: "What is your Project Title: "
        },
        {
            type: "input",
            message: "Description: ",
            name: "desc"
        },
        {
            type: "input",
            message: "What command should be used to install npm",
            name: "install"
        },
        {
            type: "input",
            message: "Instructions for use.",
            name: "usage"
        },
        {
            type: 'list',
            message: "Choose a license for your project.",
            choices: ['MIT', 'Unlicense'],
            name: "licenseName",
        },
        {
            type: "input",
            message: "Enter the github user names of all the contributors: ",
            name: "contributors"
        },
        {
            type: "input",
            message: "What command should be ran to run the test: ",
            name: "test"
        },
    ]);
    }