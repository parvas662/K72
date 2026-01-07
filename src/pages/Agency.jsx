import Expertise from "../components/agence/hero/Expertise";
import HeroImage from "../components/agence/hero/HeroImage";
import HeroSection from "../components/agence/hero/HeroSection";


const Agency = () => {
  
  return (
    <div className="relative bg-white w-full h-full"> 
    <HeroImage></HeroImage>
      <HeroSection/>  
      <Expertise/>
    </div>
  );
};

export default Agency;