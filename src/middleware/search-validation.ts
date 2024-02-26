import { Request, Response, NextFunction } from "express";

const searchValidation = async (req: Request, res: Response, next: NextFunction) => {
    let {keyword} = req.query;

    if(!keyword){
        return res.status(401).json({
            message: "keyword must be provided"
        })
    }

    if(typeof keyword !== 'string'){
        return res.status(401).json({
            message: "keyword must be an string"
        })
    }

    next();
    
};

export {
    searchValidation
}