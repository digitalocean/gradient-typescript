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
  httpPath: '/v2/gen-ai/evaluation_metrics',
  operationId: 'list_evaluation_metrics',
};

export const tool: Tool = {
  name: 'list_agents_evaluation_metrics',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list all evaluation metrics, send a GET request to `/v2/gen-ai/evaluation_metrics`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    metrics: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/api_evaluation_metric'\n      }\n    }\n  },\n  $defs: {\n    api_evaluation_metric: {\n      type: 'object',\n      properties: {\n        description: {\n          type: 'string'\n        },\n        metric_name: {\n          type: 'string'\n        },\n        metric_type: {\n          type: 'string',\n          enum: [            'METRIC_TYPE_UNSPECIFIED',\n            'METRIC_TYPE_GENERAL_QUALITY',\n            'METRIC_TYPE_RAG_AND_TOOL'\n          ]\n        },\n        metric_uuid: {\n          type: 'string'\n        },\n        metric_value_type: {\n          type: 'string',\n          enum: [            'METRIC_VALUE_TYPE_UNSPECIFIED',\n            'METRIC_VALUE_TYPE_NUMBER',\n            'METRIC_VALUE_TYPE_STRING'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  return asTextContentResult(await maybeFilter(args, await client.agents.evaluationMetrics.list()));
};

export default { metadata, tool, handler };
