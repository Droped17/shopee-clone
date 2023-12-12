import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ShopeeHomePage from "../pages/ShopeeHomePage";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <ShopeeHomePage /> }],
  },
]);

export default function Route() {
  return <RouterProvider router={router}></RouterProvider>;
}
