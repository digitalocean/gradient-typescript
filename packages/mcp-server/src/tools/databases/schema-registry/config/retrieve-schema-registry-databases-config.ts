// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'databases.schema_registry.config',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/databases/{database_cluster_uuid}/schema-registry/config',
  operationId: 'databases_get_kafka_schema_config',
};

export const tool: Tool = {
  name: 'retrieve_schema_registry_databases_config',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo retrieve the Schema Registry configuration for a Kafka cluster, send a GET request to\n`/v2/databases/$DATABASE_ID/schema-registry/config`.\nThe response is a JSON object with a `compatibility_level` key, which is set to an object\ncontaining any database configuration parameters.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    compatibility_level: {\n      type: 'string',\n      description: 'The compatibility level of the schema registry.',\n      enum: [        'NONE',\n        'BACKWARD',\n        'BACKWARD_TRANSITIVE',\n        'FORWARD',\n        'FORWARD_TRANSITIVE',\n        'FULL',\n        'FULL_TRANSITIVE'\n      ]\n    }\n  },\n  required: [    'compatibility_level'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      database_cluster_uuid: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['database_cluster_uuid'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { database_cluster_uuid, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.databases.schemaRegistry.config.retrieve(database_cluster_uuid)),
  );
};

export default { metadata, tool, handler };
