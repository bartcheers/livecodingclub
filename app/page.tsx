import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import dynamic from 'next/dynamic';

const AuthenticatedContent = dynamic(() =>
  import('./AuthenticatedContent').then((mod) => mod.AuthenticatedContent),
);
const UnauthenticatedContent = dynamic(() =>
  import('./UnauthenticatedContent').then((mod) => mod.UnauthenticatedContent),
);

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) return <UnauthenticatedContent />;

  return <AuthenticatedContent />;
}
