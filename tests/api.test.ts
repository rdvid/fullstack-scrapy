import { AxiosRequestConfig } from "axios";
import { Product } from "./@types/product.type";

const mockProducts: Product[] = [
	{
		"title": "Dante: A Dark Mafia, Enemies to Lovers Romance (Chicago Ruthless Book 1)",
		"price": "0.00",
		"rating": "4.3 out of 5 stars",
		"reviewsCount": 21.628,
		"imageUrl": "https://m.media-amazon.com/images/I/71EvV9fBbjL._AC_UY218_.jpg"
	},
	{
		"title": "Dante: Chicago Ruthless, Book 1",
		"price": "0.00",
		"rating": "4.3 out of 5 stars",
		"reviewsCount": 21.628,
		"imageUrl": "https://m.media-amazon.com/images/I/71rTaqS7vaL._AC_UY218_.jpg"
	},
	{
		"title": "The Divine Comedy (The Inferno, The Purgatorio, and The Paradiso)",
		"price": "9.79",
		"rating": "4.8 out of 5 stars",
		"reviewsCount": 3.135,
		"imageUrl": "https://m.media-amazon.com/images/I/81SgX6pVaWL._AC_UY218_.jpg"
	},
	{
		"title": "The Divine Comedy (Leather-bound Classics) (2013) Leather Bound",
		"price": "16.89",
		"rating": "4.6 out of 5 stars",
		"reviewsCount": 2.864,
		"imageUrl": "https://m.media-amazon.com/images/I/81-rHfYBAQL._AC_UY218_.jpg"
	},
	{
		"title": "Dante's Inferno",
		"price": "5.95",
		"rating": "4.4 out of 5 stars",
		"reviewsCount": 3.914,
		"imageUrl": "https://m.media-amazon.com/images/I/51+V0C92W8L._AC_UY218_.jpg"
	},
	{
		"title": "The Divine Comedy: Inferno; Purgatorio; Paradiso (Everyman's Library)",
		"price": "24.17",
		"rating": "4.7 out of 5 stars",
		"reviewsCount": 1.46,
		"imageUrl": "https://m.media-amazon.com/images/I/71wUmvbK6VL._AC_UY218_.jpg"
	},
	{
		"title": "Dante: A Valentino Heirs Novella",
		"price": "0.00",
		"rating": "4.7 out of 5 stars",
		"reviewsCount": 578,
		"imageUrl": "https://m.media-amazon.com/images/I/814Or27Zk4L._AC_UY218_.jpg"
	},
	{
		"title": "The Divine Comedy: Inferno, Purgatorio, Paradiso",
		"price": "16.16",
		"rating": "4.7 out of 5 stars",
		"reviewsCount": 667,
		"imageUrl": "https://m.media-amazon.com/images/I/81yjjd-9wTL._AC_UY218_.jpg"
	},
	{
		"title": "Dante's Inferno: Retro Hell-Bound Edition",
		"price": "11.95",
		"rating": "4.6 out of 5 stars",
		"reviewsCount": 297,
		"imageUrl": "https://m.media-amazon.com/images/I/719eHOb4QBL._AC_UY218_.jpg"
	},
	{
		"title": "Dante's Peak",
		"price": "3.99",
		"rating": "4.8 out of 5 stars",
		"reviewsCount": 10.094,
		"imageUrl": "https://m.media-amazon.com/images/I/71lqqYOPQHL._AC_UY218_.jpg"
	},
	{
		"title": "Dante's Divine Comedy: A Guide for the Spiritual Journey",
		"price": "22.95",
		"rating": "4.6 out of 5 stars",
		"reviewsCount": 81,
		"imageUrl": "https://m.media-amazon.com/images/I/91KVp1IkF7L._AC_UY218_.jpg"
	},
	{
		"title": "Study Guide: The Inferno by Dante Alighieri (SuperSummary)",
		"price": "11.95",
		"rating": "4.0 out of 5 stars",
		"reviewsCount": 4,
		"imageUrl": "https://m.media-amazon.com/images/I/51WAHhIO+ZL._AC_UY218_.jpg"
	},
	{
		"title": "The Divine Comedy (The Inferno, The Purgatorio, and The Paradiso, Illustrated）",
		"price": "0.99",
		"rating": "4.6 out of 5 stars",
		"reviewsCount": 318,
		"imageUrl": "https://m.media-amazon.com/images/I/71Jn7BWj4NL._AC_UY218_.jpg"
	},
	{
		"title": "The Divine Comedy",
		"price": "13.99",
		"rating": "4.6 out of 5 stars",
		"reviewsCount": 246,
		"imageUrl": "https://m.media-amazon.com/images/I/81lGMlMfKTL._AC_UY218_.jpg"
	},
	{
		"title": "The Portable Dante (Penguin Classics)",
		"price": "20.09",
		"rating": "4.6 out of 5 stars",
		"reviewsCount": 227,
		"imageUrl": "https://m.media-amazon.com/images/I/81IrmRo7BEL._AC_UY218_.jpg"
	},
	{
		"title": "Dante: Warhammer 40,000",
		"price": "9.99",
		"rating": "4.7 out of 5 stars",
		"reviewsCount": 653,
		"imageUrl": "https://m.media-amazon.com/images/I/81JlG-LSXXL._AC_UY218_.jpg"
	},
	{
		"title": "Dante da colorare. Paradiso (Italian Edition)",
		"price": "9.99",
		"rating": "4.9 out of 5 stars",
		"reviewsCount": 12,
		"imageUrl": "https://m.media-amazon.com/images/I/71ikMaSh5eL._AC_UY218_.jpg"
	},
	{
		"title": "Aristotle and Dante Discover the Secrets of the Universe",
		"price": "1.99",
		"rating": "4.7 out of 5 stars",
		"reviewsCount": 74,
		"imageUrl": "https://m.media-amazon.com/images/I/81mABQUac3L._AC_UY218_.jpg"
	},
	{
		"title": "Dante: The Story of His Life",
		"price": "19.95",
		"rating": "4.3 out of 5 stars",
		"reviewsCount": 55,
		"imageUrl": "https://m.media-amazon.com/images/I/81Ct-D721OL._AC_UY218_.jpg"
	},
	{
		"title": "dante's paradox",
		"price": "1.99",
		"rating": "5.0 out of 5 stars",
		"reviewsCount": 6,
		"imageUrl": "https://m.media-amazon.com/images/I/81cgo9mBpOL._AC_UY218_.jpg"
	},
	{
		"title": "Dante: Colorado Crush Hockey Series (Book 3)",
		"price": "3.99",
		"rating": "4.4 out of 5 stars",
		"reviewsCount": 37,
		"imageUrl": "https://m.media-amazon.com/images/I/810tk9KMNgL._AC_UY218_.jpg"
	},
	{
		"title": "Dante's Demons: Demon Dawgs MC San Diego - Book One (Demon Dawgs Motorcycle Club - San Diego)",
		"price": "7.99",
		"rating": "4.5 out of 5 stars",
		"reviewsCount": 747,
		"imageUrl": "https://m.media-amazon.com/images/I/71ILbFgquIL._AC_UY218_.jpg"
	}
]

const mockAxiosConfig: AxiosRequestConfig = {
    params: {
        k: 'mockparam',
    } 
}

class MockApiService {

    products: Product[];
    
    constructor() {
        this.products = [...mockProducts]
    }

    getProducts = () => {
        return this.products;
    };
    
}

describe('jest config', ()=>{
    test('adds 1 + 2 to equal 3', () => {
        expect('antedeguemon').toBe('antedeguemon');
    });
})


describe('GET /scrape', ()=>{

    let mockApiService: MockApiService;

    beforeEach(() => {
        mockApiService = new MockApiService();
    });

    test('get products must return productList', async ()=>{
        const products = mockApiService.getProducts();
        expect(products[0]).toHaveProperty('imageUrl');
    });

    test('get products must return productList', async ()=>{
        const products = mockApiService.getProducts();
        expect(products[0]).toHaveProperty('imageUrl');
    });

})