"use strict";
let arrType = (arr) => {
    return arr[arr.length - 1];
};
let n = arrType([1, 2, 3]);
let s = arrType(['a', 'b', 'c']);
let karma = arrType(['a', 1]);
console.log(typeof s);
const createPerson = (p) => {
    return {
        fullname: `${p.name} ${p.lastname}`,
        age: p.age,
        Data: p.info
    };
};
const newPerson = createPerson({ name: "Yuksel", lastname: "Ertem", age: 27, info: 123 });
console.log(newPerson);
