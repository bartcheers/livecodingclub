'use client';

import { signOut, useSession } from 'next-auth/react';

export default function Logout() {
  const session = useSession();

  return (
    <div className='flex justify-center items-center w-full min-h-screen gap-2'>
      <div>{session?.data?.user?.name}</div>
      <button className='px-4 py-2 bg-neutral-400 rounded' onClick={() => signOut()}>
        Log out
      </button>
    </div>
  );
}
