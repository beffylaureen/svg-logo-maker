const Circle = require("../lib/circle");

describe("Circle", () => {
  it("should test for a circle with a pink background", () => {
    const shape = new Circle ();
    //shape.setColor("pink");
    expect(shape.render()).toEqual(`
    <svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="pink" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="pink">""</text>
    </svg> `
    );
  })
})

  


