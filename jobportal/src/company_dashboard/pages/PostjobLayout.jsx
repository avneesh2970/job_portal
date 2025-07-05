import React from 'react'

import Sidebar from '../component/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../component/Header'

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
    <div className='w-full flex flex-flex'>
        <div className='w-3/12'><Sidebar/></div>
        <div className='flex w-9/12  flex-col'>
          {<Header/>}
          {<Outlet/>}
          </div>
    </div>
  )
}

export default Applayout