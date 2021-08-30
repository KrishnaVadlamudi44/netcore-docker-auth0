import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

const App = () => {
  const {
    loginWithRedirect,
    isAuthenticated,
    logout,
    user,
    getAccessTokenSilently,
  } = useAuth0();

  const getToken = async () => {
    var token = await getAccessTokenSilently();
    console.log(token);
    console.log(user);
  };

  useEffect(() => {
    if (isAuthenticated) getToken();
  }, [isAuthenticated]);
  return (
    <div className='App'>
      <div>App</div>
      {isAuthenticated ? (
        <>
          <div>
            <p>Name:{user?.name}</p>
          </div>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        </>
      ) : (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}
    </div>
  );
};

export default App;
