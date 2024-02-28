import express from 'express'
import dotenv from 'dotenv';
import route from './router';
import cors from 'cors';
import cron from 'node-cron';
import fs from 'fs';

dotenv.config();
const port = 8000;
const app = express();

cron.schedule(" * */5 * * * *", () => {

    fs.appendFile('./.logs/ping.log', 'working...'+"\r\n",function(err){
        if(err) throw err;
    });
    
});


cron.schedule(" * */1440 * * * *", () => {
    fs.writeFileSync('./.logs/ping.log', '');
});


// dev environment only, critical security role. 
app.use(cors());

app.use(express.json());
app.use(route);

app.listen(port)
