"use strict";
const sum = (num0, num2) => {
    return num0 + num2;
};
const sub = (num1, num2) => {
    if (typeof num2 !== 'undefined') {
        return num1 + num2;
    }
    throw Error("number is not coming");
};
const mul = (num0 = 5) => {
};
const div = (...nums) => {
};
