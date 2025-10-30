let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for(let i=0; i<arr.length; i++) {
if(arr[i] == num) {
arr.splice(i, 1);
}
}
console.log(arr);

let number = 287152;
let count = 0;
let copy = number;
while(copy > 0) {
count++;
copy = Math.floor(copy/10);
}
console.log(count);

let n = 5;
let factorial = 1;
for(let i=1; i<=n; i++) {
    factorial *= i;
}
console.log(`factorial of ${n} is ${factorial}`);

let number1 = 287152;
let sum = 0;
let copy1 = number;
while(copy1 > 0) {
digit = copy1 % 10;
sum+= digit;
copy1 = Math.floor(copy1/10);
}
console.log(sum);

let arr1 = [2, 5, 10, 4, 2, 7, 1, 9];
let largest = 0;
for(let i=0; i<=arr1.length; i++) {
if(largest < arr1[i]) {
largest = arr1[i];
}
}
console.log(largest);
