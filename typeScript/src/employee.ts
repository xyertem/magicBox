import { Person } from "./index.js";

class Employee extends Person{
    constructor(name:string, lastname:string, age:number, private title:string, private Id:number){
        super(name,lastname,age)
    }
    displayEmployeeInfo = () => {
        console.log(`
        Employee ID: ${this.Id}
        Fullaname: ${super.fullName()}
        Age: ${super.age}
        Title: ${this.title}
        `)
    }
}

const newEmployee = new Employee("Yüksel", "Ertem", 27 , 'Software Engineer',1)

newEmployee.displayEmployeeInfo();