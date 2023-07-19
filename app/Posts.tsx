import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getAllPosts } from '@/lib/prisma/posts';
import Image from 'next/image';
import { formatDistanceToNowStrict } from 'date-fns';
import { CreatePostButton } from './CreatePostButton';
import { Video } from 'react-feather';
import StatusIndicator from './StatusIndicator';

export const Posts = async () => {
  const session = await getServerSession(authOptions);

  const { posts } = await getAllPosts(20);

  return (
    <div className='text-white min-h-screen rounded-2xl p-4'>
      {session?.user.id && (
        <div className='flex w-full max-w-2xl mx-auto rounded-xl overflow-hidden mb-4 p-2  relative'>
          {session?.user.image && (
            <Image
              className='h-14 rounded-lg overflow-hidden object-cover sm:h-full w-14 aspect-square flex-shrink-0'
              src={session.user.image}
              alt='User avatar'
              width={112}
              height={112}
              priority
            />
          )}
          <CreatePostButton />
        </div>
      )}

      {posts?.map((post) => (
        <div
          key={post.id}
          className='flex w-full max-w-2xl mx-auto bg-neutral-900 rounded-xl overflow-hidden mb-4 p-2 relative'>
          {post.user.image && (
            <Image
              className='h-14 rounded-lg overflow-hidden object-cover sm:h-full w-14 aspect-square flex-shrink-0'
              src={post.user.image}
              alt='User avatar'
              width={112}
              height={112}
              priority
            />
          )}
          <div className='pl-4 py-1 flex flex-col w-full'>
            <div className='inline-flex flex-wrap items-center gap-x-2 w-full'>
              <span className='tracking-wide text-sm text-gray-400 font-semibold'>
                {post.user.name}
              </span>
              {post.user.location && (
                <span className='text-gray-500 text-sm'>{post.user.location}</span>
              )}
              <span className='text-sm text-gray-500'>
                {formatDistanceToNowStrict(new Date(post.createdAt), {
                  addSuffix: true,
                  roundingMethod: 'floor',
                })}
              </span>
              <StatusIndicator post={post} />
            </div>

            <a
              href={post.link || '#'}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-1 text-md hover:underline transition-all'>
              {post.content} <Video className='inline-block w-4 h-4 ml-1' />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
