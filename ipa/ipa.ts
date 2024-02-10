import express, { NextFunction, Request, Response } from 'express'
import * as http from 'http'
import * as color from 'colors'
import logging from './config/logging'
import auth_routr from './routr/routr.auth'
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
app.use('/auth',auth_routr)

export = app; httpServer;