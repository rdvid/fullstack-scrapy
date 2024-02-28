import Redis from 'ioredis';
import dotenv from 'dotenv';
dotenv.config();

//  DEV docker redis
const redis = new Redis({
    host: 'redis', 
    port: Number(process.env.REDIS_PORT) || 6379,
});

//  PROD
// const redis = new Redis({
//     host: process.env.REDIS_HOST, 
//     port: Number(process.env.REDIS_PORT) || 6379,
//     username: process.env.REDIS_USERNAME,
//     password: process.env.REDIS_PASSWORD
// });

redis.set('key', 100, 'EX', 300)

export default redis;