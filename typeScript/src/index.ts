class Person  {
    
    constructor(private name?:string, private lastname?:string, private age?:number){
    }
    fullName ():void {
        console.log(`Person name is ${this.name} ${this.lastname} and age ${this.age}`)
    }
    get getage(){
        return this.age;
    }
    set setage(value:number | null){
        if(value === null)
           throw new Error("Please Enter a age value");
        else
        this.age = value;
    }
};
class Teacher extends Person {
    
    constructor(name?:string, lastname?:string, age?:number, private title?:string, private jobcode?:number){
        super(name,lastname,age);
    }
    displayInfo () {
        super.fullName();
        console.log(`and title: ${this.title} and jobcode: ${this.jobcode}`);
        
    }
};

let newPerson = new Person("Yuksel", "Ertem");

let newPerson2 = new Person("Görkem", "Aslan");

let newTeacher = new Teacher("Selim Can", "Bagdatlı", 30 , "chemist" , 1234);

newTeacher.displayInfo();

newPerson2.setage = 27;


newPerson2.fullName();

newPerson.fullName();
