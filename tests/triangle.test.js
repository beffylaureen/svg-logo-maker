const Triangle = require("../lib/triangle");

describe("Triangle", () => {
  it("should test for a triangle with a blue background", () => {
    const shape = new Triangle("blue", "blue", "BBB");
    let newShape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182" fill="blue" />
<text x="150" y="160" font-size="60" text-anchor="middle" fill="blue">BBB</text>
</svg>`
    expect(shape.render()).toEqual(newShape);

  });
});
