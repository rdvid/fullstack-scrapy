import { definition } from './configs/definition';
import { servers } from './configs/servers';
import { pathScrape } from './paths/scrape';

export const swagger = {
    ...definition,
    ...servers,
    paths: {
        ...pathScrape,
    }
};