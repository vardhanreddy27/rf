import React, { useState} from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
function Shopbnav() {
    const [click, setClick] = useState(true);

   function changeheart(){ 
        setClick(false);
    }
    function changesheart(){
        setClick(true);
    }
  return (
    <>
        <nav className="navbar sticky-top mt-3  bg-white" >
<div className='container'>
    <div className='row'>
        <div className='col-3'>{ click?<button onClick={changeheart} className='btn btn-lg btn-outline'><AiOutlineHeart className='heart'/> WISHLIST </button>:<button onClick={changesheart} className='btn btn-lg btn-outline'><AiFillHeart className='cheart'/> WISHLIST </button>}</div>
        <div className='col-2'></div>
        <div className='col-7 '><button className='float-right btn btn-lg btn-block btt'><BiShoppingBag  className='bag'/> ADD TO BAG </button></div>
    </div>
</div>

        </nav>
    </>
  )
}

export default Shopbnav