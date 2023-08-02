const Triangle = require("../lib/triangle");

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

describe("Test of Triangle Class",()=>{
  describe ("instantiate an object successfully",() => {
    it"should create a blue triangle with polygon points 150, 18 244, 182 56, 182", ()=>{
      const shape = new Triangle;
      const color = blue
      expect(obj).toExist()
      
      });
  })
})