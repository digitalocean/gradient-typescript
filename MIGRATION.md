# Migrate from Gradient SDK (TypeScript) to DoTs

> **This SDK (`@digitalocean/gradient`) is deprecated and will be retired on August 15, 2026.**
> Please migrate to the unified DigitalOcean TypeScript SDK: [`@digitalocean/dots`](https://github.com/digitalocean/dots) (DoTs).
>
> Overview of official DigitalOcean libraries: https://docs.digitalocean.com/reference/libraries/

| From | To |
| --- | --- |
| `@digitalocean/gradient` | `@digitalocean/dots` |

DoTs requires Node.js ≥ 20.10, TypeScript 5+, and `"type": "module"` in `package.json`.

## 1. Replace the package

```sh
npm uninstall @digitalocean/gradient
npm i @digitalocean/dots
```

## 2. Update credentials

Gradient used several auth modes on one client. Map each to DoTs:

| Use case | Gradient (TypeScript) | Env var (Gradient) | DoTs |
| --- | --- | --- | --- |
| DigitalOcean API / GenAI control plane | `accessToken` | `DIGITALOCEAN_ACCESS_TOKEN` | `DigitalOceanApiKeyAuthenticationProvider(token)` + `createDigitalOceanClient(...)` — prefer `DIGITALOCEAN_TOKEN` |
| Serverless inference | `modelAccessKey` | `GRADIENT_MODEL_ACCESS_KEY` | `import { Client } from "@digitalocean/dots/inference"` → pass that credential as `apiKey` (same Model Access Key value, or a **full-access** PAT) |
| Agent inference | `agentAccessKey` + `agentEndpoint` | `GRADIENT_AGENT_ACCESS_KEY` + `GRADIENT_AGENT_ENDPOINT` | Pass the agent access key as `apiKey` and configure the agent endpoint for agent inference |

Notes:

- The Model Access Key **value** does not change — only the constructor / env name.
- Limited-scope PATs return **401** on inference; use a full-access PAT or a Model Access Key.
- Update `.env`, CI secrets, and runbooks accordingly.

## 3. Update client construction

### Serverless inference

**Before**

```ts
import Gradient from "@digitalocean/gradient";

const client = new Gradient({
  modelAccessKey: process.env.GRADIENT_MODEL_ACCESS_KEY,
});
```

**After**

```ts
import { Client } from "@digitalocean/dots/inference";

// Same Model Access Key value as GRADIENT_MODEL_ACCESS_KEY, or a full-access PAT
const client = new Client({
  apiKey: process.env.GRADIENT_MODEL_ACCESS_KEY!,
});
// equivalently: apiKey: process.env.DIGITALOCEAN_TOKEN!  // must be full-access
```

### Control-plane / GenAI management

**Before**

```ts
import Gradient from "@digitalocean/gradient";

const client = new Gradient({
  accessToken: process.env.DIGITALOCEAN_ACCESS_TOKEN,
});
```

**After**

```ts
import {
  createDigitalOceanClient,
  DigitalOceanApiKeyAuthenticationProvider,
  FetchRequestAdapter,
} from "@digitalocean/dots";

// Same PAT value as DIGITALOCEAN_ACCESS_TOKEN; preferred env name is DIGITALOCEAN_TOKEN
const auth = new DigitalOceanApiKeyAuthenticationProvider(process.env.DIGITALOCEAN_TOKEN!);
const client = createDigitalOceanClient(new FetchRequestAdapter(auth));
// GenAI management: client.v2.genAi.*
```

### Agent inference

**Before**

```ts
import Gradient from "@digitalocean/gradient";

const client = new Gradient({
  agentAccessKey: process.env.GRADIENT_AGENT_ACCESS_KEY,
  agentEndpoint: process.env.GRADIENT_AGENT_ENDPOINT,
});
```

**After**

Pass the same agent access key as `apiKey` and point the client at your agent endpoint (DoTs agent-inference configuration for your app). The key and endpoint values do not change — only the client package/constructor does.

## 4. Update API call sites

Chat, streaming, images, and model listing keep a similar OpenAI-style shape. Only the import and client constructor change.

```ts
const completion = await client.chat.completions.create({
  model: "llama3.3-70b-instruct",
  messages: [{ role: "user", content: "Hello" }],
});
```

| Capability | Gradient | DoTs |
| --- | --- | --- |
| Chat completions | `client.chat.completions.create` | same via `@digitalocean/dots/inference` |
| Streaming | `stream: true` | supported (`for await` + callbacks) |
| Image generation | Gradient images APIs | `client.images.generate` |
| List models | Gradient models | `client.models.list` |
| Manage agents / GenAI | Gradient API client | `client.v2.genAi.*` |

Rework error handling: Gradient Stainless `APIError` subclasses do not map 1:1 to DoTs errors. Re-check retries and timeouts against the new client defaults.

## 5. Validate and remove Gradient

1. Confirm the app builds and runs with only `@digitalocean/dots`.
2. Smoke-test non-streaming chat, streaming chat, `models.list`, and images (if used).
3. Verify inference with a full-access PAT and, if applicable, a Model Access Key.
4. Remove `@digitalocean/gradient` from lockfiles.
5. After cutover, remove unused Gradient env vars if you renamed them.
6. **Complete migration before August 15, 2026.**

## References

- https://docs.digitalocean.com/reference/libraries/
- https://github.com/digitalocean/dots
- https://github.com/digitalocean/gradient-typescript (this repo — deprecated)
