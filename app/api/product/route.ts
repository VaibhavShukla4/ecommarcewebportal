/** @format */

import Product from '@/app/lib/Model/product';
import { MONGODB_URI } from '@/app/lib/db';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check if already connected to avoid reconnecting in serverless functions
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(MONGODB_URI);
    }

    const data = await Product.find();
    console.log(data);

    return NextResponse.json({ data, result: true });
  } catch (error) {
    console.error("Database connection or query error:", error);

    return NextResponse.json(
      { message: 'Error fetching products', result: false },
      { status: 500 }
    );
  } finally {
    // Optional: Close connection in a serverless environment
    if (process.env.NODE_ENV === 'production') {
      await mongoose.connection.close();
    }
  }
}
