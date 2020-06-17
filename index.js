/* High-Order functions which take functions as parameters and/or output them */

let input = "    FlertleDert      "    // String with extraneous whitespace
let output = `<div>${input.trim()}<div>` // Non-compositional way of doing it
let rootDiv = document.getElementById('root');
//rootDiv.innerHTML = output;

// High-Order Compositional way of doing it:
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`
const toLowerCase = str => str.toLowerCase();
// Using above input string .. compose a high-order function to yield the trimd/divd template

rootDiv.innerHTML = wrapInDiv(toLowerCase(trim(input)));
