import express from 'express';
import connection from './database/db.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

connection(USERNAME, PASSWORD);

app.listen(PORT, () => console.log(`server is running succesfully on PORT ${PORT}`));