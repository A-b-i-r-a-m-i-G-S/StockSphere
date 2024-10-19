import React from 'react'
import './Home.css'
import HeroHome from '../../components/HeroHome/HeroHome'
import Awards from '../../components/Awards/Awards'
import Stats from '../../components/Stats/Stats'
import Pricing from '../../components/Pricing/Pricing'
import Education from '../../components/Education/Education'
import OpenAccount from '../../components/OpenAccount/OpenAccount'
const Home = () => {
  return (
    <div className="Home">
        <HeroHome/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
    </div>
  )
}

export default Home