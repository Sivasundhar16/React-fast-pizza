import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";

import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";

import Order from "./features/order/Order";
import { Applayout } from "./ui/Applayout";
import Error from "./ui/Error";
import { loader as orderLoader } from "./features/order/Order";

const router = createBrowserRouter([
  {
    element: <Applayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

// import {
//   createBrowserRouter,
//   RouterProvider,
//   useLoaderData,
// } from "react-router-dom";

// const fetchUserData = async () => {
//   const response = await fetch("https://api.example.com/user");
//   if (!response.ok) throw new Error("Failed to load data");
//   return response.json();
// };

// const User = () => {
//   const data = useLoaderData(); // Access data fetched by the loader
//   return <div>{data.name}</div>;
// };

// const router = createBrowserRouter([
//   {
//     path: "/user",
//     element: <User />,
//     loader: fetchUserData, // Attach the loader
//   },
// ]);

// const App = () => <RouterProvider router={router} />;
// export default App ;
