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
   <s className='text-secondary'>₹499</s><p className='mypc1 d-inline'>  ₹224</p><p className='d-inline text-success'> 45% OFF</p></div>
     <div className='col-2'>
     <AiOutlineHeart className='mt-1 mb-1 ss'/></div></div></div>
<div className='col-6'>
<div className='row'>
<div className='col-10'>
   <h6 className='mypc1 mn'> puma</h6>
   <p>Round Neck T-shirt</p>
   <s className='text-secondary'>₹699</s><p className='mypc1 d-inline'>  ₹345</p><p className='d-inline text-success'> 35% OFF</p></div>
     <div className='col-2'>
     <AiOutlineHeart className='mt-1 mb-1 ss'/></div></div>
</div>
</div>
<div className='row mt-3'>
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
   <h6 className='mypc1 mn'> nike</h6>
   <p>Round Neck T-shirt</p>
   <s className='text-secondary'>₹699</s><p className='mypc1 d-inline'>  ₹424</p><p className='d-inline text-success'> 27% OFF</p></div>
     <div className='col-2'>
     <AiOutlineHeart className='mt-1 mb-1 ss'/></div></div></div>
<div className='col-6'>
<div className='row'>
<div className='col-10'>
   <h6 className='mypc1 mn'> adidas</h6>
   <p>Round Neck T-shirt</p>
   <s className='text-secondary'>₹559</s><p className='mypc1 d-inline'>  ₹345</p><p className='d-inline text-success'> 17% OFF</p></div>
     <div className='col-2'>
     <AiOutlineHeart className='mt-1 mb-1 ss'/></div></div>
</div>
</div>
<div className='row mt-3'>
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
   <h6 className='mypc1 mn'> highlander</h6>
   <p>Round Neck T-shirt</p>
   <s className='text-secondary'>₹499</s><p className='mypc1 d-inline'>  ₹224</p><p className='d-inline text-success'> 45% OFF</p></div>
     <div className='col-2'>
     <AiOutlineHeart className='mt-1 mb-1 ss'/></div></div></div>
<div className='col-6'>
<div className='row'>
<div className='col-10'>
   <h6 className='mypc1 mn'> wrong</h6>
   <p>Round Neck T-shirt</p>
   <s className='text-secondary'>₹399</s><p className='mypc1 d-inline'>  ₹245</p><p className='d-inline text-success'> 19% OFF</p></div>
     <div className='col-2'>
     <AiOutlineHeart className='mt-1 mb-1 ss'/></div></div>
</div>
</div>
<div className='mtp'>s</div>


    <Sort />   
    </>
  )
}

export default Tshirt