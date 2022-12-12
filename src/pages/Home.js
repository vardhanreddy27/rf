import React from 'react'
import Searchbar from '../components/Searchbar'
import Topnav from '../components/Topnav'
import banner from '../../src/main.jpg';
import Offers from '../components/Offers';
import Navbarbottom from '../components/Navbarbottom';
import Carousel from '../components/Carousel';
import Features from '../components/Features';
import Off from '../components/Off';
import Classic from '../components/Classic';
import Delivery from '../components/Delivery';

function Home() {
  return (
    <>
   <Topnav />
   <Searchbar />
      <Carousel /> 
   <Features /><div className='container hh mt-2'>
   <img src={banner} width="100%" height="100%" /></div>
   <Offers />
   <Off />
   <Classic />
   <Delivery />
   <Navbarbottom  status="mactive1"/>

    </>
  )
}

export default Home