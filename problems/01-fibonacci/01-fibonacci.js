/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    let a = 0, b = 1, temp;

    for(n = n; n >= 0; n--){
        temp = a;
        a = a + b;
        b = temp;
    }
    
     return b;
}

console.log(fib(10));
console.log(fib(12));
console.log(fib(3));



