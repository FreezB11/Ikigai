const db = './src/db';
import * as fs from 'fs'
import * as path from 'path'
import * as crypto from 'crypto'
import * as yaml from 'yaml'
import { encrypt_password } from './crypto/encrypt'
import {readFileSync, promises as fsPromises} from 'fs'


function show_usrs(){
  fs.readdir(db, (err: any, files: any[]) => {
    files.forEach(file => {
      console.log(file); ///// here decryption will be done
    });
  });
}

const publicKey = Buffer.from(
  fs.readFileSync("src/key/public.pem", { encoding: "utf-8" })
);

function crypt(val:string):string{
  const hash = crypto.createHmac('sha256', publicKey)
                 .update(val)
                 .digest('hex');

  return hash
}

function add_usr(fname: string, username:string,mail:string,password:string){
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

function delete_usr(mail:string){
  const usr:string = crypt(mail)
  fs.unlink(`src/db/${usr}.yaml`, function (err) {
    if (err) throw err;
    // if no error, file has been deleted successfully
    console.log('File deleted!');
  });
}

function verify_usr(mail:string,password:string){
  
}

// delete file named 'sample.txt'
// fs.unlink('sample.txt', function (err) {
//   if (err) throw err;
//   // if no error, file has been deleted successfully
//   console.log('File deleted!');
// });

export default {
  add_usr,
  crypt,
  check_usr,
  delete_usr,
  show_usrs,
  verify_usr
} as const;