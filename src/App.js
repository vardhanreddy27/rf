import {React,useState,useEffect} from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Categories from './pages/Categories'
import LoginSignup from './pages/LoginSignup'
import Signup from './pages/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";

function App() {
  const [loading, setLoading]= useState(false);
  useEffect(()=> {
setLoading(true)
setTimeout(()=> {
setLoading(false)
},2000)
  }, [])
  return (
    <>

    {
      loading ?
      <div className="App">

      <PuffLoader color="rgba(2, 175, 255, 1)"loading={loading} /></div>
      :
<BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route> 
        <Route path="/Profile" element={<Profile />}>
          <Route index element={<Profile />} />
        </Route>
        <Route path="/Categories" element={<Categories />}>
          <Route index element={<Categories />} />
        </Route>
        <Route path="/LoginSignup" element={<LoginSignup />}>
          <Route index element={<LoginSignup />} />
        </Route><Route path="/Signup" element={<Signup />}>
          <Route index element={<Signup />} />
        </Route>
        <Route path="/Settings" element={<Settings />}>
          <Route index element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>}
    </>
  )
}

export default App