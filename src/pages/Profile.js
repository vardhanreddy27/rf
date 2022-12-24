import React, { Component } from "react";
import Navbarbottom from '../components/Navbarbottom';
import {  Link } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';

export default class Profile extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
      myname:"",
    };
  }
componentDidMount(){
  const email=localStorage.email;
  const myname=localStorage.name;
  this.setState({ myname:myname})
  this.setState({ email:email})

  fetch("http://localhost:5000/userData",{
    method:"POST",
    crossDomain:true,
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json",
      "Access-Control-Allow-Orgin":"*",
    },
   body:JSON.stringify({
    token:window.localStorage.getItem("token"),
   })
  })
   .then((res)=>res.json())
   .then((data)=>{
     console.log(data,"userData");
this.setState({userData:data.data});

});
}
render(){
  return (
    <>
      <div className="top row mt-1">
     <div className='left col-4'>
        <Link to="/Settings" className="navbar-brand a" ><IoArrowBackOutline className='s left'/></Link> 
          </div>     
    <div className='col-4 text-center'> 
<h2>Account</h2>    </div>
    </div>
   
<div className="container mt-5">
    <form>

    <div className="form-group">
    <input type="text" required className="form-control spp p-3" id="exampleInputName" aria-describedby="name" placeholder= {(this.state.userData.uname)||(this.state.myname)} value= {(this.state.userData.uname)||(this.state.myname)}

 />
  </div>
  
  <div className="form-group">
    <input type="email" required  className="form-control p-3" id="exampleInputEmail1"  aria-describedby="emailHelp" placeholder=       {this.state.userData.uemail||(this.state.email)} value=       {this.state.userData.uemail||(this.state.email)}

 />
  </div>
  <div className="form-group">
    <input type="number" required  className="form-control p-3" id="exampleInputNumber" aria-describedby="NumberHelp" placeholder=  {this.state.userData.unumber ||"Enter number"} value=       {this.state.userData.unumber}

 />
  </div>


  <div className="form-group">
    <input type="password" required className="form-control p-3" id="exampleInputPassword1" placeholder="New Password" />
  </div>  <div className="form-group">
    <input type="password" required className="form-control p-3" id="exampleInputPassword1" placeholder="Confirm Password" />
  </div>
  <div className="form-group">
  <button type="button" className="btn btn-primary btn-lg btn-block">Update</button>
  </div>

</form></div>


    <Navbarbottom />
</>
  )
}
}
