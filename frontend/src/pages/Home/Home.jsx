import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import HeroHome from '../../components/HeroHome/HeroHome'
import Awards from '../../components/Awards/Awards'
import Stats from '../../components/Stats/Stats'
import Pricing from '../../components/Pricing/Pricing'
import Education from '../../components/Education/Education'
import OpenAccount from '../../components/OpenAccount/OpenAccount'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className="Home">
        <Navbar/>
        <HeroHome/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>
    </div>
  )
}

export default Home