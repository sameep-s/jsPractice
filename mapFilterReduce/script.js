/**
// map, reduce and filter

// ----------------------------- MAP -----------------------
const arr = [5, 1, 3, 2, 6];

// Double - [10,2,6,4,12]

function double(x) {
    return x * 3;
}

function binary(x) {
    return x.toString(2);
}

const output = arr.map(binary);

const op2 = arr.map((x) => x * 21);


console.log(output);
console.log(op2);

// -------------------------- FILTER ----------------------

// filter odd values
function isOdd(x) {
    return x > 4;
}

const op3 = arr.filter(isOdd);

console.log(op3);

// ----------------------------- REDUCE --------------------

// to find sum or max number

const output4 = arr.reduce((acc, cur) => {
    return acc = acc + cur;
}, 0);
// 0 is the second parameter of the reduce function,
//  it is the initial value of accumulator

const op5 = arr.reduce((acc, cur) => {
    return (cur > acc ? acc = cur : acc = acc);
}, 0)

// printing on console
console.log(output4);
console.log(op5);


*/

/*
// ------------------------------------- Functional Programming exercises
// map, filter, reduce.

arr = [1, 3, 5, 2, 22, 11, 9];

// ------------------------------------
const oddNumber = (sum, cur) => {
    cur % 2 === 0 ? cur : sum += cur
    return sum;
};


// -------------------------------------
var evenSum = 0, oddSum = 0;
const oddNumberObj = (sum, cur) => {
    cur % 2 === 0 ? evenSum += cur : oddSum += cur;
    return { oddSum, evenSum };
}

const isOdd = arr.reduce(oddNumberObj);
console.log(isOdd);

*/


// ------------------------- Find the biggest number in the array





