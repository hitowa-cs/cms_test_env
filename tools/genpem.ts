/* vim: set ts=4 sw=4 tw=0: */
import { generateKeyPairSync } from 'crypto';
import * as fs from 'fs';

const {
	publicKey,
	privateKey,
} = generateKeyPairSync('rsa', {
	modulusLength: 2048 ,
	publicKeyEncoding: {
		type: 'spki',
		format: 'pem'
	},
	privateKeyEncoding: {
		type: 'pkcs8',
		format: 'pem'
	}
});

if(!fs.existsSync("./.secret")) {
	fs.mkdir("./.secret", (err) => {
		if (err) { throw err; }
		console.log('Make a .secret directory: ./.secret/');
	});
}
fs.writeFile("./.secret/public.pem", publicKey, (err) => {
	if (err) throw err;
	console.log("create: public.pem:\n", publicKey);
});

fs.writeFile("./.secret/private.pem", privateKey, (err) => {
	if (err) throw err;
	console.log("create: private.pem:\n", privateKey);
});
