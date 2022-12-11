import React from 'react'
import { GiTakeMyMoney } from 'react-icons/gi';
import { TbTruckReturn } from 'react-icons/tb';
import { MdOutlineStyle } from 'react-icons/md';

function Features() {
  return (
<>
<div className='row text-center mt-1 p-3 '>
<div className='col'><GiTakeMyMoney className='six' /><p className='font fcolor'>Cash on Delivery</p></div>
<div className='col'><TbTruckReturn className='six' /><p className='font fcolor'>Easy Returns</p></div>
<div className='col'><MdOutlineStyle className='six' /><p className='font fcolor'>2000+ Brands</p></div>
</div>

</>  )
}

export default Features