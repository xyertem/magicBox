class Person  {
    
    private name:string;
    private lastname:string;
    
    constructor(name:string, lastname:string){
        this.name       = name;
        this.lastname   = lastname;
    }

     fullName = ():void => {
        console.log(`Person name is ${this.name} ${this.lastname}`)
    }
}

let newPerson = new Person("Yuksel", "Ertem");
let newPerson2 = new Person("Görkem", "Aslan")

newPerson.fullName();
newPerson2.fullName();