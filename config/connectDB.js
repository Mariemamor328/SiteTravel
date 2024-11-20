const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://benamormaryem2004:zpnsoXCkS96nHhuv@cluster0.5s0im.mongodb.net/");
    console.log("database is connected ...");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
//process.env.DB_URI