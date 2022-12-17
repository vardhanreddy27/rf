import React, { Component } from "react";
import Topnav from '../components/Topnav'
import Navbarbottom from '../components/Navbarbottom';

export default class Profile extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }
componentDidMount(){
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
       <Topnav />
   
       {this.state.userData.uname}


    <Navbarbottom />
</>
  )
}
}
