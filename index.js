const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions');
const svgGenerator = require('./svgGenerator');
const {svg} = require('@svgdotjs/svg.js')
// Prompt the user for questions regarding the 3 alphabets they want as the text for their logo
inquirer.prompt(questions)
    .then((answers) => {
        const userAnswers = answers;
        const svgFile = svg(userAnswers);
        // function to write the SVG file.
        fs.writeFile(logo.svg, svgFile, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Logo.svg file created successfully!');
        })
    })
