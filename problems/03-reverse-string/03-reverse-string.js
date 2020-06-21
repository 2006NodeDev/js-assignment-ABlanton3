/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {

    let split = someStr.split("")
    let reverse = split.reverse();
    let join = reverse.join("")


    return join;
}

console.log(reverseStr("hello world"));
console.log(reverseStr("I am your father."));
console.log(reverseStr("tacocat"));