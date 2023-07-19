import { Post } from '@prisma/client';

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

export default function StatusIndicator({ post }: { post: Post }) {
  return (
    <div className='flex items-center rounded-lg text-sm md:ml-auto'>
      <div
        className={`rounded-full w-2 h-2 ${
          post.status === 'WORKING_ON'
            ? 'bg-yellow-400'
            : post.status === 'STUCK'
            ? 'bg-red-400'
            : 'bg-gray-400'
        } mr-1`}
      />
      <span className='text-xs ml-auto'>{getStatusBadgeText(post.status)}</span>
    </div>
  );
}
