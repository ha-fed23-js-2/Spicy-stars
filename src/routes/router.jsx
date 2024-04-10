import { createHashRouter } from "react-router-dom";
import RenderStartPage from "../components/StartPage.jsx";
import Root from "./Root2.jsx";
import RenderMenyPage from "../components/RenderMenyPage.jsx";
import LogIn from "../components/LogIn.jsx";
import Checkout from "../components/Checkout.jsx";
import MenyEmployee from "../components/MenyEmployee.jsx";
import ProtectedRoute from "../components/ProtectedRoute.js";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/meny",
        element: <RenderMenyPage />,
      },
      {
        path: "/meny-employee",
        element: <ProtectedRoute><MenyEmployee /></ProtectedRoute>,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/",
        element: <RenderStartPage />,
      },
    ],
  },
]);

export { router };
