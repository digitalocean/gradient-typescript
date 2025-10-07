# Core Concepts

This document explains the core concepts and architecture of the Gradient TypeScript library.

## Architecture Overview

The library is structured in layers:

1. **Core Layer** (`src/core/`)
   - Handles base API interactions
   - Manages resource abstractions
   - Handles streaming and uploads

2. **Resource Layer** (`src/resources/`)
   - Implements specific API endpoints
   - Provides type-safe interfaces
   - Handles resource-specific logic

3. **Internal Layer** (`src/internal/`)
   - Contains utility functions
   - Implements internal helpers
   - Manages platform-specific code

## Key Components

### Client (`src/client.ts`)
The main entry point for interacting with the Gradient API.

```typescript
import { Gradient } from '@digitalocean/gradient';

const client = new Gradient({
  apiKey: 'your-api-key'
});
```

### Resources
Resources represent different API endpoints and their operations.

```typescript
// Models
const models = await client.models.list();

// Chat
const completion = await client.chat.completions.create({
  messages: [{ role: 'user', content: 'Hello' }],
  model: 'model-name'
});
```

### Error Handling
The library provides detailed error handling with specific error types.

```typescript
try {
  const result = await client.models.list();
} catch (error) {
  if (error instanceof Gradient.APIError) {
    console.error('API Error:', error.message);
  }
}
```

### Streaming
Support for real-time data streaming using Server-Sent Events (SSE).

```typescript
const stream = await client.chat.completions.create({
  messages: [{ role: 'user', content: 'Hello' }],
  model: 'model-name',
  stream: true
});

for await (const chunk of stream) {
  console.log(chunk);
}
```

## Best Practices

1. **Error Handling**
   - Always handle potential API errors
   - Use specific error types for better error management
   - Implement proper retry logic for transient failures

2. **Resource Management**
   - Close streams when done
   - Implement proper cleanup in async operations
   - Handle rate limiting appropriately

3. **Configuration**
   - Use environment variables for sensitive data
   - Implement proper timeout handling
   - Configure retries based on your needs

4. **Type Safety**
   - Leverage TypeScript types for better development experience
   - Use provided type definitions for requests and responses
   - Implement custom type guards when needed