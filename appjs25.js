//axios
let btn = document.querySelector("button");
btn.addEventListener("click",async()=>{
    //console.log("button was clicked");
    let fact = await getFacts();
    //console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
}
    );
let url = "https://catfact.ninja/fact";

async function getFacts() {
    try{
    let res = await axios.get(url);
    return res.data.message;

    } catch(e){
        console.log("error-", e);
        return "NO FACT FOUND";
    }
}
getFacts();

let btn1 = document.querySelector("button");
let url1 = "https://dog.ceo/api/breeds/image/random ";
btn.addEventListener("click",async()=>{

let link = await getImage();
   // console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src",link);
    console.log(link);
}
    );

async function getImage() {
    try{
    let res = await axios.get(url1);
    return res.data;
    //console.log(res);
    //console.log(res.data.message );

    } catch(e){
        console.log("error-", e);
        return "NO image FOUND/";
    }
}
getImage();

const url3 = "https://icanhazdadjoke.com/";
async function getJokes (){
    try{
        const config = { headers: {Accept :"application/json"}};
        let res = await axios.get(url,config);
        console.log(res.data);
    } catch(err){
        console.log(err);
    }
}
getJokes();

let url4 = "http://universities.hipolabs.com/search?name=";
let btn5 = document.querySelector("button");
btn.addEventListener("click",async()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let collegesArr = await getColleges(country);
   // console.log("button was clicked");  
   console.log(collegesArr) ;
   show(collegesArr);
});
function show(collegesArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of collegesArr){
        console.log(col.name);
        //list items
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}
let country = "nepal";
async function getColleges(country){
    try{
       let res =  await axios.get(url+country);
        //console.log(res.data);
        return res.data;
    } catch(e){
        console.log("error-",e);
        return[];
    }
}
getColleges();


