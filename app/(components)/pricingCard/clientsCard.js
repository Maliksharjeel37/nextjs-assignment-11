import Image from "next/image";
export default function clientsCard(props) {
  return (
    <div className=" bg-blue-600 border-5 mx-40 mb-16 mt-16 border-2 border-blue-400">
          <Image src={props.imgs} alt="services-img" width={70} height={20} style={{borderRadius:"50%", marginTop:"20px",marginLeft:"200px"}}  />
<h1 className=" text-center mt-6 mb-2text-3xl font-bold text-white">{props.heading}</h1>
<h2 className=" text-center text-white mb-6">{props.text}</h2>
<p className=" text-center mb-14 text-white">There are many variations of passages of Lorem Ipsum available, but the
majority have suffered alteration in some form, by injected humour,
or randomised words which don't look even slightly believable.
If you are going to use a passage of Lorem Ipsum, </p>
    </div>
  );
}
