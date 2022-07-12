import { Person } from "./index.js";
class Employee extends Person {
    constructor(name, lastname, age, title, Id) {
        super(name, lastname, age);
        this.title = title;
        this.Id = Id;
        this.displayEmployeeInfo = () => {
            console.log(`
        Employee ID: ${this.Id}
        Fullaname: ${super.fullName()}
        Age: ${super.age}
        Title: ${this.title}
        `);
        };
    }
}
const newEmployee = new Employee("Yüksel", "Ertem", 27, 'Software Engineer', 1);
newEmployee.displayEmployeeInfo();
