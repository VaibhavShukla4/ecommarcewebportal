/** @format */

import { Product } from '@/app/lib/Model/product';
import { MONGODB_URI } from '@/app/lib/db';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET() {
  await mongoose.connect(MONGODB_URI);
  const data = await Product.find();
  console.log(data);
  return NextResponse.json({ data, result: true });
}
