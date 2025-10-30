// todo app
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    //console.log("clicked");
    let item = document.createElement("li");
    item.innerText = inp.value;
    //console.log(inp.value);
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("element") ;

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
 });
// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par  = this.parentElement;
//         console.log(par);
//         par.remove();
//            });
//  }
 //ul.addEventListener("click",function(event){
    // console.log(event.target);
    // console.log("button clicked");
    // console.dir(event.target.nodeName);
 //});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
     //  console.log(listItem)
      //  console.log("delete")
        console.log("deleted")

  //  }else{
  //      console.log("don't delete");
    }
});