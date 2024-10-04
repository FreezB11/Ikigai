import express,{ Request,Response,NextFunction,Router } from "express";

const merchant_routr = Router()

enum routr{
    all = '/all',
    add = '/add',
    update = '/update/:id',
    delete = '/delete/:id',
    get = '/getMerchant',
    sort = '/sortMerchant',
}

merchant_routr.get('/all',(req:Request,res:Response)=>{
    res.send("merchant list")
})

merchant_routr.get('/add',(req:Request,res:Response)=>{
    res.send("add new merchant")
})

merchant_routr.get('/update',(req:Request,res:Response)=>{
    res.send("update merchanr info")
})

merchant_routr.get('/delete',(req:Request,res:Response)=>{
    res.send("delete merchant")
})

merchant_routr.get('/getMerchant',(req:Request,res:Response)=>{
    res.send("get a specific merchant info")
})

merchant_routr.get('/sortMerchant',(req:Request,res:Response)=>{
    res.send("sort merchants based on roles")
})







export default merchant_routr