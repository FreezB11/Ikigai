import mongoose,{Schema,Model,model} from "mongoose";

const merchantModel = new Schema({
    merchantId:{type:String,unique:true},
    phone_num:{type:Number,required:true},
    name: {type:String,required:true},
    email:{type:String,unique:true,required:true},
    authentication:{
        password: {type: String, required: true, select:false},
        salt:{type :String,select:false},
        sessionToken:{ type:String, select:false},
    },
})