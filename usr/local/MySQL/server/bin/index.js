const { faker } = require('@faker-js/faker');
// Get the client
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'user_app',
    password : 'passofmysql10@',
  });
try{
connection.query("SHOW TABLES",(err, result)=>{
    if (err) throw err;
    console.log(result);
});
} catch(err){
    console.log(err);
}
connection.end();//TO CLOSE CONNECTION

let getRandomUser = () => {
  return {
    //userId
    Id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
  //  avatar: faker.image.avatar(),
    password: faker.internet.password(),
  //  birthdate: faker.date.birthdate(),
  //  registeredAt: faker.date.past(),
  };
}

//console.log(getRandomUser());
// const { faker } = require('@faker-js/faker');

// export function createRandomUser(): User {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// }
