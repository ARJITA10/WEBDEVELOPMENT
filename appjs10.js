function hello(){
    console.log("hello");
}
hello();

function printName(){
    console.log("apna cpllege");
    console.log("arjita arora");
}
printName();

function print1TO5(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}
print1TO5();

function isAdult(){
   // let age = 18;
    let age = 13;
    if(age>=18){
       // console.log("adult");
       return "adult";
    }else{
       // console.log("not adult");
       return "not adult";
    }
    console.log("bye");
}
isAdult(13);
isAdult(23);

function printPoem(){
    console.log("twinkle twinkle little star how i wonder what you are");
    console.log("up above the world so high so high like a diamond in the sky")
}
printPoem();

function rollDice(){
    let rand = Math.floor(math.random() * 6)+ 1;
    console.log(rand);
}
rollDice();

function printInfo(name, age){
    console.log(`${name}'s age is ${age}.`);
}
printInfo("arjita",20);
printInfo("karan",);
printInfo(14,);

function sum(a,b){
    console.log("HELLO");
    console.log("HELLO");
    //console.log(a+b);
    return a+b;
    console.log("HELLO2");
    console.log("HELLO2");
}
//sum(1,2);
sum(sum(1,2),3);
console.log(sum(sum(1,2),3));
let s  = sum(1,2);
console.log(sum(3,4));

function calcAvg(a,b,c){
   let avg = (a+b+c)/3;
}
calcAvg(3,3,3);

Math.random;
[1,2,3].push;
[1,2,3].pop;
console.log;

function printTable(n){
    for(let i=n; i<=n*10; i+=n ){

    }
}
printTable(2);

let arr = [1,2,3,4];
arr.slice(2,4);
let part = arr.slice(2,4);

function getSum(n){
    let sum=0;
    for(let i=1; i<=n; i++){
        sum += i;//sum=sum+i
    }
    return sum;
}
getSum(10);

let str = ["hi","hello","bye","!"];
function concat(str){
    let result = "";

    for(let i=0; i<str.length;i++){
        result += str[i];
    }
    return result;
}

let sum = 54;//global scope
function calSum(a, b){
    let sum = a+b;//function scope
    console.log(sum);
}
console.log(sum);
calSum(1,2);

{
    const a1 = 25;
    let a2 = 25;
    var a3 = 25;
}
console.log(a);

for(let i=1; i<=5; i++){
console.log(i);//block scope
}
console.log(i);

let age = 25;
if(age >= 18){
    let str = "adult";
}
console.log(str);

function outerFunc(){
    let x = 5;
    let y = 6;
    function innerFunc(){
        console.log(x);
        console.log(y);
    }
    innerFunc();
}

function outerFunc(){
    function innerFunc(){
        console.log(x);
        console.log(y);
    }
    let x = 5;
    let y = 6;
   
    innerFunc();
}

function outerFunc(){
    let x1 = 5;
    let y1 = 6;
   
    function innerFunc(){
        let a = 10;

        console.log(x1);
        console.log(y1);
    }
    console.log(a);
    innerFunc();
}
innerFunc();

let greet = "hello";//global scope
function changeGreet(){
    let greet = "namaste";//function scope
    console.log(greet);
    function innerGreet(){
        console.log(greet);//lexical scope
    }
    innerGreet();
}
console.log(greet);
changeGreet();

let name = "shradha";
let x = 5;
let sum = function(a,b){
    return a+b;
}
sum(1,2);

let hello = function(){
    console.log("hello");
}
hello();
hello = function(){
    console.log("namaste");
}
hello();

function multipleGreet(func, count){//higher order function
    for(let i=1; i<=count; i++){
        func();
    }
}
let greet1 = function(){
    console.log("hello");
}
multipleGreet(greet1, 1000);
multipleGreet(function() {console.log("namaste")}, 1000);

// let odd = function(n){
//     console.log(!(n%2 == 0));
// }
// let even = function(n){
//     console.log(n%2==0);
// }
function oddOrEvenFactory(request){
    if(request == "odd"){
        return function(n){
           // let odd = function(n){

            console.log(!(n%2 == 0));
        }
        return odd;
    } else if(request == "even"){
        return function(n){
        // let odd = function(n){
            console.log(!(n%2 == 0));
        }
        return even;
    } else {
        console.log("wrong request");
    }
}
let request = "odd"; //even

let func = oddOrEvenFactory(request);
func;
func(3);//true
func(10);//false

let request1 = "even"; //odd

let func1 = oddOrEvenFactory(request1);
func1;
func1(3);//false
func1(10);//true

const calculator={
    num: 55,
    add: function (a,b){
        return a+b;
    },
    sub: function (a,b){
        return a-b;
    },
    mul: function (a, b){
        return a*b;
    }
};

//methods
calculator.num;
calculator.add;
calculator.add(1,2);//3
calculator.sub(5,6);//-1
calculator.mul(5,6);//30
Math.PI;
Math.random;
Math.random();
[1,2,3];
[1,2,3].push(4);
[1,2,3].pop();



