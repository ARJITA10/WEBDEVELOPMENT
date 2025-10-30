let arr = [];
typeof arr;

let student = {
    name : "arjita",
    age:23,
    marks:83.4%
};

let student2 = ["arjita",23,94.4];

const items={
    price:100.99,
    discount:50,
    colors:["red","pink"]
};

const post = {
    username : "@arjitaarora",
    content:"this is my #firstpost",
    likes:150,
    reposts:5,
    tags:["@coding","@delta","@to be sde soon"]
}
post["content"];
post["likes"];
post.content;
post.likes;
post.reposts;
post.username;
post.tags;
post.tags[0]
let prop = "reposts";
post[prop];
post.prop;

const obj = {
    1: "a",
    2: "b",
    true : "c",
    null: "d",
    undefined : "e"
};
obj[1];
obj[2];
obj[null];
obj[true];
obj[undefined];
obj.true;
obj.null;
obj.undefined;

const student1 = {
    name: "shradha",
    age: 23,
    marks : 94.4,
    city :"delhi"
};
student.city;
student.city = "mumbai";
student.gender = "female";
student;
student.marks = "A";
student.marks=[99,89,74];
delete student.city;//->true
student;

const classInfo = {
    aman:{
        grade:"A+",
        city:"delhi",
    },
    shradha:{
        grade:"A",
        city:"Pune",
    },
    karan:{
        grade:"O",
        city:"Mumbai",
    }
};
classInfo.aman;
classInfo.shradha;
classInfo.shradha.city;
classInfo.shradha.city = "Gurgaon";

const classInfo = [
    {
        name:"aman",
        grade:"A+",
        city:"Delhi"
    },
    {
        name:"shradha",
        grade:"A",
        city:"Pune",
    },
    {
        name:"arjita",
        grade:"O",
        city:"Mumbai",
    },
]
classInfo[0];
classInfo[1];
classInfo[2];
classInfo[1].name;
classInfo[1].grade;
classInfo[1].city;
classInfo[1].city="gurgaon";
classInfo[1];
classInfo[1].gender="female";

Math;
Math.PI;
Math.E;
Math.abs(12);
Math.abs(-12);
Math.pow(2,4);
Math.pow(2,5);
Math.floor(5);
Math.floor(5.5);
Math.floor(5.99999999);
Math.floor(-5);
Math.floor(-5.5);//>-6
Math.ceil(5);
Math.ceil(5.5);
Math.ceil(5.000000000001);
Math.ceil(-5);
Math.ceil(-5.5);//-5
Math.random();

let step1 = Math.random();
step1;
let step2 = step1 * 10;
step2;
let step3 = Math.floor(step2);
step3;
Math.random();
Math.random() * 10;
step4 = Math.floor(Math.random() * 10) + 1;
step4;
let random = Math.floor(Math.random() * 100) + 1;
let random1 = Math.floor(Math.random() * 5) + 1;
let random2 = Math.floor(Math.random() * 5) + 21;

// practice solutions (part-5)
let dice = Math.floor(Math.random( ) * 6) + 1;
console.log(dice) ;

const car = {
    name: " Ma r ut i Suz uk i " ,
    model : " Ma r ut i Suz uk i Dz i r e" ,
    color : " whi t e" ,
    } ;
    console.log( car . name) ;

    const Person = {
        name: " J ane Doe" ,
        age: 21,
        city : " New J er s ey " ,
        } ;
        Person. city = " New Yor k " ;
        Person. country = " Uni t ed St a t es " ;
        console. log( Person) ;




