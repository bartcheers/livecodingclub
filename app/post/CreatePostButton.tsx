'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export const CreatePostButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='w-full px-4 py-2 font-bold text-white bg-emerald-500 rounded hover:bg-emerald-800 disabled:bg-neutral-400 transition-colors'
      disabled={pending}>
      {pending ? 'Posting...' : 'Post'}
    </button>
  );
};