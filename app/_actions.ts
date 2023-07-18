'use server';

import { UpdateStatus } from '@prisma/client';
import { updateUser } from '@/lib/prisma/users';
import { createPost, updatePost, deletePost } from '@/lib/prisma/posts';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

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

export async function createPostAction({
  content,
  status,
  userId,
}: {
  status: UpdateStatus;
  content: string;
  userId: string;
}) {
  await createPost({ status, content, userId });
  revalidatePath('/');
  redirect('/');
}

export async function updatePostAction({
  id,
  status,
  content,
}: {
  id: string;
  status: UpdateStatus;
  content: string;
}) {
  const updatedPost = await updatePost({ id, content, status });
  revalidatePath('/');
  return updatedPost;
}

export async function deletePostAction(id: string) {
  await deletePost(id);
  revalidatePath('/');
  return { id };
}
