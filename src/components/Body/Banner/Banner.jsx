import bookImg from "../../../assets/Book.png";

const Banner = () => {
  const goToBooksList = () => {
    document.getElementById("books-section").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="hero bg-gray-100 py-6 md:px-28 md:py-20 rounded-2xl mt-6 md:mt-12">
      <div className="hero-content flex-col lg:flex-row-reverse gap-9">
        <img src={bookImg} className="max-w-44 md:max-w-64" />
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-6xl playfair-display font-bold">
            Books to freshen up your bookshelf
          </h1>
          <button
            onClick={goToBooksList}
            className="bg-green-500 text-white text-lg md:text-xl font-semibold px-5 py-3 md:px-7 md:py-4 mt-6 md:mt-12 rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
