/*Example 1
const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, 
                        output: process.stdout});
rl.question('What do you think of Node.js? \n', (answer) => {
    console.log(`Thank you for your feedback: ${answer}`);
    rl.close();
    //stop app to run 
});*/


const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, 
                        output: process.stdout});
let num1 = Math.floor((Math.random() * 10) + 1); //Random number from 1 to 10
let num2 = Math.floor((Math.random() * 10) + 1); //Random number from 1 to 10
let answer = num1 + num2;

rl.question(`What is the sum of ${num1} + ${num2} = `, (input) => {
    if (input.trim() == answer) //check whether the input is the same with answer{
        rl.close();
    else{
        rl.setPrompt('Incorrect response, please try again\n');
        //setPrompt methode set the prompt that will be written to output whenever
        //rl.prompt() is called
        rl.prompt();
        //this method will resume the input if it has been paused 
        //(let the user input again)
        rl.on('line',(input)=>{
        //tell it what to do when get the input => event
            if(input.trim() == answer)
                rl.close();
            else{
                rl.setPrompt(`Your answer of ${input} is incorrect, try again \n`);
                //reset the prompt
                rl.prompt();
            }              
        })
    }
});
//event class
rl.on ('close', () => { //When event close happen, the console log will run
    console.log('The answer is correct');
})
