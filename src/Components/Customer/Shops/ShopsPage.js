import React from 'react'
import HeroSection from '../HomePage/HeroSection'
import ShopHero from './Images/ShopHero.png';
import Shops from './Shops';

function ShopsPage() {
  return (
    <div>
        <HeroSection Name1={"Shops"} ImageSource={ShopHero}/>
        <Shops/>
        
    </div>
  )
}

export default ShopsPage