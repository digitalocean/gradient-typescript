// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradient-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'knowledge_bases.data_sources',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources/{data_source_uuid}',
  operationId: 'genai_delete_knowledge_base_data_source',
};

export const tool: Tool = {
  name: 'delete_knowledge_bases_data_sources',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo delete a data source from a knowledge base, send a DELETE request to `/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources/{data_source_uuid}`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Information about a newly deleted knowledge base data source',\n  properties: {\n    data_source_uuid: {\n      type: 'string',\n      description: 'Data source id'\n    },\n    knowledge_base_uuid: {\n      type: 'string',\n      description: 'Knowledge base id'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      knowledge_base_uuid: {
        type: 'string',
      },
      data_source_uuid: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['knowledge_base_uuid', 'data_source_uuid'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { data_source_uuid, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.knowledgeBases.dataSources.delete(data_source_uuid, body)),
  );
};

export default { metadata, tool, handler };
