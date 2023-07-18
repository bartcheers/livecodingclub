import { EditUserForm } from './EditUserForm';
import { Posts } from './Posts';

export const AuthenticatedContent = () => {
  return (
    <>
      <Posts />
      <EditUserForm />
    </>
  );
};
