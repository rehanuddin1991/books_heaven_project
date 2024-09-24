import { createBrowserRouter } from "react-router-dom";
import BookDetailsPage from "../pages/BookDetailsPage";
 
import { ROUTES } from "../routes";
import CommonLayout from "../layout/CommonLayout";
import Homepage from "../pages/Homepage";
import NoPageFound from "../NoPageFound";
import About from "../components/shared/About";
import FAQ from "../components/shared/FAQ";
import Blog from "../components/shared/Blog";
import SignIn from "../components/shared/SignIn";
import BuyBook from "../components/shared/BuyBook";


const router = createBrowserRouter([
  {
    path: `${ROUTES.HOME}`,
    element: <CommonLayout />,
    children: [
      {
        path: `${ROUTES.HOME}`,
        element: <Homepage />,
      },
      {
        path: "*",
        element: <NoPageFound />,
      },
      {
        path: `${ROUTES.ABOUT}`,
        element: <About />,
      }

      ,
      {
        path: `${ROUTES.SIGNIN}`,
        element: <SignIn />,
      }

      ,
      {
        path: `${ROUTES.BUYBOOK}`,
        element: <BuyBook />,
      }
      ,
      {
        path: `${ROUTES.FAQ}`,
        element: <FAQ />,
      }
      
      ,
      {
        path: `${ROUTES.BLOG}`,
        element: <Blog />,
      }
      ,
      {
        path: "/book/:bookId",
        element: <BookDetailsPage />,
      },
    ],
  },
]);

export default router;
