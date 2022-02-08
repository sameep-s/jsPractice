// 002_Functions

/**
// ---------------------------------------
// EX 1

const power = (a, b) => {

    let num = 1;
    while (b > 0) {
        num = num * a;
        b--;
    }

    return console.log(num);
}

power(2, 3);



// --------------------------------------------
// Ex 2


const areaOfHexagon = (side) => {

    let area = (3 * (Math.sqrt(3) / 2) * (side * side));
    area = area.toFixed(2);

    console.log(area);
}

areaOfHexagon(10);



// --------------------------------------------
// Ex 3


const noOfWords = sntnce => {
    const newSnt = sntnce.split(" ");

    return console.log(`${newSnt.length}`);
}

noOfWords('We are neoGrammers');




// --------------------------------- 30 jan tanay promises classes ----------------------------
//

const nameLength = (name_) => {
    let nameL = name_.length;
    console.log(`size of name ${nameL}`);

    return nameL;
}

const printName = (string, cb) => {

    let length = cb(string);
    console.log(`My name(${string}) is ${length} characters long.`);
}

printName('sameep', nameLength);

// ----------------------------------------------------------


const willKill = () => console.log(`I am ded.`);
const willNotKill = () => console.log(`I am alive.`);

const willThanosKillMe = (string, cb1, cb2) => {
    if (string.length % 2 === 0) cb2();
    else cb1();
}

willThanosKillMe('sameep', willKill, willNotKill);

// ----------------------------------------------------------

const printMsg = (message, delay) => {
    setTimeout(() => {
        console.log(`${message}`);
    }, delay)
}

printMsg('hey message (delay)', 2000);

// ----------------------------------------------------------

function fakeFetch(msg, shouldReject) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldReject) {
                reject(`error from server: ${msg}`);
            }
            resolve(`from server: ${msg}`);
        }, 3000);
    });
}

// callBacks
const successHandler = (data) => console.log(data);
// fakeFetch("sameep", true).then(successHandler).catch((err) => console.err(err));

// ----------------------------------------------------------

const getServerResponseLength = (message) => fakeFetch(message).then(data => data.length);
console.log(getServerResponseLength("Hello there"));



// ----------------------------------------------------------


// const syncCallsToServer = (msg1, msg2) => {

//     fakeFetch(msg1)
//         .then(data1 => fakeFetch(msg2).then(data2 => console.log({ data1, data2 })))

// }

// syncCallsToServer('hii', 'how are you?');


const syncCallsToServer = async (msg1, msg2) => {

    try {
        const data = await fakeFetch(msg1);
        console.log(data);

        const data2 = await fakeFetch(msg2);
        console.log(data2);
    }
    catch (e) {
        // console.err(e);
    }
}

syncCallsToServer('hii', 'how are you?');





*/



// ------------------------------------- Functional Programming exercises





