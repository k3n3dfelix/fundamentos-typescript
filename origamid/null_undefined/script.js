"use strict";
const button = document.querySelector('button');
const config = localStorage.getItem('config');
if (button !== null) {
    button.click();
}
if (button) {
    button.click();
}
button?.click();
let total;
function teste() { }
console.log(typeof total); //undefined
console.log(typeof teste); //undefined
if (total) {
    console.log("Total foi definido");
}
else {
    console.log("Total não foi definido");
}
