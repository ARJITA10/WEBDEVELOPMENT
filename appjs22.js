async function greet(){
   // throw "some random error";
   throw "weak connection";
   //throw "404 page not found";//page doesnot exist in the websites
    return "hello world!";
}
greet()

.then(()=>{
    console.log("promise was resolved");
    console.log("result was:",result);
})
//error in callback
.catch((error)=>{
    console.log("promise was rejected with err:",error);
})

let demo = async() => {
    //value
    return 5;
};
demo();

h1 = document.querySelector("h1");
function changeColor(color,delay){
    //return promise
    return new Promise((resolve, reject) => {
        //call
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5) +1; 
            if (num > 3){
                //promise is rejected
                reject("promise rejected");
            }
            h1.style.color = color;
            resolve("color changed");
            //promise resolved
    },delay);
    });
}
async function show(){
    try{
    await colorChange("violet",1000);
    await colorChange("indigo",1000);
    await colorChange("green",1000);
    await colorChange("yellow",1000);
    await colorChange("orange",1000);
    //return "done";
    }catch (err){
        console.log("error caught");
        console.log(err);
    }
    let a = 5;
    console.log(a);
    console.log("new number=", a+3);
}
show();

function getNum(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
        let num = Math.floor(Math.random() * 10) + 1;
        console.log (num);
        resolve();
        },1000);
    });
}
async function demo(){
    //after 1 sec
    await getNum();
    //after 1 sec
    await getNum();
    //after 1 sec
    getNum();
}

