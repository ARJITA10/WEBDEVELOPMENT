const express = require('express');
const app = express();

console.log(app);
const port = 3000;//8080
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
  });

// app.use((req,res)=>{
//     //console.log(req);
//     console.log("request received");
//     //res.send("this is a basic response");
//     // res.send({
//     //     name:"apple",
//     //     color:"red",
//     // });
//     let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
//     res.send(code);
// });

app.get("/",(req,res)=>{
   // res.send("you contacted root path");
   res.send("hello, i am root");
});
// app.get("/apple",(req,res)=>{
//     res.send("you contacted apple path");
// });
// app.get("/orange",(req,res)=>{
//     res.send("you contacted orange path");
// });
// app.get("*",(req,res)=>{
//     res.send("this path doesnot exist");
// });
// app.post("/",(req,res)=>{
//     res.send("you sent a post request");
// });
app.get("/:username/:id",(req,res)=>{
    //console.log(req.params);
    let {username, id} = req.params;
    let htmlStr = `<h1>welcome to the page of @${username}!</h1>.`
    //res.send("hello, i am root");
   //console.log(`welcome to the page of @${username}.`)
    res.send(htmlStr);
 });

 app.get("/search",(req,res)=>{
    let { q } = req.query;
    if (!q) {
        res.send("<h1> nothing searched </h1>");
    }
   // console.log(res.query);
    res.send(`<h1>search results for query: ${q}</h1>`);
 });
