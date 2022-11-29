import React from 'react'
import tu500 from '../../src/u500.png';
import top from '../../src/top.png';
import jeans from '../../src/jeans.png';
import night from '../../src/night.png';
import kurta from '../../src/kurta.png';
import winter from '../../src/winter.png';


function Offers() {
  return (
<div className='fluid-container text-center mt-3'>
<h1 className='font'>GET PARTY STARTED! </h1>
<h6 className='font fcolor'>Offers Like Never Before </h6>

<div className='row mt-3'>
<div class="col"><img src={tu500} alt="t shirts" width="100%" height="100%" /></div>
<div class="col"><img src={top} alt="top" width="100%" height="100%" /></div>
<div class="col"><img src={jeans} alt="jeans" width="100%" height="100%" /></div>
</div>
<div className='row mt-3'>
<div class="col"><img src={night} alt="night ware" width="100%" height="100%" /></div>
<div class="col"><img src={kurta} alt="kurta ware" width="100%" height="100%" /></div>
<div class="col"><img src={winter} alt="winter ware" width="100%" height="100%" /></div>
</div>
    </div>  )
}

export default Offers