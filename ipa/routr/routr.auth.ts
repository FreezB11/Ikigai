import express, { NextFunction, Request, Response,Router } from 'express'

const auth_routr = Router();

auth_routr.get('/',(req:Request,res:Response)=>{
    res.send("helllo")
})

export default auth_routr