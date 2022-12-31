import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5';
import { BiShoppingBag } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoShareOutline } from 'react-icons/io5';
import {  Link } from 'react-router-dom';
import pink from '../../src/pink.jpg'

function Product() {
  return (
    <>
<nav className="navbar sticky-top" >
     <div className="container">
  <div className="row">
    <div className="col top"><Link to="/" className="navbar-brand a" >
     <div className='left'><IoArrowBackOutline className='s test'/></div> </Link> 
    </div>
    <div className="col  text-center">
    </div>
    <div className="col top d-flex flex-row-reverse">
   <div className='right'> <IoShareOutline  className='mt-1 mb-1 test ss'/><AiOutlineHeart className='mt-1 test ms-1 mb-1 ss'/> <BiShoppingBag className='mt-1 test mb-1 ss'/></div> 
    </div>
  </div>
</div></nav>
<img src={pink} alt='a' className='lkm' height='100%' width='100%' />

    </>
  )
}

export default Product