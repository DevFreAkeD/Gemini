import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../mongodb/models/User.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const jwtSecret = process.env.JWT_SECRET;

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).send('User Registered!');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).send('Invalid credentials!');
    }

    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });
    res.json({ message: 'Login Successful!', token });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default router;