import React from 'react'
import Searchbar from '../components/Searchbar'
import Topnav from '../components/Topnav'
import banner from '../../src/banner.png';
import Offers from '../components/Offers';
import Navbarbottom from '../components/Navbarbottom';

function Home() {
  return (
    <>
   <Topnav />
   <Searchbar />
   <div className='fluid-container mt-2'>
   <img src={banner} width="100%" height="100%" /></div>
   <Offers />
   <Navbarbottom />
    </>
  )
}

export default Home