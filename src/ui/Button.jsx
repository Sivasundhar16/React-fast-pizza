const Button = ({ childern, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="ml-3 mt-2 inline-block rounded-md bg-violet-600 px-1 py-1 font-semibold uppercase tracking-wide text-white transition-colors duration-500 hover:bg-violet-500 hover:text-gray-800 focus:outline-none focus:ring focus:ring-violet-600 focus:ring-offset-2 disabled:cursor-not-allowed"
    >
      Button
      {childern}
    </button>
  );
};

export default Button;
