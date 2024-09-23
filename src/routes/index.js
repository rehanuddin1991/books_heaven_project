export const ROUTES = {
    HOME: "/",
    ABOUT: "/about",
    BLOG: "/blog",
    FAQ: "/faq",
     
    SINGLE_BOOKS: {
      STATIC: "/book/:bookId",
      DYNAMIC: (bookId) => `/book/${bookId}`,
    },
  };
  