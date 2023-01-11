import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { LambdaIntegration } from 'aws-cdk-lib/aws-apigateway';
// import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

import { getUser } from 'functions/getUser/config';

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class UsersStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const userLambda = new getUser(this, 'Users');
    const userLambdaIntegration = new LambdaIntegration(
      userLambda.getUserLambda,
    );

    const api = new apigateway.RestApi(this, 'users-api', {
      restApiName: 'Users Service',
      description: 'This service serves users.',
    });

    /*
    const getUserIntegration = new apigateway.LambdaIntegration(handler, {
      requestTemplates: { 'application/json': '{ "statusCode": "200" }' },
    });
    */

    api.root.addMethod('POST', userLambdaIntegration);
  }
}
