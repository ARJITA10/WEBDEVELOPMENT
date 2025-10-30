let url = "https://catfact.ninja/fact";

fetch(url)//1st request successful

.then((res)=>{
    //res is printed
     
    console.log(res);
    //data is passed
    //return in json format
    return res.json();
})//PROMISE FULFILLED
    //console.log(res.json());
    //json we get response in readable format
.then((data)=>{
    //one more promise catched for data
    //data is printed
    //return it with then method
        console.log("data1 = ",data.fact);
        //one more request
        return fetch(url);
        //promise is written
})
.then((res)=>{
    //response is catched converted in json format 
    return res.json();
    //one more promise object
})
// we will get/catch valid data2
.then((data2)=>{
    console.log("data2 = ",data2.fact);
})
    //it return promise->json data
//     res.json().then((data)=>{
//         //we access data amd we printed it 
//         console.log(data);
   
// });
.catch((err)=>{
    console.log("ERROR -",err);
});
console.log("i am happy");



let url1 = "https://catfact.ninja/fact";
async function getFacts() {
    try{
    let res = await fetch(url1);
    let data = await res.json();
    //console.log(res);
    console.log(data.fact);

    let res2 = await fetch(url1);
    let data2 = await res2.json();
    console.log(data2.fact);
    } catch(e){
        console.log("error-", e);
    }
    console.log("bye");
}



