import express,{Request,Response} from 'express';
import { getUserByEmail, createUser } from './db.controller';


const login = async (req: Request, res: Response) => {
  try {
    const {email,password}=req.body
    if(!email||!password){
      res.status(400).json({"ERROR":"looks like u r missing smtg!!"})
    }
    const user = await getUserByEmail(email).select('+authentication.password');
    if(!user){
      res.status(400).json({"ERR":"looks like u didnt register dude"})
    }

    console.log(user?.authentication?.password)
    console.log(password)

    if(user?.authentication?.password == password){
      res.status(200).json({"ERR":"checking.....pswd is ok"})
    }else{
      console.log("testing....... pswd is wrong")
      res.status(404).json({"msg":"sry"})
    }

    console.log("welcome")
    // return res.status(200).json({"messasge":"welcome dude"})

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