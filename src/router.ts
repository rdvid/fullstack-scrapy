import { Router } from "express";
import { handleSearch } from "./controller/search.controller";
import { getCache } from "./middleware/get-cache";
import { searchValidation } from "./middleware/search-validation";

import swaggerUi from 'swagger-ui-express';
import { swagger } from './docs/swagger';

const route = Router();

route.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger));
route.get('/api/scrape', searchValidation, getCache,  handleSearch)

export default route;