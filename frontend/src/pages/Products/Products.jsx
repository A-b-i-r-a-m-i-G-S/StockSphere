import React from 'react'
import HeroTech from '../../components/HeroTech/HeroTech'
import LeftSection from '../../components/LeftSection/LeftSection'
import RightSection from '../../components/RightSection/RightSection'

const Products = () => {
  const products = [
    {
      image: "kite.png",
      title: "Kite",
      desc: "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
    },
    {
      image: "console.png",
      title: "Console",
      desc: "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
    },
    {
      image: "coin.png",
      title: "Coin",
      desc: "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
    },
    {
      image: "kiteconnect.png",
      title: "Kite Connect API",
      desc: "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
    },
    {
      image: "varsity.png",
      title: "Varsity mobile",
      desc: "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
    }
  ]
  return (
    <div>
      <HeroTech></HeroTech>
      <div className='container border-top'>
        {products.map((item, index) => { 
          return index%2 == 0 ? 
          (  <LeftSection key={index}
            image={item.image}
            title={item.title}
            desc={item.desc} />
          )
          :
          (<RightSection key={index}
            image={item.image}
            title={item.title}
            desc={item.desc}/>
          )
      })}
      </div>
    </div>
  )
}

export default Products