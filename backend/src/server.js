import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import connectDB from './utils/connectDB.js';
import postRouter from './router/postsRouter.js';

// call the db
connectDB();

const app = express();
//!-- PORT
const PORT = process.env.PORT || 9000;

// Middlewares
app.use(express.json()); //Parse json data
const corsOptions = {
  origin: [process.env.FRONTEND_BASE_URL],
  credentials: true,
};
app.use(cors(corsOptions));

//!-- Route handlers
app.use('/api/v1', postRouter);

//!-- Start the server
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
