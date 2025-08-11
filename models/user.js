const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type:String,
    required:true,
    trim:true,
    lowercase:true,
    unique:true,
    minlength: [3,'username must be at least 3 characters log']
  },

   email: {
    type:String,
    required:true,
    trim:true,
    lowercase: true,
    unique:true,
    minlength: [13,'username must be at least 13 characters log']
  },
    password: {
    type:String,
    required:true,
    trim:true,

    minlength: [5,'username must be at least 5 characters log']
  }

})

const userModel = mongoose.model('user',userSchema)
  module.exports = userModel


