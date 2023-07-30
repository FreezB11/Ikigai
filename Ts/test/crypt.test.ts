import * as crypto from 'crypto'
import* as fs from 'fs'


const publicKey = Buffer.from(
  fs.readFileSync("src/key/public.pem", { encoding: "utf-8" })
);

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', publicKey)
               .update('I love cupcakes')
               .digest('hex');
console.log(hash);