import {React,Component} from "react";
import profilevideo from '../../src/profile.jpg';
import {  Link } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import { FaUserAlt } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { AiFillHeart } from 'react-icons/ai';
import { IoDocumentTextSharp } from 'react-icons/io5';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { TbDiscount2 } from 'react-icons/tb';


export default class Settings extends Component{

  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }
 
componentDidMount(){
  const email=localStorage.email;
  const myname=localStorage.name;
  const pic=localStorage.pic;
  console.log(myname)
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
    this.setState({userData:data.data});

});

}

Logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("email");
  window.location.href="./";

};
render(){
  return (
    <>     
    <div className="container top">
    <div className="top row mt-1">
     <div className='left col-4'>
        <Link to="/" className="navbar-brand a" ><IoArrowBackOutline className='s left'/></Link> 
          </div>     
    <div className='col-4 text-center'> 
<h2>Profile</h2>    </div>
    </div>
    <div className='row text-center mt-4'>
    <div className='col'><img width="150" height="150" src={profilevideo} alt="profile" />
 </div> 
 <div className='row text-center mt-1'>
 <div className='col-12'><h4>     {this.state.userData.uname} </h4></div>
 <div className='col'><p><span className="logged-in">● </span>
Active status</p></div>
 </div>
 </div>
</div>
<div className='fluid-container mt-5
 tr'>
    <div className='row pt-3'>
    <div className='col-3 mt-4'><FaUserAlt className='float-left ms-4'/></div>
    <div className='col-6 mt-4'><h6>Edit Profile</h6></div>
    <div className='col-3 mt-4'><IoIosArrowForward className='float-right me-4' /></div>
    </div>
    <div className='row '>
    <div className='col-3 mt-4'><FaMapMarkerAlt className='float-left ms-4'/></div>
    <div className='col-6 mt-4'><h6>Shipping Address</h6></div>
    <div className='col-3 mt-4'><IoIosArrowForward className='float-right me-4'/></div>
    </div>
    <div className='row '>
    <div className='col-3 mt-4'><AiFillHeart className='float-left ms-4'/></div>
    <div className='col-6 mt-4'><h6>Wishlist</h6></div>
    <div className='col-3 mt-4'><IoIosArrowForward className='float-right me-4'/></div>
    </div>
    <div className='row '>
    <div className='col-3 mt-4'><IoDocumentTextSharp className='float-left ms-4'/></div>
    <div className='col-6 mt-4'><h6>Order History</h6></div>
    <div className='col-3 mt-4'><IoIosArrowForward className='float-right me-4'/></div>
    </div> <div className='row '>
    <div className='col-3 mt-4'><TbDiscount2 size="20px" className='float-left ms-4'/></div>
    <div className='col-6 mt-4'><h6>Coupons</h6></div>
    <div className='col-3 mt-4'><IoIosArrowForward className='float-right me-4'/></div>
    </div>
    <div className='row mt-5'>
    <div className='col-12 text-center '><button type="submit"onClick={this.Logout} className="btn btnred btn-lg md"><p className='hh6'>logout</p></button>
</div>
    </div>
</div>

    </>
  )
}

}