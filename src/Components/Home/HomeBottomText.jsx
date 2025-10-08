import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='text-white font-[font2] flex items-center justify-center gap-2 '>
      <p className=' absolute pl-6 ml-4 lg:w-[25vw] w-64 lg:right-20 right-0 bottom-24  lg:bottom-72 font-[font1] lg:text-lg text-xs lg:leading-relaxed leading-tight'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 is an agency that thinks through every action to nurture the brand. We seek the friction that creates the spark to generate emotion. To ensure an honest relationship, we are unfiltered, we say what needs to be said, we do what needs to be done</p>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:mt-6' to='/projects'>Projects</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:mt-6' to='/agency'>agency</Link>
      </div>
    </div>
  )
}

export default HomeBottomText