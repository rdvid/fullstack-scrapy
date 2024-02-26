import { Request, Response, NextFunction } from "express";
import redis from "../config/redis";

const getCache = async (req: Request, res: Response, next: NextFunction) => {
    let {keyword} = req.query;
    const cachedProducts = await redis.get(`products-${keyword}`);
  
    if (cachedProducts) {
      res.status(200).json(JSON.parse(cachedProducts));
    } else {
      next(); // Continue to the route handler if data is not in the cache
    }
};

export {
  getCache
}