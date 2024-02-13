import express,{Request,Response} from 'express';
import UsrModel from '../models/usr.model';
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
  try {
    const {phone_num,name,email,password}=req.body

    if (!email || !password || !name) {
      return res.sendStatus(400);
    }

    //const existingUser = await getUserByEmail(email);
  
    // if (existingUser) {
    //   return res.sendStatus(400);
    // }

  //  const user = new UsrModel({"phone_num":89898989898,"name":"yashashas","email":"yasaas@yasgy","password":"kjadhkjasdkas"})

    const user = await createUser({
      phone_num,
      email,
      name,
      authentication: {
        password: password,
      },
    });

    return res.status(200).json(user).end();

  } catch (error) {
    console.log(error);
    return res.sendStatus(400)
  }
}

const logout = async (req:Request,res:Response)=>{

}

export default {login,register}