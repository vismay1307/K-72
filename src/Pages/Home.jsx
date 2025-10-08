import React from 'react'
import Video from '../Components/Home/Video'
import HomeHeroText from '../Components/Home/HomeHeroText'
import HomeBottomText from '../Components/Home/HomeBottomText'
const Home = () => {
  return (
    <div>
      <div className=' fixed h-screen w-screen'>
        <Video />
      </div>
      <div className='h-screen w-screen relative justify-between pb-5 overflow-hidden flex flex-col'>

        <HomeHeroText />
        <HomeBottomText />


      </div>

    </div>
  )
}

export default Home