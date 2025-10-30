const mongoose = require('mongoose');
const {Schema} = mongoose;

main()
    .then(()=>console.log("connection successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const orderSchema = new Schema({
    item : String,
    price  : Number,
    // addresses : [
    //     {
    //         _id : false,
    //         location : String,
    //         city : String,
    //     },
});

const customerSchema = new Schema({
    name : String,
    orders : [
        {
            type : Schema.Types.ObjectId,
            ref : "order",
        },
    ],
});

// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("PRE MIDDLEWARE");
// });

// customerSchema.post("findOneAndDelete", async (data) => {
//     // console.log("POST MIDDLEWARE");
//     console.log(data);
// });

customerSchema.post("findOneAndDelete", async (customer) => {
    if(customer.orders.length){
       let result = await Order.deleteMany({_id : {$in : customer.orders}});
       console.log(result);
    }
});

const Order = mongoose.model("order",orderSchema);
const Customer = mongoose.model("customer",customerSchema);

// const addCustomers = async () => {
//     let customer1 = new Customer({
//         name : "Neha Kumar",
//     });
//     let order1 = await Order.findOne({item : "chips"});
//     let order2 = await Order.findOne({item : "chocolate"});
//     customer1.orders.push(order1);
//     customer1.orders.push(order2);
//   //  let result =  await customer1.save();
//    // console.log(result);
//     let result = await Customer.find({});
//     console.log(result);
//  };
// addCustomers();

//function
// const findCustomers = async () => {
//      let result = await Customer.find({}).populate("orders");
//   //  console.log(result);
//     console.log(result[0]);
// };
// findCustomers();

// const addOrders = async () => {                        //a function
//     let res = await Order.insertMany([
//         {item : "samosa", price : 12},
//         {item : "chips", price : 10},
//         {item : "chocolate", price : 40},
//     ]);
//     console.log(res);
// };
// addOrders();

//ONE TO MANY - >FEW 100'S

// const addCust = async() => {
//     let newCust = new Customer({
//         name : "Karan Arjun"
//     });
//     let newOrder = new Order({
//       //  item : "Pizza",
//       item : "sandwich",
//         price : 100
//     });
// newCust.orders.push(newOrder);
// await newOrder.save();
// await newCust.save();
// console.log("added  new customer");
// };
//  addCust();

const delCust = async () => {
    let data = await Customer.findByIdAndDelete("665db887268bb12d46efca4a");
    console.log(data);
}
delCust();