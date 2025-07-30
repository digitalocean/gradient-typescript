// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Gradient } from '../client';

export abstract class APIResource {
  protected _client: Gradient;

  constructor(client: Gradient) {
    this._client = client;
  }
}
