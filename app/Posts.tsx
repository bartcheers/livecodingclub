import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getAllPosts } from '@/lib/prisma/posts';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import i from 'feather-icons';
import { Edit3 } from 'react-feather';

const getStatusBadgeText = (status: string) => {
  switch (status) {
    case 'WORKING_ON':
      return 'Working on';
    case 'STUCK':
      return 'Stuck';
    case 'CANCELLED':
      return 'Cancelled';
    case 'COMPLETED':
      return 'Completed';
    default:
      return '';
  }
};

export const Posts = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user.id) {
    return null;
  }

  const { posts } = await getAllPosts(20);

  return (
    <div className='text-white min-h-screen rounded-2xl p-4'>
      <div className='flex w-full max-w-2xl mx-auto rounded-xl overflow-hidden mb-4 p-2  relative'>
        {session.user.image && (
          <Image
            className='h-14 rounded-lg overflow-hidden object-cover sm:h-full w-14 aspect-square flex-shrink-0'
            src={session.user.image}
            alt='User avatar'
            width={112}
            height={112}
          />
        )}
        <Link
          href='/post'
          className='group flex justify-center items-center flex-1 border border-neutral-700 rounded-lg ml-2 hover:bg-neutral-800 hover:border-neutral-800 transition-colors'>
          <span>What are you working on?</span>
          <Edit3 className='w-0 group-hover:flex group-hover:w-5 group-hover:ml-2 h-5 transition-all' />
        </Link>
      </div>

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
            />
          )}
          <div className='px-4 py-1'>
            <div className='flex items-center gap-2'>
              <div className='tracking-wide text-sm text-gray-400 font-semibold'>
                {post.user.name}
              </div>
              {post.user.location && <p className='text-gray-500 text-sm'>{post.user.location}</p>}
              <div className='text-sm text-gray-500'>
                {formatDistanceToNow(new Date(post.createdAt))} ago
              </div>
            </div>

            <h2 className='mt-1 text-md'>{post.content}</h2>
          </div>
          <div className='absolute top-0 right-0 mr-2 flex items-center rounded-lg px-2 py-1 mt-2 text-sm'>
            <div
              className={`rounded-full w-2 h-2 ${
                post.status === 'WORKING_ON'
                  ? 'bg-yellow-400'
                  : post.status === 'STUCK'
                  ? 'bg-red-400'
                  : 'bg-gray-400'
              } mr-1`}
            />
            <div className='text-xs'>{getStatusBadgeText(post.status)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
