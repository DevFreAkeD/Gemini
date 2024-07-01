import express from 'express';
import runChat from '../gemini/googleGenAI.js';

const router = express.Router();

router.post('/chat', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await runChat(prompt);
    res.json({ response });
  } catch (error) {
    console.error('Error during chat:', error);
    res.status(500).send('An error occurred');
  }
});

export default router;