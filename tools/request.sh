#!/bin/sh

Expires='CloudFront-Expires'
Signature='CloudFront-Signature'
KeyPair='CloudFront-Key-Pair-Id'

expires='2080403806'
signature=`cat policy.json | tr -d "\n" | tr -d " \t\n\r" | openssl sha1 -sign .secret/private.pem | openssl base64 -A | tr -- '+=/' '-_~' | tr -d '\n'`
keypairid='KP1F0KGTEC9XX'

target='https://dt2qnziicrcht.cloudfront.net'

CMD="curl -H \"Cookie:${Expires}=${expires};${Signature}=${signature};${KeyPair}=${keypairid};\" ${target}"
echo $CMD

