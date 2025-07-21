import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListCard from "../ListCart/ListCard";
import { getReadingList, getWishlist } from "../../Utilities/addToDo";
import Empty from "../Empty/Empty";

const ListedBooks = () => {
  const [readingList, setReadingList] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [sort, setSort] = useState("");
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

  // sort books function
  const sortBooks = (criteria) => {
    setSort(criteria);

    if (criteria == "Rating") {
      const sortedReadList = [...readingList].sort(
        (a, b) => a.rating - b.rating
      );
      setReadingList(sortedReadList);
    } else if (criteria == "No. of Pages") {
      const sortedReadList = [...readingList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadingList(sortedReadList);
    } else if (criteria == "Year of Publication") {
      const sortedReadList = [...readingList].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      setReadingList(sortedReadList);
    }
  };

  return (
    <div className="mt-6 mb-12 md:mb-24">
      <h1 className="text-[28px] md:text-4xl font-bold w-full text-center py-6 md:py-8 bg-gray-100 rounded-xl">
        Books
      </h1>
      {/* sort books */}
      <div className="flex justify-center mt-6 mb-8">
        <div className="dropdown dropdown-bottom text-center">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-green-500 hover:bg-green-600 transition-all duration-300"
          >
            {sort ? `Sort by ${sort}` : "Sort by"}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-green-500"
          >
            <li>
              <a onClick={() => sortBooks("Rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => sortBooks("No. of Pages")}>No. of Pages</a>
            </li>
            <li>
              <a onClick={() => sortBooks("Year of Publication")}>
                Year of Publication
              </a>
            </li>
          </ul>
        </div>
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
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="space-y-6 mt-6">
            {wishlist.length > 0 ? (
              wishlist.map((book) => <ListCard key={book.bookId} book={book} />)
            ) : (
              <Empty />
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
