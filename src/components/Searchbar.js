import React from 'react'
import { BsSearch } from 'react-icons/bs';

function Searchbar() {
  return (
    <div className='container mt-2'>
<div className="main">
  <div className="form-group has-search">
    <span className="form-control-feedback"><BsSearch /> </span>
    <input type="text" className="form-control" placeholder="Search for styles, brands & more"/>
  </div>
</div></div>

    )
}

export default Searchbar