import { CountryField, StateField, VisitorAPIComponents } from 'react-country-state-fields';
import React, { useState } from 'react';
import {  Link } from 'react-router-dom';

import { IoArrowBackOutline } from 'react-icons/io5';
function Shipping() {
  const [country, setCountry] = useState({}); // the selected country
  const [state, setState] = useState({}); // the selected state
  const visitorApiPrjectId = ""; // assign your project ID here

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
<VisitorAPIComponents projectId={visitorApiPrjectId} handleCountryChange={(countryObj) => setCountry(countryObj)} handleStateChange={(stateObj) => setState(stateObj)}>
      <CountryField label="Country/Territory"></CountryField>
      <StateField label="State/Province"></StateField>
    </VisitorAPIComponents>
<div className="form-group">
<input type="text" required className="form-control spp p-3"  placeholder= "Enter Name"/>
</div>

<div className="form-group">
<input type="text" required  className="form-control p-3" placeholder='Enter Country'

/>
</div>
<div className="form-group">
<input type="text" required  className="form-control p-3"  placeholder= "State"

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