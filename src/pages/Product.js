import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5';
import { BiShoppingBag } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoShareOutline } from 'react-icons/io5';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import {  Link } from 'react-router-dom';
import red from '../../src/red.jpg'

function Product() {
  return (
    <>
<nav className="navbar sticky-top" >
     <div className="container">
  <div className="row">
    <div className="col top"><Link to="/Tshirt" className="navbar-brand a" >
     <div className='left'><IoArrowBackOutline className='s test'/></div> </Link> 
    </div>
    <div className="col  text-center">
    </div>
    <div className="col top d-flex flex-row-reverse">
   <div className='right'> <IoShareOutline  className='mt-1 mb-1 test ss'/><AiOutlineHeart className='mt-1 test ms-1 mb-1 ss'/> <BiShoppingBag className='mt-1 test mb-1 ss'/></div> 
    </div>
  </div>
</div></nav>
<img src={red} alt='a' className='lkm' height='100%' width='100%' />
<div className='row mt5'>
  <div className='container'>
<div className='col-12 rem'>
   <h3 className='mypc1 mn'> roadster  <BsStarFill className='ms-1' color='#FFD700' size={15}/>
   <BsStarFill className='ms-1' color='#FFD700' size={15}/>
   <BsStarFill className='' color='#FFD700' size={15}/>
   <BsStarFill className='' color='#FFD700' size={15}/>
   <BsStarHalf className='' color='#FFD700' size={15}/></h3>
   <p className=''>Pure Cotton Boxy Plain Round Neck T-shirt</p>
   <s className='text-secondary'>₹499</s><p className='mypc1 d-inline'>  ₹224</p><p className='d-inline text-success'> 45% OFF</p>
   <p className='text-secondary'>inclusive of all taxes</p>
   <p className='text-danger font-weight-bold'>Only Few Left!</p>
   
   </div>
</div>
<div className='bcolor mt-2 mb-2'></div>
<div className='container'>
  <p className='font-weight-bold mb-2'>selec size</p>
  <input type='radio' className='m-1 sz' name='a' checked/> <span className='spa'>S</span>
  <input type='radio' className='m-1 sz' name='a'/><span className='spa'>M</span>
  <input type='radio' className='m-1 sz' name='a'/><span className='spas'>L</span>
  <input type='radio' className='m-1 sz' name='a'/><span className='spa'>XL</span>
</div>
</div>

    </>
  )
}

export default Product