import { toast } from 'react-toastify';


const getReadingList = () => {
    return JSON.parse(localStorage.getItem("readingList")) || [];
};

const getWishlist = () => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
};

const addToReadingList = (bookId, bookName) => {
    const readingList = getReadingList();
    if (!readingList.includes(bookId)) {
        readingList.push(bookId);
        localStorage.setItem("readingList", JSON.stringify(readingList));
        toast.success(`${bookName} added to your reading list.`);
    }
    else {
        toast.error(`${bookName} is already in the reading list.`);
    }
};

const addToWishlist = (bookId, bookName) => {
    const wishlist = getWishlist();
    if (!wishlist.includes(bookId)) {
        wishlist.push(bookId);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        toast.success(`${bookName} added to your wishlist.`);
    }
    else {
        toast.error(`${bookName} is already in the wishlist.`);
    }
};

export { getReadingList, getWishlist, addToReadingList, addToWishlist };
