// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'databases.schema_registry.config',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/databases/{database_cluster_uuid}/schema-registry/config/{subject_name}',
  operationId: 'databases_update_kafka_schema_subject_config',
};

export const tool: Tool = {
  name: 'update_subject_schema_registry_databases_config',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo update the Schema Registry configuration for a Subject of a Kafka cluster, send a PUT request to\n`/v2/databases/$DATABASE_ID/schema-registry/config/$SUBJECT_NAME`.\nThe response is a JSON object with a `compatibility_level` key, which is set to an object\ncontaining any database configuration parameters.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    compatibility_level: {\n      type: 'string',\n      description: 'The compatibility level of the schema registry.',\n      enum: [        'NONE',\n        'BACKWARD',\n        'BACKWARD_TRANSITIVE',\n        'FORWARD',\n        'FORWARD_TRANSITIVE',\n        'FULL',\n        'FULL_TRANSITIVE'\n      ]\n    },\n    subject_name: {\n      type: 'string',\n      description: 'The name of the schema subject.'\n    }\n  },\n  required: [    'compatibility_level',\n    'subject_name'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      database_cluster_uuid: {
        type: 'string',
      },
      subject_name: {
        type: 'string',
      },
      compatibility_level: {
        type: 'string',
        description: 'The compatibility level of the schema registry.',
        enum: [
          'NONE',
          'BACKWARD',
          'BACKWARD_TRANSITIVE',
          'FORWARD',
          'FORWARD_TRANSITIVE',
          'FULL',
          'FULL_TRANSITIVE',
        ],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['database_cluster_uuid', 'subject_name', 'compatibility_level'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { subject_name, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.databases.schemaRegistry.config.updateSubject(subject_name, body)),
  );
};

export default { metadata, tool, handler };
