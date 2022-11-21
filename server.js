const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.json());  //to parse the request coming from frontend

//connect to mongoose
mongoose.connect("mongodb+srv://kkrishna007:iecseftw@cluster1.aumb3gl.mongodb.net/iecse");

//require route
app.use("/", require("./routes/studentRoute"));

app.listen(3001, function(){
    console.log("express server is running at port 3001");
})