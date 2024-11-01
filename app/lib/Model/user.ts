/** @format */

// models/User.ts

import mongoose, { Document, Model } from 'mongoose';

// Define IUser interface
export interface IUser extends Document {
  email: string;
  password: string;
  // Add other user properties here if needed
}

// Define the Mongoose schema for the User model
const userSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Add a check to avoid redefining the model during hot-reloading in development
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
