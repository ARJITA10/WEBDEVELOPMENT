const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

//app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/css")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
  // res.send("this is home");
   res.render("home.ejs");
});
app.get("/hello",(req,res)=>{
     res.send("hello");
 });

 app.get("/ig/:username",(req,res)=>{
    let {username} = req.params ;
   // const followers = ["adam","bob","steve","abc"]
   // let { username } = req.params;
   // res.render("instagram.ejs",{ username, followers });
   const instaData = require("./data.json");
   const data = instaData[username];   //console.log(instaData);
   //console.log(data);
   if(data){
res.render("instagram.ejs",{data});
   }else {
    res.render("error.ejs");
   }
    // :instaData[username]});
});


 
app.get("/rolldice",(req, res)=>{
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs",{ diceVal });
    //res.render("rolldice.ejs",{ num : diceVal}); //if num = diceVal
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});