const { Schema, model } = require('mongoose');

const userSchema = Schema({
  name: {
    type: String,
    required: true,
    maxlength: 25,
    minlength: 1,
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 25,
    minlength: 1,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: '/^([w-.]+@([w-]+.)+[w-]{2,4})?$/',
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlengh: 30,
  },
  description: {
    type: String,
    default: null,
    minlength: 5,
    maxlength: 250,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
    default: null,
  },
  deleted_at: {
    type: Date,
    default: null,
  },
  profilePicture: {
    type: String,
    default: null
  }
});

module.exports = model("user", userSchema, "users")
