let calcString = '';

const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const dot = document.getElementById('dot');
const pls = document.getElementById('addition');
const mns = document.getElementById('subtraction');
const mlt = document.getElementById('multiplication');
const dvd = document.getElementById('division');

//Creates a string with calculation operations
const createCalcString = val => {
    calcString += val;
}

//Event handlers
zero.onclick = createCalcString(0);
one.onclick = createCalcString(1);
two.onclick = createCalcString(2);
three.onclick = createCalcString(3);
four.onclick = createCalcString(4);
five.onclick = createCalcString(5);
six.onclick = createCalcString(6);
seven.onclick = createCalcString(7);
eight.onclick = createCalcString(8);
nine.onclick = createCalcString(9);
dot.onclick = createCalcString('.');
pls.onclick = createCalcString('+');
mns.onclick = createCalcString('-');
mlt.onclick = createCalcString('*');
dvd.onclick = createCalcString('/');

//Converts the string into an array of numbers and operators
const convertCalcString = str => {
    let calcArr = [];

    if (str.includes('+')) {
        calcArr = str.split('+');
        calcArr.push('+');
    } else if (str.includes('-')) {
        calcArr = str.split('-');
        calcArr.push('-');
    } else if (str.includes('*')) {
        calcArr = str.split('*');
        calcArr.push('*');
    } else if (str.includes('/')) {
        calcArr = str.split('/');
        calcArr.push('/');
    }

    return calcArr;
}

//Converts string array items to number items
const toNumber = arr => {
    arr[0] = Number(arr[0]);
    arr[1] = Number(arr[1]);
}

//Runs simple calculation
const runCalc = arr => {
    let rslt;

    switch (arr[2]) {
        case '+':
            rslt = arr[0] + arr[1];
            break;
        case '-':
            rslt = arr[0] - arr[1];
            break;
        case '*':
            rslt = arr[0] * arr[1];
            break;
        case '/':
            rslt = arr[0] / arr[1];
            break;
        default:
            console.log('something\'s wrong with "runCalc" func!')
    }

    return rslt;
}