// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.evaluation_metrics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/regions',
  operationId: 'list_datacenter_regions',
};

export const tool: Tool = {
  name: 'list_regions_agents_evaluation_metrics',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list all datacenter regions, send a GET request to `/v2/gen-ai/regions`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Region Codes',\n  properties: {\n    regions: {\n      type: 'array',\n      title: 'region code',\n      items: {\n        type: 'object',\n        title: 'Description for a specific Region',\n        properties: {\n          inference_url: {\n            type: 'string',\n            title: 'url for inference server'\n          },\n          region: {\n            type: 'string',\n            title: 'region code'\n          },\n          serves_batch: {\n            type: 'boolean',\n            title: 'this datacenter is capable of running batch jobs'\n          },\n          serves_inference: {\n            type: 'boolean',\n            title: 'this datacenter is capable of serving inference'\n          },\n          stream_inference_url: {\n            type: 'string',\n            title: 'the url for the inference streaming server'\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.agents.evaluationMetrics.listRegions(body)),
  );
};

export default { metadata, tool, handler };
