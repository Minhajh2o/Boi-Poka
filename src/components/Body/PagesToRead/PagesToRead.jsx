import React, { useEffect, useState } from 'react';
import { getWishlist } from '../../Utilities/addToDo';
import { useLoaderData } from 'react-router-dom';
import CustomBarChart from '../../CustomBarChart/CustomBarChart';
import Empty from '../Empty/Empty';

const PagesToRead = () => {
      const [wishlist, setWishlist] = useState([]);
      const data = useLoaderData();

      useEffect(() => {
        const storedWishlist = getWishlist();
        if (storedWishlist && data) {
          const getWishlistInt = storedWishlist.map((id) => parseInt(id));
          const filteredWishlist = data.filter((book) =>
            getWishlistInt.includes(book.bookId)
          );
          setWishlist(filteredWishlist);
        }
      }, [data]);

    return (
        <>
            {wishlist.length > 0 ? (
              <CustomBarChart wishlist={wishlist} />
            ) : (
              <Empty />
            )}
        </>
    );
};

export default PagesToRead;