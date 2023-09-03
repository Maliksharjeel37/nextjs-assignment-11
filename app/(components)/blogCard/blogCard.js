export default function blogCard() {
  return (
    <div>
      <div className=" text-black  mx-5 hover:bg-blue-700 hover:text-black hover:scale-110 border-4 border-blue-500 shadow-2xl">
        <h1 className=" text-3xl font-bold mx-5 mt-10">
          Maecenas laoree efficiture sagittis aliquam eleifend nisl.
        </h1>
        <h1 className="text-2xl mt-5 mx-12 text-blue-400">
          Posted 7 MArch, 2020
        </h1>
        <p className=" mt-16 mx-3 mb-26">
          Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod
          tempor incididunt labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident,
        </p>
        <button className="flex mx-6">
          <h1 className=" mt-11 text-xl font-bold text-blue-500 mb-12">
            Read More{"->"}
          </h1>{" "}
        </button>
      </div>
    </div>
  );
}
