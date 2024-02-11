import express, { NextFunction, Request, Response } from 'express'
import * as http from 'http'
import * as color from 'colors'
import logging from './config/logging'
import auth_routr from './routr/routr.auth'
import merchant_routr from './routr/routr.merchant'
import { BodyParser } from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'

color.enable()

const NAMESPACE = 'Server'
const app = express()
const httpServer = http.createServer(app)


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