const Shape = ['Circle', 'Square', 'Triangle'];

class newShape {
  constructor(logoCharacters, textColor, shapeColor){
    this.logoCharacters = logoCharacters;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
};
}
//const newShape = ['Circle', 'Square', 'Triangle'];
//function generateShapes(shape){
  //if (shapes === 'Circle'){
    //return Circle;
    //}else if (shapes === 'Square'){
    //return Square;
    //}else{
      //return Triangle;
    //}
class Circle extends newShape {
      //constructor(logoCharacters, textColor, shapeColor){
        //this.logoCharacters = logoCharacters;
        //this.textColor = textColor;
        //this.shapeColor = shapeColor;
     // };
    
      render(){
        return
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">"${this.logoCharacters}"</text>
    </svg>`
      }
    };
    
  

class Square extends newShape {
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
class Triangle extends newShape {
  constructor(logoCharacters, textColor, shapeColor){
    this.logoCharacters = logoCharacters;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
};

  render(){
    return 
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">"${this.logoCharacters}"</text>
    </svg>`
  }
};

module.exports = {Circle, Square, Triangle, Shape}









module.exports = Shape