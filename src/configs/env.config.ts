import type { Env } from 'src/types';

export const getEnv = () => {
  const parsed: Env = {
    appName: process.env.NEXT_PUBLIC_APP_NAME || '',
    hostUrl: process.env.NEXT_PUBLIC_FRONTEND_URL || '',
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    },
  };

  return Object.freeze(parsed);
};
