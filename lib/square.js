const Shape = require('./shape.js');


class Square extends Shape {
  constructor(shapeColor, textColor, logoCharacters){
    super(shapeColor, textColor, logoCharacters);
    //this.logoCharacters = logoCharacters;
    //this.textColor = textColor;
    //this.shapeColor = shapeColor;
  };

  render(){
    return(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect width="160" height="160" fill="${this.shapeColor}" />
<text x="80" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoCharacters}</text>
</svg>`)
  }
};

module.exports = Square;