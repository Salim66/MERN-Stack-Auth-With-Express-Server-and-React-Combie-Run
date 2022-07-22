import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';


// initalize express
const app = express();
// Configure dotenv
dotenv.config();

// initialize environmet 
const PORT = process.env.SERVER_PORT || 5000;


// Listen
app.listen(PORT, () => {
    console.log(`server on running on port ${ PORT }`.bgGreen.black);
})
