const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_CONNECTION,{
  }); 
const db = mongoose.connection;
db.on("error",(error)=>console.error(error));
db.once("open", ()=>console.log("connected to database"));

const postsRoutes = require("./routes/Posts_routes");
app.use("/posts", postsRoutes);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});