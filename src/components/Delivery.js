import React from 'react'
import vdo from '../../src/vdo.mp4';

function Delivery() {
  return (
<>
<div className='row'>
    <div className='col-6'>
<video src={vdo} autoPlay muted loop className='vdo'/>    </div>
    <div className='col-6 mtv'>
        <h2 >Express Shipping</h2>
        <p>Order now and get your orders within 24 hours </p>
        <button type="button" className="btn bbt mt-2 btn-outline-secondary"><p className='trt'>Shop Now</p></button>

    </div>
</div>




</>  )
}

export default Delivery