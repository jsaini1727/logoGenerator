class SVG {
    constructor() {
        this.text = '';
        this.shape = '';
       }
    render (){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shape}${this.text}</svg>`
    }
    setText(characters,textColor){
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${characters}</text>`;
    }
    setShape(userShape){
        this.shape = userShape.render()
    }
}

module.exports = SVG;