"use strict";
class User {
    constructor() {
    }
}
class UserBuilder {
    constructor() {
        this._user = new User;
    }
    userName(name) {
        this._user.name = name;
        return this;
    }
    address(addressName) {
        this._user.addressName = addressName;
        return this;
    }
    email(emailAddress) {
        this._user.emailAddress = emailAddress;
        return this;
    }
    age(age) {
        this._user.age = age;
        return this;
    }
    married(married) {
        this._user.married = married;
        return this;
    }
    education(education) {
        this._user.education = education;
        return this;
    }
    build() {
        return this._user;
    }
}
const newUser = new UserBuilder().userName('Yuksel').address('Eryaman').age(27).education('Bechelor').email('yk@gmail.com').build();
console.log(newUser);
const newUser2 = new UserBuilder().userName('Ahmet').address('Eryaman').age(50).build();
console.log(newUser2);
