//que-1) create a number variable num with some value.now,print "good" if the number is divisible by 10 and print "bad" if it is not.
let num = 20;
if (num % 10 == 0){
    console.log("good");
}else{
    console.log("bad");
}
//que-2) take the user's name and age as input using prompts.then return back the following statement to the user as an alert(by substituting their name and age): name is age years old. [use template literals to print sentence]
let name = prompt("please enter your name");
let age = prompt("please enter your age");

alert(` ${name} is ${age} years old.`);
//que-3) write a switch statement to print the months in a quarter. months in quarter 1: january,february,march. months in quarter 2:april,may,june. months in quarter 3: july,august,september. months in quarter 4: october,november,decemeber.[use the number as the case value in switch].
let quarter = 1 ;
switch(quarter){
    case 1: console.log("january,february,march");
    break;
    case 1: console.log("april,may,june");
    break;
    case 1: console.log("july,august,september");
    break;
    case 1: console.log("october,november,december");
    break;
    default: console.log("not a quarter!");
    break;
}
//que-4) a string is a golden string if it starts with the charater 'A' OR 'a' and has a total length greater than 5.for a given string print if it is golden or not.
let str = "apple";
if(str[0] === 'A' || str[0] === 'a' && (str.length > 5)){
    console.log("golden string");
} else{
    console.log("not a golden string");
}
//que-5) write a program to find the largest of 3 numbers.
let a = 5;
let b = 18;
let c = 13;
if(a>b) {
    if(a>c){
        console.log(a,"is largest");
    } else{
        console.log(c,"is largest");
    }
}else{
    if(b>c){
        console.log(b,"is largest");
    } else {
        console.log(c,"is largest");
     }
}
//que-6) write a program to check if 2 numbers have the same last digit. eg : 32 and 47852 have the same last digit that is 2.
let num1 = 32;
let num2 = 47852;
if((num1 % 10) == (num2 % 10)) {
    console.log("numbers have the same last digit which is", num1 % 10);
} else {
    console.log("numbers dont't have the same last digit which is", num1 % 10);
}

