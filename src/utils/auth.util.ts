import { RedirectType, redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { authOptions } from 'src/configs';

export async function requireAuthorizedUser(): Promise<void> {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect(`/`, RedirectType.replace);
  }
}

export async function requireUnauthorizedUser(): Promise<void> {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/', RedirectType.replace);
  }
}
