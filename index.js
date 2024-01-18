const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/Shape.js');
const Circle = require('./lib/Circle.js');
const Triangle = require('./lib/Triangle.js');
const Square = require('./lib/Square.js');
const questions = require('./questions');
const SVG = require('./lib/svg.js');

// Prompt the user for questions regarding the 3 alphabets they want as the text for their logo
inquirer.prompt(questions)
    .then(({text, textColor, shape, userShapeColor}) => {
        let userShape;
        switch (shape) {
            case 'Circle':
                userShape = new Circle();
                break;
            case 'Square':
                userShape = new Square();
                break;
            case 'Triangle':
                userShape = new Triangle();
        }
        userShape.setColor(userShapeColor);

        const svg = new SVG()
        svg.setText(text, textColor)
        svg.setShape(userShape)

        fs.writeFile('logo.svg', svg.render(), (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Logo.svg file created successfully!');
        })

       
    })
