console.log("hello world");
console.log("apna college");
let a = 10;
let b = 5;
console.log("sum is:", + a+b);
//this is a comment

let pencilprice = 10;
let eraserPrice = 5;
// let output = "The total price is :" + (pencilPrice + eraserPrice) + " Rupees.";
let output = `The total price is : ${pencilprice} Ruppees .`;//back ticket
console.log(`The total price is : ${pencilprice} Ruppees .`);
//console.log(output);
// console.log("The total price is:",pencilPrice + eraserPrice," Rupees.");

//Arithmetic opeartors
let alpha = 10;
let beta = 5;
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(a**b);
console.log(a%b);
console.log(a++);//10-11
console.log(++a);//12
b=a;
console.log(b)//10

//operators
//let age = 16;//18
//console.log(age>=18); //false
//console.log(age<=18); //true
3>5;
5<6;
5>=5;
0<5;
0<-2;
0>-99;
5 == 5;
5 == 4;
5 != 5;
5 != 4;
5 == '5';
let n = 5;
//let str='5';
typeof n;
typeof str;
n == str;
4 != str;

//CONDITIONAL STATEMENT
console.log("before my if statement");
//let age = 23;//14
if(age>=18){
    console.log("you can vote");
    console.log("you can drive");
    let a = 5;
    console.log(5*a);
}
if(age<18){
    console.log("you cannot vote");
}
console.log("after my if statemnet");

if(age>=20){
    console.log("you are in your 20's");
}
//console.log("after my if statemnet");

//let firstName = "aman";//arjita
if (firstName == "arjita"){
    console.log(`welcome ${firstName}`);
}

//let color="red"; //yellow , green
//traffic light system
if(color === "red"){
    console.log("stop! light color is red");
}
if(color === "yellow"){
    console.log("slow down, light color is yellow");
}
if(color === "green"){
    console.log("go, light color is green");
}
//more efficient code- bar bar chize check nhi hogi
//let color="red"; //yellow , green
//traffic light system
if(color === "red"){
    console.log("stop! light color is red");
}
else if(color === "yellow"){
    console.log("slow down, light color is yellow");
}
else if(color === "green"){
    console.log("go, light color is green");
}

if(color === "red"){
    console.log("stop! light color is red");
}
else if(color === "yellow"){
    console.log("slow down, light color is yellow");
}
else if(color === "green"){
    console.log("go, light color is green");
}
else{
    console.log("traffic light is broken");
}

//let age = 14;
if (age >= 18){
    console.log("you can vote");//false
}
else if(age >= 18){
    console.log("you cannot vote");//false
}
else if(age < 18){
    console.log("you cannot vote2");//true
}

///let marks=75;//89,25,45
if(marks >= 80){
    console.log("A+");//true
}
else if(marks >= 60){
    console.log("A");//true
}
else if(marks >= 33){
    console.log("B");//true
}
else if(marks < 33){
    console.log("F");//true
}

let month = "january";
if(month === "january"){
    console.log("winter is here");
}
else if(month === "april"){
    console.log("summer is here");
}

let age = 18;//17
if(age >= 18){
    console.log("you can vote");
}
else{
    console.log("you cannot vote");
}

let size = "XL";
if(size === "XL"){
    console.log("price is Rs. 250");
}
else if(size === "L"){
    console.log("price is Rs. 200");
}
else if(size === "M"){
    console.log("price is Rs. 100");
}
else{
    console.log("price is Rs. 50");
}

//let marks = 45;//99 //32
if(marks >= 33){
    console.log("pass");
   if(marks>=80){
    console.log("Grade :0");
   }else{
    console.log("Grade :A");
   }
}
else{
    console.log("Better luck next time");
}

//LOGICAL OPERATORS
(5>3) && (3>1);
(5>3) && (3<1);
(5<3) && (3>1);
(5<3) && (3<1);

//let marks = 90;//32
if(marks >= 33 && marks >= 80){
    console.log("pass");
    console.log("A+");
}
//let marks = 90;//32
if(marks >= 33 || marks >= 80){
    console.log("pass");
    console.log("A+");
}

!(5<3);
//let marks = 90;//32
if(!(marks < 33 )){ //LESS THAN 33 NHI H
    console.log("pass");
    console.log("A+");
}

let marks = 75;//23
if((marks > 33 && marks <= 80) || !(false)){ //true || true
    console.log("pass");//true
    console.log("A+");
}

let str = "apple";//app, snake,ample
if ((str[0]==='a') && s(tr.length>3)){
    console.log("a good string");
}
else{
    console.log("not a good string");
}

//let num = 12;
if((num%3===0)&&((num+1===15)||(num-1===11))){
    console.log("safe");
}else{
    console.log("unsafe");
}

if(true){
    console.log("it has true value");
}
else{
    console.log("it has false value");
}
if(""){
    console.log("it has true value");
}
else{//this will run
    console.log("it has false value");
}
if(" "){//this will run
    console.log("it has true value");
}
else{
    console.log("it has false value");
}
let string="";//a," "
if(string){
    console.log("string is not empty");
}
else{//this will run
    console.log("string is empty");
}
//let num = 0;
if(num){
    console.log("num is not equal to 0");
}else{//this will run
    console.log("num is equal to 0");
}
let num = -10;
if(num){//this wil run
    console.log("num is not equal to 0");
}else{
    console.log("num is equal to 0");
}

let color = "red";
switch(color){
    case "red":
    console.log("stop");
    break;
    case "yellow":
    console.log("slow down");
    break;
    case "green":
    console.log("go");
    break;
    default:
    console.log("light is broken");
    break;
}
console.log("after switch stt");

let day = 1;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday,funday");
        break;
    default:
        console.log("wrong day!");
}  

alert("something is wrong!");
console.log("this is a simple log");
console.error("THIS IS A ERROR MSG");
console.warn("THIS IS A warning MSG");

prompt("enter your name:");
//let firstName = prompt("enter your name:");
console.log(firstName);
let firstName = prompt("enter your first name");
let lastName = prompt("enter your last name");
console.log("Welcome",firstName,lastName,"!");
let msg="Welcome "+firstName+" "+lastName+"!";
alert(msg);







