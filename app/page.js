import Servicer from ".//SERVICES/page";
import About from "./ABOUT/page";
import PORTFOLIO from "./PORTFOLIO/page";
 import TEAM from "./TEAM/page";
import PRICING from "./PRICING/page";
import BLOG from "./BLOG/page";
function Home() {
  return (
  <div>
    <Servicer/>
    <About/>
    <PORTFOLIO/>
<TEAM/>
<PRICING/>
<BLOG/>
  </div>
  );
}
export default Home;
