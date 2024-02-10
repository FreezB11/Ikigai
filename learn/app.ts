import mongoose,{Schema, Model, model} from "mongoose";
import dotenv from 'dotenv';
import { string } from "yaml/dist/schema/common/string";
import { UUID } from "mongodb";

const URI= `mongodb+srv://yashraj:yash0403@dbcluster.eouqf7t.mongodb.net/?retryWrites=true&w=majority`;

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