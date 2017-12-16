import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
// import { initAuth } from '../auth';

import Home from './Home';

// para poder usar el store hay que contener la aplicacion en un provider
const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  </Provider>
);
/*
initAuth(store.dispatch)
  .then(() => render(App))
  .catch(error => console.error(error));
*/
export default App;
