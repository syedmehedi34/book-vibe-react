/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="border border-[#13131326] rounded-2xl p-6 h-full">
      <div>
        <img
          className="w-full h-[250px] object-cover object-top rounded-2xl mb-6"
          src={image}
          alt=""
        />
      </div>

      {/* tags */}
      <div className="flex gap-5">
        {tags.map((tag, idx) => (
          <button key={idx}>{tag}</button>
        ))}
      </div>

      <Link to={`/books/${bookId}`}>
        <h1 className="my-4 text-text font-bold text-2xl font-playFair">
          {bookName}
        </h1>
      </Link>

      <p className="text-text80 font-[500]">{author}</p>

      <div className="border-t border-dashed my-4"></div>

      <div className="flex  justify-between items-center">
        <p className="text-text80 font-[500]">{category}</p>
        <div className="text-text80 font-[500] flex items-center gap-2">
          <p>{rating}</p>
          <FaRegStar />
        </div>
      </div>
    </div>
  );
};

export default Book;
