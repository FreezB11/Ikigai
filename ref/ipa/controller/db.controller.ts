import mongoose, {Schema} from "mongoose";
import UsrModel from "../models/usr.model";

export const getUsers = () => UsrModel.find();
export const getUserByEmail = (email: string) => UsrModel.findOne({ email });
export const getUserBySessionToken = (sessionToken: string) => UsrModel.findOne({ 'authentication.sessionToken': sessionToken });
export const getUserById = (id: string) => UsrModel.findById(id);
export const createUser = (values: Record<string, any>) => new UsrModel(values).save().then((user: { toObject: () => any; }) => user.toObject());
export const deleteUserById = (id: string) => UsrModel.findOneAndDelete({ _id: id });
export const updateUserById = (id: string, values: Record<string, any>) => UsrModel.findByIdAndUpdate(id, values);