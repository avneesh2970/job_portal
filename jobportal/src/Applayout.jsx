import React from 'react'
import Header from './component/Header'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer'
function Applayout() {
  return (
    <div className='w-full flex flex-col'>
        <Header/>
        <Outlet/>
        <Footer/>


    </div>
  )
}

export default Applayout