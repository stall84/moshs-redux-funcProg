/******************************************************************************************************/
/*****************************FUNCTIONAL-PROGRAMMING-CONCEPTS******************************************/
/******************************************************************************************************/
/* High-Order functions which take functions as parameters and/or output them */




let input = "    FlertleDert      "    // String with extraneous whitespace
let output = `<div>${input.trim()}<div>` // Non-compositional way of doing it
let rootDiv = document.getElementById('root');
//rootDiv.innerHTML = output;

// High-Order Compositional way of doing it:
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`
const toLowerCase = str => str.toLowerCase();
const wrap = (type, str) => `<span>${str}</span>`
// Using above input string .. compose a high-order function to yield the trimd/divd template

rootDiv.innerHTML = wrapInDiv(toLowerCase(trim(input)));

/******************************************************************************************************/
/*****************************REDUX-BASIC-CONCEPTS******************************************/
/******************************************************************************************************/
/* Working with objects imutably */

const person = { 
    name: "Michael", 
    address: {
        country: "USA",
        city: "Atlanta"
    }
 };
// Using object's assign method pass in the target (new obj), source (person) and thirdly, optionally, you can pass in 
// new object properties you would like to change to
const copyObj = Object.assign({}, person, { name: "Catherine", email: "flertle@gmail.com" });
rootDiv.innerHTML = `<div>${JSON.stringify(copyObj)}</div>`
// You can optionally use the ES6 spread operator (much easier). In the example below we overwrite
// the original name property with new material passed in the spread operation (sandy)
const newerObj = {...person, name: "Sandy"}
console.log(newerObj);
console.log(person);

// BE AWARE!!!!:  Both Object.assign and spread operator are going to return a shallow-copy of the object.
// What this means in practice is that when your redux state has nested objects, the copy you make might 
// inadvertently mutate the original state object. 
//EX:
newerObj.address.city = "San Francisco"
console.log(newerObj);
console.log(person);  // !! Mutated to San Fran !!
//The way around this is to spread in the nested objects as well
// EX:
const person2 = {
    name: "George",
    address: {
        country: "USA",
        city: "Atlanta"
    }
};
// DEEP COPY WITH NEW CITY CHANGED/ADDED
const newPerson2 = {
    ...person2, 
    address: {
        ...person2.address,
        city: "New York"
    },
    name: "Michael"     // gets a little weird because if you want to change the initial property 'name' you have to do it after you spread in address object
}

console.log(newPerson2)
console.log(person2) // Unchanged