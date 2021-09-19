import React from 'react';
import { useHistory } from 'react-router-dom';

const Layout = () => {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.push('/')}>Dashboard</button>
      <button onClick={() => history.push('/private')}>Private page</button>
    </div>
  );
};

export default Layout;
