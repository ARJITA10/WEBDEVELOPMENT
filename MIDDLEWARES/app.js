const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

//2 middlewares created -> response send
// app.use((req,res,next)=>{
//     // let {query} = req.query;
//     // console.log(query);
//     console.log("Hi, I am a 1st middleware");
//     // res.send("bye, middleware finished");
//     return next();
//     console.log("this is after next()");
// });

// app.use((req,res,next)=>{
//     console.log("Hi, I am 2nd middleware");
//     next();
// });

//1 utility middleware to log info-LOGGER-morgan
// app.use((req,res,next)=>{
//     //date.now returns exact time and date saved in new date object
//     req.responseTime = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.responseTime);
//     next();
// });

//for /random/something also
app.use("/random",(req,res,next)=>{
    console.log("I AM ONLY FOR RANDOM");
    next();
});

// app.use("/api",(req,res,next)=>{
    const checkToken = (req,res,next)=>{
    let{token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    // res.send("ACCESS DENIED");
    // throw new Error("ACCESS DENIED");
    throw new ExpressError(401,"ACCESS DENIED!");
// });
};

// app.get("/wrong",(req,res)=>{
//     abcd = abcd;
// });

// app.get("/api",(req,res)=>{
//     res.send("data");
// });


app.get("/api",checkToken, (req,res)=>{
    res.send("data");
});

//not for /abcd
app.get("/",(req,res)=>{
    res.send("Hi, I am a root");
});

app.get("/random",(req,res)=>{
    res.send("this is a random page");
});

app.get("/err",(req,res)=>{
        abcd = abcd;
});

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"access to admin is forbidden");
});

// app.use((err,req,res,next)=>{
//     //console.log(err);
//     console.log("------------ERROR------------");
// //    // next(err);
//     res.send(err);
//   });

// app.use((err,req,res,next)=>{
//    // console.log(err);
//     console.log("------------ERROR2 Middlewares------------");
//     next(err);
//   //  res.send(err);

// });

// app.use((err,req,res,next)=>{
//     let {status , message} = err;
//     res.status(status).send(message);
// });


app.use((err,req,res,next)=>{
    let {status = 500, message="some error occurred"} = err;
    res.status(status).send(message);
});


// for error 404
// app.use((req,res)=>{
//     res.status(404).send("Page not found");
// });

// //here it will not work
// app.use((req,res,next)=>{

//     //date.now returns exact time and date saved in new date object
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

app.listen(8080,()=>{
    console.log("server listening to port 8080");
});

