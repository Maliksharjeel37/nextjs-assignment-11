import Image from "next/image";
import Button from "../button";
export default function PricingCard(props) {
  return (
    <div className=" text-center bg-slate-50 border-8 border-gray-100 mx-5 w-[320] h-[620] shadow-2xl hover:bg-blue-800 hover:scale-95 hover:text-white">
      <h1 className=" text-center font-bold text-3xl py-10">{props.heading}</h1>
<Image
src={props.imgsrc}
alt="card-img"
width={120}
height={50}
className=" rounded-full"
style={{marginLeft:"170px" , marginTop:"50px"}}
/>
<div className="heading flex  py-5 " style={{marginLeft:"170px"}}>
<h1 className=" text-5xl text-blue-500 ">{props.h1}</h1>
<h2 className=" mt-5">
/Month
</h2>
</div>
<p className=" text-xl font-bold py-5">Graphic Design
Web Design
UI/UX
HTML/CSS
SEO Marketing
Business Analysis</p>
<Button text="start Now"/>
    </div>
  );
}
