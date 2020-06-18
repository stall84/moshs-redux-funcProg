/* https://en.wikipedia.org/wiki/Currying */
/* Basically taking a function that has multiple parameters, converting it to one that only takes one parameter */


// Original Regular Function with 2 params:

function add(a,b) {
    return a + b; 
}

// To curry the above function, start by gettting rid of one parameter (a or b), and instead passing it as a single parameter
// to a returned function within the original functions code-block like:
function add(a) {
    return function(b) {
        return a + b;
    }
}
// Then the way that you would call this function to add 2 numbers, since the first function call will
// return a function, just use a second set of parenthesis to pipe in the 2nd number to the returned function



console.log(add(1)(4))  // Expected return is 5

// Another way of currying is with ES6 arrow function like so:
const add2 = a => b => a + b;

console.log(add2(6)(4))  // 10