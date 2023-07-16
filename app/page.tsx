import { Features } from './Features';
import { Header } from './Header';
import { Pricing } from './Pricing';
import { EditUserForm } from './EditUserForm';

export default function Home() {
  return (
    <main>
      <EditUserForm />
      <Header />
      <Features />
      <Pricing />
    </main>
  );
}
