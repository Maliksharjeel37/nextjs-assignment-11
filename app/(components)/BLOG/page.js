import Image from "next/image";
import LessthenButton from "../main-button/lessthenButton";
import GreaterthenButton from "../main-button/greaterthenButton";
export default function BLOG() {
  return (
    <div>
      <div className="row flex mx-20 mt-32 mb-48 ">
        <div className="section-1 text-center mt-44 mx-10   ">
          <h1 className=" text-center text-2xl ">Letest News & Blog</h1>
          <hr className=" w-14 my-2 mx-2" />
          <p className="text-center my-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing tempor incididunt
            labo.{" "}
          </p>
          <input
            type="text"
            placeholder="Enter your Email"
            style={{
              borderWidth: "3px",
              borderColor: "blue",
              textEmphasisColor: "blue",
            }}
          ></input>
        </div>
        <div
          className="section-2  bg-blue-700 text-white  mx-10 "
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
        <div
          className="section-3  bg-white text-black mx-10  "
          style={{ borderWidth: "3px", borderColor: "blue" }}
        >
          <h1 className=" text-3xl font-bold mx-10 mt-10">
            Maecenas laoree efficiture sagittis aliquam eleifend nisl.
          </h1>
          <h1 className="text-2xl mt-5 mx-12  text-blue-600">
            Posted 7 MArch, 2020
          </h1>
          <p className=" mt-16 mx-12 mb-26">
            Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod
            tempor incididunt labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
          </p>
          <button className="flex mx-12"><h1 className=" mt-11 text-xl font-bold text-blue-800 mb-12">Read More{"->"}</h1></button>

        </div>
        <div className="g-and-l-button mt-72 ">
        <LessthenButton/>
       < GreaterthenButton  style={{ marginTop:"20px"}}/>
          </div> 
      </div>
    </div>
  );
}
