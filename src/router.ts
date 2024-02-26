import { Router } from "express";
import { handleSearch } from "./controller/search.controller";

const route = Router();

route.get('/api/scrape', handleSearch)

export default route;