import mongoose,{Schema,Model,model} from "mongoose";

enum roles{
    admin = 'admin',
    seller = 'merchant',
    buyer = 'customer'
}

const usr_details = new Schema({
    phone_num:{type:Number,required:true},
    name: {type:String,required:true},
    email:{type:String,unique:true,required:true},

    verified:{type:Number}

})