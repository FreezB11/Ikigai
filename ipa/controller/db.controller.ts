import mongoose, {Schema} from "mongoose";
import UsrModel from "../models/usr.model";

const get_usr = ()=>UsrModel.find();
const usrby_mail = (email:String)=> UsrModel.findOne({email});
const usr_byseesiontoken = (sessionToken: String)=> UsrModel.findOne({
    'authentication.sessionToken':sessionToken,
})

const usr_byid = (id:String)=> UsrModel.findOne(id);
const create_usr