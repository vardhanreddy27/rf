import React from 'react'
import LoginSignup from './LoginSignup';
import Settings from './Settings';

function Cond(props) {
const x=localStorage.email;
    if (x!==undefined) {
          return  <Settings />
    }
    return <LoginSignup />

}
export default Cond