import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { createPostAction } from './_actions';

export const CreatePostForm = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user.id) {
    return null;
  }

  const handleSubmit = async (data: FormData) => {
    'use server';

    const content = data.get('content');

    // If content is not provided, stop the function.
    if (!content || typeof content !== 'string') return;

    await createPostAction({
      userId: session.user.id,
      status: 'WORKING_ON',
      content: content,
    });
  };

  return (
    <form action={handleSubmit} className='w-full max-w-sm mx-auto mt-20 space-y-8'>
      <div>
        <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='content'>
          What are you working on?
        </label>
        <textarea
          name='content'
          className='w-full px-3 py-2 text-black border rounded shadow appearance-none'
          required
        />
      </div>
      <div>
        <button
          type='submit'
          className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'>
          Post
        </button>
      </div>
    </form>
  );
};
