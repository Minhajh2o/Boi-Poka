import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListCard from "../ListCart/ListCard";
import { getReadingList, getWishlist  } from "../../Utilities/addToDo";
import Empty from "../Empty/Empty";

const ListedBooks = () => {
  const [readingList, setReadingList] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedReadingList = getReadingList();
    const storedWishlist = getWishlist();
    const getReadingListInt = storedReadingList.map((id) => parseInt(id));
    const getWishlistInt = storedWishlist.map((id) => parseInt(id));

    // Filter books based on reading list and wishlist
    const filteredReadingList = data.filter((book) =>
      getReadingListInt.includes(book.bookId)
    );
    const filteredWishlist = data.filter((book) =>
      getWishlistInt.includes(book.bookId)
    );

    // Set state with filtered books
    setReadingList(filteredReadingList);
    setWishlist(filteredWishlist);
  }, [data]);

  return (
    <div className="mt-6 mb-12 md:mb-24">
      <h1 className="text-[28px] md:text-4xl font-bold w-full text-center py-6 md:py-8 bg-gray-100 rounded-xl">
        Books
      </h1>
      {/* sort books */}
      <div className="text-center mt-6 mb-8">
        <select
          id="sort-price"
          className="w-fit px-4 py-2 text-white font-semibold rounded-md bg-green-500 hover:bg-green-600 transition-all duration-300"
          defaultValue="default"
        >
          <option value="default" disabled hidden>
            Sort by
          </option>
          <option value="author" className="bg-white text-green-500">
            Author
          </option>
          <option value="category" className="bg-white text-green-500">
            Category
          </option>
          <option value="newest" className="bg-white text-green-500">
            Newest first
          </option>
          <option value="oldest" className="bg-white text-green-500">
            Oldest first
          </option>
        </select>
      </div>
      {/* book list */}
      <Tabs>
        <TabList>
          <Tab>Reading List</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <div className="space-y-6 mt-6">
            {readingList.length > 0 ? (
            readingList.map((book) => (
              <ListCard key={book.bookId} book={book} />
            ))
          ) : (
            <Empty />
          )}</div>
        </TabPanel>
        <TabPanel>
          <div className="space-y-6 mt-6">
            {wishlist.length > 0 ? (
            wishlist.map((book) => <ListCard key={book.bookId} book={book} />)
          ) : (
            <Empty />
          )}</div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
