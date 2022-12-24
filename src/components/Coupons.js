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
 <div className='container'>
  <div className='row mt-5 dot'>
  <div className='col-3'><h1>100 OFF</h1></div>
  <div className='col-9'><p>minimum purchase of Rs.399</p><p>Code:PREMIUM2KOFF</p></div>
  <div className='col'>
    Expires:JAN 31 2023 | 11:59:00 P.M
  </div>
  </div>
 </div>
 <div className='container'>
  <div className='row mt-5 dot'>
  <div className='col-3'><h1>300 OFF</h1></div>
  <div className='col-9'><p>minimum purchase of Rs.699</p><p>Code:DEAL300OFF</p></div>
  <div className='col'>
    Expires:mar 31 2023 | 11:59:00 P.M
  </div>
  </div>
 </div>
</div>

</>
  )
}

export default Coupons