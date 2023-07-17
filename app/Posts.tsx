import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getAllPosts } from '@/lib/prisma/posts';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';

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
    <div className='bg-gradient-to-br from-gray-800 to-gray-900 text-white min-h-screen rounded-2xl p-4'>
      {posts?.map((post) => (
        <div
          key={post.id}
          className='flex w-full max-w-2xl mx-auto bg-gray-950 rounded-xl shadow-md overflow-hidden mb-4 p-2 relative'>
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
          <div className='absolute top-0 right-0 mr-2 flex items-center rounded-lg px-2 py-1 mt-2 text-sm bg-gray-800'>
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
