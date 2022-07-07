"use strict";
class Person {
    constructor(name, lastname) {
        this.fullName = () => {
            console.log(`Person name is ${this.name} ${this.lastname}`);
        };
        this.name = name;
        this.lastname = lastname;
    }
}
let newPerson = new Person("Yuksel", "Ertem");
let newPerson2 = new Person("Görkem", "Aslan");
newPerson.fullName();
newPerson2.fullName();
