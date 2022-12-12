import React from 'react'
import ww from '../../src/ww.png'
import nt from '../../src/nt.png'
function Menu() {
  return (
    <div className='container ps-4 pe-4 p-3 '>
        <h1>Categories</h1>
       <div className='row'>
       <div className='col-8 wd'><h4 className='p-5'>Westren Wear</h4></div><div className='col-4 wd'><img className='mt-1' src={ww}alt="f" height={90}/></div>
       <div className='col-8 wd mt-1'><h4 className='p-5'>Top's & Tee's</h4></div><div className='col-4 wd mt-1'><img className='mt-1' src={ww}alt="f" height={90}/></div>
       <div className='col-8 wd mt-1'><h4 className='p-4'>Traditional Wear</h4></div><div className='col-4 wd mt-1'><img className='mt-1' src={ww}alt="f" height={90}/></div>
       <div className='col-8 wd mt-1'><h4 className='p-5'>Night Wear</h4></div><div className='col-4 wd mt-1'><img className='mt-1' src={nt}alt="f" height={90}/></div>
       <div className='col-8 mt-1 wd'><h4 className='p-5'>Lingerie</h4></div><div className='col-4 wd mt-1'><img className='mt-1' src={ww}alt="f" height={90}/></div>
       <div className='col-8 mt-1 wd'><h4 className='p-5'>Jeans</h4></div><div className='col-4 wd mt-1'><img className='mt-1' src={ww}alt="f" height={90}/></div>
       <div className='col-8 mt-1 wd'><h4 className='p-5'>Kurta Sets</h4></div><div className='col-4 wd mt-1'><img className='mt-1' src={ww}alt="f" height={90}/></div>

        </div> 


    </div>
  )
}

export default Menu