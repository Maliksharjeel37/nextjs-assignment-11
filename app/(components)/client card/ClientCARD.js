import Image from "next/image";
export default function ClientCARD(props) {
  return (
    <div className=" border-4 border-blue-600 mx-5 my-5 text-center text-white shadow-2xl hover:scale-95">
     
      <Image
      className=" rounded-full my-10 "
      style={{marginLeft:"380px"}}
      src={props.imgsrc}
      alt="client-img"
      width={80}
      height={90}/>
    
     <h1 className=" my-5 text-3xl  font-bold">{props.h1}</h1>
     <h2 className=" my-5 text-xl">{props.h2}</h2>
     <p className=" my-5 text-lg">There are many variations of passages of Lorem Ipsum available, but the
majority have suffered alteration in some form, by injected humour,
or randomised words which don't look even slightly believable.
If you are going to use a passage of Lorem Ipsum, </p>
    </div>
  );
}
