import React from 'react'
import { IoClose } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
function Sidebar({close, containerStyle}) {
  const navigate = useNavigate();
  const handleLogout=()=>{
    
    alert('logout sucessfully');
    window.close()
  }
  return (
    <>
       <div  className={`${containerStyle}`}>
        <div className='flex justify-between items-center'>
          <h1 className="text-2xl  font-bold text-blue-600 pl-6 pt-2">NextHire</h1>
          <IoClose onClick={close} className='mr-6 mt-2 cursor-pointer lg:hidden w-6 h-6'/>
        </div>
        <nav className="mt-6 pb-10 text-lg   pl-5.5 border-r border-blue-200">
          <Link to="/candidate_dashboard" onClick={close} className=" cursor-pointer block p-2 rounded ">
            Dashboard
          </Link>
          <Link to='/candidate_dashboard/Cand_job' onClick={close} className=" cursor-pointer block p-2 rounded ">
            Finds Jobs
          </Link>
          <Link to='/candidate_dashboard/cand_myapplication' onClick={close} className=" cursor-pointer block p-2 rounded ">
            My Application
          </Link>
          <Link to="#" onClick={close} className=" cursor-pointer block p-2 rounded ">
            Messages
          </Link>
          <Link to="/candidate_dashboard/cand_savedjobs" onClick={close} className=" cursor-pointer block p-2 rounded ">
            Saves Jobs
          </Link>
        </nav>
             <hr className='text-blue-200 mx-3 ' />
        <nav className='border-r border-blue-200 pt-5 pb-6 text-lg pl-5.5 '>
          <Link to='/candidate_dashboard/cand_settings' onClick={close} className=" cursor-pointer block p-2 rounded ">
            Setting
          </Link>
          <Link to="#" onClick={close} className=" cursor-pointer block p-2 rounded ">
            Help Center
          </Link>
          <Link onClick={handleLogout} className=" cursor-pointer block p-2 rounded ">
            Logout
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Sidebar