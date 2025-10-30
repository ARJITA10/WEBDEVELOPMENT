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


