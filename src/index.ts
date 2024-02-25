import express from 'express'
import { Router, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const route = Router();
const port = process.env.PORT || 3000;

app.use(express.json())

route.get('/', (req: Request, res: Response) => 
  res.json({ message: 'hello world with tsnode' })
)

app.use(route)

app.listen(port)
