import mongoose,{Schema,Model,model} from "mongoose";

const usrModel = new Schema({
    phone_num:{type:Number,required:true},
    name: {type:String,required:true},
    email:{type:String,unique:true,required:true},
    authentication:{
        password: {type: String, required: true, select:false},
        salt:{type :String,select:false},
        sessionToken:{ type:String, select:false},
    },
    Orders:{
        orderHistory:{
            productId:String,
            date:Date,
        },
        currentOrders:{
            productId:String,
            date:Date,
            deliveryStatus:String,
        }
    },
    Wishlist:[String],
},{collection:'users'})

const UsrModel = model('User',usrModel)

export default UsrModel