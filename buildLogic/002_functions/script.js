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


*/
















