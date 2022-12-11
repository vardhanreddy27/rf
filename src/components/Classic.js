import React from 'react'
import tab1 from '../../src/tab1.jpg';
import tab2 from '../../src/tab2.jpg';
import tab3 from '../../src/tab3.jpg';
import tab4 from '../../src/tab4.jpg';
import tab5 from '../../src/tab5.jpg';
import tab6 from '../../src/tab6.JPG';
import tab7 from '../../src/tab7.JPG';
import tab8 from '../../src/tab8.JPG';
import tab9 from '../../src/tab9.JPG';
function Classic() {
  return (
<>
<div className='row text-center mt-1 mb-3'>
    <div className='col-12'><h2 className='font'>Shop For Wardrobe Classic</h2></div>
    <div className='col-12'><p className='font fcolor'>FEATURED BRANDS</p></div>

</div>
<div className='row text-center'>
    <div className='col-4'>
<img src={tab1} height="160px" alt="d" />
<p className='mypc1'>Up to 55% off</p>
    </div>
    <div className='col-4'>
    <img src={tab2} height="160px" alt="d" />
    <p className='mypc1'>Up to 60% off</p>

        </div>
    <div className='col-4'>
    <img src={tab3} height="160px" alt="d" />
    <p className='mypc1'>Up to 50% off</p>

    </div>
</div>
<div className='row text-center mt-3'>
    <div className='col-4'>
<img src={tab4} height="160px" alt="d" />
<p className='mypc1'>Up to 40% off</p>
    </div>
    <div className='col-4'>
    <img src={tab5} height="160px" alt="d" />
    <p className='mypc1'>Up to 25% off</p>

        </div>
    <div className='col-4'>
    <img src={tab6} height="160px" alt="d" />
    <p className='mypc1'>Up to 60% off</p>

    </div>
</div>
<div className='row text-center mt-3'>
    <div className='col-4'>
<img src={tab7} height="160px" alt="d" />
<p className='mypc1'>Up to 40% off</p>
    </div>
    <div className='col-4'>
    <img src={tab8} height="160px" alt="d" />
    <p className='mypc1'>Up to 25% off</p>

        </div>
    <div className='col-4'>
    <img src={tab9} height="160px" alt="d" />
    <p className='mypc1'>Up to 60% off</p>

    </div>
</div>




<div className='bot'></div>

</>
    )
}

export default Classic