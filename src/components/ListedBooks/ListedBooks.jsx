import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishlist } from "../../utilities/addToDb";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const allBooks = useLoaderData();

  useEffect(() => {
    // readList
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);

    // wishlist
    const storedWishlist = getStoredWishlist();
    const storedWishlistInt = storedWishlist.map((id) => parseInt(id));
    const wishList = allBooks.filter((book) =>
      storedWishlistInt.includes(book.bookId)
    );
    setWishlist(wishList);
  }, [allBooks]);

  //
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="mt-10 mb-6 text-center py-7 text-text text-[28px] font-bold bg-[#1313130D] rounded-2xl">
        Books
      </h1>
      <div className="flex justify-center">
        <button className="btn bg-greeny text-white font-bold">Sort By</button>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2>Read Books: {readList.length}</h2>
        </TabPanel>

        <TabPanel>
          <h2>Wishlist Books: {wishlist.length}</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
