import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config()

const axiosAmazonInstance = axios.create({
    baseURL: process.env.AMAZON_URL
})

export {
    axiosAmazonInstance
}