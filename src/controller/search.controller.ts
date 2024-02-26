import { Request, Response } from "express";
import { AxiosRequestConfig } from "axios";
import dotenv from 'dotenv';
import { getProducts } from "../utils/utils";
import redis from "../config/redis";

dotenv.config();

const handleSearch = async (req: Request, res: Response) => {
    let { keyword } = req.query;
    const options: AxiosRequestConfig = { 
        params: {
            k: keyword,
        } 
    };
    try {
        const products = await getProducts(options);
        if(!products.length){
            return res.status(404).json({message: 'products not found'})
        }
        await redis.set(`products-${keyword}`, JSON.stringify(products));
        return res.status(200).json(products);
    } catch (error:any) {
        return res.status(500).json({message: error.message});
    }
}

export {
    handleSearch
}