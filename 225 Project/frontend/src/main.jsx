import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Shop from "./Shop/Shop";
import Customs from "./Customs/Customs";
import Cart from "./Cart/Cart";
import Support from "./Support/Support";


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Shop />,
  },
  {
    path: "/customs",
    element: <Customs />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
