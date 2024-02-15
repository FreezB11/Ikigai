import express,{NextFunction,Request,Response,Router} from 'express'
import controllr from '../controller/product.controller'

const product_routr = Router()

enum routr{
    add = '/add',
    search = '/search',
    delete = '/delete/:id'
}
product_routr.post(routr.add,controllr.add)


export default product_routr