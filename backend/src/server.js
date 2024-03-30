import express from 'express';

const app = express();
//! PORT
const PORT = 5000;

app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
