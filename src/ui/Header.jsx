import { Link } from "react-router-dom";
import { Searchorder } from "../features/order/Searchorder";
import Username from "../features/users/Username";

const Header = () => {
  return (
    //sm : screen size ithuku mela porapa property run aakum . same goes for md and others
    <header className="flex items-center justify-around border-b-8 border-blue-400 bg-green-400 px-4 py-4 text-center uppercase sm:bg-pink-400 md:bg-orange-500 md:text-white">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <Searchorder />
      <Username />
    </header>
  );
};

export default Header;
