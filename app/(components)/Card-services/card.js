import Image from "next/image";
export default function card(props) {
  return (
    <div  className="card bg-white mx-28 border-4 border-white mt-24 mb-32 hover:bg-emerald-300 hover:scale-125 shadow-2xl">
<div className=' mx-20 my-10 border-solid rounded-full'>
<Image src={props.imgsrc}  width={100} height={80} style={{borderRadius:"50%",marginLeft:"15px",}} />
</div>
      <div>
      <h1 className='text-center text-3xl font-bold '>
        {props.heading}
        </h1>
      <p className=' mx-9 mt-5 mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            mollitia
            ad, non reiciendis sit natus,
            sint commodi illo eligendi et repellendus 
            fuga!</p>
      </div>
    </div>
  );
}

