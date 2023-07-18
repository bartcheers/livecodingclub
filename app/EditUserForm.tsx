import { getUser } from '@/lib/prisma/users';
import { updateUserAction } from './_actions';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function EditUserForm() {
  const session = await getServerSession(authOptions);

  if (!session?.user.id) {
    return null;
  }

  const { user } = await getUser({ id: session?.user.id });
  if (!user) return null;

  const { name, email, location } = user;

  const handleSubmit = async (data: FormData) => {
    'use server';

    const newName = data.get('name');
    const newEmail = data.get('email');
    const newLocation = data.get('location');

    if (!newName || typeof newName !== 'string') return;
    if (!newEmail || typeof newEmail !== 'string') return;
    if (!newLocation || typeof newLocation !== 'string') return;

    await updateUserAction({ id: user.id, name: newName, email: newEmail, location: newLocation });
  };

  return (
    <form action={handleSubmit} className='w-full max-w-sm mx-auto mt-20 space-y-8'>
      <div>
        <label className='block mb-2 text-sm font-bold text-neutral-300' htmlFor='name'>
          Name
        </label>
        <input
          type='text'
          name='name'
          defaultValue={name || undefined}
          className='w-full px-3 py-2 text-black border rounded shadow appearance-none'
        />
      </div>
      <div>
        <label className='block mb-2 text-sm font-bold text-neutral-300' htmlFor='email'>
          Email
        </label>
        <input
          type='email'
          name='email'
          defaultValue={email || undefined}
          className='w-full px-3 py-2 text-black border rounded shadow appearance-none'
        />
      </div>
      <div>
        <label className='block mb-2 text-sm font-bold text-neutral-300' htmlFor='location'>
          Location
        </label>
        <input
          type='text'
          name='location'
          defaultValue={location || undefined}
          className='w-full px-3 py-2 text-black border rounded shadow appearance-none'
        />
      </div>
      <div>
        <button
          type='submit'
          className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 transition-colors'>
          Save
        </button>
      </div>
    </form>
  );
}
