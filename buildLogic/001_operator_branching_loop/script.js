/**

//--------------------------- Q1-------------------------

const add5Numbers = (n1, n2, n3, n4, n5) => console.log(n1 + n2 + n3 + n4 + n5);

add5Numbers(5, 13, 7, 21, 48);


// ----------------------------Q1-end --------------------------





// ---------------------------------Q2----------------------------

const oddEven = num => num % 2 ? console.log('Odd') : console.log('Even');

oddEven(45);


// -------------------------------Q2-ends --------------------------



// --------------------------Q3-----------------------------

const maxMin = (num1, num2) => console.log(`Max: ${Math.max(num1, num2)} Min: ${Math.min(num1, num2)}`);

maxMin(129, 251);

// ---------------------------Q3- Ends ----------------------




// ----------------------------Q4------------------------------

const findMax = (n1, n2, n3) => {
    let maxVal = 0;

    n1 > n2 ? maxVal = n1 : maxVal = n2;
    n3 > maxVal ? maxVal = n3 : '';

    return console.log(maxVal);
}

findMax(7, 23, 17);

// ------------------------------Q4 End --------------------------------





// -----------------------------Q5 -----------------------------------------


const minVal = (n1, n2, n3) => {
    let minVal = 0;

    n1 < n2 ? minVal = n1 : minVal = n2;
    n3 < minVal ? minVal = n3 : '';

    return console.log(minVal);
}


minVal(35, 29, 46);



// -----------------------------Q5 end -----------------------------------------



// ----------------------------Q6 ---------------------------



const daysMonth = keyMonth => {

    const monthsDays = ['january', 'march', 'may', 'july', 'august', 'october', 'december'];
    keyMonth = keyMonth.toLowerCase();

    monthsDays.indexOf(keyMonth) === -1 ? console.log('less than 31.') : console.log('31 days.');;
}

daysMonth('september');



// ----------------------------Q6 end ---------------------------




// -----------------------------  INTERMEDIATE  ------------------------


// ------------------------------ Q1 ------------------------------------



// print pattern

const printPattern = num => {

    let str = '*';

    for (let i = 0; i < num; i++) {
        console.log(str);
        str += '*';
    }
}

printPattern(5);




const mirrorPattern = num => {
    let str = `*`;

    for (let i = 0; i < num; i++) {
        let spc = ``;

        for (let j = i; j < num - 1; j++) {
            spc += ` `;
        }
        console.log(`${spc}${str}`);
        str += `*`;
    }
}

mirrorPattern(6);



const numberPattern = num => {

    for (let i = 1; i <= num; i++) {

    }
}

numberPattern(5);



// ------------------------- 13/jan/2011 -----------------------

// Ex1
const fizzBuzz = (len) => {
    const arr = [];

    for (let i = 1; i <= len; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            arr.push('FizzBuzz');
        } else if (i % 5 == 0) {
            arr.push('Buzz');
        } else if (i % 3 == 0) {
            arr.push('Fizz');
        } else {
            arr.push(i);
        }
    }

    return arr;
}

console.log(fizzBuzz(25));


// -------------------------------------------
// Ex2


const printPattern = level => {
    let str = `*`;

    for (let i = 0; i < level; i++) {
        console.log(str);
        str += `*`;
    }
    console.log(`level: ${level}`);
}

printPattern(8);



// ---------------------------------
// Ex 3 

const printTwelve = num => {
    const numNew = num * 12;

    for (let i = 1; i <= 10; i++) {
        console.log(`${numNew} x ${i} = ${numNew * i}.`);
    }
}


printTwelve(3);

*/


// ---------------------------------
// Ex 4 fibonacci series

const fibonacci = num => {
    let n1 = 0;
    let n2 = 1;
    let fib = 0;

    for (let i = 0; i < num; i++) {
        console.log(`${fib}`);
        n1 = n2;
        n2 = fib;
        fib = n1 + n2;
    }

}

fibonacci(12);












