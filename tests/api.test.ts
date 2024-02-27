import { AxiosRequestConfig } from "axios";
import { getProducts } from "../src/utils/utils";

const mockAxiosConfig: AxiosRequestConfig = {
    params: {
        k: 'mockparam',
    } 
}

describe('jest config', ()=>{
    test('adds 1 + 2 to equal 3', () => {
        expect('antedeguemon').toBe('antedeguemon');
    });
})


describe('api utils', ()=>{
    test('get products must return productList', async ()=>{
        const products = await getProducts(mockAxiosConfig);
        
    })
})