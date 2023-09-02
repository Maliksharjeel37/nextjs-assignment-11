import { Margarine } from "next/font/google";
import Image from "next/image";
export default function (props) {
  return (
    <div>
      <div className="img-1 text-center  mt-8 hover:scale-125">
            <Image
              src={props.imgsrc}
              alt="forotfolio Image"
              width={300}
              height={200}
              style={{marginLeft:"180px" }}
            />
          </div>
    </div>
  );
}
