import cheerio from "cheerio";
import { Product } from "../@types/product.type";
import { axiosAmazonInstance as axios } from "../config/axios"
import { AxiosRequestConfig } from "axios";

export const getProducts = async (options: AxiosRequestConfig) => {
    try {     
        let { data } = await axios.get('https://www.amazon.com/s', options);
        let $ = cheerio.load(data);
        const products: Product[] = [];
    
        $('div.puis-card-container')
            .each((i, element)=>{
                // catch product items
                const title = $(element).find('h2').last().text().trim();
                const amount = $(element).find('span.a-price>span.a-offscreen').first().text().replace('$', '');
                const rating = $(element).find('i.a-icon.a-icon-star-small>span.a-icon-alt').first().text();
                const reviewsCount = $(element).find('span.a-size-base.s-underline-text').first().text().replace(',', '.');
                const imageUrl = $(element).find('img.s-image').prop('src');
                let price = amount ? amount : "0";
                
                let product: Product = {
                    title,
                    price,
                    rating,
                    reviewsCount: Number(reviewsCount),
                    imageUrl
                }
                products.push(product)
            });
    
        return products;
    } catch (error: any) {
        console.error(error.message)
        throw new Error(error.message)
    }

}

