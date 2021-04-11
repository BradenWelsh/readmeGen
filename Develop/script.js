const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateReadme = require('../utils/generateReadme');

//Prompt the user these questions to use in the readme.
function promptUser(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectsTitle',
            message: 'What would you like your project to be titled?'
        },
        {
            type: 'input',
            name: 'projectDesc',
            message: 'What is the description of the project?'
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please explain the installation process.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is this project used for?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What are the licenses for this project?',
            choices: [
                "Apache",
                "ISC",
                "MIT",
                "Mozilla"
            ]
        },
        {
            type:'input',
            name:'contributors',
            message: 'Who are the contributors for this project?'
        },
        {
            type: 'input',
            name: 'githubUser',
            message: 'What is your Github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email.'
        },
    ])
}

promptUser()
.then(answers => generateReadme(answers))
.then(readme =>
    {fs.writeFile("README.md", readme, err => {
        if(err) {
            console.log(err);
            return;
        }
    })
})