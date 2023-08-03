const testFolder = './src/';
import * as fs from 'fs'
import * as path from 'path'
import * as crypto from 'crypto'

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

// var data = `{
//   "name":"${name}",
//   "age":10
// }`

//Create and write to file
function add(uuid: string, data:string){
  fs.appendFile(
    path.join(__dirname, '/db', `${uuid}.yaml`), data ,
    err => {
      if (err) throw err;
      console.log('File written to...');
    
      // File append
      // fs.appendFile(
      //   path.join(__dirname, '/db', 'hello.txt'),
      //   ' I love Node.js',
      //   err => {
      //     if (err) throw err;
      //     console.log('File written to...');
      //   }
      // );
    }
  );
}

// delete file named 'sample.txt'
// fs.unlink('sample.txt', function (err) {
//   if (err) throw err;
//   // if no error, file has been deleted successfully
//   console.log('File deleted!');
// });

export default {add,crypt} as const;