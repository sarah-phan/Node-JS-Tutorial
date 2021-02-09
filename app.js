/* Example 1: Export 1 thing
const Tutorial = require('./Tutorial'); 
//call the file Tutorial
//Tutorial now is the object
//Tutorial and app have to be in the same path, which is the same folder
//don't need to put extension because it auto js
console.log(Tutorial);
//Output: [Function: sum]
console.log(Tutorial(1,1));
//Output and apply 1,1 to num1 and num2
*/

/*Example 2: Export more than 1 thing
const Tutorial = require('./Tutorial');
console.log(Tutorial.sum(1,1));
console.log(Tutorial.PI);
console.log(new Tutorial.SomeMathMethod());
*/