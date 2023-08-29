import Button from "../button";
import Image from "next/image";
export default function pricing(props) {
  return (
    <div className="pricingCard  mx-10 hover:bg-blue-600">
        <h1 className=" text-3xl text-center mt-10 font-bold"> {props.heading} </h1>
        <div className="img mx-40 mt-10">
        <Image src={props.imgs} alt="services-img" width={100} height={50} style={{borderRadius:"50%", marginTop:"20px"}}  />

        </div>
<div className="flex mx-40 mt-10">
    <h1 className=" text-blue-800 text-5xl">{props.pricing}</h1>
    <h2 className=" mt-6">/Month</h2>
</div>
<div>
<p className=" text-center mt-10 mb-10">Graphic Design
Web Design
UI/UX
HTML/CSS
SEO Marketing
Business Analysis</p>
</div>
<div className="button text-center mt-10 ">
<Button text={"start  Now"}/>
</div>
     
    </div>
    
  );
}
