// TODO: Included packages needed for this application

const inquirer = require('inquirer');
const fs = require ('fs');
const Shape = require('./lib/shapes.js');

// TODO: Create an array of questions for user input

const questions = [
  {
    type: 'input',
    name: 'characters',
    message: 'Please enter up to three characters.  The logo will display as you enter it here (upper-case, lower-case, special characters, etc.)',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Please choose a color for the text of your logo. You may enter either a color keyword or a hexadecimal number',
    
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please choose a shape:',
    choices: ['circle','square','triangle'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Please choose a color for the shape of your logo. You may enter either a color keyword or a hexadecimal number',
  },
];
// TODO: Create a function to generate logo
  function writeToFile(image){
    const filename = './examples/logo.svg';

    fs.writeFile(filename, image, function (err){
      err ? console.log(err) : console.log(filename + " Generated logo.svg!")
    })
  }

// TODO: Create a function to initialize app
function init(){
  inquirer.prompt(questions)
  .then (answers => writeToFile('logo.svg', answers))
}

init();