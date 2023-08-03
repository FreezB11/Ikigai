import { NextFunction, Request, Response } from 'express';


const home = (req: Request, res: Response, next: NextFunction) => {
    return res.send(`
    
    `)
};

export default {home} 