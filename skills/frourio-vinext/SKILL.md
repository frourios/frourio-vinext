---
name: frourio-vinext
description: Skills for building type-safe Vinext API routes with frourio-vinext. Covers project setup, adding endpoints, cookies, middleware, and client usage with SWR/TanStack Query.
user-invocable: false
---

This skill set provides guidance for working with frourio-vinext, a type-safe API framework for Vinext App Router.

## Available skills

- [setup.md](setup.md) — Integrate frourio-vinext into an existing Vinext project
- [add-endpoint.md](add-endpoint.md) — Add a new API endpoint with `frourio.ts` and `route.ts`
- [cookies.md](cookies.md) — Validate request cookies and set or delete response cookies using `frourioSpec`; read this when an endpoint or middleware handles cookies
- [add-middleware.md](add-middleware.md) — Add middleware with request cookies/headers/query validation and optional context for authentication, authorization, or logging
- [client-usage.md](client-usage.md) — Use the auto-generated type-safe client (`fc`/`$fc`) with SWR and TanStack Query
- [testing.md](testing.md) — Write tests for API routes using MSW and Vitest
