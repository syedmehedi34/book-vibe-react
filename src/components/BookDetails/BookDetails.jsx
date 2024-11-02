/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";
import {
  addToStoredReadList,
  addToStoredWishlist,
} from "../../utilities/addToDb";

const BookDetails = () => {
  // get the book id
  const { bookId } = useParams();
  const id = parseInt(bookId);
  //   console.log(id);

  // get all the data
  const data = useLoaderData();
  //   console.log(data);

  // find the required data
  const book = data.find((book) => book.bookId === id);
  //   console.log(book);
  const {
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

  //
  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };
  const handleWishlistBtn = (id) => {
    addToStoredWishlist(id);
  };

  //
  return (
    <div className="w-11/12 mx-auto my-12 grid grid-cols-2 gap-12">
      <div className="h-full bg-[#1313130D] rounded-2xl flex items-center justify-center">
        <img className="h-80 rounded-2xl object-cover" src={image} alt="" />
      </div>

      {/*  */}
      <div className="h-fit">
        <h1 className="text-text font-bold text-[40px] font-playFair mb-2">
          {bookName}
        </h1>
        <p className="text-text80 font-[500]">By : {author}</p>

        <div className=" mt-5 mb-4 border-t border-[#13131326] w-full"></div>
        <p className="text-text80 font-[500]">{category}</p>
        <div className=" mt-4 mb-5 border-t border-[#13131326] w-full"></div>

        <p className="text-[#131313B3] mb-5">
          <span className="text-text font-bold">Review : </span> {review}
        </p>

        <div className="flex items-center gap-5 ">
          <span className="text-text font-bold">Tags :</span>
          <button className="btn btn-sm text-greeny rounded-full bg-[#23BE0A0D] border-none">
            Type1
          </button>
          <button className="btn btn-sm text-greeny rounded-full bg-[#23BE0A0D] border-none">
            Type1
          </button>
        </div>
        <div className=" mt-5 mb-4 border-t border-[#13131326] w-full"></div>

        <div>
          <p>Number of Pages : {totalPages}</p>
          <p>Published : {publisher}</p>
          <p>Year of Publishing : {yearOfPublishing}</p>
          <p>Rating : {rating}</p>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => handleMarkAsRead(bookId)}
            className="btn bg-inherit btn-outline"
          >
            Mark as Read
          </button>
          <button
            onClick={() => handleWishlistBtn(bookId)}
            className="btn bg-[#50B1C9] text-white "
          >
            Add to Wishlist
          </button>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default BookDetails;
