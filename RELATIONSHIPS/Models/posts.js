const mongoose = require('mongoose');
const {Schema} = mongoose;

main()
    .then(()=>console.log("connection successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new Schema({
    username : String,
    email  : String,
});

const postSchema = new Schema({
    content : String,
    likes  : Number,
    user : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
});

const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post",postSchema);

//  const addData = async () => {
//    let user1 = new User({
//        username : "rahulkumar",
//        email : "rahulkumar@gmail.com",
    // let user = await User.findOne({username : "rahulkumar"});
// });
    // let post1 = new Post({
    //     content : "Hello World",
    //     likes : 7,

    // let post2 = new Post({
    //     content : "Bye Bye :)",
    //     likes : 27,
// });   
   //  post1.user = user1;
    // post2.user = user;
  // await user1.save();
  // await post1.save();
//     await post2.save();
// };
//  addData();

// const del = async() => {
//    await Post.findByIdAndDelete("6659de5fdc262a56cd52e81c");
//    await Post.findByIdAndDelete("6659dfbd34f48b7829265418");
//  //  await  User.findByIdAndDelete("6659cf6fbdd17d3646929c04");
//  //  await User.findByIdAndDelete("66598dca9bcc66bda915ec2b");
// };
// del();

const getData = async () => {
    let result = await Post.findOne({}).populate("user","username");
    console.log(result);
};
getData();
//ONE TO MANY - >FEW 1000'S case