import express,{Request,Response} from 'express';
import ProductModel from '../models/product.model';

const add = async (req:Request,res:Response)=>{
    const createProduct = (values: Record<string, any>) => new ProductModel(values).save().then((user) => user.toObject());
    const getProductbyID = (product_id:string)=> ProductModel.findOne({product_id});
    try{
        const {merchant_id,product_id,name,price,category_id,Images} = req.body
        const existingProduct = await getProductbyID(product_id);

        if(existingProduct){
            return res.status(400).json({"message":"product already exist!"})
        }
        const product = await createProduct({
            merchant_id,
            product_id,
            name,
            price,
            category_id,
            Images
        })
        return res.status(200).json(product).end();

    }catch(error){
        console.log(error)
    }
}

const search = async (req:Request,res:Response)=>{
    try {
        const search = req.body.search
        const prodData = await ProductModel.find({"name":{$regex:".*"+search+".*"}})
        if(prodData.length>0){
            res.status(200).json(prodData).end()
        }else{
            res.status(200).json({"MSG":"Product not found"})
        }
    } catch (error) {
        console.log(error)
    }
}



export default {add,search}