import type { User } from 'next-auth';

export type UserGoogleType = Omit<User, 'id'>;
