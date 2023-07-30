import {Request, Response, Router} from 'express'

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
    res.send('hello')
})

export default router