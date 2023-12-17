import { log } from 'console';
import { NextFunction, Request, Response } from 'express';

export const logger = (req: Request, res: Response, next: NextFunction) => {
    log(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next()
}