import Card from '../card';
import {observer} from 'mobx-react';

const Favorite = observer(({ store }) => {
  const content = store.cards.reduce((prev, { id, url, category }) => {
    if (store.currentPage === category) {
      return ([
        ...prev,
        <li key={id}>
          <Card
            id={id}
            url={url}
          />
        </li>
      ]);
    }

    return prev;
    
  }, []);

  return (
    <div>
      <ul>
        {content}
      </ul>
    </div>
  );
});

export default Favorite;
