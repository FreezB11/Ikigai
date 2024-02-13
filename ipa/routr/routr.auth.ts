import express, { NextFunction, Request, Response,Router } from 'express'
import { login, register } from '../controller/auth.controller';
const auth_routr = Router();

enum routr{
    login = '/login',
    register = '/register',
    logout = '/logout',
    session = '/session'

}

auth_routr.get('/',(req:Request,res:Response)=>{
    res.send("helllo")
})

auth_routr.get(routr.login,(req:Request,res:Response)=>{
    res.send("welcome to login")
})

auth_routr.post(routr.register,register)

auth_routr.get(routr.logout,(req:Request,res:Response)=>{
    res.send("this is logout page")
})

auth_routr.get(routr.session,(req:Request,res:Response)=>{
    res.send("this seesion")
})

export default auth_routr