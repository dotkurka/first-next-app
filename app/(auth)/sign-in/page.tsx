import { SignIn } from 'src/components';
import { requireUnauthorizedUser } from 'src/utils';

export default async function SignInPage() {
  await requireUnauthorizedUser();

  return <SignIn />;
}
