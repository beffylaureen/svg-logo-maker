const Square = require("../lib/square");

describe("Square", () => {
  it("should test for a square with a yellow background", () => {
    const shape = new Square ("yellow", "yellow", "CCC");
    let newShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect width="160" height="160" fill="yellow" />
<text x="80" y="100" font-size="60" text-anchor="middle" fill="yellow">CCC</text>
</svg>` 
    
    expect(shape.render()).toEqual(newShape);
  });
});



    