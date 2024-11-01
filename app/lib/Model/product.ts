/** @format */

// models/Product.ts

import mongoose, { Document, Model } from 'mongoose';

// Define an interface for the Product document
export interface IProduct extends Document {
  name: string;
  price: string;
  company: string;
  color: string;
  category: string;
}

// Define the Mongoose schema for the Product model
const productSchema = new mongoose.Schema<IProduct>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type: String,
    required: true,
    trim: true,
  },
  color: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
});

// Ensure model is only compiled once
const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema);

export default Product;
