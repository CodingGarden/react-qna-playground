import React, { useState, useEffect } from 'react';
import {
  Switch, Route, useLocation, useHistory,
} from 'react-router-dom';

import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import useFirebaseAuth from './useFirebaseAuth';

const App = () => {
  const { user, login, logout } = useFirebaseAuth();
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (user && location.pathname !== '/dashboard') {
      // redirect to dashboard
      console.log('logged in! redirecting...');
      history.push('/dashboard');
    } else if (!user && location.pathname !== '/') {
      // redirect to home page
      console.log('not logged in! redirecting...');
      history.push('/');
    }
  }, [user, location.pathname]);
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <LandingPage login={login} />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard logout={logout} />
        </Route>
        <Route>
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
};

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   return (
//     <div>
//       {loggedIn ? (
//         <Dashboard setLoggedIn={setLoggedIn} />
//       ) : (
//         <LandingPage setLoggedIn={setLoggedIn} />
//       )}
//     </div>
//   );
// }

export default App;


// class App extends Component {
//   state = {
//     loggedIn: false
//   }
//   setLoggedIn = (loggedIn) => {
//     this.setState({
//       loggedIn,
//     })
//   }
//   render() {
//     return (
//     <div>
//       {this.state.loggedIn ? (
//         <Dashboard setLoggedIn={this.setLoggedIn} />
//       ) : (
//         <LandingPage setLoggedIn={this.setLoggedIn} />
//       )}
//     </div>
//   );
//   }
// }
