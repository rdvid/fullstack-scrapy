import Redis from 'ioredis';
import dotenv from 'dotenv';
dotenv.config();

const redis = new Redis({
    port: Number(process.env.REDIS_PORT) || 6379,
});

redis.set('key', 100, 'EX', 300)

export default redis;