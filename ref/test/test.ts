import * as fs from 'fs'
import * as crypto from 'crypto'

const t = 'hhh'

const publicKey = Buffer.from(
    fs.readFileSync("src/key/public.pem", { encoding: "utf-8" })
  );

const privateKey = fs.readFileSync("src/key/private.pem", { encoding: "utf-8" });


const encryptedData = crypto.publicEncrypt({
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: "sha256"
    },
    Buffer.from(t)
)

const data = encryptedData.toString("base64")
console.log(data)

const decryptedData = crypto.privateDecrypt(
    {
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    Buffer.from(data, "base64")
  )

const data2 = decryptedData.toString("utf-8")
console.log(data2)




