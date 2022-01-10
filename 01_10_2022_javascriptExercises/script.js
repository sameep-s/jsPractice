'use strict';
// 10 JAN 2022 exercises

/**


//ex 1-- this gives reference error as a is block scoped
if (true) {
    let a = 2;

}

console.log(a);


// ex 2 ---
why- variable a is modified in this case because let is block scoped

let a = 42;
{
    a = 100;
}

console.log(a);


// ex 3--
// why - in the function first it checks in it's own scope the value of 'a' and if not present then goes outside.


var ab = 100;
function App() {
    console.log('1', ab);
    let a = 42;
    console.log('2', a);
    {
        let a = 100;
    }
    console.log('3', a);
}

App();


// Ex 4
// why -- a will be 42 because of function scope

let a = 100;
function App() {
    a = 42;
    console.log('1', a);
}

App();


// ex5
// why -- it will give reference error due to TDZ

function something() {
    console.log(a);
    let a = 2;
}

something()


// Ex6
// why - it will give undefined due to hoisting
function something() {
    console.log(a);
    var a = 2;
}

something();


// Ex7
// why -- error because can't reassign const.
const sam = 2;
sam = 3;


// Ex 8
// Why --beacuse objects are stored in heap and only the address is stored in const variable which reamins same even if we modify the
// value in heap so we can modify object values in javascript even if we declare with const.

const obj = { a: 1, b: 2 };
obj.a = 22;

console.log(obj);


// Ex 9
// why - we will get an error because we can't directly reassign a const it's illegal

const obj = { a: 1, b: 2 };
const obj2 = { a: 3, b: 4 };

obj = obj2;



// Ex 10
// Why - will work because array is an object too and objects are stored in heap.
const array = [1, 2, 3, 4, 5];
array.push(55);

console.log(array);


// Ex 11
// Why - will give an error because we can't reassign values to const variable.

const array = [1, 2, 3, 4];
array = array.push(55);


// Ex 12
// why

const isOne = num => console.log(num);

isOne(55);



const oddEven = (num) => num % 2 ? 'odd' : 'even';

console.log(oddEven(26));
*/

// Ex 13
// Why - NaN 2 added to undefined is not a number.

const defaultExample = (a, b) => a + b;
console.log(defaultExample(2, 6));



var sam = 20;
var sam = 46;

console.log(sam);
console.log(`${sam}`);








