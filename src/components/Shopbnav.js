import React from 'react'
import { BiShoppingBag } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
function Shopbnav() {
  return (
    <>
        <nav className="navbar sticky-top mt-3  bg-white" >
<div className='container'>
    <div className='row'>
        <div className='col-3'><button className='btn btn-lg btn-outline-dark'><AiOutlineHeart className='heart'/> WISHLIST </button></div>
        <div className='col-2'></div>
        <div className='col-7 '><button className='float-right btn btn-lg btn-block btt'><BiShoppingBag  className='bag'/> ADD TO BAG </button></div>
    </div>
</div>

        </nav>
    </>
  )
}

export default Shopbnav