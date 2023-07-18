'use client';

import Link from 'next/link';
import { experimental_useFormStatus } from 'react-dom';
import { Edit3, Loader } from 'react-feather';

export const CreatePostButton = () => {
  const { pending } = experimental_useFormStatus();

  if (pending) return <Loader className='animate-spin' />;

  return (
    <Link
      href='/post'
      className='group flex justify-center items-center flex-1 border border-neutral-700 rounded-lg ml-2 hover:bg-neutral-800 hover:border-neutral-800 transition-colors'>
      <span>What are you working on?</span>
      <Edit3 className='w-0 group-hover:flex group-hover:w-5 group-hover:ml-2 h-5 transition-all' />
    </Link>
  );
};
