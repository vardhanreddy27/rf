import React from 'react'
import Dnav from '../components/Dnav'
import Searchbar from '../components/Searchbar'
import Sort from '../components/Sort'
import red from '../../src/red.jpg'

function Tshirt() {
  return (
    <>
    <Dnav page="T Shirts"/>
<div className='row'>
<div className='col-6'>
    <img src={red} alt='a' className='' height='38%' />

</div>
<div className='col-6'>
<img src={red} alt='a' height='38%' />

</div>
</div>



    <Sort />   
    </>
  )
}

export default Tshirt