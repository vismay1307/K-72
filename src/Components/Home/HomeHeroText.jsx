import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
  
  <div  className='font-[font1] text-white mt-72 lg:mt-0 pt-5 text-center'>
  <p className='flex flex-row-reverse absolute pl-6 ml-4 lg:w-[25vw] w-64 lg:right-20 right-0 bottom-24  lg:bottom-72 font-[font1] lg:text-lg text-xs lg:leading-relaxed leading-tight'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 is an agency that thinks through every action to nurture the brand. We seek the friction that creates the spark to generate emotion. To ensure an honest relationship, we are unfiltered, we say what needs to be said, we do what needs to be done</p>
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
