import {
  Link
} from 'react-router-dom';
import {observer} from 'mobx-react';
import '../../styles/header.scss';

const Header = observer(({store}) => {

  const handleClick = (currentPage) => () => {
    store.changeCurrentPage(currentPage);
  };

  return (
    <div className="header">
      <h1>Courses</h1>
      <ul>
        <li className={store.currentPage === 'popular' ? 'selected' : 'link'}><Link onClick={handleClick('popular')} to="/popular">Popular</Link></li>
        <li className={store.currentPage === 'favorite' ? 'selected' : 'link'}><Link onClick={handleClick('favorite')} to="favorite">Favorite</Link></li>
        <li className={store.currentPage === 'new' ? 'selected' : 'link'}><Link onClick={handleClick('new')} to="new">New</Link></li>
      </ul>
    </div>
  );
})

export default Header;