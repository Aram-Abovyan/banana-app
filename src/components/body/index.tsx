import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { store } from '../../mobx/store';

import Favorite from '../../components/pages/Favorite';
import New from '../../components/pages/New';
import Popular from '../../components/pages/Popular';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Menu1, Menu2, Menu3 } from '../pages/Menus';


export default function Body() {
  return (
    <div className="body">
      <PerfectScrollbar>
        <div id="container">
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

            <Route exact path="/menu1">
              <Menu1
                // store={store}
              />
            </Route>

            <Route exact path="/menu2">
              <Menu2
                // store={store}
              />
            </Route>

            <Route exact path="/menu3">
              <Menu3
                // store={store}
              />
            </Route>
          </Switch>
        </div>
      </PerfectScrollbar>
    </div>
  );
}