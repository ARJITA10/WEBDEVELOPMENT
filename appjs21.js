function hello(){
    console.log("inside hello function");

    console.log("hello");
}
hello();

function demo(){
    console.log("calling hello function");

    hello();
}
console.log("calling demo function");//this will print first
demo();
console.log("DONE,BYE!");

function one (){//(3)
    return 1;
}
function two(){
    return one () + one ();//(4)
}          //(3)    //4
function three(){//(2)
    let ans =  two() + one ();//5
    console.log(ans);
}
three();//(1)

let a = 25;
console.log(a); 
let b = 10;
console.log(b);
console.log(a+b);

setTimeout(()=>{
    console.log("apna college");
},2000);
setTimeout(()=>{
    console.log("ARJITA ARORA");
},2000);
console.log("hello...");

h1 = document.querySelector("h1");

function changeColor(color){
    h1.style.color = color;

}

setTimeout(changeColor("red")//=>{
   // h1.style.color = "red";}
   ,1000);
setTimeout(changeColor("orange")//=>{
   // h1.style.color = "orange";}
   ,2000);
setTimeout(changeColor("green")//=>{
  //  h1.style.color = "green";}
,3000);

function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color = color;
        nextColorChange();
},delay);
}

changeColor("red",1000);
changeColor("orange",2000);
changeColor("green",3000);

changeColor("red",1000,()=>{
    changeColor("orange",1000);
});

function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color = color;
        if(nextColorChange)nextColorChange();

},delay);
}
changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("yellow",1000,()=>{
                changeColor("pink",1000);
            });
        });
    });
});

function savetoDB(data,success,failure){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed > 4){
        success();
      // console.log("your data was saved:",data) ;
    }else{//IN OTHER CASES
        failure();
       //console.log("weak connection. data not saved");
    }
}
savetoDB("Apna college",()=>{
    console.log("success:your data was saved:") ;
    savetoDB("hello world",()=>{
        console.log("success2:data 2 saved");
        savetoDB("arjita",()=>{
            console.log("success3 :data was saved");
},()=>{
    console.log("failure3:WEAK CONNECTION")
});
    },()=>{
        console.log("failure2:weak connection");

    });
},()=>{
    console.log("failure:weak connection. data not saved");

});

function savetoDB(data,success,failure){
    return new promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            resolve("success :data was saved");//will be executed
    }else {
        reject("failure:weak connection");// will be executed

    }
});
}

savetoDB("apna college")

//compact version of calling same function
//let request = savetoDB("apna college");//req = promise object
//console.log(request);
//request
.then(()=>{
    console.log("data1 saved,promise was resolved");
    return savetoDB("helloworld");
})
.then(()=>{
        console.log("data2 saved");
        return savetoDB("arjita");
})
    //console.log(promise);
   // console.log(request);
.then(()=>{
    console.log("data3 saved");
})
.catch(()=>{
    console.log("promise was rejected");
   // console.log(request);
});

saveToDPPromise("apna college")
.then((result)=>{
    console.log("result:",result);
    console.log("promise1 resolved");
    return savetoDB("helloworld");
})
.then((result)=>{
    console.log("result:",result);
    console.log("promise2 resolved");
})
.catch((error)=>{
    console.log("error:",error);
    console.log(" some promise rejected");
});

savetoDB("apna college")
.then((result)=>{
    console.log("data1 saved");
    console.log("result of promise:",result);
    return savetoDB("helloworld");
})
.then((result)=>{
        console.log("data2 saved");
        console.log("result of promise:",result);
        return savetoDB("arjita");
})
.then((result)=>{
    console.log("data3 saved");
    console.log("result of promise:",result);
})
.catch((error)=>{
    console.log("promise was rejected");
    console.log("result of promise:",error);
});

h1 = document.querySelector("h1");
function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color = color;
        if(nextColorChange)nextColorChange();

},delay);
}
changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("yellow",1000,()=>{
                changeColor("pink",1000);
            });
        });
    });
});
//call back hell code convert to promises code 
h1 = document.querySelector("h1");
function changeColor(color,delay){
    //return promise
    return new Promise((resolve, reject) => {
        //call
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed");
            //promise resolved
    },delay);
    });
}
changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("yellow",1000,()=>{
                changeColor("pink",1000);
            });
        });
    });
});
changeColor("red",1000);
let requestPromise = changeColor("red",1000);
requestPromise//fulfilled
changeColor("red",5000);
requestPromise//pending state->fulfilled or rejected(dont know)
//more understandable -promise chaining
changeColor("red",1000)
.then(()=>{
     console.log("red color was completed");
     //promise return
     return changeColor("orange",1000);
})
.then(()=>{//2nd promise created
    console.log("orange color was completed");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("green color was completed");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("blue color was completed");
})

