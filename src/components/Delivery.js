import React from 'react'
import vdo from '../../src/vdo.mp4';

function Delivery() {
  return (
<>
<div className='row mt-5'>
<div className='col-6  text-center'> 
<video width="200" height="200"    autoPlay={true} 
    loop={true}
    controls={false} 
    playsInline
    muted   >
      <source src={vdo} type="video/mp4"/>
     </video></div>
<div className='col-6 p-1  mt-3 '>
        <h2 >Express Shipping</h2>
        <p className='d-inline'>Order now and get your orders within </p><p className='d-inline font-weight-bold'>24 hours.</p>
        <button type="button" className=" mt-2 btn btn-secondary"><p className=''>Shop Now</p></button>
</div>
</div>


<div className='mtp'>s</div>

</>  )
}

export default Delivery