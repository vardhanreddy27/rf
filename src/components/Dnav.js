import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5';
import { BiShoppingBag } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import {  Link } from 'react-router-dom';


function Dnav(props) {
  return (
<><nav className="navbar sticky-top  bg-white" >
     <div className="container mt-1">
  <div className="row">
    <div className="col top"><Link to="/" className="navbar-brand a" >
     <div className='left'><IoArrowBackOutline className='s'/> <h5 className='d-inline mt-1'>{props.page} </h5></div> </Link> 
    </div>
    <div className="col  text-center">
    </div>
    <div className="col top d-flex flex-row-reverse">
   <div className='right'> <BiSearch  className='mt-1 mb-1 ss'/><AiOutlineHeart className='mt-1 mb-1 ss'/> <BiShoppingBag className='mt-1 mb-1 ss'/></div> 
    </div>
  </div>
</div></nav>
    </>    )
}

export default Dnav