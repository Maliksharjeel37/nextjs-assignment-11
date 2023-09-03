import Card from "./../(components)/Card-services/card";
import GreaterthenButton from "./../(components)/main-button/greaterthenButton";
import LessthenButton from "./../(components)/main-button/lessthenButton";
export default function SERVICES() {
  return (
    <>
      <div className="main-div">
      <div className="section-1 flex  mt-32 ">
        <div>
          <h1 className=" text-black text-5xl" style={{marginLeft:'40px'}}>
            We Are Providing Digital services
          </h1>
        </div>
        <div className="logo max-w-2xl mx-40 text-center flex">
        <LessthenButton/>
        <GreaterthenButton/>
        
        </div>
      </div>
      <div className="card-section flex">s
<Card heading={"Web Development"} imgsrc={"/images/services-img-1.jpg"} />
<Card heading={"Graphic Design"} imgsrc="/images/services-img-2.jpg"/>
<Card heading={"Digital Marketing"} imgsrc="/images/services-img-3.jpg"/>

      </div>
      </div>
    </>
  );
}
