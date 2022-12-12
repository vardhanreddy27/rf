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
    <div className='col '> <NavLink to="/" activeClassName="active">
<h5 className='pad'><AiOutlineHome activeClassName="active"/></h5>
<p className='sos'>   
         Store</p></NavLink></div>
    <div className='col'>
    <NavLink to="/Categories" activeClassName="active">
<h5 className='pad'><BiCategory activeClassName="active"/></h5>
    <p className='sos'>Categories</p></NavLink></div>
    <div className='col'>
    <NavLink to="/LoginSignup" activeClassName="active">
<h5 className='pad'><CgProfile activeClassName="active"/></h5>
    <p className='sos'> 
   Account</p></NavLink></div>
    </div>
  </div>
</nav>  )
}

export default Navbarbottom