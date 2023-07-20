import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { createPostAction } from './_actions';
import { SubmitButton } from './SubmitButton';
import { getMostRecentPostByUser } from '@/lib/prisma/posts';

export const CreatePostForm = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user.id) {
    return null;
  }

  const { post } = await getMostRecentPostByUser({ userId: session?.user.id });

  const handleSubmit = async (data: FormData) => {
    'use server';

    const content = data.get('content');
    const link = data.get('link');

    // If content is not provided, stop the function.
    if (!content || typeof content !== 'string') return;
    if (!link || typeof link !== 'string') return;

    await createPostAction({
      userId: session.user.id,
      status: 'WORKING_ON',
      content: content,
      link: link,
    });
  };

  return (
    <form action={handleSubmit} className='w-full max-w-sm mx-auto mt-20 space-y-8'>
      <div>
        <label className='block mb-2 text-sm font-bold text-neutral-200' htmlFor='content'>
          What are you working on?
        </label>
        <textarea
          name='content'
          className='w-full px-3 py-2 bg-neutral-800 border rounded shadow appearance-none border-neutral-700'
          required
          autoFocus
        />

        <label className='block mb-2 text-sm font-bold text-neutral-200' htmlFor='link'>
          Video call link, eg Zoom, Google Meet, etc.
        </label>
        <input
          name='link'
          className='w-full px-3 py-2 bg-neutral-800 border rounded shadow appearance-none border-neutral-700'
          required
          defaultValue={post?.link || undefined}
        />
      </div>
      <SubmitButton label='Post' />
    </form>
  );
};
