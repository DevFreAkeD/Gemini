import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import connectDB from './mongodb/connect.js';
import authRoutes from './routes/auth.js';
import chatRoutes from './routes/gemini.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/gemini', chatRoutes);

app.get('/', async (req, res) => {
    res.send('Hello from Gemini!');
  });
  
  const startServer = async () => {
    try {
      await connectDB(process.env.MONGODB_URL); // Ensure the database connection is awaited
      app.listen(8080, () => console.log('Server started on port 8080 http://localhost:8080'));
    } catch (error) {
      console.log(error);
    }
  };
  
startServer();