const schemaProduct = {
    type: "object",
    properties: {
        title: {
            type: "string",
            example: "Pop! Animation: Dragonball Z - Majin Vegeta",
        },
        price: {
            type: "string",
            example: "15.98",
        },
        rating: {
            type: "string",
            example: "4.6 out of 5 stars",
        },
        reviewsCount: {
            type: "number",
            example: 3.929,
        },
        imageUrl: {
            type: "string",
            format: "url",
            example: "https://m.media-amazon.com/images/I/61aea57hA7L._AC_UL320_.jpg",
        }
    }
}
const schemaProductsResponse = {
    get: {
        status200: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    title: {
                        type: "string",
                    },
                    price: {
                        type: "string",                       
                    },
                    rating: {
                        type: "string",
                    },
                    reviewsCount: {
                        type: "number",
                    },
                    imageUrl: {
                        type: "string",
                    }
                }
            },
            example: [
                {
                    title: "Vegeta Figure Statues Figurine DBZ Super Saiyan Blue Collection Birthday Gifts PVC 11 Inch",
                    price: "24.68",
                    rating: "4.5 out of 5 stars",
                    reviewsCount: 196,
                    imageUrl: "https://m.media-amazon.com/images/I/716RN6klCiL._AC_UL320_.jpg"
                },
                {
                    title: "Vegeta Dragon Ball Super: Hero, Bandai Spirits S.H.Figuarts",
                    price: "39.95",
                    rating: "4.7 out of 5 stars",
                    reviewsCount: 3.929,
                    imageUrl: "https://m.media-amazon.com/images/I/51CImolHRWL._AC_UL320_.jpg"
                },
                {
                    title: "Dragon Stars - Vegeta (Dragon Ball Kai), 6.5\" Action Figure",
                    price: "21.99",
                    rating: "4.6 out of 5 stars",
                    reviewsCount: 13.23,
                    imageUrl: "https://m.media-amazon.com/images/I/713Y6rg9sKL._AC_UL320_.jpg"
                },
                {
                    title: "Pop! Animation: Dragonball Z - Majin Vegeta",
                    price: "15.98",
                    rating: "4.9 out of 5 stars",
                    reviewsCount: 4.825,
                    imageUrl: "https://m.media-amazon.com/images/I/61aea57hA7L._AC_UL320_.jpg"
                },
            ]
        },
        status400: {
            type: "object",
            properties: {
                message: {
                    type: "string",
                    example: "keyword must be provided"
                }
            }
        },
        status500: {
            type: "object",
            properties: {
                message: {
                    type: "string",
                    example: "internal error"
                }
            }
        }
    }
}

export {
    schemaProduct,
    schemaProductsResponse
}