"use strict";
exports.__esModule = true;
/* vim: set ts=4 sw=4 tw=0: */
var crypto_1 = require("crypto");
var fs = require("fs");
var _a = (0, crypto_1.generateKeyPairSync)('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
}), publicKey = _a.publicKey, privateKey = _a.privateKey;
if (!fs.existsSync("./.secret")) {
    fs.mkdir("./.secret", function (err) {
        if (err) {
            throw err;
        }
        console.log('Make a .secret directory: ./.secret/');
    });
}
fs.writeFile("./.secret/public.pem", publicKey, function (err) {
    if (err)
        throw err;
    console.log("create: public.pem:\n", publicKey);
});
fs.writeFile("./.secret/private.pem", privateKey, function (err) {
    if (err)
        throw err;
    console.log("create: private.pem:\n", privateKey);
});
