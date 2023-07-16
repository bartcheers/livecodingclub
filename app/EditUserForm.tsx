import { getUser } from '@/lib/prisma/users';
import { updateUserAction } from './_actions';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

const EditUserForm = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user.id) {
    return null;
  }

  const { user } = await getUser({ id: session?.user.id });
  if (!user) return null;

  const { name, email, image } = user;
  console.log({ user });

  const handleSubmit = async (data: FormData) => {
    'use server';

    const newName = data.get('name');
    if (!newName || typeof newName !== 'string') return;

    await updateUserAction({ id: user.id, name: newName, email, image });
  };

  return (
    <form action={handleSubmit}>
      <input type='text' name='name' defaultValue={name || undefined} className='text-black' />
      <button type='submit'>Save</button>
    </form>
  );
};

export { EditUserForm };
