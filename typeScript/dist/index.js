export class Person {
    constructor(name, lastname, _age) {
        this.name = name;
        this.lastname = lastname;
        this._age = _age;
    }
    fullName() {
        return `${this.name} ${this.lastname}`;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value === null || value === undefined)
            throw new Error("Please Enter a age value");
        else
            this._age = value;
    }
}
;
export class Teacher extends Person {
    constructor(name, lastname, age, title, jobcode) {
        super(name, lastname, age);
        this.title = title;
        this.jobcode = jobcode;
    }
    displayInfo() {
        console.log(super.fullName());
        console.log(`and title: ${this.title} and jobcode: ${this.jobcode}`);
    }
}
;
//let newPerson = new Person("Yuksel", "Ertem", 25)
//let newPerson2 = new Person("Görkem", "Aslan", 27)
//let newTeacher = new Teacher("Selim Can", "Bagdatlı", 30 , "chemist" , 1234)
//newTeacher.displayInfo()
//newPerson2.age = 27
//console.log(`${newPerson2.fullName()} + age : ${newPerson.age}`)
//console.log(`${newPerson.fullName()} + age : ${newPerson.age}`)
