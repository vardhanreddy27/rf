import React from 'react'
import { CgProfile } from 'react-icons/cg';
import { BiCategory } from 'react-icons/bi';

function Navbarbottom() {
  return (
<nav className="navbar fixed-bottom navbar-light bg-light">
  <div className="container-fluid">
    <div className='row text-center'>
    <div className='col '><h5 className='pad'><BiCategory className='active1'/></h5>
<p className='sos'>    <a className="navbar-brand a active1" href="#">Store</a></p></div>
    <div className='col'><h5 className='pad'><BiCategory /></h5>
    <p className='sos'>   <a className="navbar-brand a" href="#">Categories</a></p></div>
    <div className='col'><h5 className='pad'><CgProfile /></h5>
    <p className='sos'>  <a className="navbar-brand a" href="#">Account</a></p></div>
    </div>
  </div>
</nav>  )
}

export default Navbarbottom