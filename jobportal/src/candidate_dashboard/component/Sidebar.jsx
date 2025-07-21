import React from 'react'
import { IoClose } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
function Sidebar({close, containerStyle}) {
  const navigate = useNavigate();
  const handleLogout=()=>{
    
    alert('logout sucessfully');
    localStorage.removeItem('user');
    localStorage.removeItem('password');  
    navigate('/');
   
  }
  return (
    <>
      <div className={`${containerStyle} h-screen bg-white border-2 border-r-2 border-zinc-300 shadow-[0_0_8px_rgba(0,0,0,0.1)] flex flex-col`}>
  {/* Header */}
  <div className='flex justify-between mt-2 items-center'>
    <h1 className="text-2xl flex items-center gap-2 font-bold text-blue-400 pl-6 pt-2">
      <div className='flex items-center gap-2'> 
        <img src="/logo.png" className='h-10 w-10' alt="Logo" />
      </div>
      <p>NextHire</p>
    </h1>
    <IoClose onClick={close} className='mr-6 mt-2 cursor-pointer lg:hidden w-6 h-6' />
  </div>

  {/* Navigation Links */}
  <nav className=" text-lg pl-5.5">
    <Link to="/candidate_dashboard" onClick={close} className="cursor-pointer block p-2 rounded">
      Dashboard
    </Link>
    <Link to="/candidate_dashboard/Cand_job" onClick={close} className="cursor-pointer block p-2 rounded">
      Find Jobs
    </Link>
    <Link to="/candidate_dashboard/cand_myapplication" onClick={close} className="cursor-pointer block p-2 rounded">
      My Application
    </Link>
    <Link to="#" onClick={close} className="cursor-pointer block p-2 rounded">
      Messages
    </Link>
    <Link to="/candidate_dashboard/cand_savedjobs" onClick={close} className="cursor-pointer block p-2 rounded">
      Saved Jobs
    </Link>
    <Link to="/candidate_dashboard/cand_helpcenter" onClick={close} className="cursor-pointer block p-2 rounded">
      Help Center
    </Link>
  </nav>

  <hr className="text-zinc-300 mx-3 my-2" />

  {/* Sticky Bottom Section */}
  <div className="flex flex-col fixed top-[82vh]   h-full px-4">
    <div className="hidden">
      <p>Lorem, ipsum.</p>
    </div>

    <nav className="text-lg pb-6 justify-end ">
      <Link to="/candidate_dashboard/cand_settings" onClick={close} className="cursor-pointer block p-2 rounded">
        Setting
      </Link>
      <Link onClick={handleLogout} className="cursor-pointer block p-2 rounded">
        Logout
      </Link>
    </nav>
  </div>
</div>

    </>
  )
}

export default Sidebar