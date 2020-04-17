import React, { Component, useState, useEffect } from 'react';
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom';

import LandingPage from './LandingPage';
import Dashboard from './Dashboard';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (loggedIn && location.pathname !== '/dashboard') {
      // redirect to dashboard
      console.log('logged in! redirecting...');
      history.push('/dashboard');
    } else if (!loggedIn && location.pathname !== '/') {
      // redirect to home page
      console.log('not logged in! redirecting...');
      history.push('/');
    }
  }, [loggedIn, location.pathname]);
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <LandingPage setLoggedIn={setLoggedIn} />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard setLoggedIn={setLoggedIn} />
        </Route>
        <Route>
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

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
