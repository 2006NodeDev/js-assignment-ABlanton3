/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
  let length = numArray.length;
  let swapped;
  do{
      swapped = false;
      for (let i = 0; i < length; i++){
          if (numArray[i] > numArray[i + 1]){
              let temp = numArray[i];
              numArray[i] = numArray[i + 1];
              numArray[i + 1] = temp;
              swapped = true;
          }
      }
  }while (swapped);
  return numArray
}

numArray = [13, 3, 42, 9, 28];
console.log(bubbleSort(numArray));

numArray = [7, 1, 35, 144, 60, 5];
console.log(bubbleSort(numArray));
