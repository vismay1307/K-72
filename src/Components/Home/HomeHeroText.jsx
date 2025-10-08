import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
  <div  className='font-[font1] text-white mt-72 lg:mt-0 pt-5 text-center'>
    <div className='lg:text-[9vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                The spark for
            </div>
            <div className='p-2 lg:text-[9vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]'>
                all
                <div className='h-[10vw] w-[14vw] rounded-full mt-1 overflow-hidden p-1'>
                    <Video />
                </div>
                things
            </div>
            <div className='pt-3 lg:text-[9vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                creative
            </div>
  </div>
  );
};

export default HomeHeroText;
