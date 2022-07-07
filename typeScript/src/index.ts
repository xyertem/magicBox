class Person  {
    
    constructor(private name?:string, private lastname?:string, private age?:number){
    }
    fullName = ():void => {
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
}

let newPerson = new Person("Yuksel", "Ertem");
let newPerson2 = new Person("Görkem", "Aslan")

newPerson2.setage = 27;

newPerson.fullName();
newPerson2.fullName();