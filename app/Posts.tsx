import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getAllPosts } from '@/lib/prisma/posts';

const prisma = new PrismaClient();

export const Posts = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user.id) {
    return null;
  }

  const { posts } = await getAllPosts(20);
  console.log({ posts });

  return (
    <div>
      {posts?.map((post) => (
        <div key={post.id}>
          <h2>{post.content}</h2>
          <p>Posted by: {post.user.name}</p>
          <p>{post.user.email}</p>
          {/* Add more user profile details as desired */}
        </div>
      ))}
    </div>
  );
};
