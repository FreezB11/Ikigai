import { NextFunction, Request, Response } from 'express';


const home = (req: Request, res: Response, next: NextFunction) => {
    return res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="js/home_page.js"></script>
        <link rel="stylesheet" type="text/css" href="css/home_page.css">
    </head>
    <body>
    <canvas id="canva"></canvas>

    </body>
    </html>
    `)
};

export default {home} 