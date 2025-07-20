import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div id="books-section">
      <h1 className="playfair-display text-3xl md:text-4xl font-bold text-center mt-12 md:mt-24 mb-6 md:mb-9">
        Books
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
