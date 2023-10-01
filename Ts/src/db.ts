const testFolder = './src/';
import * as fs from 'fs'
import * as path from 'path'
import * as crypto from 'crypto'
import * as yaml from 'yaml'

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

function add(uuid: string, data:string){
  fs.appendFile(
    path.join(__dirname, '/db', `${uuid}.yaml`), data ,
    err => {
      if (err) throw err;
      console.log('File written to...');
    }
  );
}

function fetch(){

}

// delete file named 'sample.txt'
// fs.unlink('sample.txt', function (err) {
//   if (err) throw err;
//   // if no error, file has been deleted successfully
//   console.log('File deleted!');
// });

export default {add,crypt,fetch} as const;