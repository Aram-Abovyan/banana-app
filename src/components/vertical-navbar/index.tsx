import MenuItem1 from "../../assets/MenuItem1";
import MenuItem2 from "../../assets/MenuItem2";
import MenuItem3 from "../../assets/MenuItem3";
import {observer} from 'mobx-react';
import { Link } from 'react-router-dom';

type Store = {
  store: any
}

const VerticalNavbar = observer(({ store }:Store) => {

  const handleClick = (currentPage) => () => {
    store.changeCurrentPage(currentPage);
  };

  return (
    <div className="vertical-navbar">
      <ul>
        <li><a onClick={handleClick('menu1')}><Link to="/menu1"><MenuItem1 store={store} /></Link></a></li>
        <li><a onClick={handleClick('menu2')}><Link to="/menu2"><MenuItem2 store={store} /></Link></a></li>
        <li><a onClick={handleClick('menu3')}><Link to="/menu3"><MenuItem3 store={store} /></Link></a></li>
      </ul>
    </div>
  );
});

export default VerticalNavbar;
