const Shape = require('./Shape');

class Square extends Shape {
    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.userShapeColor}" />`
        }
}

module.exports = Square