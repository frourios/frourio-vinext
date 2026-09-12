import type { FrourioSpec } from '@frourio/vinext';
import { z } from 'zod';

export const frourioSpec = {
  post: {
    body: z.instanceof(ArrayBuffer),
    res: { 200: { body: z.instanceof(ArrayBuffer) } },
  },
} satisfies FrourioSpec;
