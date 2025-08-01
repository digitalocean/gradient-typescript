// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.account.keys',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/account/keys/{ssh_key_identifier}',
  operationId: 'sshKeys_delete',
};

export const tool: Tool = {
  name: 'delete_account_gpu_droplets_keys',
  description:
    'To destroy a public SSH key that you have in your account, send a DELETE request to `/v2/account/keys/$KEY_ID` or `/v2/account/keys/$KEY_FINGERPRINT`.\nA 204 status will be returned, indicating that the action was successful and that the response body is empty.',
  inputSchema: {
    type: 'object',
    properties: {
      ssh_key_identifier: {
        anyOf: [
          {
            type: 'integer',
            description:
              'A unique identification number for this key. Can be used to embed a  specific SSH key into a Droplet.',
          },
          {
            type: 'string',
            description:
              'A unique identifier that differentiates this key from other keys using  a format that SSH recognizes. The fingerprint is created when the key is added to your account.',
          },
        ],
        description:
          'A unique identification number for this key. Can be used to embed a  specific SSH key into a Droplet.',
      },
    },
    required: ['ssh_key_identifier'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { ssh_key_identifier, ...body } = args as any;
  const response = await client.gpuDroplets.account.keys.delete(ssh_key_identifier).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
