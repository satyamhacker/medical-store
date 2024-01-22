const mongoose = require('mongoose');

// Define the signup schema
const signupSchema = new mongoose.Schema({
 
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  // You can include other fields relevant to user signup here
});

// Create the Signup model
const SignupData = mongoose.model('SignupData', signupSchema);

module.exports = SignupData;
