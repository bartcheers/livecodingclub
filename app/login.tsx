'use client';

import { signIn } from 'next-auth/react';
import { GoogleIcon } from './assets/svg/Google';

export const Login = () => {
  return (
    <button
      className='flex items-center gap-2 text-black rounded-lg bg-white w-fit mt-8 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'
      onClick={() => signIn('google')}>
      <GoogleIcon />
      Sign in with Google
    </button>
  );
};
