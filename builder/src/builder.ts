class User{
    name!: string
    addressName!: string
    emailAddress: any
    age: any
    married!: boolean
    education!: string
    constructor(){
    }
}
interface Builder{
    userName(name:string)         :this 
    address(addressName:string)   :this
    email(emailAddress:string)    :this
    age(age:number)               :this
    married(married:boolean)      :this
    education(education:string)   :this
}
class UserBuilder implements Builder{
    private _user: User = new User 

    constructor(){
    }
    userName(name:string): this {
        this._user.name = name
        return this
    }
    address(addressName:string): this {
        this._user.addressName = addressName
        return this
    }
    email(emailAddress:string):this{
        this._user.emailAddress = emailAddress
        return this
    }
    age(age:number): this {
        this._user.age = age
        return this
    }
    married(married:boolean): this {
        this._user.married = married
        return this
    }
    education(education:string): this {
        this._user.education = education
        return this
    }
    build(){
        return this._user
    }
    
}

const newUser = new UserBuilder().userName('Yuksel').address('Eryaman').age(27).education('Bechelor').email('yk@gmail.com').build()
console.log(newUser)
const newUser2 = new UserBuilder().userName('Ahmet').address('Eryaman').age(50).build()
console.log(newUser2)

