import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    IMAGEKIT_PRIVATE_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT: z.string().url(),
    NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY: z.string().min(1),
    NEXT_PUBLIC_API_ENDPOINT: z.string().url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT:
      process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
    NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY:
      process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  },
});
