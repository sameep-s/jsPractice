/* 

// consuming promises


console.log('start test');

setTimeout(() => {
    console.log('0 sec timer');
}, 0);

Promise.resolve('Promise 1')
    .then(res => console.log(res));

Promise.resolve('promise 2 longer')
    .then(res => {
        for (let i = 0; i <= 1000000000; i++) { }
        console.log(res);
    });

console.log('end test');

*/


// promise only takes one argument namely executor function
// which(executor function) in turn takes two arguments namely resolve and reject.

const lotteryPromise = new Promise(function (resolve, reject) {

    console.log('Draw in happening now. kindly wait for the result.');

    setTimeout(function () {
        if (Math.random() >= .5) {
            resolve('You Won the lottery. Congratulations.');
        } else {
            reject(new Error('You lost better luck next time'));
        }

    }, 3000);

});


lotteryPromise
    .then(res => console.log(res))
    .catch(err => console.error(err));


const getPosition = function () {
    return new Promise((resolve, reject){

        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};










