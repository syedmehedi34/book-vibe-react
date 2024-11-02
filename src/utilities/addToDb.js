/* eslint-disable no-unused-vars */
const getStoredReadList = () => {
  // read-list
  const storedListStr = localStorage.getItem("read-list");

  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

//
const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();

  if (storedList.includes(id)) {
    alert("Already added to Read List");
  } else {
    storedList.push(id);
    // set the pushed value to localStorage
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
  }
};

//-----------------------------------
const getStoredWishlist = () => {
  const storedWishlist = localStorage.getItem("wish-list");

  if (storedWishlist) {
    const wishlist = JSON.parse(storedWishlist);
    return wishlist;
  } else {
    return [];
  }
};

//
const addToStoredWishlist = (id) => {
  const storedList = getStoredWishlist();

  if (storedList.includes(id)) {
    alert("Already Added to wishlist");
  } else {
    storedList.push(id);
    const storedWishlistStr = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storedWishlistStr);
  }
};

//
//
//
export {
  addToStoredReadList,
  addToStoredWishlist,
  getStoredReadList,
  getStoredWishlist,
};
