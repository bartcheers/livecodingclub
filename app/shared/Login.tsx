'use client';

import { signIn } from 'next-auth/react';
import { GoogleIcon } from '../assets/svg/Google';

export default function Login() {
  return (
    <button
      className='w-full h-14 mb-5 flex justify-center items-center flex-1 border border-neutral-700 rounded-lg hover:bg-neutral-800 hover:border-neutral-800 transition-colors gap-2'
      onClick={() => signIn('google')}>
      <GoogleIcon />
      Sign in with Google
    </button>
  );
}
