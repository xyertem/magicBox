"use strict";
class Person {
    constructor(name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.fullName = () => {
            console.log(`Person name is ${this.name} ${this.lastname} and age ${this.age}`);
        };
    }
    get getage() {
        return this.age;
    }
    set setage(value) {
        if (value === null)
            throw new Error("Please Enter a age value");
        else
            this.age = value;
    }
}
let newPerson = new Person("Yuksel", "Ertem");
let newPerson2 = new Person("Görkem", "Aslan");
newPerson2.setage = 27;
newPerson.fullName();
newPerson2.fullName();
