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
     <div className='left'><FiMenu className='s'/>   </div> 
    </div>
    <div className="col  text-center">
    <img src={logo} height={47} className="th"/>
    </div>
    <div className="col top d-flex flex-row-reverse">
   <div className='right'>  <BiShoppingBag className='mt-1 mb-1 ss'/><CgProfile  className='m-1 ms-3 s'/></div> 
    </div>
  </div>
</div>
    </>
  )
}

export default Topnav