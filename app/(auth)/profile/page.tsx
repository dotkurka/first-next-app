import { getServerSession } from 'next-auth';
import React from 'react';

import { Profile } from 'src/components';
import { authOptions } from 'src/configs';

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  return <Profile user={session?.user} />;
}
