import 'dotenv/config';
import express from 'express';

import connectDB from './utils/connectDB.js';
import postRouter from './router/postsRouter.js';

// call the db
connectDB();

const app = express();
//!-- PORT
const PORT = process.env.PORT || 9000;

// Middlewares
app.use(express.json()); //Parse json data

//!-- Route handlers
app.use('/api/v1', postRouter);

//!-- Start the server
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
