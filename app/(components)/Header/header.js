import Navber from "../navber";
import Button from "../button";
export default function header() {
  return (
    <div className=" bg-blue-700">
      <div>
        <Navber />
        <div className="mt-56 mx-32 my-52 mb-3.5 ">
          <h1 className=" text-white , text-justify  , font-bold   text-7xl ">creative</h1>
          <h1 className=" text-white , text-justify   , font-bold text-7xl ">
            Digital Agency
          </h1>
          <p className="text-white , text-justify , font-medium , mt-10 mb-12 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            mollitia
            <br></br> ad, non reiciendis sit natus, magnam rem dignissimos iusto
            sint commodi illo eligendi et repellendus delectus optio dolor error
            fuga!
          </p>
          <Button text={"Lear More"}/>
        </div>
      </div>
    </div>
  );
}
