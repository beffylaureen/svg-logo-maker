const Shape = require('./shape.js');


class Triangle extends Shape {
  constructor(shapeColor, textColor, logoCharacters){
    super(shapeColor, textColor, logoCharacters);
    //this.logoCharacters = logoCharacters;
    //this.textColor = textColor;
    //this.shapeColor = shapeColor;
};

  render(){
    return (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
<text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoCharacters}</text>
</svg>`)
  }
};

module.exports = Triangle;