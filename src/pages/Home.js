import React from 'react'
import Searchbar from '../components/Searchbar'
import Topnav from '../components/Topnav'
import banner from '../../src/banner.png';
import Offers from '../components/Offers';
import Navbarbottom from '../components/Navbarbottom';
import Carousel from '../components/Carousel';
import Features from '../components/Features';
import Off from '../components/Off';

function Home() {
  return (
    <>
   <Topnav />
   <Searchbar />   <Carousel />

   
   <Features />
   <Offers /><div className='fluid-container mt-2'>
   <img src={banner} width="100%" height="100%" /></div>
   <Off />
   <Navbarbottom />

    </>
  )
}

export default Home