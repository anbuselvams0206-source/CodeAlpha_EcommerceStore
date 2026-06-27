const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


const products = [

{
id:1,
name:"Phone",
price:15000
},

{
id:2,
name:"Laptop",
price:55000
},

{
id:3,
name:"Watch",
price:3000
}

];


app.get("/products",(req,res)=>{

res.json(products);

});


app.post("/order",(req,res)=>{

const order = req.body;

console.log(order);


res.json({

message:"Order processed successfully"

});

});


app.listen(5000,()=>{

console.log("Server running on port 5000");

});
