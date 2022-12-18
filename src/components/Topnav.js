import React from 'react'
import { FiMenu } from 'react-icons/fi';
import { BiShoppingBag } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';

import logo from '../../src/rflogo.png'
function Topnav() {
  return (
    <><nav class="navbar sticky-top  bg-white" >
     <div className="container mt-1">
  <div className="row">
    <div className="col top">
     <div className='left'> <NavLink to="/Categories" className="active"><FiMenu className='s'/></NavLink> </div> 
    </div>
    <div className="col  text-center">
    <img src={logo} height={47} className="th" alt="logo"/>
    </div>
    <div className="col top d-flex flex-row-reverse">
   <div className='right'>  <BiShoppingBag className='mt-1 mb-1 ss'/><NavLink to="/LoginSignup"  className="active"><CgProfile  className='m-1 s'/></NavLink></div> 
    </div>
  </div>
</div></nav>
    </>
  )
}

export default Topnav