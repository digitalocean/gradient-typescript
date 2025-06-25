// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface APILinks {
  pages?: APILinks.Pages;
}

export namespace APILinks {
  export interface Pages {
    first?: string;

    last?: string;

    next?: string;

    previous?: string;
  }
}

export interface APIMeta {
  page?: number;

  pages?: number;

  total?: number;
}
