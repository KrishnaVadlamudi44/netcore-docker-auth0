import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Layout from './Layout';

const PrivatePage = () => {
  const { user, logout } = useAuth0();
  return (
    <div>
      <div>
        <Layout />
      </div>

      <div>Private Page</div>

      {user && (
        <div>
          <p>Name:{user?.name}</p>
          <div>
            <button
              onClick={() =>
                logout({
                  returnTo: `${window.location.origin}`,
                })
              }>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivatePage;
