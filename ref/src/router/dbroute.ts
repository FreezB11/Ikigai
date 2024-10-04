import {Request, Response, Router} from 'express'
const db = './src/db';
import * as fs from 'fs'
import * as path from 'path'
import * as crypto from 'crypto'
import * as yaml from 'yaml'
const router = Router()

enum func{
    get =  '/',
    all =  '/all',
    update =  '/update',
    delete = '/delete/:id',
}

router.use((_:Request, res:Response, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get(func.get,(_:Request,res:Response)=>{
    res.send('db here')
})

router.get(func.all,(_:Request, res:Response) =>{
    var usr_list: any = [];
    fs.readdir(db, (err: any, files: any[]) => {
        files.forEach(file => {
            usr_list.push(file)
            //res.status(400).json({message:file}) ///// here decryption will be done
        });
      });

    res.status(400).json({message:usr_list})
    // res.send('hello')
})

export default router