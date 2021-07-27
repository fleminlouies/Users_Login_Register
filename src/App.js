import {useContext} from 'react';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Users from './pages/Users';
import { UserContext } from './Context/context';
import { Route , Switch , Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest}) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated
      ? (
         <Component {...props} />
      )
      : (<Redirect to={{ pathname: '/login', state: { from: props.location} }} />)
    )}
  />
  );


function App() {
  const context = useContext(UserContext)

  return (
    <Switch>
      <Route exact path ="/login" component={Login}/>
      <Route exact path ="/signup" component={Signup}/>
      <PrivateRoute path="/" component={Users} isAuthenticated={context.user} />
    </Switch>
  );
}

export default App;
