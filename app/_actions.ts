'use server';

import { Post, UpdateStatus } from '@prisma/client';
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
  link,
}: {
  status: UpdateStatus;
  content: string;
  userId: string;
  link: string;
}) {
  await createPost({ status, content, userId, link });
  revalidatePath('/');
  redirect('/');
}

export async function updatePostAction({
  id,
  status,
  content,
}: {
  id: string;
  status?: UpdateStatus;
  content?: string;
}) {
  const postUpdates: Partial<Post> = {};

  if (status !== undefined) {
    postUpdates.status = status;
  }

  if (content !== undefined) {
    postUpdates.content = content;
  }

  const updatedPost = await updatePost({ ...postUpdates, id });
  revalidatePath('/');
  return updatedPost;
}
