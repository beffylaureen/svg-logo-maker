const Shape = require('./shape.js');


class Square extends Shape {
  constructor(logoCharacters, textColor, shapeColor){
    this.logoCharacters = logoCharacters;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  };

  render(){
    return
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="160" height="160" fill="${this.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">"${this.logoCharacters}"</text>
    </svg>`
  }
};