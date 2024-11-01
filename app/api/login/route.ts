/** @format */

import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../lib/Model/user';

// Import nextConnect using `require` and cast it to `any`
const nextConnect = require('next-connect') as any;

// Initialize handler without adding inline types to `nextConnect`
const handler = nextConnect();

// Define the POST handler with explicit typing for `req` and `res`
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ msg: 'User not found!' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ msg: 'Incorrect Password!' });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: process.env.TOKEN_EXPIRATION_TIME as string,
      }
    );

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Internal Server Error!' });
  }
});

export default handler;
