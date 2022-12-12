import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5';
import { AiFillGoogleSquare } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsApple } from 'react-icons/bs';
import {  Link } from 'react-router-dom';
function Signup() {
  return (
    <div>
          <div className="col top  mt-1"><Link to="/" className="navbar-brand a" >
     <div className='left'><IoArrowBackOutline className='s'/>  </div> </Link> 
    </div> 
<div className='row text-center mt-4 pt-3 pb-3 bdr'>
<div className='col-6 we '><Link to="/Signup"className='under'>Sign Up</Link></div>
<div className='col-6 we under'><Link to="/LoginSignup" >Sign In</Link></div>
</div>
<div className='container mt-5 ps-5 pe-5'>
  <h1>Create an account</h1>
<form>
<div className="form-group">
    <input type="text" className="form-control sp p-3" id="exampleInputName" aria-describedby="name" placeholder="Enter name" />
  </div>
  <div className="form-group">
    <input type="email" className="form-control spp p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  <div className="form-group">
    <input type="number" className="form-control spp p-3" id="exampleInputNumber" aria-describedby="NumberHelp" placeholder="Enter number" />
  </div>
  <div className="form-group">
    <input type="password" className="form-control spp  p-3" id="exampleInputPassword1" placeholder="Create Password" />
  </div>
  <div className="form-group">
    <input type="password" className="form-control spp  p-3" id="exampleInputPassword12" placeholder="Confirm Password" />
  </div><div className='mtp'></div>

  <nav className="navbar fixed-bottom navbar-light bdr ">
  <div className="container">
  <div className='row'>
  <div className='col-10 mypcd1  bg-white ps-2'>agree to terms and conditions</div>
  <div className='col-2'><div className="  form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
</div></div>
        </div>
        <hr />
    <div className='row mypcd'>
    <div className='col-6 '>
      <AiFillGoogleSquare className='sir'/>
      <FaFacebookSquare className='sir1'/>
      <BsApple className='sir2'/>
    </div>
    <div className='col-6 float-right'><button type="button" className="float-right sin btn btn-primary btn-lg">Sign Up</button>
</div>
      </div></div></nav>
</form>
    </div></div>  )
}

export default Signup