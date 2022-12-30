import React from 'react'
import Dnav from '../components/Dnav'
import Sort from '../components/Sort'
import red from '../../src/red.jpg'
import { AiOutlineHeart } from 'react-icons/ai';

function Tshirt() {
  return (
    <>
    <Dnav page="T Shirts"/>
<div className='row'>
<div className='col-6'>
    <img src={red} alt='a' className='' width='99%' />

</div>
<div className='col-6'>
<img src={red} alt='a' width='99%' />

</div>
</div>
<div className='row ms-1 mt-2'>
    
<div className='col-6'>
<div className='row'>
<div className='col-10'>
   <h6 className='mypc1 mn'> roadster</h6>
   <p>Round Neck T-shirt</p>
   <s className='text-secondary'>₹499</s><p className='mypc1 d-inline'>  ₹224</p></div>
     <div className='col-2'>
     <AiOutlineHeart className='mt-1 mb-1 ss'/></div></div></div>
<div className='col-6'>
<div className='row'>
<div className='col-10'>
   <h6 className='mypc1 mn'> roadster</h6>
   <p>Round Neck T-shirt</p>
   <s className='text-secondary'>₹699</s><p className='mypc1 d-inline'>  ₹345</p></div>
     <div className='col-2'>
     <AiOutlineHeart className='mt-1 mb-1 ss'/></div></div>
</div>
</div>


    <Sort />   
    </>
  )
}

export default Tshirt