import { useState, useEffect } from 'react';
import Items from './Items.js';
import Buttons from './Buttons.js';

const url = 'https://jsonplaceholder.typicode.com/todos';

const Pagination = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const json = await res.json();
        setLoading(false);
        setData(json);
      } catch (error) {
        console.log('Got an error: ', error);
      }
    })();
  }, []);

  const firstItemIndex = currentPage * itemsPerPage;
  const lastItemIndex = firstItemIndex + itemsPerPage;
  const currentPageItems = data.slice(firstItemIndex, lastItemIndex);
  return (
    <div>
      <h2>Title</h2>
      <Items isLoading={loading} data={currentPageItems} />
      <Buttons
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        paginate={setCurrentPage}
      />
    </div>
  );
};

export default Pagination;
