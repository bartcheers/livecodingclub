'use client';

import { useSession } from 'next-auth/react';
import Logout from './Logout';
import Login from '../shared/Login';

export default function SignOut() {
  const { data: session } = useSession();
  return session ? <Logout /> : <Login />;
}
