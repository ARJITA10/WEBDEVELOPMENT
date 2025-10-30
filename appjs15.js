let smallImages = document.getElementsByClassName("oldImg");
for(let i=0; i<smallImages.length; i++){
    smallImages[i]= "/Assets/Spider-Man.png";
 //   console.dir(smallImages[i]);
    console.log(`value of image no. ${i} is changed.`)
}

console.dir(document.querySelector("hi"));//h1
console.dir(document.querySelector("description"));//p#description
console.dir(document.querySelector("oldImg"));//img.oldImg
console.dir(document.querySelector("div a"));//a.boxLink
console.dir(document.querySelectorAll("div a"));//a.boxLink
console.dir(document.querySelectorAll("hi"));//h1

let links = document.querySelectorAll(".box a");
for(let i=0; i<links.length; i++){
    links[i].style.color = "yellow";
    links[i].style.color = "purple";
    links[i].style.color = "green";
}

for(link of links){
    link.style.color = "purple";//inline style
}

let box = document.querySelectorAll(".box") ;
box.style;

let para1 = document.createElement("p");
para1.innerText = "hey I'm red";
document.querySelector("body").append(para1);
para1.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3";
document.querySelector("body").append(h3);
para1.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("para2");
h1.innerText="I'm in a div";
para2.innerText="ME TOO";
div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector("body").append(div);


// JS (Part 9)
// Practice Questions
// Qsl. Create a new input and button element on the page using JavaScript only. Set the
// text of button to "Click me'
// Qs2. Add following attributes to the element :
// Change placeholder value of input to "username"
// Change the id of button to "btn'
// Qs3. Access the btn using the querySelector and button id. Change the button background
// color to blue and text color to white.
// Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined.
// Change its color to purple.
// Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",
// where Delta is bold.
//ans-1
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "click me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);
//ans-2
button.setAttribute("id","btn");
button.setAttribute("placeholder","username");
//ans-3
let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");
//ans-4)
let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Manipulation</u>";
document.querySelector("body").append(h1);
h1.classList.add("h1Style");
//ans-5)
let h1 = document.createElement("p");
h1.innerHTML = "apna college <b>delta</b> practice";
document.querySelector("body").append(p);
