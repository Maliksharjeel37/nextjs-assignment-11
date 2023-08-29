import Link from "next/link";
import Input from "./input";
function navber() {
  return (
    <div className="flex , flex-warp justify-center  bg-transparent text-black my-4  ">
      <nav className="justify-start">
        <ul className="flex , flex-werp justify-center  my-2">
          <h1 className=" fout-bold mr-96 font-bold text-3xl text-white">LOGO</h1>
          <li className="mx-8 text-lg text-white hover:text-black">
            <Link href="/">HOME</Link>
          </li>
          <li className="mx-8 text-lg text-white hover:text-stone-950">
            <Link href={"/SERVICES"}>SERVICES</Link>
          </li>
          <li className="mx-8 text-lg text-white hover:text-stone-950">
            <Link href={"/ABOUT"}>ABOUT US</Link>
          </li>
          <li className="mx-8 text-lg text-white hover:text-stone-950">
            <Link href={"/PORTFOLIO"}>PORTFOLIO</Link>
          </li>
          <li className="mx-8 text-lg text-white hover:text-stone-950">
            <Link href={"/TEAM"}>TEAM</Link>
          </li>
          <li className="mx-8 text-lg text-white hover:text-stone-950">
            <Link href={"/PRICING"}>PRICING</Link>
          </li>
          <li className="mx-8 text-lg text-white hover:text-black">
            <Link href={"/BLOG"}>BLOG</Link>
          </li>
          <Input />
        </ul>
      </nav>
    </div>
  );
}
export default navber;
