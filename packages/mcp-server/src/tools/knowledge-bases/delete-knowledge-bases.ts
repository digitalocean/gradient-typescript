// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'knowledge_bases',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/gen-ai/knowledge_bases/{uuid}',
  operationId: 'genai_delete_knowledge_base',
};

export const tool: Tool = {
  name: 'delete_knowledge_bases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo delete a knowledge base, send a DELETE request to `/v2/gen-ai/knowledge_bases/{uuid}`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Information about a deleted knowledge base',\n  properties: {\n    uuid: {\n      type: 'string',\n      description: 'The id of the deleted knowledge base'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      uuid: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['uuid'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { uuid, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.knowledgeBases.delete(uuid)));
};

export default { metadata, tool, handler };
