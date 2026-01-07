import Demo from "../../../pages/demo";
import HeroImage from "./HeroImage";

 
const HeroSection = () => {
  return (
    <div className="h-full relative w-full z-20"> 
      
    <div className="  w-full h-max pb-35">  
        <div className=" pt-[50vh]">
          <h1 className="  text-[20vw] font-semibold uppercase text-center leading-[17vw]">
            Soixan7t <br />
            Twelve
          </h1>
        </div>
        <div className="flex w-full justify-end pt-[8vh]">
          <p className="w-[60vw] font-medium text-6xl indent-66 pr-4 ">
            Our curiosity fuels our creativity. We remain humble and say no to big egos, even yours. A brand is alive. She has values, a personality, a history. If we forget that, we can make good numbers in the short term, but we kill it in the long term. This is why we are committed to giving perspective, to building influential brands.
          </p>
        </div>
    </div>
    </div>
  );
};

export default HeroSection;