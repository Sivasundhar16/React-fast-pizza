import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-blue-300 px-5 py-4 text-sm font-semibold uppercase text-gray-700 md:text-base">
      <p className="space-x-8 font-semibold text-red-500">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
