import React from 'react'
import { NavLink } from 'react-router-dom';
import { BsSortDownAlt } from 'react-icons/bs';
import { GoSettings } from 'react-icons/go';

function Sort() {
  return (
    <nav className="navbar fixed-bottom navbar-light bg-light">
    <div className="container-fluid">
      <div className='row'>

<div className='col-4 '>
   <p className='mypc1 ms-2'>SORT BY </p> <p className='ms-2'>popularity</p>
</div>
<div className='col-1'><BsSortDownAlt  className='mt-1 mb-1 ss mt-3' /></div>
<div className='col-1 ms-4 border-left'></div><div className='col-4'>
  <p className='mypc1'>FILTER</p> <p>apply filter</p></div>
    <div className='col-1 '><GoSettings className='mt-1 mb-1 ss mt-3' /></div>
</div>

     </div>
</nav>
  )
}

export default Sort