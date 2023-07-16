'use server';

import { updateUser } from '@/lib/prisma/users';
import { revalidatePath } from 'next/cache';

export async function updateUserAction({
  id,
  name,
  email,
  image,
}: {
  id: string;
  name: string;
  email: string | null;
  image: string | null;
}) {
  await updateUser({ id, name, email, image });
  revalidatePath('/');
  return { id, name, email, image };
}
