import Image from "next/image";
export default function card(props) {
  return (
    <div  className="card bg-white mx-5 border-4 text-center border-white mt-24 mb-32 hover:bg-emerald-300 hover:scale-105 shadow-2xl">
<div className='my-10 border-solid rounded-full'>
<Image src={props.imgsrc}  width={100} height={80} style={{borderRadius:"50%",marginLeft:"180px",}} />
</div>
      <div>
      <h1 className='text-center text-3xl font-bold '>
        {props.heading}
        </h1>
      <p className=' mt-5 mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            mollitia
            ad, non reiciendis sit natus,
            sint commodi illo eligendi et repellendus 
            fuga!</p>
      </div>
    </div>
  );
}

