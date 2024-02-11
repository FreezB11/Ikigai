import mongoose,{Schema, Model, model} from "mongoose";
import dotenv from 'dotenv';
dotenv.config({path: './learn/.env'})

// console.log(process.env.URI)

const URI:string = `${process.env.URI}`;

mongoose.connect(URI)

const Usr_schema = new Schema  ({
    name: String,
    email : String,
    pswd: String
},{collection:'users'})

const Usr = model("startup.merchants",Usr_schema)

const Users = new Usr({name:'hsay',email:'test@test.com',pswd:'#khddhsfkfskfj'})
Users.save()
console.log(Users)