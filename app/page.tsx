import { Features } from './Features';
import { Header } from './Header';
import { Pricing } from './Pricing';
import { EditUserForm } from './EditUserForm';
import { CreatePostForm } from './CreatePostForm';
import { Posts } from './Posts';

export default function Home() {
  return (
    <main>
      <CreatePostForm />
      <Posts />
      <EditUserForm />
      <Header />
      <Features />
      <Pricing />
    </main>
  );
}
