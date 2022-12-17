import React, { useState } from "react";
import { IoArrowBackOutline } from 'react-icons/io5';
import { AiFillGoogleSquare } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsApple } from 'react-icons/bs';
import {  Link } from 'react-router-dom';
function Signup() {
  const [uname, setUname] = useState("");
  const [uemail, setUemail] = useState("");
  const [unumber, setUnumber] = useState("");
  const [upassword, setUpassword] = useState("");

  const onChangeUname = (e) => {
    setUname({ uname: e.target.value });
  };
  const onChangeUemail = (e) => {
    setUemail({ uemail: e.target.value });
  };
  const onChangeUnumber = (e) => {
    setUnumber({ unumber: e.target.value });
  };
  const onChangeUpassword = (e) => {
    setUpassword({ upassword: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const signupData = {
      uname:uname,
      uemail:uemail,
      unumber:unumber,
      upassword:upassword
    };
let merge={...uname,...uemail,...unumber,...upassword};
   const myJSON = JSON.stringify(merge);
     console.log(myJSON);
    fetch("http://localhost:5000/register",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Orgin":"*",
      },
     body:myJSON
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data,"userRegister");
    });
  };

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
<form onSubmit={onSubmit}><div className='row'>
    <div className='col-6 ppp'><div className="form-group">
    <input type="text" className="form-control spp p-3" onChange={onChangeUname} id="exampleInputName" aria-describedby="name" placeholder="Enter name" />
  </div></div>
  <div className='col-6'><div className="form-group">
    <input type="email" onChange={onChangeUemail} className="form-control spp p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div></div>  </div>
  <div className="form-group">
    <input type="number" onChange={onChangeUnumber} className="form-control p-3" id="exampleInputNumber" aria-describedby="NumberHelp" placeholder="Enter number" />
  </div>
  <div className="form-group">
    <input type="password" className="form-control p-3" id="exampleInputPassword1" placeholder="Create Password" />
  </div>
  <div className="form-group">
    <input type="password" onChange={onChangeUpassword} className="form-control  p-3" id="exampleInputPassword12" placeholder="Confirm Password" />
  </div>
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
    <div className='col-6 float-right'><button  type="submit" className="float-right sin btn btn-primary btn-lg">Sign Up</button>
</div>
      </div></div></nav>
</form>
    </div></div>  )
}

export default Signup