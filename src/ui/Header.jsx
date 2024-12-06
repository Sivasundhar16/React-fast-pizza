import { Link } from "react-router-dom";
import { Searchorder } from "../features/order/Searchorder";

const Header = () => {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <Searchorder />
    </header>
  );
};

export default Header;
