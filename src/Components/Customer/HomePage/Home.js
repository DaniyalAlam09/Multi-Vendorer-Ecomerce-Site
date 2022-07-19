import React from 'react'
import Navbar from '../../Genral/Navbar'
import BestDeals from './BestDeals'
import HeroSection from './HeroSection'
import WorkDetails from './WorkDetails'


function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <BestDeals/>
        <WorkDetails/>
    </div>
  )
}

export default Home