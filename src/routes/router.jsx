import { createHashRouter } from "react-router-dom";
import RenderStartPage from "../components/StartPage.jsx";
import Root from "./Root2.jsx";
import RenderMenyPage from "../components/RenderMenyPage.jsx";

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
        element: 2,
      },
      {
        path: "/login",
        element: 3,
      },
      {
        path: "/checkout",
        element: 4,
      },
      {
        path: "/",
        element: <RenderStartPage />,
      },
    ],
  },
]);

export { router };
