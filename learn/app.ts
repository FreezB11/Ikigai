import mongoose,{Schema, Model, model} from "mongoose";
import dotenv from 'dotenv';
import { string } from "yaml/dist/schema/common/string";
import { UUID } from "mongodb";

const URI= `mongodb+srv://yashraj:yash0403@dbcluster.eouqf7t.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(URI)

const Usr_schema = new Schema  ({
    name: String,
    email : String,
    pswd: string,
    _id: UUID,
})

const Usr = model("Usr",Usr_schema)
