const crypto = require('crypto');
const express = require("express");
// Initialize Express
const app = express();
// Create GET request
app.get("/createkeypair/:KEY", (req, res) => {

  // Generate key pair
  var { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'pkcs1',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs1',
      format: 'pem'
    }
  });
  // Convert keys to plaintext
  var privateKeyPlaintext = privateKey.toString('utf-8');
  var publicKeyPlaintext = publicKey.toString('utf-8');

  console.log('Private Key:');
  console.log(privateKeyPlaintext);

  console.log('Public Key:');
  console.log(publicKeyPlaintext);

});
module.exports = app;