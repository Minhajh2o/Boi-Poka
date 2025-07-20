import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToReadingList, addToWishlist } from "../../Utilities/addToDo";

const BookDetails = () => {
  const data = useLoaderData();

  const { bookId } = useParams();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);
  const {  bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

  const handleMarkAsRead = (bookId, bookName) => {
    addToReadingList(bookId, bookName);
  };
  const handleAddToWishlist = (bookId, bookName) => {
    addToWishlist(bookId, bookName);
  };
  return (
    <div>
      {book ? (
        <>
          <div className="mt-6 md:mt-12 mb-12 md:mb-24">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
              <figure className="flex items-center justify-center w-full md:w-1/2 py-8 md:py-20 bg-gray-100 rounded-lg">
                <img
                  src={image}
                  className="w-48 md:w-96 h-80 md:h-[580px] rounded-lg object-cover"
                />
              </figure>
              <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
                <div>
                  <h1 className="text-3xl md:text-[40px] font-bold playfair-display leading-tight">
                    {bookName}
                  </h1>
                  <p className="text-gray-800 text-lg md:text-xl font-bold mt-2 md:mt-4">
                    By: {author}
                  </p>
                </div>
                <p className="text-gray-800 font-bold text-lg md:text-xl py-3 md:py-4 border-t border-b border-gray-300">
                  {category}
                </p>
                <p className="text-gray-500 text-sm md:text-base">
                  <span className="font-bold text-gray-800">Review: </span>
                  {review}
                </p>
                <div className="flex flex-wrap items-center">
                  <p className="font-bold mr-2 text-sm md:text-base">Tags:</p>
                  {tags.map((tag) => (
                    <div
                      key={tag}
                      className="badge badge-sm md:badge-md bg-green-50 text-green-500 mr-2 mb-1"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <hr className="text-gray-300" />
                <table className="w-full text-sm md:text-base">
                  <tbody>
                    <tr>
                      <td className="text-gray-500 py-1">Total Pages:</td>
                      <td className="text-gray-800 font-semibold py-1">
                        {totalPages}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 py-1">
                        Year of Publishing:
                      </td>
                      <td className="text-gray-800 font-semibold py-1">
                        {yearOfPublishing}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 py-1">Publisher:</td>
                      <td className="text-gray-800 font-semibold py-1">
                        {publisher}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 py-1">Rating:</td>
                      <td className="text-gray-800 font-semibold py-1">
                        {rating} / 5
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex flex-col md:flex-row gap-3 md:gap-4 ">
                  <button
                    onClick={() => handleMarkAsRead(bookId, bookName)}
                    className="btn btn-sm md:btn-md bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    Mark as Read
                  </button>
                  <button
                    onClick={() => handleAddToWishlist(bookId, bookName)}
                    className="btn btn-sm md:btn-md bg-green-500 hover:bg-green-600 text-white"
                  >
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
};

export default BookDetails;
