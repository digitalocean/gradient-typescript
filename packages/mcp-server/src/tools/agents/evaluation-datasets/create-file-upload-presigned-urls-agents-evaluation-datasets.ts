// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
    'To create presigned URLs for evaluation dataset file upload, send a POST request to `/v2/gen-ai/evaluation_datasets/file_upload_presigned_urls`.',
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
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.agents.evaluationDatasets.createFileUploadPresignedURLs(body));
};

export default { metadata, tool, handler };
