import Redis from 'ioredis';
import dotenv from 'dotenv';
dotenv.config();

// uncomment the host line if you just want to use locally through Docker
const redis = new Redis({
    // host: 'redis', 
    port: 6379,
});

redis.set('key', 100, 'EX', 300)

export default redis;