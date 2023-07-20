import prisma from './prisma';
import { UpdateStatus } from '@prisma/client'; // Make sure to import UpdateStatus enum

export async function createPost({
  userId,
  status,
  content,
  link,
}: {
  userId: string;
  status: UpdateStatus;
  content: string;
  link: string;
}) {
  try {
    const post = await prisma.post.create({
      data: {
        userId,
        status,
        content,
        link,
      },
    });

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
  status?: UpdateStatus;
  content?: string;
}) {
  try {
    const data: { status?: UpdateStatus; content?: string } = {};

    if (status !== undefined) {
      data.status = status;
    }

    if (content !== undefined) {
      data.content = content;
    }

    const post = await prisma.post.update({
      where: { id },
      data,
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

export async function getMostRecentPostByUser({ userId }: { userId: string }) {
  try {
    const post = await prisma.post.findFirst({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return { post };
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
