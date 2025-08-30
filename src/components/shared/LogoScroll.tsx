import Image from "next/image";
import amazon from "@/assets/icons/amazon.svg";
import dribble from "@/assets/icons/dribble.svg";
import hubspot from "@/assets/icons/hubspot.svg";
import notion from "@/assets/icons/notion.svg";
import netflix from "@/assets/icons/netflix.svg";
import zoom from "@/assets/icons/zoom.svg";
import Marquee from "react-fast-marquee";

const LogoScroll = () => {
  const logos = [amazon, dribble, hubspot, notion, netflix, zoom];

  return (
    <div className="mt-8 md:mt-12 overflow-hidden">
      <Marquee autoFill={true} speed={30} pauseOnHover={true} loop={0}>
        {logos.map((icon, index) => (
          <div key={index} className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16">
            <Image
              src={icon}
              alt=""
              className="h-8 md:h-12 w-auto opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoScroll;
