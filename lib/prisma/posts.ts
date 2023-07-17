import prisma from './prisma';
import { UpdateStatus } from '@prisma/client'; // Make sure to import UpdateStatus enum

export async function createPost({
  userId,
  status,
  content,
}: {
  userId: string;
  status: UpdateStatus;
  content: string;
}) {
  try {
    console.log('before createpost', { userId, status, content });
    const post = await prisma.post.create({
      data: {
        userId,
        status,
        content,
      },
    });
    console.log({ post });
    return { post };
  } catch (error) {
    console.error({ error });
    return { error };
  }
}

export async function updatePost({
  id,
  status,
  content,
}: {
  id: string;
  status: UpdateStatus;
  content: string;
}) {
  try {
    const post = await prisma.post.update({
      where: { id },
      data: {
        status,
        content,
      },
    });
    return { post };
  } catch (error) {
    return { error };
  }
}

export async function deletePost(id: string) {
  try {
    await prisma.post.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    return { error };
  }
}

export async function getPostsByUser({ userId }: { userId: string }) {
  try {
    const posts = await prisma.post.findMany({
      where: {
        userId: userId,
      },
    });
    return { posts };
  } catch (error) {
    return { error };
  }
}

export async function getAllPosts(limit: number) {
  try {
    const posts = await prisma.post.findMany({
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        user: true,
      },
    });
    return { posts };
  } catch (error) {
    return { error };
  }
}
