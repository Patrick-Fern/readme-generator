// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {s
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your email address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please decscribe your project',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please describe your project!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide guidelines for how other developers can contribute to this application'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide instructions for how users can run any tests for your application.' 
        },
        {
            type: 'list',
            name: 'license',
            message: 'what type of license does your project have?',
            choices: ['Apache', 'Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'Organization for Ethical Source', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Open Data Commons', 'Perl', 'SIL', 'Unlicense', 'WTFPL', 'Zlib']
        }

    ])
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const writeMd = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

// // TODO: Create a function to initialize app
function init() {
    questions()
    .then(readmeData => {
       return generateMarkdown(readmeData);
    })
    .then(pageMD => {
        return writeMd(pageMD);
    })
    .then(writeMdResponse => {
        console.log(writeMdResponse)
    })
    .catch(err => {
        console.log(err);
    });
}

// // Function call to initialize app
init();



