"use strict";
class Person {
    constructor(name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
    fullName() {
        console.log(`Person name is ${this.name} ${this.lastname} and age ${this.age}`);
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
;
class Teacher extends Person {
    constructor(name, lastname, age, title, jobcode) {
        super(name, lastname, age);
        this.title = title;
        this.jobcode = jobcode;
    }
    displayInfo() {
        super.fullName();
        console.log(` and title: ${this.title} and jobcode: ${this.jobcode}`);
    }
}
;
let newPerson = new Person("Yuksel", "Ertem");
let newPerson2 = new Person("Görkem", "Aslan");
let newTeacher = new Teacher("Selim Can", "Bagdatlı", 30, "chemist", 1234);
newTeacher.displayInfo();
newPerson2.setage = 27;
newPerson2.fullName();
newPerson.fullName();
