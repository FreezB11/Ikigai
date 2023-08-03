import * as crypto from 'crypto'
import* as fs from 'fs'


const publicKey = Buffer.from(
  fs.readFileSync("src/key/public.pem", { encoding: "utf-8" })
);

function crypt(val:string){
  const hash = crypto.createHmac('sha256', publicKey)
                 .update(val)
                 .digest('hex');
}

// console.log(hash);

export default {crypt} as const;