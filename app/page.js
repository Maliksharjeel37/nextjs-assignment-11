import Servicer from "./(components)/SERVICES/page";
import About from "./(components)/ABOUT/page";
import PORTFOLIO from "./(components)/PORTFOLIO/page";
 import TEAM from "./(components)/TEAM/page";
import PRICING from "./(components)/PRICING/page";
import BLOG from "./(components)/BLOG/page";
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
