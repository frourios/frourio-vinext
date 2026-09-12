import type { FrourioSpec } from '@frourio/vinext';
import { z } from 'zod';

export const frourioSpec = {
  middleware: { context: z.object({ user: z.object({ name: z.string() }) }) },
} satisfies FrourioSpec;
