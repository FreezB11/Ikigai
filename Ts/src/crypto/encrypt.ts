import* as fs from 'fs'
import * as crypto from 'crypto'

const dataToEncrypt = 'hello'

const publicKey = Buffer.from(
  fs.readFileSync("src/key/public.pem", { encoding: "utf-8" })
);

const encryptedData = crypto.publicEncrypt(
  {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: "sha256",
  },
  // We convert the data string to a buffer using `Buffer.from`
  Buffer.from(dataToEncrypt)
);

const data = encryptedData.toString("base64")
console.log(data)