// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.evaluation_metrics.workspaces',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/gen-ai/workspaces/{workspace_uuid}',
  operationId: 'genai_delete_workspace',
};

export const tool: Tool = {
  name: 'delete_evaluation_metrics_agents_workspaces',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo delete a workspace, send a DELETE request to `/v2/gen-ai/workspace/{workspace_uuid}`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    workspace_uuid: {\n      type: 'string',\n      description: 'Workspace'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      workspace_uuid: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['workspace_uuid'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { workspace_uuid, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.agents.evaluationMetrics.workspaces.delete(workspace_uuid)),
  );
};

export default { metadata, tool, handler };
