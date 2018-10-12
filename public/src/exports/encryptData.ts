import Raven from 'raven-js';

// TODO: Get this key from the server, save the key as an evironment variable in an http cloud function
const jwk: JsonWebKey = {
    alg: 'A256CTR',
    ext: true,
    k: 'r-xujZASG0bp-X-T0goxe3mUcADwquZmFsuAyM7Ru-w',
    key_ops: [ 'encrypt', 'decrypt'],
    kty: 'oct',
};

const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

const importKey = async (key: JsonWebKey): Promise<CryptoKey> => {
    try {
      const encrpytionMethods: string[] =  ['encrypt', 'decrypt'];
      return await crypto.subtle.importKey('jwk', key, 'AES-CTR', false, encrpytionMethods);
    } catch (e) {
      Raven.captureException(e);
      throw e;
    }
  };

const EncryptData = async (data: string): Promise<string> => {
    try {
      const alg: AesCtrParams = { name: 'AES-CTR', counter: new Uint8Array(16), length: 128 };
      const key: CryptoKey = await importKey(jwk);
      const encodedData: Uint8Array = new TextEncoder().encode(data);
      const encryptedData: ArrayBuffer = await crypto.subtle.encrypt(alg, key, encodedData);
      return arrayBufferToBase64(encryptedData);
    } catch (e) {
        Raven.captureException(e);
        throw e;
    }
  };

export default EncryptData;
