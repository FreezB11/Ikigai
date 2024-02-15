import mongoose, {Schema,Model,model} from "mongoose";

const productModel = new Schema({
    merchant_id:{type:String,required:true},
    name:{type:String,required:true},
    price:{type:Number,required:true},
    category_id:Number,
    Images:[String]
},{collection:'products'})

const ProductModel = model('Product',productModel)

export default ProductModel