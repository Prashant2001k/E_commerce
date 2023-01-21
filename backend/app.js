require('dotenv').config();
const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");

const errorMiddleware=require("./middleware/error");

require("./db/conn");

const port=process.env.PORT || 3002;
// console.log(process.env.LINK)
app.use(express.json());
app.use(cookieParser());

//route Imports
const product =require("./routes/productRoute");
const user=require("./routes/userRoute");
const order=require("./routes/orderRoute");

app.use("/api/vi",product);
app.use("/api/vi",user);
app.use("/api/vi",order);

//Middleware for Error 
app.use(errorMiddleware);


//Unhandled Uncaught Expection
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due toUncaught Exception`);
    process.exit(1);
});
 
// console.log(Ypoutune);



//Unhandled Promise Rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`); 
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(()=>{
        process.exit(1);
    })
}); 




const server=app.listen(port,()=>{
    console.log(`successfully Work! on Port : ${port}`);
})     