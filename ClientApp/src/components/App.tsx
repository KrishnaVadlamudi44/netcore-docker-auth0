import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from '../LoginPage';
import ProtectedRoute from '../ProtectedRoute';
import Dashboard from './Dashboard';
import PrivatePage from './PrivatePage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/login' exact component={LoginPage} />

        <ProtectedRoute path='/private' exact component={PrivatePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
