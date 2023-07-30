const testFolder = './src/';
import * as fs from 'fs'
import * as path from 'path'

// fs.readdir(testFolder, (err: any, files: any[]) => {
//   files.forEach(file => {
//     console.log(file); ///// here decryption will be done
//   });
// });



// var data = `{
//   "name":"${name}",
//   "age":10
// }`

//Create and write to file
function add(uuid: string, data:string){
  fs.writeFile(
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

export default {add} as const;