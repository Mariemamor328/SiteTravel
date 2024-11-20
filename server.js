//importing express
const express = require("express");
const cors = require("cors");
//initialisation
const app = express();
//importing database
const connectDB = require("./config/connectDB");

//importing passport
const passport = require("passport");
//importing dotenv
require("dotenv").config();

//convert json:middleware
app.use(express.json());
app.use(cors());
//connection database
connectDB();
//running passport
app.use(passport.initialize());
//ROUTE
app.use("/user", require("./routes/user"));
app.use("/trip",require("./routes/Trip"));



 const port = process.env.PORT;
app.listen(5000, (err) => {
  err ? console.log(err) : console.log(`server is running in ${port}`);
});
