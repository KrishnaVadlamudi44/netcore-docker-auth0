import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

interface ILoginPageProps {
  redirect?: string | undefined;
}

const LoginPage: React.FC<ILoginPageProps> = ({ redirect }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
  );
};

export default LoginPage;
