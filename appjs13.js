let arr = [1,2,3,4,5];
let print = function(el){
    console.log(el);
};
arr.forEach(print);
//normal function
arr.forEach(function (el){
    console.log(el);
});
//simple function
arr.forEach((el) => {
    console.log(el);
});

let student = [{
    name : "gungun",
    marks:95,//9.5
},{
    name:"arjita",
    marks:85,//8.5
},{
    name:"arjita2",
    marks:83,//8.3
},];

let gpa = students.map((el)=>{
    return el.marks/10;
})

arr.foreach((student)=>{
    console.log(student);
});
//access marks of student
arr.foreach((student)=>{
    console.log(student.marks);
});

let num = [1,2,3,4];
let double = num.map((el)=>{
    return el*2;
});
let double1 = num.map((el)=>{
    return el*el;
});
let double2 = num.map((el)=>{});

let nums = [1,2,3,4,7,8,2,9,10,12,11];
let ans = nums.filter((el)=>{
    return el % 2 == 0;//even condition-> true return,odd condition-> false return.
})
ans;
let nums2 = [1,2,3,4,7,8,2,9,10,12,11];
let ans2 = nums.filter((el)=>{
    return el % 2 != 0;//even condition-> FALSE return,odd condition-> TRUE return.
});
let nums1 = [1,2,3,4,7,8,2,9,10,12,11];
let ans1 = nums.filter((el)=>{
    return el < 5;//even condition-> true return,odd condition-> false return.
});
[2,4,6].every((el)=>el%2==0);
true
[2,4,6,8].every((el)=>el%2==0);
true
[2,4,6,8,1].every((el)=>el%2==0);
false
[2,4,6,8,1].every((el)=>el%2!=0);
false

let nums3 = [1,2,3,4];
let finalVal = nums.reduce((rel,el)=> {
   // console.log(res);
    return res+el;
});
console.log(finalVal);

let arr1 = [1,4,2,5,6,7,2,9,2];
let max = -1;
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max = arr[i];
    }
}
console.log(max);

let arr3 = [1,2,3,1];

let max1 = arr3.reduce((max1,el)=>{
    if(max1<el){
        return el;
    }else{
        return max1;
    }
});
console.log(max1);

let nums4 = [10,20,30,40,5];
let ans3 = nums.every((el) => el%10==0);
console.log(ans3);
//false

let nums5 = [10,20,30,40,5];
let min = nums.min((min,el)=> {
    if(min<el){
        return min;
    }else{
        return el;
    }
});
console.log(min);

let nums6 = [10,20,30,40,5];
let min1 = nums.reduce((min1,el)=> {
    if(min1<el){
        return min1;
    }else{
        return el;
    }
});
console.log(min1);

function getMin(nums){
    let min1 = nums.reduce((min1,el)=> {
    if(min1<el){
        return min1;
    }else{
        return el;
    }
});
return min;
}

let nums7 = [10,20,30,40,5];
getMin(nums7);
getMin([1,2,3,4]);
getMin([1,2,3,4,-1]);
getMin([1,2,3,4,-1,45]);

function sum(a,b=2){
    return a+b;
}
sum(1,4);
sum(1);

function sum(a=2,b=2){
    return a+b;
}
sum(1,4);
sum(1);
function sum(a=2){
    return a+b;
}
sum(1,4);
sum(1);
function sum(a=2,b){
    return a+b;
}
sum(1,3);//4
sum(1);//a=1,b=undefined
function sum(b,a=2){
    return a+b;
}

Math;
Math.min;
Math.min(1,2,3,4);
let arr4 = [1,2,3,1,2,3,0,1,2,3,1,2,3,1,2,3,0];
Math.min(arr4[0],arr4[1],arr4[2],arr4[3],arr4[4],arr4[5]);
Math.min(...arr4);
arr.push(-1);
Math.min(...arr4);//-1
Math.max(...arr4);//3
console.log(arr4);
console.log(...arr4);
console.log(1,2,3,4);
console.log(1,2,3,4);
console.log("apna college");
console.log(..."apna college");

let arr5 = [1,2,3,4,5];
let newArr = [...arr];
console.log(newArr);
arr;
newArr;
newArr.push[6];
let chars = [..."hello"];
let odd = [1,3,5,7,9];
let even=[2,4,6,8,10];
let nums8 = [...odd,...even];
let nums9 = [...even,...odd];

const data = {
    email:"ironman@gmail.com",
    password:"abcd",
}
const dataCopy = {...data,id:123,country:"India",}
dataCopy;

let arr6 = [1,2,3,4,5];//value
let obj1 = {...arr6};
obj1;
let obj2 = {..."hello"};
obj2;

function sum (...args){
    //arguments
    for(let i=0; i<args.length;i++){
        console.log('you gave us:',args[i]);

    }
}
function min(a,b,c,d){
   console.log(arguments) ;
}
min(1,2,3,4);
function min(){
    console.log(arguments) ;
 }
 min(1,2,3,4);
 function min(){
    console.log(arguments);
    console.log(arguments.length) ;
    arguments.push(1);//error
}
function sum(){
    return arguments.reduce((sum,el)=>sum+el);
}
sum(1,2,3,4);//error
function sum(...args){
    return arguments.reduce((sum,el)=>sum+el);
}
sum(1,2,3,4);

function min(msg,...args){
    console.log(msg);
    return arguments.reduce((min,el)=>{
        if(min>el){
            return el;
        }else{
            return min;
        }
})
}
min("hello",1,2,3,4);
min(10,1,2,3,4);

let names = ["tony","bruce","peter","steve","arjita","gungun","jatin","vishvesh"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];
//or
let [winner,runnerup,secondRunnerup,...others] = names;

const student2 = {
    name : "karan",
    age:14,
    class:9,
    subjects:["hindi","english","math","science"];
    username:"karan@123",
    password:"abcd",
    city:"pune",
};
// let username = student.username;
// let password = student.password;
//or
//let {username,password}=student;
username;
password;
let {username : user, password:secret, city:place="mumbai"} = student;
username;//error
user;
password;//error
secret;
city;//mumbai
city;//pune
city;//error
place;//pune
place;//mumbai

// practice que-part-8)

// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.
// Qs2. Create a new array using the map function whose each element is equal to
// the original element plus 5.
// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array.
// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the
// original array values and all of the additional arguments doubled.
// Qs5. Write a function called mergeObjects that accepts two objects and returns a
// new object which contains all the keys and values of the first object and second
// object.
let nums10 = [1, 2, 3, 4, 5];
const square = nums10.map((num) => num * num);
console.log(square);
let sum = square.reduce((acc, cur) => acc + cur, 0);
let avg = sum / nums10.length;
console.log(avg);

let numbers = [2, 4, 6, 8, -2, -4];
console.log(numbers.map((number) => number + 5));

let strings = ["adam", "bob", "catlyn", "donald", "eve"];
console.log(strings.map((string) => string.toUpperCase()));

const doubleAndReturnArgs = (arr, ...args) => [
...arr,
...args.map((v) => v * 2),
];
doubleAndReturnArgs([1, 2, 3], 4, 4); // [1,2,3,8,8]
doubleAndReturnArgs([2], 10, 4); // [2, 20, 8]

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }); // {a:1, b:2,c:3, d:4}
 //obj-1 -key:value pairs ,//obj-2->key:value pairs



