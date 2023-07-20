'use client';

import { useSession } from 'next-auth/react';
import Logout from './Logout';
import Login from '../shared/Login';
import { redirect } from 'next/navigation';

export default function SignOut() {
  const { data: session } = useSession();

  if (!session) redirect('/');

  return session ? <Logout /> : <Login />;
}
