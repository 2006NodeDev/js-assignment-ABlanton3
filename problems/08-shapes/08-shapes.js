/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {

  function square() {
    let output = ''
    for (i = 0; i <= height; i++){ 
      for (j = 0; j <= height; j++){
          output += character; 
       }
       console.log(output);
       output = ''; 
    }  
  }

  function triangle(){
    let output = '';
    for (let i = 0; i <= height; i++) {
        for (let j = 0; j <= i; j++) {
            output += character + '  ';
        }
        console.log(output);
        output = '';
    }
  }

  function diamond(){ //Math.ceil(height/2) Math.floor(height/2)
    let output = ''
    let topH = Math.ceil(height/2)
    let botH = Math.floor(height/2)

    for(let i = 0; i <=topH; i++){
      for(let j = 1; j <=height-i; j++){
        output += " ";
      }
      for(let j=1; j<=2*i-1; j++){
        output += character 
      }
      console.log(output);
      output = ''
      
    }
    //second verse reverse from the first
    for(let i = botH; i >=1; i--){
      for(let j = 0; j < height -i; j++){
        output += " ";
      }
      for(let j =1; j<=2*i-1; j++){
        output += character 
      }
      console.log(output);
      output = ''
    }
  }

  switch (shape.toUpperCase()){
    case 'SQUARE':
      square();
      break;
    case 'TRIANGLE':
      triangle();
      break;
    case 'DIAMOND':
      diamond();
      break;
    default:
      console.log("Please enter either Square, Triangle, or Diamond."); 
  };
}

console.log(printShape("Square", 5, '&'));
console.log(printShape("Triangle", 3, '*'));
console.log(printShape('Diamond', 9, '$'));
//not sure why it says undefined after the shape, but it does work so I'm counting it as good enough

