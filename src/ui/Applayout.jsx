import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

export const Applayout = () => {
  const navigate = useNavigation(); //gives all state . like 'isloading' and 'idle'
  const isLoading = navigate.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};
