import NextAuth from 'next-auth';

import { authOptions } from 'src/configs';

const hendler = NextAuth(authOptions);

export { hendler as GET, hendler as POST };
