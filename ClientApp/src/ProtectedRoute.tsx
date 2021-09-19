import { useAuth0 } from '@auth0/auth0-react';
import { Redirect, Route, RouteProps } from 'react-router';

interface IProtectedRouteProps extends RouteProps {}

const ProtectedRoute = ({ ...routeProps }: IProtectedRouteProps) => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: 'login' }} />;
  }
};

export default ProtectedRoute;
