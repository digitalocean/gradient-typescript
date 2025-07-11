// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/agents/{uuid}/versions',
  operationId: 'list_agent_versions',
};

export const tool: Tool = {
  name: 'list_agents_versions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list all agent versions, send a GET request to `/v2/gen-ai/agents/{uuid}/versions`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'List of agent versions',\n  properties: {\n    agent_versions: {\n      type: 'array',\n      title: 'Agents',\n      items: {\n        type: 'object',\n        title: 'Represents an AgentVersion entity',\n        properties: {\n          id: {\n            type: 'string',\n            title: 'unique identifier'\n          },\n          agent_uuid: {\n            type: 'string',\n            title: 'uuid of the agent this version belongs to'\n          },\n          attached_child_agents: {\n            type: 'array',\n            title: 'list of child agent relationships',\n            items: {\n              type: 'object',\n              properties: {\n                agent_name: {\n                  type: 'string',\n                  title: 'name of the child agent'\n                },\n                child_agent_uuid: {\n                  type: 'string',\n                  title: 'child agent unique identifier'\n                },\n                if_case: {\n                  type: 'string',\n                  title: 'if case'\n                },\n                is_deleted: {\n                  type: 'boolean',\n                  title: 'child agent is deleted'\n                },\n                route_name: {\n                  type: 'string',\n                  title: 'route name'\n                }\n              },\n              required: []\n            }\n          },\n          attached_functions: {\n            type: 'array',\n            title: 'list of function versions',\n            items: {\n              type: 'object',\n              title: 'Function represents a function configuration for an agent',\n              properties: {\n                description: {\n                  type: 'string',\n                  title: 'description of the function'\n                },\n                faas_name: {\n                  type: 'string',\n                  title: 'FaaS name of the function'\n                },\n                faas_namespace: {\n                  type: 'string',\n                  title: 'FaaS namespace of the function'\n                },\n                is_deleted: {\n                  type: 'boolean',\n                  title: 'whether the function is deleted'\n                },\n                name: {\n                  type: 'string',\n                  title: 'name of the function'\n                }\n              },\n              required: []\n            }\n          },\n          attached_guardrails: {\n            type: 'array',\n            title: 'list of guardrail version',\n            items: {\n              type: 'object',\n              title: 'Agent Guardrail version',\n              properties: {\n                is_deleted: {\n                  type: 'boolean',\n                  title: 'whether the guardrail is deleted'\n                },\n                name: {\n                  type: 'string',\n                  title: 'Guardrail Name'\n                },\n                priority: {\n                  type: 'integer',\n                  title: 'Guardrail Priority'\n                },\n                uuid: {\n                  type: 'string',\n                  title: 'Guardrail UUID'\n                }\n              },\n              required: []\n            }\n          },\n          attached_knowledgebases: {\n            type: 'array',\n            title: 'list of knowledge base agent versions',\n            items: {\n              type: 'object',\n              properties: {\n                is_deleted: {\n                  type: 'boolean',\n                  title: 'deletet at date / time'\n                },\n                name: {\n                  type: 'string',\n                  title: 'name of the knowledge base'\n                },\n                uuid: {\n                  type: 'string',\n                  title: 'unique id of the knowledge base'\n                }\n              },\n              required: []\n            }\n          },\n          can_rollback: {\n            type: 'boolean',\n            title: 'whether the version is able to be rolled back to'\n          },\n          created_at: {\n            type: 'string',\n            title: 'creation date',\n            format: 'date-time'\n          },\n          created_by_email: {\n            type: 'string',\n            title: 'user who created this version'\n          },\n          currently_applied: {\n            type: 'boolean',\n            title: 'whether this is the currently applied configuration'\n          },\n          description: {\n            type: 'string',\n            title: 'description of the agent'\n          },\n          instruction: {\n            type: 'string',\n            title: 'instruction for the agent'\n          },\n          k: {\n            type: 'integer',\n            title: 'k value for the agent\\'s configuration'\n          },\n          max_tokens: {\n            type: 'integer',\n            title: 'max tokens setting for the agent'\n          },\n          model_name: {\n            type: 'string',\n            title: 'name of model associated to the agent version'\n          },\n          name: {\n            type: 'string',\n            title: 'name of the agent'\n          },\n          provide_citations: {\n            type: 'boolean',\n            title: 'whether the agent should provide in-response citations'\n          },\n          retrieval_method: {\n            $ref: '#/$defs/api_retrieval_method'\n          },\n          tags: {\n            type: 'array',\n            title: 'tags associated with the agent',\n            items: {\n              type: 'string'\n            }\n          },\n          temperature: {\n            type: 'number',\n            title: 'temperature setting for the agent'\n          },\n          top_p: {\n            type: 'number',\n            title: 'top_p setting for the agent'\n          },\n          trigger_action: {\n            type: 'string',\n            title: 'action triggering the configuration update'\n          },\n          version_hash: {\n            type: 'string',\n            title: 'version hash'\n          }\n        },\n        required: []\n      }\n    },\n    links: {\n      $ref: '#/$defs/api_links'\n    },\n    meta: {\n      $ref: '#/$defs/api_meta'\n    }\n  },\n  required: [],\n  $defs: {\n    api_retrieval_method: {\n      type: 'string',\n      title: '- RETRIEVAL_METHOD_UNKNOWN: The retrieval method is unknown\\n - RETRIEVAL_METHOD_REWRITE: The retrieval method is rewrite\\n - RETRIEVAL_METHOD_STEP_BACK: The retrieval method is step back\\n - RETRIEVAL_METHOD_SUB_QUERIES: The retrieval method is sub queries\\n - RETRIEVAL_METHOD_NONE: The retrieval method is none',\n      enum: [        'RETRIEVAL_METHOD_UNKNOWN',\n        'RETRIEVAL_METHOD_REWRITE',\n        'RETRIEVAL_METHOD_STEP_BACK',\n        'RETRIEVAL_METHOD_SUB_QUERIES',\n        'RETRIEVAL_METHOD_NONE'\n      ]\n    },\n    api_links: {\n      type: 'object',\n      title: 'Links to other pages',\n      properties: {\n        pages: {\n          type: 'object',\n          title: 'Information about how to reach other pages',\n          properties: {\n            first: {\n              type: 'string',\n              title: 'first page'\n            },\n            last: {\n              type: 'string',\n              title: 'last page'\n            },\n            next: {\n              type: 'string',\n              title: 'next page'\n            },\n            previous: {\n              type: 'string',\n              title: 'previous page'\n            }\n          },\n          required: []\n        }\n      },\n      required: []\n    },\n    api_meta: {\n      type: 'object',\n      title: 'Meta information about the data set',\n      properties: {\n        page: {\n          type: 'integer',\n          title: 'the current page'\n        },\n        pages: {\n          type: 'integer',\n          title: 'total number of pages'\n        },\n        total: {\n          type: 'integer',\n          title: 'total amount of items over all pages'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      uuid: {
        type: 'string',
      },
      page: {
        type: 'integer',
        description: 'page number.',
      },
      per_page: {
        type: 'integer',
        description: 'items per page.',
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
  const { uuid, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.agents.versions.list(uuid, body)));
};

export default { metadata, tool, handler };
