"use strict";
var colorCode;
(function (colorCode) {
    colorCode[colorCode["Black"] = 0] = "Black";
    colorCode[colorCode["Brown"] = 1] = "Brown";
    colorCode[colorCode["Red"] = 2] = "Red";
    colorCode[colorCode["Orange"] = 3] = "Orange";
    colorCode[colorCode["Yellow"] = 4] = "Yellow";
    colorCode[colorCode["Green"] = 5] = "Green";
    colorCode[colorCode["Blue"] = 6] = "Blue";
    colorCode[colorCode["Violet"] = 7] = "Violet";
    colorCode[colorCode["Grey"] = 8] = "Grey";
    colorCode[colorCode["White"] = 9] = "White";
})(colorCode || (colorCode = {}));
let tupple = ['Black', 'Yellow'];
function colorCodeTotal(tupple) {
    let code1 = Object.getOwnPropertyNames(colorCode).indexOf(tupple[0]);
    let code2 = Object.getOwnPropertyNames(colorCode).indexOf(tupple[1]);
    return code1 + code2;
}
let result = colorCodeTotal(tupple);
console.log(result);
