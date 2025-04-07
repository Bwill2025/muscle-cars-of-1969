const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
  make: {
    type: String,
    enum: ['Mercury','Chrysler','Chevrolet','Ford','Pontiac','AMC','Buick', 'Oldsmobile'],
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  enigine: {
    type: String,
    enum: ['V-6', 'V-8'],
    required: true,
  },
  transmission: { 
    type: String,
    enum: ['Manual', 'Automatic'],
    required: true,
  },
  carPics: String,
})



const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cars: [carSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;