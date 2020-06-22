/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

const amanda = { //object literal
    name: "Amanda",
    age: 28
}

function Person(name, age){//constructor function
    this.name = name;
    this.age = age
}

let Anna = new Person('Anna', 34)

class Human{ //class
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let Morgan = new Human("Morgan", 29)

console.log(`${amanda.name} is ${amanda.age} years old.`);
console.log(Anna);
console.log(Morgan);



