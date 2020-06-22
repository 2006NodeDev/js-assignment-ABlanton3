/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) { //I'm just doing the deleting part of the splice function
   let counter = 0
   let tempArray = new Array()
   for (i = 0; i < someArr.length; i++){
    if(i != index){
        tempArray[counter] = someArr[i];
        counter ++
    }
   }
   return tempArray //the array minus element at index
}

console.log(spliceElement([1, 2, 3, 4], 1));
console.log(spliceElement([1, 2, 3, 4], 2));
console.log(spliceElement([1, 2, 3, 4], 3));


