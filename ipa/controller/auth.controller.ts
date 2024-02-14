import express,{Request,Response} from 'express';
import { getUserByEmail, createUser } from './db.controller';


const login = async (req: Request, res: Response) => {
  try {
    const {name,email,password}=req.body

   

  } catch (error) {
    console.log(error);
    return res.sendStatus(400)
  }
};

const register = async (req: Request, res: Response) => {
  try{
  const {phone_num,name,email,password,Wishlist} = req.body

  if (!phone_num||!name||!email||!password){
    return res.status(400).json({"message":"maybe u dindt fill all value"})
  }

  const existingUser = await getUserByEmail(email);
  
  if (existingUser) {
    return res.status(400).json({"message":"user already exist!"});
  }

  const user = await createUser({
    phone_num,
    name,
    email,
    authentication:{
      password
    },
    Wishlist
  })

  return res.status(200).json(user).end();
  }
  catch(error){
    console.log(error)
  }
}

const logout = async (req:Request,res:Response)=>{

}

export default {login,register}