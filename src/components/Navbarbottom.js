import React from 'react'
import { CgProfile } from 'react-icons/cg';
import { BiCategory } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function Navbarbottom() {
  return (
<nav className="navbar fixed-bottom navbar-light bg-light">
  <div className="container-fluid">
    <div className='row text-center'>
    <div className='col '><h5 className='pad'><AiOutlineHome className='active1'/></h5>
<p className='sos'>   
          <Link to="/" className="navbar-brand a active1" >Store</Link></p></div>
    <div className='col'><h5 className='pad'><BiCategory className='active2'/></h5>
    <p className='sos'><Link to="/Categories" className="navbar-brand a active2" >Categories</Link></p></div>
    <div className='col'><h5 className='pad'><CgProfile className='active3'/></h5>
    <p className='sos'> 
    <Link to="/Account" className="navbar-brand a active3"  >Account</Link></p></div>
    </div>
  </div>
</nav>  )
}

export default Navbarbottom