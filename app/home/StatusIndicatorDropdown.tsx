import { Post, UpdateStatus } from '@prisma/client';
import { updatePostAction } from '../_actions';
import { z } from 'zod';
import { SubmitButton } from '../shared/SubmitButton';

const UpdatesStatusSchema = z.nativeEnum(UpdateStatus);

const INDICATOR_OPTIONS = [
  {
    label: 'Working on',
    value: 'WORKING_ON',
  },
  {
    label: 'Stuck',
    value: 'STUCK',
  },
  {
    label: 'Cancelled',
    value: 'CANCELLED',
  },
  {
    label: 'Completed',
    value: 'COMPLETED',
  },
];

export default function StatusIndicatorDropdown({ post }: { post: Post }) {
  const handleSubmit = async (data: FormData) => {
    'use server';

    const newStatus = data.get('status');
    console.log('trig', { newStatus });

    // Use zod to validate the status
    const parseResult = UpdatesStatusSchema.safeParse(newStatus);
    console.log({ parseResult });

    if (parseResult.success === false) return;

    await updatePostAction({
      id: post.id,
      status: parseResult.data,
    });
  };

  return (
    <form action={handleSubmit} className='ml-auto flex items-center gap-2'>
      <select
        name='status'
        defaultValue={post.status}
        className='px-3 py-2 bg-neutral-800 border rounded shadow border-neutral-700'>
        {INDICATOR_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <SubmitButton label='Update' />
    </form>
  );
}
