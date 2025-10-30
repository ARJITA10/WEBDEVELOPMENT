let btn = document.querySelector("button");
console.log(btn);

btn.onclick = function(){
    console.log("button was clicked");
    alert("button was clicked");
}

function sayHello(){
   alert("hello!") ;
}
btn.onclick = sayHello;

let btns = document.querySelector("button");

for(btn of btns){
    btn.onclick = sayHello;
    btn.onclick = sayName;

    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function(){
        console.log("you double clicked");
    });

    console.dir(btn);
    btn.onmouseenter=function(){
       console.log('you entered a button');

    }
}
function sayHello(){
    alert("hello!") ;
 }
function sayName(){
    alert("apna college!") ;
 }

//  activity
let btn = document.querySelector("button");
btn.addEventListener("click",function()
{
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
    //console.log("generate random color");

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("color updated");
});
function getRandomColor(){
    let red = math.floor(Math.random() * 255);
    let green = math.floor(Math.random() * 255);
    let blue = math.floor(Math.random() * 255);

    let color=`rgb(${red},${green},${blue})`;
    return color;

}


