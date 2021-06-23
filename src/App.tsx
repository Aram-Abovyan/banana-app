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
import Body from './components/body';
import VerticalNavbar from './components/vertical-navbar';
import { store } from './mobx/store';

function App() {
  return (
    <div className="App">
      <Router>
        <Redirect exact from="/" to="favorite" />
        <VerticalNavbar />
        <Header store={store} />
        <Body />
      </Router>
    </div>
  );
}

export default App;
