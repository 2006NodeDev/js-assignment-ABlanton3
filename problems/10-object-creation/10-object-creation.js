/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

const Amanda = { //object literal
    name: "Amanda",
    age: 28
}

function person(name, age){//construction function
    this.name = name;
    this.age = age
}

let Anna = new person('Anna', 34)

class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const Morgan = new Human("Morgan", 29)

console.log(Amanda);
console.log(Anna);
console.log(Morgan);



