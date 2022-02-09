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


/**

// ------------------------- Find the biggest number in the array

// Given an array.
// Write a function to change all even numbers in an array to odd numbers by adding 1 to it.
// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// Your output should be:
// [1, 3, 3, 59, 5, 7, 25, 9, 15, 5]



// ------------------------- class akanksha
const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

const arrNew = arr.map(num => num % 2 === 0 ? num += 1 : num);
console.log(arrNew);



const arr = [
    {
        name: "Jay",
        age: 60
    },
    {
        name: "Gloria",
        age: 36
    },
    {
        name: "Manny",
        age: 16
    },
    {
        name: "Joe",
        age: 9
    }
]


// Your output should be: 121

arrAge = arr.reduce((sum, cur) => sum += cur.age, 0);
console.log(arrAge);



const family = [
    {
        name: 'Tanay',
        haveCycle: true
    },
    {
        name: 'Akanksha',
        haveCycle: false
    },
    {
        name: 'Tanvi',
        haveCycle: true
    },
    {
        name: 'Kanak',
        haveCycle: false
    }
];


const cycleOwner = family.filter(obj => {
    obj.haveCycle ?  )
console.log(cycleOwner);



const arr = ["You", "all", "are", "rockstars"];

// Your output should be:
// { '0': "You", '1': "all", '2': "are", '3': "rockstars" }



const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]


// Your output should be:
// Violet-Indigo-Blue-Green-Yellow-Orange-Red

const stre = arr.join("-");
console.log(stre);


*/


// ------------------------------------------ Js practice- map, filter, reduce 9th Feb 2022.


