import React from 'react'

import Sidebar from './component/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './component/Header'
import MainHeader from '../component/Header'
import {
  FaUser,
  FaCalendarAlt,
  FaEnvelope,
  FaEye,
  FaList,
  FaBell,
} from "react-icons/fa";
import { div } from 'framer-motion/client';

function Applayout() {
  return (
    <div>
      {/* <MainHeader/> */}
    <div className='max-w-full flex '>
        <div className=''><Sidebar containerStyle="w-64 fixed bg-white shadow-md lg:block hidden"/></div>
        <div className='flex w-full flex-col lg:ml-64'>
          {<Header/>}
          {<Outlet/>}
          </div>
    </div>
    </div>
  )
}

export default Applayout