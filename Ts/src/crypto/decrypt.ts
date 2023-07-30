import* as fs from 'fs'
import * as crypto from 'crypto'

const encryptedData = 'nB9ge52VTf73EbVWMovrahO9CewAxER+7HsW6QqMnGeIc6CBWUX5ddw1qj9gEKOfBt7eGFg8vekP6kTCxqBHJp3UOPeHVxi6VaWvJSzMS/cOZvwhkUMxEf+BGY+rJIQaB7KDBYonkcP9ydtNBHLaWDExDvUujo8cnVu2FbyDuYC24FItTjnuMDeNGQZUBM6r38kKpgndoDmPHEEISrWYlv4QpNG01DdKx/OAB5Oy9yQeYL0S7srfhGHYrzTI+xeZdLpuuujlXU3o+0GzGJieeRq2cZasOUmNZlnlvy3Dcdy0m6T6IZExFFvGaqreL3+bRoR52GqivBpAcjmmKCDBkw=='


// fs.readFileSync("encrypted_data.txt", {
//   encoding: "utf-8",
// });


const privateKey = fs.readFileSync("src/key/private.pem", { encoding: "utf-8" });

const decryptedData = crypto.privateDecrypt(
  {
    key: privateKey,
    // In order to decrypt the data, we need to specify the
    // same hashing function and padding scheme that we used to
    // encrypt the data in the previous step
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: "sha256",
  },
  Buffer.from(encryptedData, "base64")
);

const data = decryptedData.toString('utf-8')
console.log(data)

// fs.writeFileSync("decrypted_data.txt", decryptedData.toString("utf-8"), {
//   encoding: "utf-8",
// });