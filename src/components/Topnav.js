import React from 'react'
import { FiMenu } from 'react-icons/fi';
import { BiShoppingBag } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import logo from '../../src/rf.png'
function Topnav() {
  return (
    <>
     <div className="container">
  <div className="row">
    <div className="col top">
     <div className='left'><FiMenu />   </div> 
    </div>
    <div className="col  text-center">
    <img src={logo} height={45}/>
    </div>
    <div className="col top d-flex flex-row-reverse">
   <div className='right'>  <BiShoppingBag  className='m-1'/><CgProfile className='m-1 ms-3'/></div> 
    </div>
  </div>
</div>
    </>
  )
}

export default Topnav