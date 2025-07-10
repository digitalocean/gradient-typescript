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
  httpPath: '/v2/gen-ai/evaluation_datasets',
  operationId: 'create_evaluation_dataset',
};

export const tool: Tool = {
  name: 'create_agents_evaluation_datasets',
  description: 'To create an evaluation dataset, send a POST request to `/v2/gen-ai/evaluation_datasets`.',
  inputSchema: {
    type: 'object',
    properties: {
      file_upload_dataset: {
        $ref: '#/$defs/api_file_upload_data_source',
      },
      name: {
        type: 'string',
        description: 'The name of the agent evaluation dataset.',
      },
    },
    $defs: {
      api_file_upload_data_source: {
        type: 'object',
        description: 'File to upload as data source for knowledge base.',
        properties: {
          original_file_name: {
            type: 'string',
            title: 'The original file name',
          },
          size_in_bytes: {
            type: 'string',
            title: 'The size of the file in bytes',
          },
          stored_object_key: {
            type: 'string',
            title: 'The object key the file was stored as',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.agents.evaluationDatasets.create(body));
};

export default { metadata, tool, handler };
