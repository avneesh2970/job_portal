import React from 'react'
import Dashboard from './component/dashboard/Dashboard'
import Sidebar from './component/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './component/Header'

import {
  FaUser,
  FaCalendarAlt,
  FaEnvelope,
  FaEye,
  FaList,
  FaBell,
} from "react-icons/fa";

function Applayout() {
  return (
    <div className='w-full flex'>
        <Sidebar containerStyle='bg-amber-200 w-64 fixed bg-white shadow-md hidden lg:block'/>
        <div className='flex  flex-col w-full lg:ml-64'>
          <Header/>
          <Outlet/>
        </div>
    </div>
  )
}

export default Applayout