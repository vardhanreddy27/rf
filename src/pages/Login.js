import React, { useState } from 'react';
import { GoogleLogin } from 'google-login-react';

const Login = () => {
  const [email,setEmail]=useState("");
  const [name,setName]= useState("");
  const [pic,setPic]= useState("");
  
  return (
   <> <GoogleLogin
      clientId='138949418546-q56sjf702pnfvp5e1sun4af79jq5f5mr.apps.googleusercontent.com'
      onSuccess={function senddata(res){
setEmail(res.email);
setName(res.name);
setPic(res.picture);
console.log(res.picture)
  }}
      onError={(err) => console.log(err)}
    >
      <button>Google Login</button>
    </GoogleLogin>{email}
    {name}
    <img src={pic} height={47} className="th" alt="logo"/>
    
    </>
  )
}

export default Login