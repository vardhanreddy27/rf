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
    <div className='col '> <Link to="/" className="navbar-brand a active1" ><h5 className='pad'><AiOutlineHome className='active1'/></h5>
<p className='sos'>   
         Store</p></Link></div>
    <div className='col'><Link to="/Categories" className="navbar-brand a active2" ><h5 className='pad'><BiCategory className='active2'/></h5>
    <p className='sos'>Categories</p></Link></div>
    <div className='col'> <Link to="/Account" className="navbar-brand a active3"  ><h5 className='pad'><CgProfile className='active3'/></h5>
    <p className='sos'> 
   Account</p></Link></div>
    </div>
  </div>
</nav>  )
}

export default Navbarbottom