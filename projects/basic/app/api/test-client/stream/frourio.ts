import type { FrourioSpec } from '@frourio/vinext';
import { z } from 'zod';

export const frourioSpec = {
  post: {
    body: z.object({ prompt: z.string() }),
  },
} satisfies FrourioSpec;
