import { FaRegCalendarCheck } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { MdOutlineGroup } from "react-icons/md";
import { Link } from "react-router-dom";

const ListCard = ({ book }) => {
  const { bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-white border border-gray-300 rounded-xl shadow-md">
      <figure className="w-full md:w-44 h-88 md:h-44  py-10 md:p-6 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
        <img
          src={image}
          alt={bookName}
          className="w-1/2 md:w-20 h-full mx-auto object-cover"
        />
      </figure>

      <div className="flex flex-col flex-1 space-y-2">
        {/* Book Title and Author */}
        <h2 className="playfair-display text-lg sm:text-xl font-bold text-slate-800">
          {bookName}
        </h2>
        <p className="text-sm text-slate-700 font-semibold">
          By: <span>{author}</span>
        </p>

        {/* tags */}
        <div className="flex flex-wrap items-center text-sm">
          <p className="text-slate-700 font-bold mr-2">Tags:</p>
          {tags.map((tag) => (
            <span
              key={tag}
              className="badge badge-sm bg-green-50 text-green-500 mr-2 mb-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Additional Information */}
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-500">
          <p className="inline-flex items-center gap-2"><MdMenuBook />Page: {totalPages}</p>
          <p className="inline-flex items-center gap-2"><FaRegCalendarCheck />Year of Publishing: {yearOfPublishing}</p>
          <p className="inline-flex items-center gap-2"><MdOutlineGroup className="w-4 h-4" />Publisher: {publisher}</p>
        </div>

        <hr className="text-gray-300 mt-2 mb-4" />

        {/* Category and Rating */}
        <div className="flex flex-wrap gap-2 items-center text-xs md:text-sm">
          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-medium">
            Category: {category}
          </span>
          <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 font-medium">
            Rating: {rating}
          </span>
          <Link
            to={`/books/${book.bookId}`}
            className="px-3 py-1 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
