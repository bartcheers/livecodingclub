import { Analytics } from '@vercel/analytics/react';
import { getServerSession } from 'next-auth';
import './globals.css';
import { Inter } from 'next/font/google';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import AuthProvider from './SessionProvider';
import LayoutHeader from './LayoutHeader';
import { getUser } from '@/lib/prisma/users';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Live Coding Club',
  description: 'Learn from letting others watch you code.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  const { user } = await getUser({ id: session?.user.id });

  return (
    <html lang='en'>
      <body className={`${inter.className} bg-neutral-900 text-white`}>
        <AuthProvider session={session}>
          <LayoutHeader user={user} />
          {children}
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  );
}
