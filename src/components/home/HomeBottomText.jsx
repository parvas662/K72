import { Link } from "react-router-dom";

 
const HomeBottomText = () => {
  return (
    
    <div >
        <div className="flex justify-end -mt-2 text-white text-[14px] p-[1vw] pb-[3vw]">
          <div className=" w-[19vw] indent-18 font-semibold ">  
                K72 is an agency that thinks about every action to nourish the brand. Tomorrow, in 5 months and in 5 years. We look for the friction that creates the spark to generate emotion. To ensure an honest relationship, we are without filter, we say what needs to be said, we do what needs to be done.
          </div> 
        </div>
        <div  className="text-white flex justify-center text-8xl pb-[1vw] font-medium gap-5">
          <Link to={'/projects'} className="border-3 hover:text-[#D3FD50] hover:underline rounded-full px-8  ">PROJECTS</Link>
          <Link to={'/agency'} className="border-3 hover:text-[#D3FD50] hover:underline rounded-full px-8">AGENCY</Link>
        </div>
    </div>
  );
};

export default HomeBottomText