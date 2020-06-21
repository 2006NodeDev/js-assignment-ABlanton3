/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {

    if (typeof someStr === 'string'){
        if (isNaN(startIndex)){
            console.log("Please input a number for the starting index.");
        }else if (isNaN(endIndex)){
            console.log("Please input a number for the ending index.");
        }else{
            var subString = someStr.substring(startIndex, endIndex);
        }
    }else{
        console.log("Please input a string value.");
        
    }

   return subString
}

console.log(substring("I think this might have worked!", 8, 31));
console.log(" ");//I know there's better ways to do this, but I just want space so I can look over my tests more easily
console.log(substring( 12, 0, 1));
console.log(" ");
console.log(substring( "test", "0", 2));
console.log(" ");
console.log(substring( "last test", 0, "cat"));