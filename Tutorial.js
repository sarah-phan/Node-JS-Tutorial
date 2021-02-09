/* Example 1: export 1 thing
const sum = (num1,num2) => num1 + num2; //defination
module.exports = sum; 
//already define but we have to export outside to use 
//in this situation is app.js
*/

//Example 2: export more than 1 thing
const sum = (num1,num2) => num1 + num2;
const PI = 3.14;
class SomeMathMethod{
    constructor(){
        console.log('object created');
    }
}
/* 3 of them are exported to the world
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeMathMethod = SomeMathMethod;*/

//group so that don't have to call individual
module.exports = {sum : sum, PI : PI, SomeMathMethod : SomeMathMethod};


