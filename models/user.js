const mongoose = require('mongoose');

const user = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    cart: {
      type: Array,
      required: true,
      default: [],
    },
  },
  {
    timestamps: true,
    collection: 'rooms',
  }
);


module.exports = mongoose.model('user' , user)