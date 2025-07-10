// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'regions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/regions',
  operationId: 'list_datacenter_regions',
};

export const tool: Tool = {
  name: 'list_regions',
  description: 'To list all datacenter regions, send a GET request to `/v2/gen-ai/regions`.',
  inputSchema: {
    type: 'object',
    properties: {
      serves_batch: {
        type: 'boolean',
        description: 'include datacenters that are capable of running batch jobs.',
      },
      serves_inference: {
        type: 'boolean',
        description: 'include datacenters that serve inference.',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.regions.list(body));
};

export default { metadata, tool, handler };
