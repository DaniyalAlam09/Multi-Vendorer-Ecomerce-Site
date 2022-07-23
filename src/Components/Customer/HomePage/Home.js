import React from 'react'
import Navbar from '../../Genral/Navbar'
import BestDeals from './BestDeals'
import HeroSection from './HeroSection'
import WorkDetails from './WorkDetails'
import FeaturedProducts from './FeaturedProducts';
import Subscribe from '../../Genral/Subscribe'
import HotCollection from './HotCollection'
import FeaturedCatagories from './FeaturedCatagories'


function Home() {
  return (
    <div>
       
        <HeroSection/>
        <BestDeals/>
        <WorkDetails/>
        <FeaturedProducts/>
        <FeaturedCatagories/>
        <HotCollection/>
        <Subscribe/>
    </div>
  )
}

export default Home