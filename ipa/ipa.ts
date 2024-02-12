import express, { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import * as http from 'http'
import * as color from 'colors'
import logging from './config/logging'
import auth_routr from './routr/routr.auth'
import merchant_routr from './routr/routr.merchant'
import { BodyParser } from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import dotenv from 'dotenv'

color.enable()
dotenv.config({path:'./ipa/.env'})

const NAMESPACE = 'Server'
const app = express()
const httpServer = http.createServer(app)
const URI:string = `${process.env.URI}`;
const connection = mongoose.createConnection(URI)

connection.on('connected',()=>{
    console.log("connected to db!!")
})



app.use(cors({
    credentials:true,
}))
app.use(cookieParser())
app.use(compression())


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

app.use(express.json());                      

app.use(express.urlencoded({extended: true}));
app.use('/auth',auth_routr)
app.use('/merchant',merchant_routr)

export = app; httpServer;