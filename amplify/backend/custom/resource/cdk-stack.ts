/* vim: set ts=4 sw=4 tw=0: */

import * as fs from 'fs'

import {
	Stack,
	StackProps,
	CfnParameter,
	CfnResource,
	Construct,
	CfnOutput,
	Fn
} from '@aws-cdk/core';
import { 
	AmplifyResourceProps,
	addResourceDependency,
} from '@aws-amplify/cli-extensibility-helper';

import {
	CachePolicy,
	CacheCookieBehavior,
	ViewerProtocolPolicy,
	OriginRequestPolicy,
	OriginRequestCookieBehavior,
	Distribution,
	OriginAccessIdentity,
	PublicKey,
	KeyGroup,
} from '@aws-cdk/aws-cloudfront'
import {
	S3Origin
} from '@aws-cdk/aws-cloudfront-origins'
import {
	Bucket
} from '@aws-cdk/aws-s3'
import { AmplifyDependentResourcesAttributes } from '../../types/amplify-dependent-resources-ref';
import { generateKeyPairSync } from 'crypto';

export class cdkStack extends Stack {
	constructor(scope: Construct, id: string, props?: StackProps,
		amplifyResourceProps?: AmplifyResourceProps) {
		super(scope, id, props);

		/* Do not remove - Amplify CLI automatically injects the current deployment */
		/* environment in this input parameter */
		new CfnParameter(this, 'env', {
			type: 'String',
			description: 'Current Amplify CLI env name',
		});

		const dependencies: AmplifyDependentResourcesAttributes =
			addResourceDependency(this,
				amplifyResourceProps.category,
				amplifyResourceProps.resourceName,
				[{
					category: "hosting", // api, auth, storage, function, etc.
					resourceName: "S3AndCloudFront" 
					// find the resource at "amplify/backend/<category>/<resourceName>"
				}/* add more dependencies as needed */ ]
			);
		const distributionId = Fn.ref(dependencies.hosting.S3AndCloudFront.CloudFrontDistributionID);
		const cloudfrontDomainName = Fn.ref(dependencies.hosting.S3AndCloudFront.CloudFrontDomainName);
		const bucketName = Fn.ref(dependencies.hosting.S3AndCloudFront.HostingBucketName);
		const originAccessIdentity = Fn.ref(dependencies.hosting.S3AndCloudFront.CloudFrontOriginAccessIdentity);

		// バケットを特定する
		const websiteBucket = Bucket.fromBucketAttributes(this,'Bucket', {
			bucketName: bucketName,
		});

		// orgin access identity idを特定する
		const originAccessIdentityId =	
				OriginAccessIdentity.fromOriginAccessIdentityName(
					this, 'OriginAccessIdentityId', originAccessIdentity);

		const publicKey = fs.readFileSync(".secret/public.pem", "utf8");

		// Create a key group to use with CloudFront signed URLs and signed cookies.
		const keyGroup = new KeyGroup(this, "trustedKeyGroup1", {
			items: [
				new PublicKey(this, 'trustedPublicKey1', {
					encodedKey: publicKey, // contents of public_key.pem file
					// comment: 'Key is expiring on ...',
					}),
			],
			// comment: 'Key group containing public keys ...',
		});

		new CfnOutput(this, `PublicKey`, { value: publicKey });
		new CfnOutput(this, `trustedKeyGroupId`, { value: keyGroup.keyGroupId });

		const originRequestPolicy =	new OriginRequestPolicy(this, 'originRequestPolicy', {
										cookieBehavior: OriginRequestCookieBehavior.all()
									});
		const cachePolicy =  new CachePolicy(this, 'CachePolicy', {
										cookieBehavior: CacheCookieBehavior.all()
									});
		const originDocs =  new S3Origin(websiteBucket, {
										originAccessIdentity: originAccessIdentityId,
										originPath: '/docs'
									});
		const originDirect = new S3Origin(websiteBucket, {
										originAccessIdentity: originAccessIdentityId,
										originPath: '/'
									});

		const distribution = new Distribution( this, 'DistributionIris', {
			defaultRootObject: 'index.html',
			defaultBehavior: {
				origin: originDocs,
				viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
				originRequestPolicy: originRequestPolicy,
				cachePolicy: cachePolicy,
				trustedKeyGroups: [ keyGroup ],
			},
		});
		distribution.addBehavior('/assets*', originDirect,
			{
				viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
				originRequestPolicy: originRequestPolicy,
				cachePolicy: cachePolicy,
				trustedKeyGroups: [ keyGroup ],
			}
		);
		distribution.addBehavior('/images*', originDirect,
			{
				viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
				originRequestPolicy: originRequestPolicy,
				cachePolicy: cachePolicy,
				trustedKeyGroups: [ keyGroup ],
			}
		);
		distribution.addBehavior('/*', originDocs,
			{
				viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
				originRequestPolicy: originRequestPolicy,
				cachePolicy: cachePolicy,
				trustedKeyGroups: [ keyGroup ],
			}
		);
	}

	private lookup(obj, path) {
		const keys = path.split('.');
		for (let k in keys) {
			const key = keys[k];

			if(!obj.hasOwnProperty(key)) { 
				return null; 
			}
			if (keys.length > 1) {
				return this.lookup(obj[key], keys.splice(1).join('.'));
			}
			return obj[key];
		}
	}

}
