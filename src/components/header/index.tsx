import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { store } from '../../mobx/store';

export default function Header() {

  const handleClick = (currentPage) => () => {
    store.changeCurrentPage(currentPage);
  };

  return (
    <div className="header">
      <h1>Courses</h1>
      <ul>
        <li><Link onClick={handleClick('popular')} to="/popular">Popular</Link></li>
        <li><Link onClick={handleClick('favorite')} to="favorite">Favorite</Link></li>
        <li><Link onClick={handleClick('new')} to="new">New</Link></li>
      </ul>
    </div>
  );
}