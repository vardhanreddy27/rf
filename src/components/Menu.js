import React from 'react'
import ww from '../../src/ww.png'
import nt from '../../src/nt.png'
import topt from '../../src/topt.png'
import trad from '../../src/trad.png'
import bras from '../../src/bras.png'
function Menu() {
  return (
    <div className='container ps-4 pe-4 p-3 '>
        <h1>Categories</h1>
       <div className='row'>
       <div className='col-8 wd yt'><h4 className='ps-4 pop'>Westren Wear</h4></div><div className='col-4 yt wd float-right'><img className='mt-1 ms-4' src={ww}alt="f" height={90}/></div>
       <div className='col-8 wd dg  mt-1'><h4 className='ps-4 pop'>Top's & Tee's</h4></div><div className='col-4  dg wd mt-1'><img className='mt-1 ms-4' src={topt}alt="f" height={90}/></div>
       <div className='col-8 wd bt  mt-1'><h4 className='ps-4 pop'>Traditional Wear</h4></div><div className='col-4 bt wd mt-1'><img className='mb-1 ms-4' src={trad}alt="f" height={95}/></div>
       <div className='col-8 wd nt mt-1'><h4 className='ps-4  pop'>Night Wear</h4></div><div className='col-4 wd nt mt-1'><img className='mt-1 ms-4' src={nt}alt="f" height={90}/></div>
       <div className='col-8 mt-1 ba wd'><h4 className='ps-4 pop'>Lingerie</h4></div><div className='col-4 wd ba mt-1'><img className='mt-1 ms-4' src={bras}alt="f" height={90}/></div>

        </div> 


    </div>
  )
}

export default Menu