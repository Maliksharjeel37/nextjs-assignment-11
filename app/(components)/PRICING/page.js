import Image from "next/image";
import Pricing from "../pricingCard/pricing";
import ClientsCard from "../pricingCard/clientsCard";
export default function PRICING() {
  return (
    <div >
      <div className=" heading-section flex mt-16  mb-32 mx-20">
        <div className="heading text-5xl  font-bold">
          <h1>Choose A Plan That’s Right For You</h1>
        </div>
        <div className="flex text-justify" style={{marginLeft:"390px"}}>
          <h1 className=" text-blue-900 mx-2">Monthly</h1>
        <label for="check"className=" bg-blue-700 w-20 h-10  cursor-pointer relative rounded-full">
          <input type="checkbox"  id="check" className=" sr-only peer"></input>
          <span className=" w-2/5 h-4/5 bg-white absolute rounded-full left-1 top-1 peer-checked:bg-black peer-checked:left-11 translate-all duration-500"></span>
        </label>
          <h1 className=" mx-2">yearly</h1>
        </div>
      </div>
      <div className="cards-section flex mb-32">
      <Pricing heading={"Basic Plan"}pricing={"$50"} imgs="/images/50$ img.png"/>
      <Pricing heading={"Standart Plan"} pricing={"$99"}  imgs="/images/99$ img.jpg"/>
      <Pricing heading={"Premium Plan"} pricing={"$150"} imgs="/images/150$ img.png"/>
      </div>
      <div className="clients-section bg-blue-600  ">
      <h1 className="text-center text-4xl font-bold text-white mt-6">We’re trusted by clients.</h1>
      <div className=" flex mx-10">
      <ClientsCard heading={"Mina Whatson"} text={"CONSULTANT"} imgs="/images/client-img-1.jpg"/>
<ClientsCard heading={"Edward Hunter" }text={"IT SPCIALIST"} imgs="/images/client-img-2.jpg"/>
      </div>
      </div>
    </div>
  );
}
