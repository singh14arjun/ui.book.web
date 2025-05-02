import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../component/Header";
import Footer from "../component/Footer";

function Globle() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
          </div>
  )
}

export default Globle
