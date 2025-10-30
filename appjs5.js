console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

for(let i=1;i<=5;i++){
    console.log(i);
}
for(let i=5;i>=1;i--){
    console.log(i);
}
for(let i=10;i>=1;i=i-3){
    console.log(i);
}
let i1 = 5;
console.log(i1);

for(let i=1;i<=15;i=i+2){
    console.log(i);
}
console.log("backwards");
for(let i=15;i>=1;i=i-2){
    console.log(i);
}

for(let i=2;i<=10;i=i+2){
    console.log(i);
}
console.log("backwards");
for(let i=10;i>=2;i=i-2){
    console.log(i);
}

// for(let i=1; ;i++){
//     console.log(i);
// }

for(let i=5;i<=50;i=i+5){
    console.log(i);
}

let n = prompt("write your number");
n = parseInt(n);
for(let i=n;i<=n*10;i=i+n){
    console.log(i);
}

for(let i=1;i<=3;i++){
    console.log(`outer loop ${i}`);
    for(let j=1;j<=3;j++){
        console.log(j);
    }
}
console.log("1to5");
let i=1;
while(i<=5){
    console.log(i);
    i++;
}
console.log("5to1");
let i2=5;
while(i2>=1){
    console.log(i2);
    i2--;
}
console.log("0to20");
let i3=0;
while(i3<=20){
    console.log(i3);
    i3++;
}
console.log("even nos.");
let i4=0;
while(i4<=20){
    console.log(i4);
    i4=i4+2;
}
console.log("odd nos.");
let i5=1;
while(i5<=20){
    console.log(i5);
    i5=i5+2;
}

// write "quit" to quit the game.
const favMovie = "Avatar";
let guess = prompt("guess my favourite movie");
while((guess!=favMovie) && (guess!="quit")){
      guess = prompt("wrong guess. please try again");
}
if(guess == favMovie){
    console.log("congrats!!");
}else{//guess=quit
    console.log("you quit");
}

let i6=1;
while(i6<=5){
    if(i6 == 3){
        break;
    }
    console.log(i6);
    i6++;
}
console.log("we used break at 3");


const favMovie1 = "Avatar";

let guess1 = prompt("guess my favourite movie");
while((guess1!=favMovie1)){
     if(guess1 = "quit"){
        console.log("you quit");
        break;
     }
     guess = prompt("wrong guess. please try again");
}
if(guess1 == favMovie1){
    console.log("congrats!!");
}

let fruits = ["mango","apple","banana","litchi","orange"];
for(let i = 0;i < fruits.length; i++){
    console.log(i,fruits[i]);
}
let fruits1 = ["mango","apple","banana","litchi","orange"];
for(let i = 1;i < fruits.length; i=i+2){
    console.log(i,fruits[i]);
}
let fruits2 = ["mango","apple","banana","litchi","orange"];
for(let i = 0;i < fruits.length; i=i+2){
    console.log(i,fruits[i]);
}
let fruits3 = ["mango","apple","banana","litchi","orange"];
for(let i = 0;i < fruits.length; i=i+2){
    console.log(i,fruits[i]);
}
let fruits4 = ["mango","apple","banana","litchi","orange"];
fruits4.push("pineapple");
for(let i = 0;i < fruits.length; i++){
    console.log(i,fruits[i]);
}
let fruits5 = ["mango","apple","banana","litchi","orange","pineapple"];
for(let i = fruits.length-1; i>=0; i--){
    console.log(i,fruits[i]);
}
let heroes =[["ironman","spiderman","thor"],["superman","wonder woman","flash"];
  ["superman","wonder woman","flash"]];
heroes[0];
heroes[1];
for(let i=0; i<heroes.length;i++){
    console.log(i, heroes[i]);
    for(let j=0; j<heroes[i].length; j++){
        console.log(heroes[i][j]);
    }
}
for(let i=0; i<heroes.length;i++){
    console.log(i, heroes[i], heroes[i].length);
    for(let j=0; j<heroes[i].length; j++){
        console.log(`j=${j},${heroes[i][j]}`);
    }
}

let student = [["aman",95],["arjita",83.4],["gungun",80],["karan",100]];
for(let i=0;i<student.length;i++){
   // console.log(`info of student #${i}`);
    console.log(`info of student #${i+1}`);
    //console.log(i, student[i], student[i].length);
    for(let j=0; j<student[i].length;j++) {
        console.log(student[i][j]);
    }
}

let fruits6 = ["mango","apple","banana","orange","litchi"];
for(fruits of fruits6){
    console.log(fruits);
}
for(char of "apnacollege"){
    console.log(char);
}

let heroes7 = [["superman","batman","wonder woman"],["spiderman","ironman","thor"]];
for(list of heroes){
    for(HERO of list) {
        console.log(HERO);
    }
    console.log(list);
}




