const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb://0.0.0.0/men").then(() => {
  console.log("connected to the database");
});

module.exports = connection



/// crud create read update delete
