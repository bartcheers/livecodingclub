'use server';

import { updateUser } from '@/lib/prisma/users';
import { revalidatePath } from 'next/cache';

export async function updateUserAction({
  id,
  name,
  email,
  location,
}: {
  id: string;
  name: string;
  email: string | null;
  location: string;
}) {
  await updateUser({ id, name, email, location });
  revalidatePath('/');
  return { id, name, email, location };
}
