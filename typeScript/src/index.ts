export class Person  {
    
    constructor(private name?:string, private lastname?:string, private _age?:number|null){
    }
    fullName ():string {
        return `${this.name} ${this.lastname}`
    }
    get age(){
        return this._age
    }
    set age(value:number | null | undefined){
        if(value === null || value === undefined)
           throw new Error("Please Enter a age value")
        else
        this._age = value;
    }
};
export class Teacher extends Person {
    
    constructor(name:string, lastname:string, age?:number | null, private title?:string, private jobcode?:number){
        super(name,lastname,age)
    }
    displayInfo () {
        console.log(super.fullName());
        console.log(`and title: ${this.title} and jobcode: ${this.jobcode}`)
        
    }
};

//let newPerson = new Person("Yuksel", "Ertem", 25)

//let newPerson2 = new Person("Görkem", "Aslan", 27)

//let newTeacher = new Teacher("Selim Can", "Bagdatlı", 30 , "chemist" , 1234)

//newTeacher.displayInfo()

//newPerson2.age = 27


//console.log(`${newPerson2.fullName()} + age : ${newPerson.age}`)
//console.log(`${newPerson.fullName()} + age : ${newPerson.age}`)

