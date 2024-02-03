const testFolder = './src/';
import * as fs from 'fs'
import * as path from 'path'
import * as crypto from 'crypto'
import * as yaml from 'yaml'
import { encrypt_password } from './crypto/encrypt'
import {readFileSync, promises as fsPromises} from 'fs'
// fs.readdir(testFolder, (err: any, files: any[]) => {
//   files.forEach(file => {
//     console.log(file); ///// here decryption will be done
//   });
// });

const publicKey = Buffer.from(
  fs.readFileSync("src/key/public.pem", { encoding: "utf-8" })
);

function crypt(val:string):string{
  const hash = crypto.createHmac('sha256', publicKey)
                 .update(val)
                 .digest('hex');

  return hash
}

function add(fname: string, username:string,mail:string,password:string){

  const id:string = crypt(mail)
  const hash_password = encrypt_password(password)

  const data =`
  name: ${username}
  email: ${mail}
  pswd: ${hash_password}
  `

  fs.appendFile(
    path.join(__dirname, '/db', `${fname}.yaml`), data ,
    err => {
      if (err) throw err;
      console.log('File written to...');
    }
  );
}

function check_usr(str:string){
  const id:string = crypt(str)
  const check = fs.existsSync(`src/db/${id}.yaml`)
  console.log(check)
  return check
}


// delete file named 'sample.txt'
// fs.unlink('sample.txt', function (err) {
//   if (err) throw err;
//   // if no error, file has been deleted successfully
//   console.log('File deleted!');
// });

export default {add,crypt,check_usr} as const;