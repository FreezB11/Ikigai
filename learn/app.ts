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

const Usr = model("Users",Usr_schema)

const Users = new Usr({name:'hsay22',email:'test22@test.com',pswd:'#khddhsf22kfskfj'})
Users.save()
console.log(Users)