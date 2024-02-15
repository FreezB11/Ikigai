import express, { NextFunction, Request, Response,Router } from 'express'
import controllr from '../controller/usr.controller';
const usr_routr = Router();

enum routr{
    update = '/update/:id',
    delete = '/delete/:id',
    fetch = '/all'
}


usr_routr.get('/',(req:Request,res:Response)=>{
    res.json({"message":"welcome to users"})
})

usr_routr.post(routr.fetch,controllr.getAllUsers) //tested and working
usr_routr.post(routr.delete,controllr.deleteUser) //tested and working
usr_routr.post(routr.update,controllr.updateUser)


export default usr_routr