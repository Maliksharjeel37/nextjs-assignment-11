export default function blogCard() {
  return (
    <div>
        <div
          className=" text-black  mx-10 hover:bg-blue-700 hover:text-black hover:scale-110"
          style={{ borderWidth: "3px", borderColor: "blue" }}
        >
          <h1 className=" text-3xl font-bold mx-10 mt-10">
            Maecenas laoree efficiture sagittis aliquam eleifend nisl.
          </h1>
          <h1 className="text-2xl mt-5 mx-12">Posted 7 MArch, 2020</h1>
          <p className=" mt-16 mx-12 mb-26">
            Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod
            tempor incididunt labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
          </p>
          <button className="flex mx-12"><h1 className=" mt-11 text-xl font-bold text-white mb-12">Read More{"->"}</h1> </button>
        </div>
    </div>
  );
}
