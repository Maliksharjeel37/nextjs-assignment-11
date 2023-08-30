import BlogCard from "../blogCard/blogCard";
import LessthenButton from "../main-button/lessthenButton";
import GreaterthenButton from "../main-button/greaterthenButton";
export default function BLOG() {
  return (
    <div>
      <div className="row flex mx-20 mt-32 mb-48 ">
        <div className="section-1 text-center mt-44 mx-10   ">
          <h1 className=" text-center text-2xl ">Letest News & Blog</h1>
          <hr className=" w-14 my-2 mx-2" />
          <p className="text-center my-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing tempor incididunt
            labo.{" "}
          </p>
          <input
            type="text"
            placeholder="Enter your Email"
            style={{
              borderWidth: "3px",
              borderColor: "blue",
              textEmphasisColor: "blue",
            }}
          ></input>
        </div>
      <div className="cards flex">
<BlogCard/>
<BlogCard/>
      </div>
        <div className="g-and-l-button mt-72 ">
        <LessthenButton/>
       < GreaterthenButton  style={{ marginTop:"20px"}}/>
          </div> 
      </div>
    </div>
  );
}
