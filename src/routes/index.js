export const ROUTES = {
    HOME: "/",
     
    SINGLE_BOOKS: {
      STATIC: "/book/:bookId",
      DYNAMIC: (bookId) => `/book/${bookId}`,
    },
  };
  