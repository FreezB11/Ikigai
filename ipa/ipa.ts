import express, { NextFunction, Request, Response } from 'express'
import session from 'express-session'
import mongoose from 'mongoose'
import * as http from 'http'
import passport from 'passport'
import passportLocal from "passport-local";
import * as color from 'colors'
import logging from './config/logging'
import auth_routr from './routr/routr.auth'
import merchant_routr from './routr/routr.merchant'
import usr_routr from './routr/routr.user'
import UsrModel from './models/usr.model'
import { BodyParser } from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import bcrpt from 'bcrypt'
import dotenv from 'dotenv'

color.enable()
dotenv.config({path:'./ipa/.env'})

const NAMESPACE = 'Server'
const app = express()
const httpServer = http.createServer(app)
const URI:string = `${process.env.URI}`;


app.use(session({
    secret:`${process.env.SECRET}`,
    resave:false,
    saveUninitialized:true,
}))
app.use(express.urlencoded({extended:false}));
app.use(cors({credentials:true,}))
app.use(cookieParser())
app.use(compression())
app.use(express.json());                      
app.use(express.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    /** Log the req */
    logging.info(NAMESPACE.blue, `METHOD: [${req.method.red}] - URL: [${req.url.green}] - IP: [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        /** Log the res */
        logging.info(NAMESPACE.blue, `METHOD: [${req.method.red}] - URL: [${req.url.green}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    })
    next();
})


app.get('/',(req:Request,res:Response)=>{
    res.send("hello")
})


app.use('/auth',auth_routr)
app.use('/merchant',merchant_routr)
app.use('/user',usr_routr)

app.use('/register',(req:Request,res:Response)=>{
    res.json({"message":"success"})
})

// DB setup 
const connection = mongoose.connect(URI);




export = app; httpServer;