import * as crypto from 'crypto'
import* as fs from 'fs'

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
});

const exportedPublicKeyBuffer = publicKey.export({
  type: "pkcs1",
  format: "pem",
});
fs.writeFileSync("src/key/public.pem", exportedPublicKeyBuffer, { encoding: "utf-8" });

const exportedPrivateKeyBuffer = privateKey.export({
  type: "pkcs1",
  format: "pem",
});
fs.writeFileSync("src/key/private.pem", exportedPrivateKeyBuffer, {
  encoding: "utf-8",
});