
function createSVG() {
    const svg = SVG().size(300, 200).fill('white');
    const circle = svg.circle(150).center(150, 100).fill('blue').stroke({ color: 'black', width: 5});
    const rect = svg.rect(150, 150).move(75, 25).fill('orange').stroke({ color: 'black', width: 5});
    const polygon = svg.polygon('150,30 75,175 225,175').fill('green').stroke({ color: 'black', width: 5});
    const text = svg.text('TS').move(150, 100).fill('red').font({ size: 45}).stroke({ color: 'black', width: 5});

    return svg;
}


// {/* <svg width="300" height="200" fill="white">
//     <circle cx="150" cy="100" r="75" stroke="black" stroke-width="5" fill="blue" />
//     <rect x="75" y="25" width="150" height="150" stroke="black" stroke-width="5" fill="orange" />
//     <polygon points="150,30,75,175,225,175" stroke="black" stroke-width="5" fill="green" />

//     <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="red" font-size="45">TS</text>
// </svg> */}

module.exports = svgGenerator;