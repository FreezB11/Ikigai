import { NextFunction, Request, Response } from 'express';


const login = (req: Request, res: Response, next: NextFunction) => {
    return res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" type="text/css" href="css/register_page.css">
    </head>
    <body>
    <div class="card">
        <h1>Register</h1>
        <form action="/login" method="post">
            Username
            <input type="text" name="username">
            </br>
            Email
            <input types="text" name="email">
            </br>
            Password
            <input type="password" name="password">
            <button type="submit">Register</button>
        </form>
    </div>
    </body>
    </html>
    `)
};

export default {login} 