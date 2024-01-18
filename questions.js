const questions =[
{
    type: 'input',
    name: 'text',
    message: 'Please write three characters for the text to be included in your logo.',
    validate: text => text.length<=3 || 'Please enter 3 or fewer characters'
},
{
    type: 'input',
    name: 'textColor',
    message: 'Please let us know the color of the text you would like to have on the above chosen characters.',
},
{
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for your logo.',
    choices: ['Circle', 'Square', 'Triangle']
},
{
    type: 'input',
    name: 'userShapeColor',
    message: 'Please let us know the color of the shape you would like it to appear.',
},
]

module.exports = questions;