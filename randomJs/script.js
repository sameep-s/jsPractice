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