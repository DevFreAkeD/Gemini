import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
    res.send('Hello from Gemini!');
  });
  
  const startServer = async () => {
    try {
      app.listen(8080, () => console.log('Server started on port 8080 http://localhost:8080'));
    } catch (error) {
      console.log(error);
    }
  };
  
  startServer();