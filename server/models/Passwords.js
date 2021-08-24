const mongoose = require("mongoose");

const { Schema } = mongoose;

const passwordsSchema = new Schema({
  category: {
    type: String,
    required: false,
    trim: true,
  },
  website: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

const Passwords = mongoose.model("Passwords", passwordsSchema);

module.exports = Passwords;
