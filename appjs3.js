let msg = "     hello      ";
msg.trim();
//'hello'
msg = "    he   llo     ";
msg.trim();
//'he   llo'
let password = prompt("set your password");
let newPass = password.trim();
//console.log(password.trim());
console.log(newPass);

let str = "apna    ";
str.trim();
let a = str.trim();
a;
str;
a = "hello";
a;

name = 'Apna College';
name.toLowerCase();
name.toUpperCase();
let arj = "error";
console.log(arj.toUpperCase());

let name = "shradha";
let abc = "ILoveCoding";
abc.indexOf("Love");//1
abc.indexOf("love"); //-1
abc.indexOf("o");//2
abc.indexOf("z");//-1

let msg1 = "     hello     ";
let newMsg1 = msg1.trim();
console.log("after trim :", newMsg1);
newMsg2 = newMsg1.toUpperCase();
console.log("after uppercase :", newMsg2);
let newMsg2 = msg1.trim().toUpperCase();
console.log(newMsg2);

let name1 = "hello";
let name2 = "apnacollege";
console.log(name1.slice(0,4));
console.log(name1.slice(4,name1.length()));
console.log(msg.slice(-1)); //11-1 => 10
console.log(msg.slice(-2)); //11-2 => 9
console.log(msg.slice(-3)); //11-3 => 8

let name3 = "IloveCoding";
name3.replace("love","do");
name3.replace('o','x');

name4 = "apnaapnapna";
name3.replace("apna","college");

let str2 = 'Mango';
str2.repeat(3);    //"MangoMangoMango"

fruit = 'mango';
fruit.repeat(5);

// practice que part-3)
//que-1)
let msg2 = "hello!";
console.log(msg2.trim().toUpperCase());
//que-2)
let name5 = "ApnaCollege";
name5.slice(4,9);//'colle'
name5.indexOf("na");//2
name5.replace("Apna","Our");//OurCollege
//QUE-3)apnacollege
name5.slice(4);//college
name5.slice(4).replace('l','t');//cotlege
