"use strict";
function logString(input) {
    if (typeof input === 'string') {
        console.log(input);
    }
    else {
        console.error('Input is not a string');
    }
}
logString("Jubayer Ahmmod Shuvo"); //with answer
logString(5); //shows error that is not a string
