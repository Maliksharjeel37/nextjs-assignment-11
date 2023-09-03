import ClientCARD from "../(components)/client card/ClientCARD";
import PricingCard from "../(components)/pricingcard/PricingCard";
export default function PRICING() {
  return (
    <div >
      <div className=" heading-section flex mt-16  mb-32 mx-5">
        <div className="heading text-5xl  font-bold mt-3">
          <h1>Choose A Plan That’s Right For You</h1>
        </div>
        <div className="flex text-justify" style={{marginLeft:"380px"}}>
          <h1 className=" text-blue-900 mx-2">Monthly</h1>
        <label for="check"className=" bg-blue-700 w-20 h-10  cursor-pointer relative rounded-full">
          <input type="checkbox"  id="check" className=" sr-only peer"></input>
          <span className=" w-2/5 h-4/5 bg-white absolute rounded-full left-1 top-1 peer-checked:bg-black peer-checked:left-11 translate-all duration-500"></span>
        </label>
          <h1 className=" mx-2">yearly</h1>
        </div>
      </div>
      <div className="cards flex"  >
<PricingCard heading="Basic Plan" imgsrc="/images/50$ img.png" h1="$50"/>
<PricingCard heading="Standart Plan" imgsrc="/images/99$ img.jpg"h1="$99"/>
<PricingCard heading="Premium Plan" imgsrc="/images/150$ img.png" h1="$150"/>

      </div>
      <div className="clients-section bg-blue-600  ">
      <h1 className="text-center text-4xl font-bold text-white my-6 py-5">We’re trusted by clients.</h1>
      <div className=" flex justify-evenly">
      <ClientCARD imgsrc="/images/client-img-1.jpg"h1="Mina Whatson" h2="CONSULTANT"/>
      <ClientCARD imgsrc="/images/client-img-2.jpg"h1="Edward Hunter" h2="IT SPCIALIST"/>
      </div>
      </div>
    </div>
  );
}
