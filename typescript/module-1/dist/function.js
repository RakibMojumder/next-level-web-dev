"use strict";
// function type
// normal function
function add(a, b) {
    return a + b;
}
// arrow function
const multiple = (a, b) => {
    return a * b;
};
// callback function
const array = [35, 23, 51];
const newArray = array.map((ele) => ele * ele);
