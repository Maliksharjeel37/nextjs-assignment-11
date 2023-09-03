import Image from "next/image";
export default function aboutCard(props) {
  return (
    <div className=" mt-14 mx-5 border-white border-4 mb-36 bg-white hover:bg-green-300 hover:scale-105 shadow-2xl">
            <div className="card-img-l">
            <Image
            src= {props.imgsrc}
              alt="about card Image"
              width={80}
              height={50}
              style={{borderRadius:"50%", marginLeft:"170px", marginTop:"20px"}}
            />
          </div>
          <div className="heading mx-5">
            <h1 className=" mx-14 mt-5 mb-5 text-xl font-bold">{props.text}</h1>
            <p className=" text-lg mb-8">Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore</p>

          </div>
    </div>
  );
}
