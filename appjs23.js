let obj={
    a : undefined,
}
let jsonRes =' {"fact":"Kittens remain with their mother till the age of 9 weeks.","length":57}'
console.log(jsonRes);
let validRes = JSON.parse(jsonRes);
console.log(validRes);//WHICH IS  NOW A JS OBJECT
console.log(validRes.fact);

let student = {
  name : "shradha",
  marks:95,
};
json.stringify(student);
