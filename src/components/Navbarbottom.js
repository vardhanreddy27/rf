import React from 'react'
import { CgProfile } from 'react-icons/cg';
import { BiCategory } from 'react-icons/bi';

function Navbarbottom() {
  return (
<nav className="navbar fixed-bottom navbar-light bg-light">
  <div className="container-fluid">
    <div className='row text-center'>
    <div className='col '><h5 className='pad'><BiCategory /></h5>
    <a className="navbar-brand" href="#">Store</a></div>
    <div className='col'><h5 className='pad'><BiCategory /></h5>
      <a className="navbar-brand" href="#">Categories</a></div>
    <div className='col'><h5 className='pad'><CgProfile /></h5>
      <a className="navbar-brand" href="#">Account</a></div>
    </div>
  </div>
</nav>  )
}

export default Navbarbottom