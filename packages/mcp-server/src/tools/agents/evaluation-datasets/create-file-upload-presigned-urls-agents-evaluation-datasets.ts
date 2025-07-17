// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.evaluation_datasets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/gen-ai/evaluation_datasets/file_upload_presigned_urls',
  operationId: 'create_evaluation_dataset_file_upload_presigned_urls',
};

export const tool: Tool = {
  name: 'create_file_upload_presigned_urls_agents_evaluation_datasets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo create presigned URLs for evaluation dataset file upload, send a POST request to `/v2/gen-ai/evaluation_datasets/file_upload_presigned_urls`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Response with pre-signed urls to upload files.',\n  properties: {\n    request_id: {\n      type: 'string',\n      description: 'The ID generated for the request for Presigned URLs.'\n    },\n    uploads: {\n      type: 'array',\n      description: 'A list of generated presigned URLs and object keys, one per file.',\n      items: {\n        type: 'object',\n        description: 'Detailed info about each presigned URL returned to the client.',\n        properties: {\n          expires_at: {\n            type: 'string',\n            description: 'The time the url expires at.',\n            format: 'date-time'\n          },\n          object_key: {\n            type: 'string',\n            description: 'The unique object key to store the file as.'\n          },\n          original_file_name: {\n            type: 'string',\n            description: 'The original file name.'\n          },\n          presigned_url: {\n            type: 'string',\n            description: 'The actual presigned URL the client can use to upload the file directly.'\n          }\n        },\n        required: []\n      }\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      files: {
        type: 'array',
        description: 'A list of files to generate presigned URLs for.',
        items: {
          type: 'object',
          description: 'A single file’s metadata in the request.',
          properties: {
            file_name: {
              type: 'string',
              title: 'local filename',
            },
            file_size: {
              type: 'string',
              description: 'The size of the file in bytes.',
            },
          },
          required: [],
        },
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
  const body = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.agents.evaluationDatasets.createFileUploadPresignedURLs(body)),
  );
};

export default { metadata, tool, handler };
