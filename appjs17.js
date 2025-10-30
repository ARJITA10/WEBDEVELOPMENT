let p1 = document.querySelector("p1");
p1.addEventListener("click",function(){
    console.log("para was clicked");
})

let box = document.querySelector(".box");

box.addEventListener("mouseenter",function(){
    console.log("mouse inside box");
})

let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

btn.addEventListener("click",function(){
   console.log(this.innerText) ;
   this.style.backgroundColor = "blue";
});

p.addEventListener("click",function(){
    console.log(this.innerText) ;
    this.style.backgroundColor = "blue";
 });

 h1.addEventListener("click",function(){
    console.log(this.innerText) ;
    this.style.backgroundColor = "blue";
 });

 h3.addEventListener("click",function(){
    console.log(this.innerText) ;
    this.style.backgroundColor = "blue";
 });

 btn.addEventListener("click",changeColor);
 p.addEventListener("clcik",changeColor);
 h1.addEventListener("click",changeColor);
 h3.addEventListener("click",changeColor);

 let btn2 = document.querySelector("button");
 btn2.addEventListener("click",function(event){
    console.log(event);
    console.log("button clicked") ;
 });
 btn2.addEventListener("dblclick",function(event){
    console.log(event);
    console.log("button clicked") ;
});
let inp = document.querySelector("input");
inp.addEventListener("keydown",function(){
    console.log("key was pressed")
});
inp.addEventListener("keyup",function(){
    console.log("key was released")
});
inp.addEventListener("keydown",function(event){
    console.log("key was released")
});
btn2.addEventListener("dblclick",function(event){
    console.log("key = ",event.key);
    console.log("code = ",event.code);//arrow up , arroow down, arrow left, arrow right
    if(event.code == "arrow up"){
        console.log("character moves forward");
    }else if(event.code == "arrow down"){
        console.log("character moves backward");
    }else if(event.code == "arrow left"){
        console.log("character moves left");
    }else if(event.code == "arrow right"){
        console.log("character moves right");
    }
    console.log("key was pressed") ;
});
btn2.addEventListener("dblclick",function(event){
    console.log("key = ",event.key);
    console.log("code = ",event.code);//arrow up (U), arrow down (D), arrow left (L), arrow right (R)
    if(event.code == "KeyU"){
        console.log("character moves forward");
    }else if(event.code == "KeyD"){
        console.log("character moves down");
    }else if(event.code == "KeyL"){
        console.log("character moves left");
    }else if(event.code == "KeyR"){
        console.log("character moves right");
    }
    console.log("key was pressed") ;
});
let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("form submitted");
    alert("form submitted")

    let inp = document.querySelector("input");
    console.dir(inp);
    console.log(inp.value);
});
let form1 = document.querySelector("form");
form1.addEventListener("submit",function(event){
    event.preventDefault();
    console.dir(form);

    let user1 = document.querySelector("#user");//form.element
    let pass1 = document.querySelector("#pass");
    let user = document.this.elements[0];
    let pass = document.this.elements[1];

    console.log(user.value);
    console.log(pass.value);

    alert(`hi ${user.value},your password is set to ${pass.value}`)
});

let user = document.querySelector("#user");
user.addEventListener("change",function(){
    console.log("changed event");
    console.log("final value = ",this.value);
});

user.addEventListener("change",function(){
    console.log("input event");
    console.log("final value = ",this.value);
});

let inp2 = document.querySelector("#text");
let p2 = document.querySelector("p");
inp.addEventListener("input",function(){
    console.log(inp.value);
    p2.innerText = inp.value;
});

// Qs1. Try out the following events in Event Listener on your own :
// - mouseout
// - keypress
// - Scroll
// - load
// [Use MDN for help]
// Qs2. Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.
// Qs3. Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]