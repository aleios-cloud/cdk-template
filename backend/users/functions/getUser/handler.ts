/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { APIGatewayProxyResult } from 'aws-lambda';

export const main = async (event: {
  body: string;
}): Promise<APIGatewayProxyResult> => {
  const userId = JSON.parse(event.body)?.userId;

  await Promise.resolve({ userId });
  const result = {
    statusCode: 200,
    body: JSON.stringify(userId),
  };

  return result;
};
