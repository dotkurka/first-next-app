import GoogleProvider from 'next-auth/providers/google';

import { getEnv } from 'src/configs';

import type { AuthOptions } from 'next-auth';

const env = getEnv();

export const authOptions: AuthOptions = {
  providers: [GoogleProvider(env.google)],
};
