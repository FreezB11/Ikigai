import mongoose,{Schema, Model, model} from "mongoose";
import { string } from "yaml/dist/schema/common/string";
import { UUID } from "mongodb";
import dotenv from 'dotenv';
dotenv.config({path: './learn/.env'})

// console.log(process.env.URI)

const URI:string = `${process.env.URI}`;

mongoose.connect(URI)

const Usr_schema = new Schema  ({
    name: String,
    email : String,
    pswd: String
})

const Usr = model("Usr",Usr_schema)

const test = new Usr({name:'hsay',email:'test@test.com',pswd:'#khddhsfkfskfj'})
test.save()
console.log(test)