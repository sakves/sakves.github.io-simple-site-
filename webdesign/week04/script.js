console.log("Hello from script file!");

const myVar = "Hello!";
console.log(typeof myVar);

let myLet = 'let';
myLet = 'hello';
console.log(myLet);

const myNiceVariable = 10;

const x = 10;
const y = 10.435;
console.log(typeof x, typeof y);

const a = true;

const firstname = "Clint";
const lastname = "Eastwood";
const Fullname = firstname+' '+lastname;
console.log(Fullname);

console.log(Fullname[4]);

//splice
//slice
//substr
//toLowerCase
//toUpperCase
//replace

console.log(Fullname.toUpperCase());
console.log(Fullname.replace("Clint", "John"));

const myname = "Peter";
const age = 24;
const message = `Hello $[myname], are you $[age]?`;
console.log(message);

let r = 10;
let s = 15
console.log(r+s);

console.log(r != s);

console.log(10 === '10');

console.log(null === undefined);

if (r > s) {
    console.log('Bigger');
} else {
    console.log('smaller');
}

let age2 = 18;
let message2 = age >= 16 ? 'You can drive!' : 'You cannot drive yet'
console.log(message2);

function sayHello(somename) {
    console.log("Hello" + " "+ somename);
}
sayHello(2345);
function square(x) {
    return x*x;
}

console.log(square(5));

const add = function(a,b) {
    return a+ b;
}

console.log(add(5,4));

function call (fn,a,b){
    return fn(a,b);
}
/*
function sum(a,b){
    return a+b;
}

*/

const sum = (a,b) => {
    return a+b;
}
console.log(sum(10, 6));















