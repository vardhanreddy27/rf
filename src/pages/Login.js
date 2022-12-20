import React from 'react'
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";


function Login() {
  return (
    <div> <LoginSocialGoogle
    client_id={"138949418546-q56sjf702pnfvp5e1sun4af79jq5f5mr.apps.googleusercontent.com"}
    scope="openid profile email"
    discoveryDocs="claims_supported"
    access_type="offline"
    onResolve={({ provider, data }) => {
      console.log(provider, data);
    }}
    onReject={(err) => {
      console.log(err);
    }}
  >
    <GoogleLoginButton />
  </LoginSocialGoogle></div>
  )
}

export default Login