import React from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Categories from './pages/Categories'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
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
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App