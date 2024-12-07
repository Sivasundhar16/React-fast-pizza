import CreateUser from "../features/users/CreateUser";

function Home() {
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold text-green-500 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-gray-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
