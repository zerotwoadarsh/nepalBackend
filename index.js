import express, { json } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import connectDB from './src/database/connect.js';
import cityRoute from './src/routes/cityRoute.js';
import userRoute from './src/routes/userRoute.js';
import authRoute from './src/routes/authRoute.js';
import dotenv from "dotenv";
dotenv.config();

connectDB();
const app = express();

// Middleware
app.use(cors());
app.use(json());

app.get('/', (req, res) => {
    res.send('API is running...');
  });
  

const PORT = process.env.PORT || 5174;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });


app.use("/api/city", cityRoute);
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

