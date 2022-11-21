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
    <div className="col pt-2">
      <FiMenu />
    </div>
    <div className="col  text-center">
    <img src={logo} height={45}/>
    </div>
    <div className="col">
      <BiShoppingBag /><CgProfile />
    </div>
  </div>
</div>
    </>
  )
}

export default Topnav