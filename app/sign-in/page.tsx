'use client';

import { useSession } from 'next-auth/react';
import Login from '../shared/Login';
import Logout from '../sign-out/Logout';

export default function SignOut() {
  const { data: session } = useSession();
  return session ? <Logout /> : <Login />;
}
