import React from 'react'
import {  Link } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
function Coupons() {
  return (
    <>  <div className="container top">
    <div className="top row mt-1">
     <div className='left col-2'>
        <Link to="/Settings" className="navbar-brand a " ><IoArrowBackOutline className='s left'/></Link> 
          </div>     
    <div className='col-8 text-center'> 
<h2>Coupons</h2>    </div>
    </div>
 
</div></>
  )
}

export default Coupons