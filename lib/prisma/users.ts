import prisma from './prisma';

export async function getUser({ id }: { id: string }) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return { user };
  } catch (error) {
    return { error };
  }
}

export async function updateUser({
  id,
  name,
  email,
  location,
}: {
  id: string;
  name: string;
  email: string | null;
  location: string | null;
}) {
  try {
    const profile = await prisma.user.update({
      where: { id },
      data: { name, email, location },
    });
    return { profile };
  } catch (error) {
    return { error };
  }
}
