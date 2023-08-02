const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

function renderShape(answers){
  if(answers.shape === 'Circle'){
    let userShape = new Circle (answers.shapeColor, answers.characters, answers.textColor)
    return userShape.render()
  }else if(answers.shape === 'Square'){
    let userShape = new Square (answers.shapeColor, answers.characters, answers.textColor)
    return userShape.render()
  }else{
    let userShape = new Triangle (answers.shapeColor, answers.characters, answers.textColor)
    return userShape.render()
  }

}
module.exports = renderShape;