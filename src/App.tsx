import React, { createContext, useContext } from 'react';
import Header from './components/header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import './styles/card.scss';

import { store } from './mobx/store';

import Favorite from './components/pages/Favorite';
import New from './components/pages/New';
import Popular from './components/pages/Popular';

function App() {

  return (
    <div className="App">
      <Router>
        <Redirect exact from="/" to="favorite" />
        <Header />
        <Switch>
          <Route exact path="/favorite">
            <Favorite
              store={store}
            />
          </Route>

          <Route exact path="/new">
            <New
              store={store}
            />
          </Route>

          <Route exact path="/popular">
            <Popular
              store={store}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
