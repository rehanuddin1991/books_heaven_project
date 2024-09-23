import { createBrowserRouter } from "react-router-dom";
import BookDetailsPage from "../pages/BookDetailsPage";
 
import { ROUTES } from "../routes";
import CommonLayout from "../layout/CommonLayout";
import Homepage from "../pages/Homepage";

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
        path: `${ROUTES.SINGLE_BOOKS.STATIC}`,
        element: <BookDetailsPage />,
      },
    ],
  },
]);

export default router;
