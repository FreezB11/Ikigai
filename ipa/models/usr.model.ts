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
    authentication:{
        password: {type: String, required: true, select:false},
        salt:{type :String,select:false},
        sessionToken:{ type:String, select:false},
    }

})

const UsrModel = model('User',usr_details)

export default UsrModel