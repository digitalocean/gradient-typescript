// @ts-nocheck
/**
 * Tests for runtime detection headers in src/internal/detect-platform.ts
 */

describe('getPlatformHeaders runtime detection', () => {
  const g: any = globalThis as any;

  const saveGlobals = () => ({
    Deno: g.Deno,
    Bun: g.Bun,
    EdgeRuntime: g.EdgeRuntime,
    WebSocketPair: g.WebSocketPair,
    navigator: g.navigator,
    process: g.process,
  });

  const restoreGlobals = (saved: any) => {
    g.Deno = saved.Deno;
    g.Bun = saved.Bun;
    g.EdgeRuntime = saved.EdgeRuntime;
    g.WebSocketPair = saved.WebSocketPair;
    g.navigator = saved.navigator;
    g.process = saved.process;
  };

  beforeEach(() => {
    jest.resetModules();
  });

  test('detects Bun runtime', async () => {
    const saved = saveGlobals();
    try {
      g.Bun = { version: '1.1.0' };
      g.process = { platform: 'linux', arch: 'x64' };

      jest.resetModules();
      const mod = await import('../../src/internal/detect-platform');
      const headers = (mod as any).getPlatformHeaders();
      expect(headers['X-Stainless-Runtime']).toBe('bun');
      expect(headers['X-Stainless-Runtime-Version']).toBe('1.1.0');
      expect(headers['X-Stainless-OS']).toBe('Linux');
      expect(headers['X-Stainless-Arch']).toBe('x64');
    } finally {
      restoreGlobals(saved);
    }
  });

  test('detects Cloudflare Workers (workerd)', async () => {
    const saved = saveGlobals();
    try {
      g.WebSocketPair = function () {};
      g.navigator = { userAgent: 'Cloudflare-Workers' };

      jest.resetModules();
      const mod = await import('../../src/internal/detect-platform');
      const headers = (mod as any).getPlatformHeaders();
      expect(headers['X-Stainless-Runtime']).toBe('workerd');
      expect(headers['X-Stainless-Runtime-Version']).toBe('Cloudflare-Workers');
    } finally {
      restoreGlobals(saved);
    }
  });

  test('detects Edge runtime', async () => {
    const saved = saveGlobals();
    try {
      g.EdgeRuntime = 'vercel-edge-1';
      g.process = { version: 'v18.18.0' };

      jest.resetModules();
      const mod = await import('../../src/internal/detect-platform');
      const headers = (mod as any).getPlatformHeaders();
      expect(headers['X-Stainless-Runtime']).toBe('edge');
      expect(headers['X-Stainless-Runtime-Version']).toBe('v18.18.0');
    } finally {
      restoreGlobals(saved);
    }
  });

  test('falls back to Node when no special runtime', async () => {
    const saved = saveGlobals();
    try {
      delete g.Deno;
      delete g.Bun;
      delete g.EdgeRuntime;
      delete g.WebSocketPair;
      delete g.navigator;
      g.process = {
        platform: 'win32',
        arch: 'x64',
        version: 'v18.18.0',
        versions: { node: '18.18.0' },
      };

      jest.resetModules();
      const mod = await import('../../src/internal/detect-platform');
      const headers = (mod as any).getPlatformHeaders();
      expect(headers['X-Stainless-Runtime']).toBe('node');
      expect(headers['X-Stainless-OS']).toBe('Windows');
      expect(headers['X-Stainless-Arch']).toBe('x64');
      expect(headers['X-Stainless-Runtime-Version']).toBe('v18.18.0');
    } finally {
      restoreGlobals(saved);
    }
  });
});
