const shape = require('Shape');

class Triangle extends Shape {

    render() {
        return `<polygon points="150,30,75,175,225,175" fill="${this.shapeColor}" />`
    }
}

modeule.exports = Triangle
