// const stu1 = {
//     name:"adam",
//     age:25,
//     marks:95,
// };
// const stu2 = {
//     name:"eve",
//     age:25,
//     marks:99,
// };
// const stu3 = {
//     name:"carles",
//     age:25,
//     marks:85,
// };
//--------------------------------------//
// let arr=[1,2,3];
// let arr2=[1,2,3];
// arr.sayHello=()=>{
//     console.log("hello!,i am arr");
// };
// arr2.sayHello=()=>{
//     console.log("hello!,i am arr2");
// };
//-------------------------------------------//
// function PersonMaker(name,age){
//     const person = {
//         name : name,
//         age: age,
//         talk(){
//             console.log(`hi, my name is ${this.name}`);
//         },
//     };
//     return person;
// }
// let p1 = PersonMaker("adam",25);
// let p2 = PersonMaker("eve",35);
//-----------------------------------------------------//
//Constructor-doesn't return anything and start with capital letter
// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     Console.log(this);
// }
// Person.prototype.talk = function(){
//     console.log(`Hi, my name is ${this.name}`);
// };
// let p1 = new Person("adam",25);
// let p2 = new Person("eve",35);
//-----------------------------------------------------------//                                   
// class Person{
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }
//   talk(){
//     console.log(`Hi, my name is ${this.name}`);
//   }
// }
// let p1 = new Person("adam",25);
// let p2 = new Person("eve",35);
//-----------------------------------------------------------------//
class Person {//ex-1
    constructor(name,age){
        this.name = name;
        this.age = age;
        console.log("person class constructor");
     }
    talk(){
        console.log(`Hi, I am ${this.name}!`)
    }
}
class Student extends Person{
    constructor(name,age,marks){
       // this.name = name;
        //this.age = age;
        console.log("student class constructor");
        super(name,age);//parent class constructor is being called
        this.marks = marks;
    }
    greet(){
        return "hello";
    }
    //talk() {
    //    console.log(`Hi! I am ${this.name}`);
    //}
}
//let stu1 = new Student("adam",25,95);
class Teacher extends Person {
    constructor(name,age,subjects){
        //this.name = name;
        //this.age = age;
        super(name,age);//parent class constructor is being called
        this.subject = subject;
    }
   // talk() {
   //     console.log(`Hi! I am ${this.name}`);
   // }
}
//let tea1 = new Teacher("palak",25,"english");
//ex-2
class Mammal {//base/parent class
    constructor(name){
        this.name = name;
        this.type = "warm-blooded";
    }
    eat(){
        console.log("I am eating");
    }
}
class Dog extends Mammals {//child class
    constructor(name) {
        super(name);
    }
    bark(){
        console.log("woof...");
    }
    eat(){//overites old eat
        console.log("dog is eating");
    }
}
class Cat extends Mammals {//child class
    constructor(name) {
        super(name);
    }
    meow(){
        console.log("meow...");
    }
}
//-----------------------------------------------------//