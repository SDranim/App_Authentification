const express = require("express");
const connectDB = require("./config/connectDB");
const userRouter = require("./Routes/userRoutes");
const app=express();
const port=process.env.PORT || 5000;

app.listen(
    port,
    console.log(`server is up and running on http://localhost:${port}`)
    );
//dbconnection
connectDB();

//middleware
app.use(express.json());
app.use('/api',userRouter);