const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/Circle.js');
const Triangle = require('./lib/Triangle.js');
const Square = require('./lib/Square.js');
const questions = require('./questions');
// const svgGenerator = require('./svgGenerator');
// const {svg} = require('@svgdotjs/svg.js')
// Prompt the user for questions regarding the 3 alphabets they want as the text for their logo
inquirer.prompt(questions)
    .then((answers) => {
        let shape;
        if (answer.shape === 'circle'){
            shape = new Circle$
        }
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.characters}</text></svg>`;

        // function to write the SVG file.
        fs.writeFile(logo.svg, svgFile, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Logo.svg file created successfully!');
        })
    })
