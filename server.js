const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.json());  //to parse the request coming from frontend

//connect to mongoose
mongoose.connect("mongodb+srv://jay_admin:hailiecse@cluster0.yslfbfg.mongodb.net/iecse");

//require route
app.use("/", require("./routes/studentRoute"));

app.listen(3001, function(){
    console.log("express server is running at port 3001");
})