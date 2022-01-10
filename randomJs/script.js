// this if for iife functions
// immediately invoked function expressions


// it has no name and is invoked immediately.
(() => {
    console.log("this is an iife function");
})();

// to see if it changes

// P.s. It does


// This is amazing and it works
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}


repeat(5, console.log);

let labels = [];
repeat(5, (j) => labels.push(`item ${j}`));

console.log(labels);


// new Function to tell greater than 10
// higher order function returning function

function greaterThan(n) {
    return ((m) => m > n);
}

let greaterThan10 = greaterThan(10);
let greaterThan21 = greaterThan(21);

console.log(greaterThan10());
console.log(greaterThan10(11));

console.log(greaterThan21(24));

function isOne(num) {
    return num === 1;
}


function isBigger(a, b) {
    return a > b;
}

const Add22andReturn = num => num + 22;
