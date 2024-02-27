import { Request, Response, NextFunction } from "express";

const searchValidation = async (req: Request, res: Response, next: NextFunction) => {
    let {keyword} = req.query;
    
    if(!keyword){
        return res.status(400).json({
            message: "keyword must be provided"
        })
    }
    
    keyword = keyword.toString().trim();
    
    if(Number(keyword)){
        return res.status(400).json({
            status: 400,
            message: "keyword must be an string"
        })
    }

    next();
    
};

export {
    searchValidation
}