import* as fs from 'fs'
import * as crypto from 'crypto'

const dataToEncrypt = 'hello'

const publicKey = Buffer.from(
  fs.readFileSync("src/key/public.pem", { encoding: "utf-8" })
);

export function encrypt_password(val:string):string{
  const encryptedData = crypto.publicEncrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    Buffer.from(val)
  );
  const data = encryptedData.toString("base64")
  return data
}

// export default {encrypt_password} as const;