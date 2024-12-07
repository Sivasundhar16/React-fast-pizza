import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Searchorder = () => {
  const [qurey, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!qurey) return;
    navigate(`/order/${qurey}`);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Your Order"
        value={qurey}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full border-none bg-orange-200 px-2 py-2 text-center text-sm text-gray-600 sm:w-64"
      />
    </form>
  );
};
