import express, { NextFunction, Request, Response } from 'express'
import dbroute from './router/dbroute'
import * as http from 'http'
import logging from './config/logging'
import register from './view/register'
import login from './view/login'
import home from './view/home'
import db from './db'
import { encrypt_password } from './crypto/encrypt'
import { User } from './model/user.model'
import * as color from 'colors'

color.enable()


const NAMESPACE = 'Server'
const app = express()
const httpServer = http.createServer(app)
 
app.use((req, res, next) => {
    /** Log the req */
    logging.info(NAMESPACE.blue, `METHOD: [${req.method.red}] - URL: [${req.url.green}] - IP: [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        /** Log the res */
        logging.info(NAMESPACE.blue, `METHOD: [${req.method.red}] - URL: [${req.url.green}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    })
    next();
})

app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
app.use(express.static(__dirname + '/public'));

app.get('/',home.home)
app.get('/register',register.register )

app.post('/register',(req:Request,res:Response,next:NextFunction)=>{
    const username = req.body.username
    const mail = req.body.email
    const password = req.body.password

    if (username == 0 || mail == 0 || password == 0){
        res.status(400).json({message:"field mandatory"})
    }
    else{      
        db.add('usr_data',username,mail,password)
        res.redirect('/db')
    }
})

app.get('/login',login.login)

app.post('/login',(req:Request,res:Response,next:NextFunction)=>{
    const mail = req.body.email
    const password = req.body.password
})

app.use('/db',dbroute)
export = app; httpServer;
