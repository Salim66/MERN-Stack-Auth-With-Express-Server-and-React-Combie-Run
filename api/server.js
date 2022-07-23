import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import studentRouter from './routes/student.js';
import mongoDBConnection from './config/db.js';


// initalize express
const app = express();
// Configure dotenv
dotenv.config();

// middleware permision
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// initialize environmet 
const PORT = process.env.SERVER_PORT || 5000;

// Routes
app.use('/api/student', studentRouter)


// Listen
app.listen(PORT, () => {
    mongoDBConnection();
    console.log(`server on running on port ${ PORT }`.bgGreen.black);
})
