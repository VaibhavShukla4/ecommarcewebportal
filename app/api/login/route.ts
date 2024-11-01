/** @format */

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../lib/Model/user';
import { NextResponse } from 'next/server';

// Define the main API function
export async function POST(req: Request) {
  const { email, password } = await req.json(); // Parse JSON directly from the request

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ msg: 'User not found!' }, { status: 401 });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json({ msg: 'Incorrect Password!' }, { status: 401 });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: process.env.TOKEN_EXPIRATION_TIME as string,
      }
    );

    return NextResponse.json({ token });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ msg: 'Internal Server Error!' }, { status: 500 });
  }
}
