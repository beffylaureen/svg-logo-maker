// TODO: Included packages needed for this application

const inquirer = require('inquirer');
const fs = require ('fs');
const Shape = require('./lib/shape.js');
const fileName = './examples/logo.svg';
const renderShape = require('./lib/renderShape.js')

// TODO: Create an array of questions for user input

const questions = [
  {
    type: 'input',
    name: 'characters',
    message: 'Please enter up to three characters.  The logo will display as you enter it here (upper-case, lower-case, special characters, etc.)',
    validate: function(data){
      return data.length<=3
    },
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
    choices: ['Circle','Square','Triangle'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Please choose a color for the shape of your logo. You may enter either a color keyword or a hexadecimal number',
  },
];
// TODO: Create a function to generate logo
  function generateLogo(answers) {
    const svg = renderShape(answers);
    fs.writeFile(fileName, svg, ()=> console.log(fileName + " Generated logo.svg!") )
    

  

    //fs.writeFile(filename, svg, function (err){
    // err ? console.log(err) : console.log(filename + " Generated logo.svg!")
    //})
  };

// TODO: Create a function to initialize app
function init(){
  inquirer
    .prompt(questions)
    .then ((answers) => {
      generateLogo(answers);
})
.catch(err => {
  console.log(err);
})
}
init();