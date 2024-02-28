import { schemaProduct, schemaProductsResponse } from '../schemas/product';

export const pathScrape = {
    "/scrape": {
        get: {
            tags: [
                "scrapper"
            ],
            summary: "Get data scrapping data",
            description: "Retrieve data from amazon url",
            parameters: [
                {
                    name: "keyword",
                    in: "query",
                    description: "search parameter",
                    required: true,
                    example: "vegeta"
                }
            ],
            responses: {
                200: {
                    description: "Successful",
                    content: {
                        "application/json": {
                            schema: {
                                ...schemaProductsResponse.get.status200
                            }
                        }
                    }
                },
                400: {
                    description: "Something went wrong",
                    content: {
                        "application/json": {
                            schema: {
                                ...schemaProductsResponse.get.status400
                            }
                        }
                    }
                },
                500: {
                    description: "Internal error",
                    content: {
                        "application/json": {
                            schema: {
                                ...schemaProductsResponse.get.status500
                            }
                        }
                    }
                }
            }
        },
    }
}
