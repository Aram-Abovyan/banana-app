import React from 'react';
import {
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom';

import { store } from './mobx/store';

import Header from './components/header';
import Body from './components/body';
import VerticalNavbar from './components/vertical-navbar';

import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Redirect exact from="/" to="favorite" />
        <VerticalNavbar store={store} />
        <Header store={store} />
        <Body />
      </Router>
    </div>
  );
}

export default App;
