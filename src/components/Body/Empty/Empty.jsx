import alertIcon from "../../../assets/alert.png";

const Empty = () => {
    return (
        <div>
        <div className="flex flex-col items-center justify-center text-center mt-12 md:mt-16">
          <figure className="h-72 w-72 mx-auto mb-6">
            <img src={alertIcon} alt="" />
          </figure>
          <h3 className="text-3xl text-gray-600 font-semibold">
            No Books Found
          </h3>
        </div>
      </div>
    );
};

export default Empty;