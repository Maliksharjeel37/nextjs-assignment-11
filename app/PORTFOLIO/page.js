import Portfolioimg from "./portfolioimg";
import LessthenButton from "./../(components)/main-button/lessthenButton";
import GreaterthenButton from "./../(components)/main-button/greaterthenButton";
export default function PORTFOLIO(props) {
  return (
    <div>
      <div className="row">
        <div>
          <h1 className="text-black  text-5xl font-bold text-center mt-12">
            Take A Look At Our Latest Work
          </h1>
        </div>
        <div className=" img-section-1 flex text-center  mx-8 mt-12">
          <Portfolioimg imgsrc="/images/forotfolio-img-1.avif"/>
          <Portfolioimg imgsrc="/images/forotfolio-img-2.avif"/>
          <Portfolioimg imgsrc="/images/forotfolio-img-3avif.jpg"/>
        </div>
        <div className=" img-section-1 flex text-center  mx-8 mt-12">
          <Portfolioimg imgsrc="/images/forotfolio-img-4.avif"/>
          <Portfolioimg imgsrc="/images/forotfolio-img-5.avif"/>
          <Portfolioimg imgsrc="/images/forotfolio-img-6.avif"/>
        </div>
      <div className="button-section flex " style={{marginLeft:"770px", marginTop:"90px", marginBottom:"90px"}}>
     
<LessthenButton/>
<GreaterthenButton/>
      </div>
      </div>
    </div>
  );
}
