import Video from "./Video";

 
const HomeHeroText = () => {
  return (
    <div className='text-white font-stretch-50% text-[10vw] leading-[8vw] -mt-2 uppercase text-center'> 
      <div className="leading-[9vw]">The spark</div>
      <div className="flex justify-center items-end ">who
        <div className="w-[16vw] h-[7.5vw] rounded-full object-cover overflow-hidden">
          <Video/>
        </div>
      </div>
      <div>generates</div>
      <div>there</div>
      <div>creativity</div>
    </div>
  );
};

export default HomeHeroText