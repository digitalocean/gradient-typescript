// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradient-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'agents.versions',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/gen-ai/agents/{uuid}/versions',
  operationId: 'genai_rollback_to_agent_version',
};

export const tool: Tool = {
  name: 'update_agents_versions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo update to a specific agent version, send a PUT request to `/v2/gen-ai/agents/{uuid}/versions`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    audit_header: {\n      type: 'object',\n      description: 'An alternative way to provide auth information. for internal use only.',\n      properties: {\n        actor_id: {\n          type: 'string'\n        },\n        actor_ip: {\n          type: 'string'\n        },\n        actor_uuid: {\n          type: 'string'\n        },\n        context_urn: {\n          type: 'string'\n        },\n        origin_application: {\n          type: 'string'\n        },\n        user_id: {\n          type: 'string'\n        },\n        user_uuid: {\n          type: 'string'\n        }\n      }\n    },\n    version_hash: {\n      type: 'string',\n      description: 'Unique identifier'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      path_uuid: {
        type: 'string',
      },
      body_uuid: {
        type: 'string',
        description: 'Agent unique identifier',
      },
      version_hash: {
        type: 'string',
        description: 'Unique identifier',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['path_uuid'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { uuid, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.agents.versions.update(uuid, body)));
};

export default { metadata, tool, handler };
