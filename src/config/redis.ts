import Redis from 'ioredis';
import dotenv from 'dotenv';
dotenv.config();

const redis = new Redis({
    port: Number(process.env.REDIS_PORT) || 6379,
    tls: {
        timeout: 300 // 5 minutes
    }
});

export default redis;