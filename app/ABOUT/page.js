import Button from "./../(components)/button";
import Image from "next/image";
import AboutCard from "./../(components)/AboutCard/aboutCard"
export default function ABOUT() {
  return (
    <div>
      <div>
        <div className="section-1 flex">
          <div className=" my-44 mx-40">
            <Image
              src="/images/about-img.png"
              alt="About Image"
              width={1489}
              height={568}
            />
          </div>
          <div className="mt-48">
            <h1 className="font-bold text-4xl">
              We design, build <br /> brands& digital projects.
            </h1>
            <p className="mt-10 text-xl mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit
              <br />
              <br />
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident,
            </p>
            <Button text={"Read More"} />
          </div>
        </div>
      </div>
      <div className="section-2 bg-green-50">
       <div className="flex">
<AboutCard text="Smart planing" imgsrc="/images/about-img-2.jpg" />
<AboutCard text="Our partnership" imgsrc="/images/about-img-3.jpg"/>
<AboutCard text="Super ideas" imgsrc="/images/about-img-4.jpg"/>
       </div>
      </div>
   </div>
  );
}
