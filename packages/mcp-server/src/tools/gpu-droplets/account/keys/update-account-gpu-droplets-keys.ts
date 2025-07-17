// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets.account.keys',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/account/keys/{ssh_key_identifier}',
  operationId: 'sshKeys_update',
};

export const tool: Tool = {
  name: 'update_account_gpu_droplets_keys',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo update the name of an SSH key, send a PUT request to either `/v2/account/keys/$SSH_KEY_ID` or `/v2/account/keys/$SSH_KEY_FINGERPRINT`. Set the `name` attribute to the new name you want to use.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    ssh_key: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string',\n          description: 'A human-readable display name for this key, used to easily identify the SSH keys when they are displayed.'\n        },\n        public_key: {\n          type: 'string',\n          description: 'The entire public key string that was uploaded. Embedded into the root user\\'s `authorized_keys` file if you include this key during Droplet creation.'\n        },\n        id: {\n          type: 'integer',\n          description: 'A unique identification number for this key. Can be used to embed a  specific SSH key into a Droplet.'\n        },\n        fingerprint: {\n          type: 'string',\n          description: 'A unique identifier that differentiates this key from other keys using  a format that SSH recognizes. The fingerprint is created when the key is added to your account.'\n        }\n      },\n      required: [        'name',\n        'public_key'\n      ]\n    }\n  },\n  required: []\n}\n```",
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
      name: {
        type: 'string',
        description:
          'A human-readable display name for this key, used to easily identify the SSH keys when they are displayed.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { ssh_key_identifier, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.gpuDroplets.account.keys.update(ssh_key_identifier, body)),
  );
};

export default { metadata, tool, handler };
