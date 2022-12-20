import React, { useState } from "react";
import { IoArrowBackOutline } from 'react-icons/io5';
import { AiFillGoogleSquare } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsApple } from 'react-icons/bs';
import {  Link } from 'react-router-dom';
import { GoogleLogin } from 'google-login-react';


function LoginSignup() {
  const [pic,setPic]= useState("");
  const [uname,setUname]= useState("");
  const [uemail, setUemail] = useState("");
  const onChangeUemail = (e) => {
    setUemail({ uemail: e.target.value });
  };const onChangeUpassword = (e) => {
    setUpassword({ upassword: e.target.value });
  };  const [upassword, setUpassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const signupData = {
      uemail:uemail,
      upassword:upassword
    };
let merge={...uemail,...upassword};
   const myJSON = JSON.stringify(merge);
     console.log(myJSON);
    fetch("http://localhost:5000/login-user",{
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
      console.log(data,"userlogin");
      if(data.status=="ok"){
        window.localStorage.setItem("token",data.data);
        window.location.href="./";
      }
    });
  }
  return (
    <div>
          <div className="col top  mt-1"><Link to="/" className="navbar-brand a" >
     <div className='left'><IoArrowBackOutline className='s'/>  </div> </Link> 
    </div> 
<div className='row text-center mt-4 pt-3 pb-3 bdr'>
<div className='col-6 we '><Link to="/Signup">Sign Up</Link></div>
<div className='col-6 we under'><Link to="/LoginSignup" className='under'>Sign In</Link></div>
</div>
<div className='container mt-5 ps-5 pe-5'>
  <h1>User Log In</h1>
<form onSubmit={onSubmit}>
  <div className="form-group">
    <input type="email"  onChange={onChangeUemail} className="form-control sp p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  <div className="form-group">
    <input type="password"  onChange={onChangeUpassword} className="form-control spp  p-3" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <nav className="navbar fixed-bottom navbar-light bdr ">
  <div className="container">
  <div className='row'>
  <div className='col-10 mypcd1   ps-2'>Keep me signed in</div>
  <div className='col-2'><div className="  form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
</div></div>
        </div>
        <hr />
    <div className='row mypcd'>
    <div className='col-6 '>
    <GoogleLogin
      clientId='138949418546-q56sjf702pnfvp5e1sun4af79jq5f5mr.apps.googleusercontent.com'
      onSuccess={function senddata(res){
setUemail(res.email);
setUname(res.name);
setPic(res.picture);
window.localStorage.setItem("email",res.email);
window.localStorage.setItem("name",res.name);
window.localStorage.setItem("pic",res.picture);
window.location.href="./";

  }}
      onError={(err) => console.log(err)}
    >
      <button className="google"></button>
    </GoogleLogin>
    </div>
    <div className='col-6 float-right'><button  type="submit" className="float-right sin btn btn-primary btn-lg">Sign In</button>
</div>
      </div></div></nav>
</form>
    </div></div>
  )
}

export default LoginSignup