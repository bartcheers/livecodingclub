'use client';

import { ReactNode } from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export const SubmitButton = ({ label }: { label: ReactNode }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='w-full px-4 py-2 font-bold text-neutral-800 bg-turquoise-500 rounded hover:bg-turquoise-800 disabled:bg-neutral-400 transition-colors'
      disabled={pending}>
      {pending ? 'Loading...' : label}
    </button>
  );
};
