let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
btn.addEventListener("click",async()=>{
    let country = document.querySelector("input").value;
    console.log(country);
   let collegesArr = await getColleges(country);
    console.log("button was clicked");
   // getColleges(country);  
   console.log(collegesArr) ;
  // show(collegesArr);
});
//function show(collegesArr){
 //   let--
 // list = document.querySelector("#list");
 //   list.innerText = "";
 //   for(col of collegesArr){
 //       console.log(col.name);
        //list items
  //      let li = document.createElement("li");
  //      li.innerText = col.name;
 //       list.appendChild(li);
 //   }
//}
let country = "nepal";
async function getColleges(country){
    try{
       let res =  await axios.get(url+country);
     //  console.log(res);
        console.log(res.data);
        return res.data;
    } catch(e){
        console.log("error-",e);
        return[];
    }
}
//getColleges();


