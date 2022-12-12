import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5';
import { BiShoppingBag } from 'react-icons/bi';
function Seminav() {
  return (
    <><nav class="navbar sticky-top  bg-white" >
     <div className="container mt-1">
  <div className="row">
    <div className="col top">
     <div className='left'><IoArrowBackOutline className='s'/>   </div> 
    </div>
    <div className="col  text-center">
    </div>
    <div className="col top d-flex flex-row-reverse">
   <div className='right'>  <BiShoppingBag className='mt-1 mb-1 ss'/></div> 
    </div>
  </div>
</div></nav>
    </>  )
}

export default Seminav