/** @format */

// models/User.js

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

let User;

try {
  User = mongoose.model('User');
} catch {
  User = mongoose.model('User', userSchema);
}

export default User;
