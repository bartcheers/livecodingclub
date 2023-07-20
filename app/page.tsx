import { Posts } from './home/Posts';
import { Features } from './home/Features';

export default async function Home() {
  return (
    <div className='md:flex justify-between mx-auto max-w-7xl sm:px-6 lg:px-8'>
      <Posts />
      <Features />
    </div>
  );
}
