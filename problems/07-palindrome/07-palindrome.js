/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
  
    let split = someStr.split("");
    let reverse = split.reverse();
    let join = reverse.join("");
    let reverseStr = join;
    
    if(someStr == reverseStr){
        return true;
    }else{
        return false;
    }
}

console.log(isPalindrome("tacocat"));
console.log(isPalindrome("nyancat"));
console.log(isPalindrome("mom"));
console.log(isPalindrome("mother"));


