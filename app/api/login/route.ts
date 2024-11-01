/** @format */

import { NextHandler } from 'next-connect';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../lib/Model/user'; // Import your User model
import nextConnect from 'next-connect'; // Corrected import statement

const handler = nextConnect();

handler.post(async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ msg: 'User not found !' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ msg: 'Incorrect Password !' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION_TIME,
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Internal Server Error !' });
  }
});

export default handler;
