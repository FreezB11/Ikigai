import express, { NextFunction, Request, Response } from 'express'
import * as http from 'http'
import * as color from 'colors'

color.enable()

const NAMESPACE = 'Server'
const app = express()
const httpServer = http.createServer(app)




export = app; httpServer;