import Image from "next/image";
export default function TEAM() {
  return (
    <div className="bg  ">
      <div className=" text-center font-bold text-4xl ">
        <h1>Our top dedicated professionals.</h1>
      </div>
      <div className="imgs flex ">
      <div className='img-1 mx-24 mt-24 border-solid mb-10 hover:scale-110 '>
  <Image
  src={"/images/team-img-1.jpg"}
  alt="team Image"
  width={500}
  height={600}
  
  />
  <h1 className="text-center text-2xl mt-10 font-bold">Duglas Walker
SHIEF STAFF</h1>
 
  </div>
  <div className='img-2 mx-24 mt-24 border-solid mb-10 hover:scale-110'>
  <Image
  src={"/images/team-img-2.png"}
  alt="team Image"
  width={400}
  height={500}
  
  />
  <h1 className="text-center text-2xl mt-10 font-bold">Caroline Harrison
FOUNDER & NANAGER</h1>
  </div>
  <div className='img-3 mx-24 mt-24 border-solid mb-10 hover:scale-110'>
  <Image
  src={"/images/team-img-3.jpg"}
  alt="team  Image"
  width={500}
  height={600}
  
  />
  <h1 className="text-center text-2xl mt-10 font-bold">Safia Simpson
WEB DESIGNER</h1>
  </div>
      </div>
    </div>
  );
}
