import { getCdkHandlerPath } from '@swarmion/serverless-helpers';
import { Architecture, Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

export class getUser extends Construct {
  public getUserLambda: NodejsFunction;
  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.getUserLambda = new NodejsFunction(this, 'Lambda', {
      entry: getCdkHandlerPath(__dirname),
      handler: 'main',
      runtime: Runtime.NODEJS_16_X,
      architecture: Architecture.ARM_64,
      awsSdkConnectionReuse: true,
    });
  }
}
