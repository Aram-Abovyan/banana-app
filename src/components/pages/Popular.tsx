import Card from '../card';
import {observer} from 'mobx-react';
import 'react-perfect-scrollbar/dist/css/styles.css';


const Popular = observer(({ store }) => {

  const content = store.cards.reduce((prev, { id, url, category }) => {

    if (store.currentPage === category) {
      return ([
        ...prev,
        (<li key={id}>
          <Card
            id={id}
            url={url}
          />
        </li>)
      ]);
    }
    
    return prev;
  }, []);

  return (
      <div id="container">
        <ul>
          {content}
        </ul>
      </div>
  );
});

export default Popular;