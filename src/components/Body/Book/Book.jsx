import React from "react";
import StarRating from "../StarRating/StarRating";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, tags, category, rating } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100  p-6 shadow-sm">
        <figure className="mb-4 py-8 bg-gray-100 rounded-lg">
          <img
            className="w-24 h-40 object-cover"
            src={image}
            alt={bookName}
          />
        </figure>
        <div>
          {tags.map((tag) => (
            <div
              key={tag}
              className="badge badge-sm bg-green-100 text-green-500 mr-2 mb-4"
            >
              {tag}
            </div>
          ))}
          <h2 className="card-title playfair-display text-2xl mb-4 line-clamp-1">
            {bookName}
          </h2>
          <p className="pb-5 border-b border-dashed border-gray-400">
            By: {author}
          </p>
          <div className="card-actions mt-5 justify-between">
            <div className="badge badge-outline">{category}</div>
            <StarRating rating={rating} size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
