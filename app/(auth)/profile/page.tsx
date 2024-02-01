import { getServerSession } from 'next-auth';
import React from 'react';

import { Profile } from 'src/components';
import { authOptions } from 'src/configs';
import { requireAuthorizedUser } from 'src/utils';

export default async function ProfilePage() {
  await requireAuthorizedUser();

  const session = await getServerSession(authOptions);

  return <Profile user={session?.user} />;
}
