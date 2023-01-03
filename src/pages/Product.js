import React, { useState} from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { BiShoppingBag } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoShareOutline } from 'react-icons/io5';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import {  Link } from 'react-router-dom';
import red from '../../src/red.jpg'
import Shopbnav from '../components/Shopbnav';

function Product() {
  const [click, setClick] = useState(false);
  const [small, setSmall] = useState(false);
  const [medium, setMedium] = useState(false);
  const [large, setLarge] = useState(false);
  const [extra, setExtra] = useState(false);


  function changeoption(){
    setClick(true);
    setSmall(true);
    setMedium(false);
    setLarge(false);
    setExtra(false)


  }
  function changeoption1(){
    setClick(true);
    setSmall(false);
    setMedium(true);
    setLarge(false);
    setExtra(false)

  }
  function changeoption2(){
    setClick(true);
    setSmall(false);
    setLarge(true);
    setMedium(false);
    setExtra(false);

  }
  function changeoption3(){
    setClick(true);
    setSmall(false);
    setExtra(true);
    setMedium(false);
    setLarge(false);
  

  }
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
   <s className='text-secondary'>₹499</s><p className='mypc1 dd d3d d-inline'>  ₹224</p><p className='d-inline text-success'> 45% OFF</p>
   <p className='text-secondary'>inclusive of all taxes</p>
   <p className='text-danger font-weight-bold'>Only Few Left!</p> 
   </div>
</div>
<div className='bcolor mt-2 mb-2'></div>
<div className='container'>
  <p className='font-weight-bold mb-2'>selec size</p>
  <button onClick={changeoption} style={{ backgroundColor: small ? "#dcdcdc" : "white" }}className='rounded-circle sizes'>S</button>
  <button onClick={changeoption1} style={{ backgroundColor: medium ? "#dcdcdc" : "white" }}className='rounded-circle size'>M</button>
  <button onClick={changeoption2} style={{ backgroundColor: large ? "#dcdcdc" : "white" }}className='rounded-circle size'>L</button>
  <button onClick={changeoption3} style={{ backgroundColor: extra ? "#dcdcdc" : "white" }}className='rounded-circle size'>XL</button>
</div>
{click ?<div className='container'>< div className='col'><s className='text-secondary '>₹499 </s><p className='mypc1 '>  ₹224 </p><p className=' text-success d-inline'> 45% OFF</p></div>
<div className='col d3d'>Delivery within 4 days</div></div>:''}
</div>
<Shopbnav />
    </>
  )
}

export default Product