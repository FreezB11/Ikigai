import express, { NextFunction, Request, Response } from 'express'
import dbroute from './router/dbroute'
import * as http from 'http'
import logging from './config/logging'
import index from './view/index'
import db from './db'
import { User } from './model/user.model'

const NAMESPACE = 'Server'
const app = express()
const httpServer = http.createServer(app)
 
app.use((req, res, next) => {
    /** Log the req */
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        /** Log the res */
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    })
    next();
})


app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
app.get('/',index.index )

app.post('/',(req:Request,res:Response,next:NextFunction)=>{
    const username = req.body.username
    const mail = req.body.email
    const password = req.body.password

    if (username == null ){
        res.status(400).json({message:"field mandatory"})
    }
    else{
        const data = `
        user:
            name: ${username}
            email: ${mail}
            pswd: ${password}
        `
        
        db.add('test2',data)


        res.redirect('/db')
    }
})

app.use('/db',dbroute)

export = app; httpServer;
