import express from 'express'
import dotenv from 'dotenv';
import route from './router';

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json())
app.use(route)

app.listen(port)
