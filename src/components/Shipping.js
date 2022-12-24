import React, { useState } from 'react';
import {  Link } from 'react-router-dom';

import { IoArrowBackOutline } from 'react-icons/io5';
function Shipping() {
 
  return (
    < div className='container'>  <div className="container top">
    <div className="top row mt-1">
     <div className='left col-2'>
        <Link to="/Settings" className="navbar-brand a " ><IoArrowBackOutline className='s left'/></Link> 
          </div>     
    <div className='col-8 text-center'> 
<h2>Your Address</h2>    </div>
    </div>
 
</div>
<form>
<div className="form-group">
<input type="text" required className="form-control spp p-3"  placeholder= "Enter Name"/>
</div>

<div className="form-group">
<input type="text" required  className="form-control p-3" value="India"

/>
</div>
<div className="form-group">
<input type="text" required  className="form-control p-3"  placeholder= "Enter State"

/>
</div>


<div className="form-group">
<input type="text" required className="form-control p-3"  placeholder="Pin Code" />
</div> <div className="form-group">
    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="address" rows="3"></textarea>
  </div>
<div className="form-group">
<button type="button" className="btn btn-primary btn-lg btn-block">Add Address</button>
</div>

</form>

</div>
  )
}

export default Shipping