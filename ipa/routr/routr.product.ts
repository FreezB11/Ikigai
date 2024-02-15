import express,{NextFunction,Request,Response,Router} from 'express'

const product_routr = Router()

enum routr{
    add = '/add',
    search = '/search',
    delete = '/delete/:id'
}
product_routr.post(routr.add,(req:Request,res:Response)=>{

})


export default product_routr