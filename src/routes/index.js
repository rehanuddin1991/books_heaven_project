export const ROUTES = {
    HOME: "/",
    ABOUT: "/about",
    BLOG: "/blog",
    FAQ: "/faq",
    BUYBOOK: "/buybook",
    SIGNIN: "/signin",
     
    SINGLE_BOOKS: {
      STATIC: "/book/:bookId",
      DYNAMIC: (bookId) => `/book/${bookId}`,
    },
  };
  