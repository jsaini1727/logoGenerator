class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
    render(){
        return "";
    }
}

class Circle extends Shape {
    constructor() {
        super();
        this.radius = 75;
    }
    render(){
        return `<circle r="75" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor() {
        super();
    }
    render(){
        return `<polygon points= "150,30 75,175 225,175" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor() {
        super();
    }
    render(){
        return `<rect= x="150",y="150" fill ="${this.color}" />`;
    }
}