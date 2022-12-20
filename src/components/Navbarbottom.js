import React from 'react'
import { CgProfile } from 'react-icons/cg';
import { BiCategory } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

function Navbarbottom() {

  return (
<nav className="navbar fixed-bottom navbar-light bg-light">
  <div className="container-fluid">
    <div className='row text-center'>
    <div className='col '> <NavLink to="/" className="active">
<h5 className='pad'><AiOutlineHome className="active"/></h5>
<p className='sos'>   
         Store</p></NavLink></div>
    <div className='col'>
    <NavLink to="/Categories" className="active">
<h5 className='pad'><BiCategory className="active"/></h5>
    <p className='sos'>Categories</p></NavLink></div>
    <div className='col'>
    <NavLink to="/Cond" className="active">
<h5 className='pad'><CgProfile className="active"/></h5>
    <p className='sos'> 
   Account</p></NavLink></div>
    </div>
  </div>
</nav>  )
}

export default Navbarbottom