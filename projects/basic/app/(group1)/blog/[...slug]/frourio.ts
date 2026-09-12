import type { FrourioSpec } from '@frourio/vinext';
import { z } from 'zod';

export const frourioSpec = {
  param: z.array(z.number()),
  get: {
    res: { 200: { body: z.number() } },
  },
} satisfies FrourioSpec;
