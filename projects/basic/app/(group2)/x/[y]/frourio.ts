import type { FrourioSpec } from '@frourio/vinext';
import { z } from 'zod';

export const frourioSpec = {
  middleware: true,
  get: {
    query: z.object({ message: z.string() }),
  },
} satisfies FrourioSpec;
