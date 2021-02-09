/* Example 1
const EventEmitter = require ('events');
const eventEmitter = new EventEmitter();
//From 1 and 2, before = is object, after is syntax
eventEmitter.on('Tutorial',()=>{ 
    //Tutorial is event. when event happen, listener will run
    //() is function will run when event of Tutorial occur 
    console.log('tutorial event has occured');
});
eventEmitter.emit('Tutorial');
//without this, event Tutorial hasn't run
*/

const EventEmitter = require ('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('Tutorial',(num1,num2)=>{
    console.log(num1 + num2);
});
eventEmitter.emit('Tutorial',1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this.Family = name;
        //this.name = name is wrong, cannot be the same
    }
    get name(){
        return this.Family;
    }
}
let ob = new Person('sarah');
let christina = new Person ('Christina');
//new Person mean object ob inherit EventEmitter class
ob.on('name',()=>{
    console.log('my name is ' + ob.name);
});
ob.on('name',()=>{
    console.log('my name is ' + christina.name);
});
//now name is the class???????
ob.emit('name');
christina.emit('name');