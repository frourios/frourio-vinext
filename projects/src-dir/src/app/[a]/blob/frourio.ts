import type { FrourioSpec } from '@frourio/vinext';
import { z } from 'zod';

export const frourioSpec = {
  post: {
    body: z.instanceof(Blob),
    res: { 200: { body: z.instanceof(Blob) } },
  },
} satisfies FrourioSpec;
