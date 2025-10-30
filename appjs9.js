const max = prompt("enter the max number");
//console.log(max);
const random3 = Math.floor(Math.random() * max) + 1;
console.log(random3);
let guess = prompt("guess the number");
while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == random3){
        console.log("you are right! congrates!! random number was", random3);
        break;
    } else if(guess < random3){
        guess = prompt("hint :  guess was too small. please try again.");
    } else{
        guess = prompt("hint : your guess was too large. please try again");
    }
}


