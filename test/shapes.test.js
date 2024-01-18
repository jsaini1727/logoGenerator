const Square = require('../lib/Square.js');
const Circle = require('../lib/Circle.js');
const Triangle = require('../lib/Triangle.js');

test("Should render blue square", ()=> {
    const square = new Square()
    square.setColor("blue")
    expect(square.render()).toEqual(`<rect x="75" y="25" width="150" height="150" fill="blue" />`)
})

test("Should render Orange circle", ()=> {
    const circle = new Circle()
    circle.setColor("Orange")
    expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="Orange"/>`)
})

test("Should render green triange", ()=> {
    const triange = new Triangle()
    triange.setColor("green")
    expect(triange.render()).toEqual(`<polygon points="150,30,75,175,225,175" fill="green" />`)
})