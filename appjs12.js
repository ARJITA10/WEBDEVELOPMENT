const student = {
    name:"student",
    age:23,
    eng:95,
    math:93,
    phy:97,
    getAvg(){
        console.log(this);
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}
student.getavg();

function getAvg(){
    console.log(this);
    let avg = (this.eng + this.math + this.phy)/3;
    console.log(`${this.name} got avg marks = ${avg}`);
}

getAvg();
window;
alert("hello");
window.alert("hello");
window.getAvg();

console.log("hello");
console.log("hello");
//let a = 5;
try {
    console.log(a);
} catch(err){    
    console.log("caught an error...  a is not defined");
    console.log(err);
}
console.log(a);
console.log("hello2");
console.log("hello2");

const sum = (a,b) => {
    console.log(a+b);};
    sum(2,35);

const cube = (n) => {
    return n*n*n;
}
cube(2);
let c = cube(2);

const pow = (a,b) => {
    return a ** b;
}
pow(2,4);

const hello = () => {
    console.log("hello world");
}

const mul = (a,b) => a * b;
mul(2,3);
mul(2,19);
const sum1 = (a,b) => a + b;
const cube1 = n => n*n*n;
cube1(2);

setTimeout( () => {
    console.log("apna college");
},4000);

console.log("welcome to");
console.log("welcome to");
console.log("welcome to");
console.log("welcome to");
console.log("welcome to");
console.log("welcome to");

let id1 = setInterval( () => {
    console.log("apna college");
},2000);

console.log(id1);

let id2 = setInterval( () => {
    console.log("hello world");
}, 3000);

console.log(id2);
clearInterval(id1);
clearInterval(id2);

const student1 = {
    name :"aman",
    marks:95,
    prop:this, //global scope
    getName: function() {
        console.log(this);
        return this.name;
    },
    getMarks:() => {
        console.log(this);//parent scope-> WINDOW
        return this.marks;
    },
    //two functions
    getInfo1:function() {
       setTimeout( () => {
            console.log(this);//student object
       }, 2000);//in every 2sec.
    },
    getInfo2:function() {
        setTimeout( () => {
             console.log(this);//window object
        }, 2000);//in every 2sec.
     },
};
student;
student.getName();//name
student.getMarks();//window object
//undefined is printed.
const a = 5; //global scope
student.getInfo1();
student.getInfo2();
window.setTimeout;

const square = (n) => (n*n) ;
console.log(square(3));

let id = setInterval( ()=>{
    console.log("hello world");
}, 2000);
setTimeout(()=> {
    clearInterval(id);
    console.log("clear interval run");

},);

// Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
const arrayAverage = (arr) => {
    let total = 0;
    for(let number of arr){
        total+=number;
    }
    return total/arr.length;
}
let arr = [1,2,3,4,5,6];
console.log(arrayAverage(arr));

// Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.
let num = 4;
const isEven = (num) => num % 2 == 0;
















