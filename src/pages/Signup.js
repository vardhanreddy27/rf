import React, { useState } from "react";
import { IoArrowBackOutline } from 'react-icons/io5';
import { GoogleLogin } from 'google-login-react';
import {  Link } from 'react-router-dom';
import googlepic from '../../src/google.png';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

function Signup() {
  const [uname, setUname] = useState("");
  const [uemail, setUemail] = useState("");
  const [unumber, setUnumber] = useState("");
  const [upassword, setUpassword] = useState("");
  const [pic,setPic]= useState("");
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
const popup = () =>{
  MySwal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Email already exist',  
  })}
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
      if(data.status=="OK"){
        window.localStorage.setItem("email",uemail);

        console.log(data,"userRegister");
        window.location.href="./";

      }else{
        popup();
      }

    });
  };
  const gsignup = (pic,uname,uemail) =>{

console.log(pic,uname,uemail);
  }
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
    <input type="text" required className="form-control spp p-3" onChange={onChangeUname} id="exampleInputName" aria-describedby="name" placeholder="Enter name" />
  </div></div>
  <div className='col-6'><div className="form-group">
    <input type="number" required onChange={onChangeUnumber} className="form-control spp p-3" id="exampleInputNumber" aria-describedby="NumberHelp" placeholder="Enter number" />
  </div></div>  </div>
  <div className="form-group">
    <input type="email" required onChange={onChangeUemail} className="form-control p-3" id="exampleInputEmail1"  aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  <div className="form-group">
    <input type="password" required className="form-control p-3" id="exampleInputPassword1" placeholder="Create Password" />
  </div>
  <div className="form-group">
    <input type="password" required onChange={onChangeUpassword} className="form-control  p-3" id="exampleInputPassword12" placeholder="Confirm Password" />
  </div>
  <nav className="navbar fixed-bottom navbar-light bdr ">
  <div className="container">
  <div className='row'>
  <div className='col-10 mypcd1  bg-white ps-2'>agree to terms and conditions</div>
  <div className='col-2'><div className="  form-check form-switch">
  <input className="form-check-input" type="checkbox" required id="flexSwitchCheckDefault" />
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
gsignup(pic,uname,uemail);
 }}
      onError={(err) => console.log(err)}
    >
      <div className="col-1 d-inline p-3"><img src={googlepic} className="mt-1"alt="ss"/></div>
      <div className="col-11 d-inline"><p className="d-inline myst">Sign up</p></div>
    </GoogleLogin>
    </div>
    <div className='col-6 float-right'><button  type="submit" className="float-right sin btn btn-primary btn-lg">Sign Up</button>
</div>
      </div></div></nav>
</form>
    </div></div>  )
}

export default Signup