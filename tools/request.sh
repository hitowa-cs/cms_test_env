#!/bin/sh

Expires='CloudFront-Expires'
Signature='CloudFront-Signature'
KeyPair='CloudFront-Key-Pair-Id'
Policy='CloudFront-Policy'


expires='2080403806'
policy=`cat policy.json | openssl base64 -A | tr '+=/' '-_~'`
signature=`cat policy.json | openssl sha1 -sign .secret/private.pem | openssl base64 -A | tr '+=/' '-_~'`
keypairid='K1EXMVV4J9EQ6A'

target='https://dt2qnziicrcht.cloudfront.net'

CMD="curl -H \"Cookie:${Expires}=${expires};${Policy}=${policy};${Signature}=${signature};${KeyPair}=${keypairid};\" ${target}"
echo $CMD

