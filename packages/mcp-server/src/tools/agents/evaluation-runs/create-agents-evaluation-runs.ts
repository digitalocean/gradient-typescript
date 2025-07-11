// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.evaluation_runs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/gen-ai/evaluation_runs',
  operationId: 'run_evaluation_test_case',
};

export const tool: Tool = {
  name: 'create_agents_evaluation_runs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo run an evaluation test case, send a POST request to `/v2/gen-ai/evaluation_runs`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    evaluation_run_uuids: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      agent_uuids: {
        type: 'array',
        description: 'Agent UUIDs to run the test case against.',
        items: {
          type: 'string',
        },
      },
      run_name: {
        type: 'string',
        description: 'The name of the run.',
      },
      test_case_uuid: {
        type: 'string',
        title: 'Test-case UUID to run',
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
  return asTextContentResult(await maybeFilter(args, await client.agents.evaluationRuns.create(body)));
};

export default { metadata, tool, handler };
