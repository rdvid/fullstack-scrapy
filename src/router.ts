import { Router } from "express";
import { handleSearch } from "./controller/search.controller";
import { getCache } from "./middleware/get-cache";
import { searchValidation } from "./middleware/search-validation";

const route = Router();

route.get('/api/scrape', searchValidation, getCache,  handleSearch)

export default route;