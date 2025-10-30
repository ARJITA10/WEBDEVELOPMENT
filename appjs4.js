//part-4)
let name5 = "ApnaCollege";
let name6 = name5.slice(4).replace('l','t');//cotlege
name6.replace('l','t');//cottege

let student1 = "aman";
let student2 = "shradha";
let student3 = "rajat";
let students = ["aman","shradha","rajat"];

let name7 = "arjita";
name7[0] = 'a';
let nums = [2,4,6,8];
nums[0];//2
nums[1];//4
nums[2];//6
nums[3];//8
nums[4];//undefined
nums.length;//4
typeof nums;//OBJECTS NOT IN TERMS OF ARRAYS.
let marks4 = [99,89,67,42,100];
let names = ["adam", "bob", "catyln"];
let info = ["aman",25, 6.1];
students[0];//aman
students[1];//shradha
let empArr = [];
empArr[0];
info.length;
empArr.length
let emparr = [].length;
[1,2,3,4].length;//this is not stored in a variable.
info[0];//string will be printed.
info[0][0];//'a'
info[0][1]; //'m'
info[0].length;//aman

let name8 = "rohit";
name8[0] = 'm';
name8[0];
let fruits = ['mango','apple','litchi'];
fruits[0] = 'banana';
fruits;
fruits[1] = 'pineapple';
fruits;
fruits[10] = 'papaya';
fruits;
fruits[5];

let cars = ["bmw","audi","xuv","maruti"];
cars.push("tyota");
cars.push("ferrari");
cars.pop();
cars.unshift("toyota");
cars.unshift("ferrari");
cars.shift("ferrari");
let followers = ["a","b","c","d"];
let blocked = followers.shift();
followers;//b,c,d
blocked;//a

let months = ["january","july","march","august"];
months.shift();//july,march,august
months.shift();//march,august
months.unshift("june");//june,march,august
months.unshift("july");//july,june,march,august

let cars1 = ["audi","bmw","xuv","maruti"];
cars1.indexOf("bmw");
cars1.indexOf("xuv");
cars1.indexOf("XUV");
let marks6 = [99,89,67,42,100];
marks6.indexOf(100);
marks6.indexOf(97);
cars1.includes("bmw");
cars1.includes("toyota");

let primary = ["red","yellow","blue"];
let secondary = ["orange","green","violet"];
primary;
secondary;
primary.concat(secondary);
let allColors = primary.concat(secondary);
allColors;
secondary.concat(primary);
cars1.reverse();//brands comes in reverse fashion.
cars.slice();
cars.slice(1);
cars.slice(1,3);
cars.slice(3);
cars.slice(cars.length-1);
cars.slice(5);//empty array
cars.slice(cars.length);
cars.slice(-1);
cars.slice(-2);
cars.slice(-3);
cars.slice(-4);
cars.slice(-5);

cars = ["audi","bmw","xuv","maruti"];
cars.splice(3);
cars.splice(0,1);
cars.push("maruti");
cars.push("farari");
cars.splice(1,2);
cars.splice(0,0,"toyota","xuv","maruti")
cars.splice(1, 0, "mercedes");
cars.splice(1,1,"gwagon");

cars1 = ['toyota','gwagon','xuv','maruti','bmw','ferrari'];
cars1.sort();
let chars=['b','d','e','a'];
chars.sort();
let marks = [99,89,67,42,100];
marks.sort();

let months1 = ["january","july","march","august"];
months1.splice(0,2,"july","june");
months1;

let lang = ["c","c++","html","javascript","python","java","c#","sql"];
lang.reverse().indexOf("javascript");

// strname6 == name6;//true
// strname6 === name6;//true

const g = 10;
//g = 9.8;//wrong
const arr = [1,2,3] ;
arr.push(4);
arr.pop();
//arr = [1,2,3];//wrong
cars = ['audi','bmw','xuv','maruti'];

let nums3 = [[2,4],[3,6],[4,8]];
nums3[0];
nums3[0].length;
nums3[0][0];
nums3[1][1];
nums3[1][2];
nums3[2][0];
let game = [['X',null,'O'],[null,'X',null],['O',null,'X']];
game[0][1]='O';

// PRACTICE QUESTION PART-3
//Qs1. Write a JavaScript program to get the first n elements of an array. [n can be
    //any positive number].
    //For example: for array [7, 9, 0, -2] and n=3 Print, [7, 9, 0]
//Qs2. Write a JavaScript program to get the last n elements of an array. [n can be
   // any positive number].
   // For example: for array [7, 9, 0, -2] and n=3 Print, [9, 0, -2]
//Qs3. Write a JavaScript program to check whether a string is blank or not.
//Qs4. Write a JavaScript program to test whether the character at the given
    //(character) index is lower case.
//Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.
//Qs6. Write a JavaScript program to check if an element exists in an array or not.

let arr4 = [7, 9, 0, -2];
let n = 3;
let ans = arr4.slice(0, n);
console.log(ans);

let arr5 = [7, 9, 0, -2];
let n1 = 3;
let ans1 = arr5.slice(arr.length-n1);
console.log(ans);

let str = prompt("please enter a string");
if(str.length == 0) {
console.log("string is empty");
} else {
console.log("string is not empty");
}

let str1 = "ApNaCoLlEgE";
let idx = 3;
if(str1[idx] == str1[idx].toLowerCase()) {
console.log("character is lowercase");
} else {
console.log("character is not lowercase");
}

let str2 = prompt("please enter a string");
console.log(`original string = ${str2}`);
console.log(`string without spaces = ${str2.trim()}`);

let arr3 = ["hello", 'a', 23, 64, 99, -6];
let item = 64;
if(arr.indexOf(item) != -1) {
console.log("element exists in array");
} else {
console.log("element doesn't exist in array");
}