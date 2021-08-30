import { Auth0Provider } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { GetAuth0Config } from './Api/ConfigApi';
import App from './components/App';
import { IAuthConfig } from './Models/AuthConfig';

const AuthModule: React.FC = () => {
  const [config, setConfig] = useState<IAuthConfig | null>(null);
  const GetAuthConfig = async () => {
    const res = await GetAuth0Config();

    setConfig(res);
  };

  useEffect(() => {
    GetAuthConfig();
  }, []);
  return (
    <>
      {' '}
      {config && (
        <Auth0Provider
          domain={config.domain}
          clientId={config.clientId}
          redirectUri={window.location.origin}
          audience={config.audience}
          scope={config.scope}>
          <App />
        </Auth0Provider>
      )}
    </>
  );
};

export default AuthModule;
