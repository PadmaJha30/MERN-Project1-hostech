import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import AuthRouter from './Routes/AuthRouter.js';
import connectDB from './models/db.js';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express(); 
dotenv.config();

const PORT = process.env.PORT || 8081;

// images
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/upload', express.static(path.join(__dirname,'upload')));

app.use(express.json());
app.use(bodyParser.json());
connectDB(process.env.MONGODB_URI);


app.use(cors());
app.use('/auth',AuthRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})