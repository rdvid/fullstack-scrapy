import express from 'express'
import dotenv from 'dotenv';
import route from './router';
import cors from 'cors';

dotenv.config();
const port = 8000;
const app = express();

// dev environment only, critical security role. 
app.use(cors());

app.use(express.json());
app.use(route);

app.listen(port)
