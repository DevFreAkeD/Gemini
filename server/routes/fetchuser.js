import express from 'express';
import User from '../mongodb/models/User.js'; // Adjust path as per your project structure
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

router.get('/user', async (req, res) => {
    const { name, email } = req.query; // Use req.query to access parameters from the query string

    try {
        const user = await User.findOne({ name, email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;