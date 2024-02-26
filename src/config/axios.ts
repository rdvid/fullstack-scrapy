import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config()

const axiosAmazonInstance = axios.create({
    baseURL: process.env.AMAZON_URL,
    // User-Agent is crucial to perform requests through axios on amazon. 
    // Otherwise the request will be filtered by an anti-scrapping firewall
    headers: {
        'User-Agent': process.env.USER_AGENT
    },
})

export {
    axiosAmazonInstance
}